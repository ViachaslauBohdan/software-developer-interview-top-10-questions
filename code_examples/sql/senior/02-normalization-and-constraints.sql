-- Senior: relational design — normalization goals, keys, declarative integrity
--
-- TABLES THIS FILE USES
-- ---------------------
--
--   employees
--   column names: id | full_name | dept_id | salary | hired_at | email | manager_id
--   +----+-----------+---------+--------+-----------+-------------+------------+
--   | id | full_name | dept_id | salary | hired_at  | email       | manager_id |
--   +----+-----------+---------+--------+-----------+-------------+------------+
--   | PK |           | FK->dept|        |           | UQ + CHECK  | FK (self)  |
--   +----+-----------+---------+--------+-----------+-------------+------------+
--   example row:  1 | Alice Admin | 3 | 95000 | 2019-03-01 | alice@example.com | NULL
--
-- 1NF: atomic columns; 2NF: no partial dependency on part of composite key;
-- 3NF: no transitive dependency on non-key attributes (typical OLTP target).

-- Enforce uniqueness and referential integrity (see sample_schema.sql for FK examples)
ALTER TABLE employees DROP CONSTRAINT IF EXISTS chk_email_format;
ALTER TABLE employees
  ADD CONSTRAINT chk_email_format
  CHECK (email IS NULL OR email LIKE '%_@_%.__%');

-- Composite uniqueness: one active title per employee per period (pattern)
-- CREATE UNIQUE INDEX ux_emp_title_active ON job_history (emp_id, title) WHERE end_date IS NULL;

-- Deferred constraints (PostgreSQL): check at COMMIT, useful for circular FK inserts
-- CONSTRAINT ... DEFERRABLE INITIALLY DEFERRED
