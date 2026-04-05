-- Middle: LEFT / RIGHT / FULL — keep non-matching rows with NULLs
--
-- TABLES THIS FILE USES
-- ---------------------
--
--   departments: column names id | name    example: 3 | HR
--        ^
--        | LEFT JOIN (keep dept rows even with no match)
--        |
--   employees:   column names id | full_name | dept_id | ...    example: 1 | Alice Admin | 3 | ...
--
--   products:     column names id | sku | title | price | stock
--   order_items:   column names id | order_id | product_id | qty | unit_price
--        ^    LEFT JOIN (find products with no order_items)
--        |
--
-- FULL OUTER: employees <> departments (both sides may be NULL-padded)
--
-- Departments with no employees still appear
SELECT
  d.name,
  e.full_name
FROM departments d
LEFT JOIN employees e ON e.dept_id = d.id
ORDER BY d.name, e.full_name NULLS LAST;

-- Products never sold (anti-join pattern)
SELECT p.sku, p.title
FROM products p
LEFT JOIN order_items oi ON oi.product_id = p.id
WHERE oi.id IS NULL;

-- FULL OUTER: rare in app queries; handy for reconciliation
SELECT e.full_name, d.name AS dept
FROM employees e
FULL OUTER JOIN departments d ON d.id = e.dept_id;
