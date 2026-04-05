-- Senior: physical design — indexes, EXPLAIN, covering patterns (PostgreSQL)
--
-- TABLES THIS FILE USES
-- ---------------------
--
--   employees: column names id | full_name | dept_id | salary | hired_at | email | manager_id
--              example row:  2 | Bob Builder | 1 | 120000 | ... | bob@... | NULL
--              indexes: (dept_id, salary DESC), (dept_id) INCLUDE (full_name, salary)
--
--   products: column names id | sku | title | price | stock
--              example:       1 | SKU-A1 | Widget | 29.99 | 100
--              partial index: sku WHERE stock > 0
--
-- B-tree (default): equality + range on common filters
CREATE INDEX IF NOT EXISTS idx_employees_dept_salary
  ON employees (dept_id, salary DESC);

-- Partial index: smaller, targeted (e.g. only active high-value predicates)
CREATE INDEX IF NOT EXISTS idx_products_in_stock
  ON products (sku)
  WHERE stock > 0;

-- Read execution plan (analyze hits real I/O; use on non-prod or carefully)
EXPLAIN (ANALYZE, BUFFERS, FORMAT TEXT)
SELECT e.full_name
FROM employees e
WHERE e.dept_id = 1 AND e.salary > 90000;

-- Covering index idea: include columns to avoid heap fetches (PostgreSQL: INCLUDE)
CREATE INDEX IF NOT EXISTS idx_employees_dept_include
  ON employees (dept_id) INCLUDE (full_name, salary);

-- Drop demo indexes (optional cleanup)
-- DROP INDEX IF EXISTS idx_employees_dept_salary;
-- DROP INDEX IF EXISTS idx_products_in_stock;
-- DROP INDEX IF EXISTS idx_employees_dept_include;
