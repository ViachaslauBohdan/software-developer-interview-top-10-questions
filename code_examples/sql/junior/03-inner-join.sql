-- Junior: relate rows with INNER JOIN (only matching keys)
--
-- TABLES THIS FILE USES
-- ---------------------
--
--   departments          column names: id | name
--   example row:         1 | Engineering
--        ^
--        | 1:N  dept_id (FK)
--        |
--   employees            column names: id | full_name | dept_id | salary | hired_at | email | manager_id
--   example row:         2 | Bob Builder | 1 | 120000 | 2020-06-15 | bob@example.com | NULL
--
--   orders               column names: id | customer_id | placed_at | status
--   example row:         1 | 101 | <timestamp> | paid
--        ^
--        | 1:N  order_id (FK)
--        |
--   order_items          column names: id | order_id | product_id | qty | unit_price
--   example row:         1 | 1 | 1 | 2 | 29.99
--        |
--        | N:1  product_id (FK)
--        v
--   products             column names: id | sku | title | price | stock
--   example row:         1 | SKU-A1 | Widget | 29.99 | 100
--
SELECT
  e.full_name,
  d.name AS department
FROM employees e
INNER JOIN departments d ON d.id = e.dept_id
ORDER BY e.id;

-- Typical "who ordered what" shape (orders + line items + product title)
SELECT
  o.id AS order_id,
  o.status,
  p.title,
  oi.qty,
  oi.unit_price
FROM orders o
JOIN order_items oi ON oi.order_id = o.id
JOIN products p ON p.id = oi.product_id
ORDER BY o.id, oi.id;
