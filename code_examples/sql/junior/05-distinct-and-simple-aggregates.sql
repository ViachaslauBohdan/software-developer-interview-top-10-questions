-- Junior: DISTINCT, COUNT/SUM/AVG/MIN/MAX, simple GROUP BY
--
-- TABLES THIS FILE USES
-- ---------------------
--
--   employees
--   column names: id | full_name | dept_id | salary | hired_at | email | manager_id
--   +----+-----------+---------+--------+-----------+-------------+------------+
--   | id | full_name | dept_id | salary | hired_at  | email       | manager_id |
--   +----+-----------+---------+--------+-----------+-------------+------------+
--   example row:  5 | Eve Exec | 2 | 130000 | 2018-11-20 | eve@example.com | NULL
--
SELECT DISTINCT dept_id FROM employees;

SELECT
  COUNT(*) AS rows_in_employees,
  COUNT(email) AS rows_with_email,
  AVG(salary)::NUMERIC(12, 2) AS avg_salary
FROM employees;

SELECT
  dept_id,
  COUNT(*) AS headcount,
  MIN(salary) AS min_sal,
  MAX(salary) AS max_sal
FROM employees
GROUP BY dept_id
ORDER BY dept_id;
