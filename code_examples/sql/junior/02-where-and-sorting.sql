-- Junior: filtering (WHERE), sorting (ORDER BY), pagination (LIMIT/OFFSET)
--
-- TABLES THIS FILE USES
-- ---------------------
--
--   employees
--   column names: id | full_name | dept_id | salary | hired_at | email | manager_id
--   +----+-----------+---------+--------+-----------+-------------+------------+
--   | id | full_name | dept_id | salary | hired_at  | email       | manager_id |
--   +----+-----------+---------+--------+-----------+-------------+------------+
--   example row:  3 | Carol Coder | 1 | 105000 | 2021-01-10 | carol@example.com | 2
--
--   products
--   column names: id | sku | title | price | stock
--   +----+-----+-------+-------+-------+
--   | id | sku | title | price | stock |
--   +----+-----+-------+-------+-------+
--   example row:  1 | SKU-A1 | Widget | 29.99 | 100
--
SELECT full_name, salary
FROM employees
WHERE dept_id = 1
  AND salary >= 100000;

SELECT full_name, hired_at
FROM employees
WHERE full_name LIKE 'C%'
   OR email IS NULL;

SELECT full_name, salary
FROM employees
WHERE salary BETWEEN 90000 AND 115000;

SELECT id, title, price
FROM products
WHERE id IN (1, 3);

-- Newest hires first; stable tie-breaker
SELECT full_name, hired_at
FROM employees
ORDER BY hired_at DESC, id ASC
LIMIT 3 OFFSET 1;
