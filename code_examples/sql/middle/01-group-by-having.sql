-- Middle: filter aggregates with HAVING (WHERE applies before GROUP BY)
--
-- TABLES THIS FILE USES
-- ---------------------
--
--   departments: column names id | name          example: 2 | Sales
--        | 1:N
--        v
--   employees:   column names id | full_name | dept_id | salary | ...   example: 3 | Carol Coder | 1 | 105000 | ...
--
--   orders:       column names id | customer_id | placed_at | status
--   order_items:   column names id | order_id | product_id | qty | unit_price   example: 1 | 1 | 1 | 2 | 29.99
--        | 1:N from orders
--
SELECT
  d.name AS department,
  COUNT(e.id) AS headcount,
  AVG(e.salary)::NUMERIC(12, 2) AS avg_salary
FROM departments d
LEFT JOIN employees e ON e.dept_id = d.id
GROUP BY d.id, d.name
HAVING COUNT(e.id) >= 1
ORDER BY avg_salary DESC NULLS LAST;

-- Revenue per order from line items
SELECT
  o.id,
  SUM(oi.qty * oi.unit_price) AS order_total
FROM orders o
JOIN order_items oi ON oi.order_id = o.id
GROUP BY o.id
HAVING SUM(oi.qty * oi.unit_price) > 50;
