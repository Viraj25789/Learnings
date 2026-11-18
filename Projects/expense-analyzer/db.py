# SQL part: save the cleaned data in a small SQLite database and query it.
import sqlite3
import pandas as pd

DB_FILE = "expenses.db"

# Each query answers one question. We show these in the app too.
QUERIES = {
    "Spending by category": """
        SELECT Category, ROUND(SUM(Amount)) AS Total
        FROM transactions
        WHERE Type = 'Debit'
        GROUP BY Category
        ORDER BY Total DESC
    """,
    "Income vs expense per month": """
        SELECT Month,
               SUM(CASE WHEN Type = 'Credit' THEN Amount ELSE 0 END) AS Income,
               SUM(CASE WHEN Type = 'Debit' THEN Amount ELSE 0 END) AS Expense
        FROM transactions
        GROUP BY Month
        ORDER BY Month
    """,
    "Top 10 places you spend on": """
        SELECT Description, COUNT(*) AS Times, ROUND(SUM(Amount)) AS Total
        FROM transactions
        WHERE Type = 'Debit'
        GROUP BY Description
        ORDER BY Total DESC
        LIMIT 10
    """,
}


def save_to_database(df):
    conn = sqlite3.connect(DB_FILE)
    df.to_sql("transactions", conn, if_exists="replace", index=False)
    conn.close()


def run_query(sql):
    conn = sqlite3.connect(DB_FILE)
    result = pd.read_sql_query(sql, conn)
    conn.close()
    return result
