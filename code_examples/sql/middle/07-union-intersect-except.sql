-- Middle: combine result sets — UNION [ALL], INTERSECT, EXCEPT (PostgreSQL)
--
-- TABLES THIS FILE USES
-- ---------------------
--
--   employees:   column names id | full_name | dept_id | salary | email | manager_id | ...
--                 example rows: 2 | Bob Builder | 1 | 120000 | bob@... | NULL | ...
--   departments: column names id | name
--                 example:      1 | Engineering
--
-- (Set ops combine row sets from the same column shape; examples project id or email.)
--
-- UNION removes duplicates; UNION ALL keeps duplicates (faster when safe)
SELECT email FROM employees WHERE dept_id = 1
UNION
SELECT email FROM employees WHERE salary > 100000;

-- INTERSECT: rows present in both queries
SELECT id FROM departments WHERE name LIKE '%e%'
INTERSECT
SELECT DISTINCT dept_id FROM employees WHERE dept_id IS NOT NULL;

-- EXCEPT: rows in first query not in second
SELECT id FROM employees
EXCEPT
SELECT manager_id FROM employees WHERE manager_id IS NOT NULL;
