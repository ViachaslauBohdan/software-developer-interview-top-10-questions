# SQL — code examples

PostgreSQL-oriented ANSI SQL for interviews: **junior** (core queries), **middle** (aggregates, CTEs, windows, transactions), **senior** (indexes/EXPLAIN, normalization, isolation, recursion, upsert, performance patterns).

Each `.sql` file starts with a **TABLES THIS FILE USES** block: **column names** (and ASCII grids where present) plus **example rows** aligned with the seed data in [`setup/sample_schema.sql`](setup/sample_schema.sql).

## Setup

From the repo root (requires `psql` and a database):

```bash
createdb interview_sql
psql -d interview_sql -f code_examples/sql/setup/sample_schema.sql
psql -d interview_sql -f code_examples/sql/junior/01-select-columns-and-alias.sql
```

Run other `.sql` files in any order; **senior** scripts may create indexes or alter constraints (see file headers).

## Topics

| Level | Files |
|--------|--------|
| **Junior** | `01` SELECT / aliases · `02` WHERE, ORDER BY, LIMIT · `03` INNER JOIN · `04` INSERT/UPDATE/DELETE · `05` DISTINCT & simple aggregates |
| **Middle** | `01` GROUP BY / HAVING · `02` Subqueries & EXISTS · `03` OUTER JOINs · `04` CTEs · `05` Window functions · `06` CASE / COALESCE · `07` UNION / INTERSECT / EXCEPT · `08` Transactions · `09` Self-join |
| **Senior** | `01` Indexes & EXPLAIN · `02` Normalization & constraints · `03` Isolation, locking, MVCC · `04` Recursive CTE · `05` UPSERT / MERGE · `06` Performance patterns |

Other engines (MySQL, SQL Server, SQLite) differ on upsert syntax, `INTERSECT`/`EXCEPT`, and some DDL; concepts transfer.
