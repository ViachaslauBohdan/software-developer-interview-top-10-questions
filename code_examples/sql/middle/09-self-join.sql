-- Middle: self-join — same table twice with different aliases (employee → manager)
--
-- TABLES THIS FILE USES
-- ---------------------
--
--   employees AS e                    employees AS m
--   column names: id | full_name | dept_id | salary | hired_at | email | manager_id
--   +----+-----------+---------+--------+-----------+-------------+------------+
--   | id | full_name | dept_id | salary | hired_at  | email       | manager_id |
--   +----+-----------+---------+--------+-----------+-------------+------------+
--   example row e: 3 | Carol Coder | 1 | 105000 | 2021-01-10 | carol@... | 2
--   example row m: 2 | Bob Builder | 1 | 120000 | 2020-06-15 | bob@...   | NULL   JOIN e.manager_id = m.id
--
SELECT
  e.full_name AS employee,
  m.full_name AS manager
FROM employees e
LEFT JOIN employees m ON m.id = e.manager_id
ORDER BY e.id;
