-- Junior: SELECT list, table qualifiers, column aliases
-- Expects: setup/sample_schema.sql loaded
--
-- TABLES THIS FILE USES
-- ---------------------
--
--   employees
--   column names: id | full_name | dept_id | salary | hired_at | email | manager_id
--   +----+-----------+---------+--------+-----------+-------------+------------+
--   | id | full_name | dept_id | salary | hired_at  | email       | manager_id |
--   +----+-----------+---------+--------+-----------+-------------+------------+
--   | PK |           | FK      |        |           | UQ          | FK (self)  |
--   +----+-----------+---------+--------+-----------+-------------+------------+
--   example row:  1 | Alice Admin | 3 | 95000.00 | 2019-03-01 | alice@example.com | NULL
--
SELECT id, full_name
FROM employees;

SELECT
  e.id,
  e.full_name AS name,
  e.salary * 12 AS annual_salary_usd
FROM employees AS e;

SELECT COUNT(*) AS employee_count FROM employees;
