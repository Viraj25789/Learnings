# Expense Analyzer

A web app that reads a bank/UPI statement (CSV) and shows income, expenses, balance,
spending by category, monthly trends, unusual payments and subscriptions.

**Tools:** Python, Pandas, SQL (SQLite), Streamlit, Plotly

## Run it
1. Install Python 3.10+
2. `pip install -r requirements.txt`
3. `python make_sample_data.py`  (makes a fake statement)
4. `streamlit run app.py`

## How it works (5 steps)
1. **Load** the CSV and check it has Date, Description, Amount, Type (`analyzer.py`)
2. **Clean** it: fix dates and amounts, remove duplicates and broken rows
3. **Categorize** each transaction by looking for keywords like "swiggy" -> Food
4. **Store** it in SQLite and answer questions with SQL queries (`db.py`)
5. **Show** numbers, charts and insights with Streamlit (`app.py`)

## Use your own statement
Download it from your bank or UPI app as CSV/Excel, rename the columns to
Date, Description, Amount, Type (Debit/Credit), and upload it.
**Never upload real bank data to GitHub.** Keep your own file only on your computer.

## Limits (be honest in interviews)
- Categories come from keyword rules, so new shops land in "Others". Fix it by adding words in `CATEGORY_KEYWORDS`.
- It analyzes uploaded files. It does not connect to UPI apps (that needs RBI-regulated access).

## Ideas to extend
Month filter, budget limits per category, FastAPI endpoints, Docker, a model that guesses categories.

## 30-second pitch
"People don't know where their money goes. I built an app where you upload a bank statement.
It cleans the data with Pandas, sorts payments into categories, stores them in SQL, and shows
charts, unusual payments and subscriptions. I used simple rules instead of ML so every result is explainable."

## Questions to prepare
- Why SQL for the charts? Data is table-shaped, and SQL is built for totals and grouping.
- How do you find "unusual" payments? Compare each payment with the median of its category; flag if above 3x.
- Why median, not average? One big payment pulls the average up, the median stays typical.
- What would you improve? Month filter, more keywords, a small ML model for unknown shops.
