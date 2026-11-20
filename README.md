# Learning Lab — Python, SQL, Web and AI/ML Practice

This repository is a collection of learning exercises and small experiments created while studying software development, databases, APIs, web scraping, and machine learning. It is a supporting learning archive, not the main project portfolio.

## Learning areas

| Folder | What it contains |
|---|---|
| `Python Basics/` | Python syntax, functions, loops, OOP, exceptions, and file handling |
| `Database/` | SQL practice and Python database experiments |
| `Chai Aur Code/html/` | HTML and CSS fundamentals |
| `Chai Aur Code/JS/` | JavaScript basics, control flow, arrays, functions, DOM, and iteration |
| `Fast API/basic/` | Small FastAPI and Pydantic experiments |
| `Fast API/authentication/` | Authentication, token, schema, and database practice |
| `API/` | API integration experiments |
| `Web Scraping/BookPriceTracker/` | Book listing scraper and CSV/JSON output |
| `First Model/` | Introductory Iris classification exercise |
| `Projects/expense-analyzer/` | CSV expense analysis with Pandas, SQLite, Streamlit, and Plotly |
| `Projects/movie_auth/` | Authentication API experiment |
| `Projects/student_mng/` | Console-based student management practice |
| `Projects/student_mng_fastapi/` | Student management API with FastAPI and SQLite |
| `Projects/student_mng_withdb/` | Student management with database practice |

## Recommended starting points

1. **Expense Analyzer** — the most complete data-oriented learning project in this repository. Start with its [project README](Projects/expense-analyzer/README.md).
2. **First Model** — introductory scikit-learn classification. Start with its [project README](First%20Model/README.md).
3. **BookPriceTracker** — practice with HTTP requests, scraping, and CSV/JSON output.
4. **FastAPI authentication** — study the files in `Fast API/authentication/` as an API/authentication learning exercise.

## Environment setup

Several folders are independent exercises and do not share one application environment. Install dependencies for the specific project you are running.

For Expense Analyzer:

```bash
cd Projects/expense-analyzer
python -m venv .venv
```

Windows PowerShell:

```powershell
.venv\Scripts\Activate.ps1
```

macOS / Linux:

```bash
source .venv/bin/activate
```

Then:

```bash
pip install -r requirements.txt
python make_sample_data.py
streamlit run app.py
```

Other folders may have their own dependency requirements or need a local database/service. Check each folder before running it.

## Repository notes

- This repository preserves historical learning exercises and project iterations. Some folders are experiments rather than finished applications.
- The root `requirements.txt` is a broad environment snapshot, not a recommended install for every folder. Prefer project-level requirements where available.
- Database files and Python bytecode already present in the repository are historical tracked files. The repository ignore rules prevent new generated files from being added, but do not remove existing tracked files.
- Do not commit real bank statements, API keys, passwords, personal data, or production database files.
- Some projects need additional setup, data files, or local services before they can run.

## Purpose

Use this repository to show learning progress and supporting practice. For recruiter demonstrations, prefer the focused repositories and standalone projects with their own setup instructions, tests, and clear outcomes.
