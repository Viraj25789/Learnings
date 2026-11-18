# The web page. Run with:  streamlit run app.py
import streamlit as st
import plotly.express as px
from analyzer import load_csv, clean_data, add_categories, get_summary, find_unusual, find_recurring
from db import save_to_database, run_query, QUERIES

st.set_page_config(page_title="Expense Analyzer", layout="wide")
st.title("Expense Analyzer")
st.write("Upload your bank or UPI statement (CSV) and see where your money goes.")

# Step 1: get the file
uploaded = st.file_uploader("Upload your statement (CSV)", type="csv")
use_sample = st.checkbox("Use the sample data instead")

if use_sample:
    file = "sample_transactions.csv"
elif uploaded:
    file = uploaded
else:
    st.info("Upload a CSV file or tick 'Use the sample data' to start.")
    st.stop()

# Step 2: clean it, add categories, save to the database
try:
    df = add_categories(clean_data(load_csv(file)))
except ValueError as error:
    st.error(str(error))
    st.stop()
save_to_database(df)

# Step 3: the big numbers
income, expense, balance, savings_rate = get_summary(df)
c1, c2, c3, c4 = st.columns(4)
c1.metric("Income", f"₹{income:,.0f}")
c2.metric("Expense", f"₹{expense:,.0f}")
c3.metric("Balance", f"₹{balance:,.0f}")
c4.metric("Savings rate", f"{savings_rate:.0f}%")

# Step 4: charts (the data comes from SQL queries)
by_category = run_query(QUERIES["Spending by category"])
monthly = run_query(QUERIES["Income vs expense per month"])
top_places = run_query(QUERIES["Top 10 places you spend on"])

left, right = st.columns(2)
with left:
    st.subheader("Where your money goes")
    st.plotly_chart(px.pie(by_category, names="Category", values="Total", hole=0.4), use_container_width=True)
with right:
    st.subheader("Income vs expense each month")
    st.plotly_chart(px.bar(monthly, x="Month", y=["Income", "Expense"], barmode="group"), use_container_width=True)

st.subheader("Top 10 places you spend on")
st.dataframe(top_places, use_container_width=True)

# Step 5: simple insights
st.subheader("Insights")
top = by_category.iloc[0]
share = top["Total"] / by_category["Total"].sum() * 100
st.write(f"Your biggest spending category is **{top['Category']}** ({share:.0f}% of all spending).")

unusual = find_unusual(df)
st.write("**Unusually large payments** (more than 3x the usual amount for that category):")
st.dataframe(unusual, use_container_width=True) if len(unusual) else st.write("None found.")

recurring = find_recurring(df)
st.write("**Probably subscriptions** (same shop and same amount in 3+ months):")
st.dataframe(recurring, use_container_width=True) if len(recurring) else st.write("None found.")

# Extra: show the SQL, handy for interviews
with st.expander("Show the SQL behind the charts"):
    for name, sql in QUERIES.items():
        st.write(name)
        st.code(sql, language="sql")

with st.expander("Show all transactions"):
    st.dataframe(df, use_container_width=True)
