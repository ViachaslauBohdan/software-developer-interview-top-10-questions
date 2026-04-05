-- Middle: CTEs (WITH) — readable multi-step queries; foundation for recursion (senior)
--
-- TABLES THIS FILE USES
-- ---------------------
--
--   employees:  column names id | full_name | dept_id | salary | ...
--               example row:  4 | Dan Dev | 1 | 88000 | ...
--
--   orders:     column names id | customer_id | placed_at | status
--   order_items: column names id | order_id | product_id | qty | unit_price
--               example: paid/shipped orders only in second query (see WHERE in CTE)
--
WITH dept_stats AS (
  SELECT
    dept_id,
    COUNT(*) AS n,
    AVG(salary)::NUMERIC(12, 2) AS avg_sal
  FROM employees
  GROUP BY dept_id
)
SELECT
  e.full_name,
  e.salary,
  ds.avg_sal AS dept_avg,
  e.salary - ds.avg_sal AS diff_from_dept_avg
FROM employees e
JOIN dept_stats ds ON ds.dept_id = e.dept_id;

-- Chain multiple CTEs
WITH paid AS (
  SELECT id FROM orders WHERE status IN ('paid', 'shipped')
),
totals AS (
  SELECT oi.order_id, SUM(oi.qty * oi.unit_price) AS t
  FROM order_items oi
  JOIN paid p ON p.id = oi.order_id
  GROUP BY oi.order_id
)
SELECT * FROM totals ORDER BY t DESC;
