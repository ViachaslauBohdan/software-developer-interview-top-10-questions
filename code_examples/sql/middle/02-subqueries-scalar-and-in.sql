-- Middle: subqueries — scalar, IN list, correlated pattern
--
-- TABLES THIS FILE USES
-- ---------------------
--
--   departments: column names id | name    example row: 1 | Engineering
--        ^
--        | 1:N  dept_id (FK)
--        |
--   employees:   column names id | full_name | dept_id | salary | hired_at | email | manager_id
--                 example row:  2 | Bob Builder | 1 | 120000 | 2020-06-15 | bob@example.com | NULL
--
-- Scalar / IN / EXISTS / correlated subqueries read these tables.
--
-- Scalar: salary vs company average
SELECT full_name, salary,
  (SELECT AVG(salary) FROM employees) AS company_avg
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);

-- IN (non-correlated)
SELECT full_name
FROM employees
WHERE dept_id IN (
  SELECT id FROM departments WHERE name IN ('Engineering', 'HR')
);

-- EXISTS (often preferred vs IN for existence checks on large sets)
SELECT d.name
FROM departments d
WHERE EXISTS (
  SELECT 1 FROM employees e WHERE e.dept_id = d.id
);

-- Correlated: employees earning more than their department average
SELECT e.full_name, e.salary, e.dept_id
FROM employees e
WHERE e.salary > (
  SELECT AVG(e2.salary)
  FROM employees e2
  WHERE e2.dept_id = e.dept_id
);
