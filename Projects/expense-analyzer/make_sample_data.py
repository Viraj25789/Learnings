# Makes a FAKE bank statement so you can test the project without using real data.
# Run it once:  python make_sample_data.py
import random
from datetime import date
import pandas as pd

random.seed(42)  # same fake data every time you run this

# (description, lowest amount, highest amount, times per month)
spending = [
    ("UPI-SWIGGY FOOD ORDER", 150, 600, 8),
    ("UPI-ZOMATO", 150, 500, 4),
    ("UPI-UBER RIDE", 80, 400, 6),
    ("UPI-DMART GROCERY", 300, 1800, 4),
    ("UPI-AMAZON SHOPPING", 300, 3000, 3),
    ("NETFLIX SUBSCRIPTION", 199, 199, 1),
    ("JIO RECHARGE", 299, 299, 1),
    ("ELECTRICITY BILL", 700, 1500, 1),
    ("UPI-APOLLO PHARMACY", 100, 900, 2),
    ("UPI-BOOKMYSHOW MOVIE", 250, 700, 2),
    ("UPI-RANDOM SHOP", 50, 500, 3),  # our rules don't know this one -> "Others"
]

rows = []
for month in range(5, 11):  # May to October 2026
    rows.append([date(2026, month, 1), "SALARY CREDIT", 25000, "Credit"])
    if month in (6, 9):
        rows.append([date(2026, month, 15), "FREELANCE PAYMENT", random.randint(3000, 6000), "Credit"])
    for description, low, high, times in spending:
        for _ in range(times):
            day = random.randint(2, 28)
            rows.append([date(2026, month, day), description, random.randint(low, high), "Debit"])

# one big purchase, so the "unusual spending" feature has something to catch
rows.append([date(2026, 8, 20), "UPI-ELECTRONICS STORE", 18000, "Debit"])

df = pd.DataFrame(rows, columns=["Date", "Description", "Amount", "Type"])
df = df.sort_values("Date")
df.to_csv("sample_transactions.csv", index=False)
print("Done! Made sample_transactions.csv with", len(df), "rows")
