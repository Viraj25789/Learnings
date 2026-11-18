# All the Pandas work lives here: load -> clean -> categorize -> summarize.
import pandas as pd

# If a keyword appears in the description, the transaction gets that category.
# Add your own words here -- this is the "brain" of the project.
CATEGORY_KEYWORDS = {
    "Food": ["swiggy", "zomato", "restaurant", "cafe"],
    "Transport": ["uber", "olacabs", "metro", "petrol", "irctc"],
    "Groceries": ["dmart", "bigbasket", "grocery", "blinkit"],
    "Shopping": ["amazon", "flipkart", "myntra", "electronics"],
    "Bills": ["electricity", "jio", "airtel", "recharge"],
    "Entertainment": ["netflix", "bookmyshow", "spotify", "movie"],
    "Health": ["pharmacy", "apollo", "hospital", "clinic"],
    "Income": ["salary", "freelance", "refund", "interest"],
}


def load_csv(file):
    """Read the CSV and check it has the 4 columns we need."""
    df = pd.read_csv(file)
    df.columns = [name.strip().title() for name in df.columns]
    needed = ["Date", "Description", "Amount", "Type"]
    missing = [name for name in needed if name not in df.columns]
    if missing:
        raise ValueError(f"Your file is missing these columns: {missing}. "
                         "Rename your columns to Date, Description, Amount, Type.")
    return df[needed]


def clean_data(df):
    """Fix the types, remove broken rows and duplicates."""
    df = df.copy()
    df["Date"] = pd.to_datetime(df["Date"], errors="coerce")
    df["Amount"] = pd.to_numeric(df["Amount"].astype(str).str.replace(",", ""), errors="coerce")
    df["Type"] = df["Type"].astype(str).str.strip().str.title()  # "debit" -> "Debit"
    df = df.dropna()           # remove rows with missing/broken values
    df = df.drop_duplicates()  # remove exact duplicate rows
    df["Month"] = df["Date"].dt.strftime("%Y-%m")  # e.g. "2026-08"
    return df


def find_category(description):
    text = description.lower()
    for category, words in CATEGORY_KEYWORDS.items():
        for word in words:
            if word in text:
                return category
    return "Others"  # no keyword matched


def add_categories(df):
    df = df.copy()
    df["Category"] = df["Description"].apply(find_category)
    return df


def get_summary(df):
    """Total income, total expense, balance and savings rate."""
    income = df.loc[df["Type"] == "Credit", "Amount"].sum()
    expense = df.loc[df["Type"] == "Debit", "Amount"].sum()
    balance = income - expense
    savings_rate = (balance / income * 100) if income > 0 else 0
    return income, expense, balance, savings_rate


def find_unusual(df):
    """Spending that is more than 3x the usual (median) amount of its category."""
    spend = df[df["Type"] == "Debit"].copy()
    spend["Usual"] = spend.groupby("Category")["Amount"].transform("median")
    return spend[spend["Amount"] > 3 * spend["Usual"]][["Date", "Description", "Category", "Amount", "Usual"]]


def find_recurring(df):
    """Same shop + same amount in 3 or more different months = probably a subscription."""
    spend = df[df["Type"] == "Debit"]
    counts = spend.groupby(["Description", "Amount"])["Month"].nunique().reset_index(name="Months")
    return counts[counts["Months"] >= 3]
