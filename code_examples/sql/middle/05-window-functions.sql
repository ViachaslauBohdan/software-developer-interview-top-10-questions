-- Middle: window functions — PARTITION BY / ORDER BY in OVER ()
--
-- TABLES THIS FILE USES
-- ---------------------
--
--   employees:  column names id | full_name | dept_id | salary | ...
--               example row:  3 | Carol Coder | 1 | 105000 | ...   (windows: PARTITION BY dept_id)
--
--   order_items: column names id | order_id | product_id | qty | unit_price
--                example row:   1 | 1 | 1 | 2 | 29.99   (running sum PARTITION BY order_id ORDER BY id)
--
SELECT
  full_name,
  dept_id,
  salary,
  AVG(salary) OVER (PARTITION BY dept_id) AS avg_in_dept,
  RANK() OVER (PARTITION BY dept_id ORDER BY salary DESC) AS sal_rank_in_dept,
  salary - LAG(salary) OVER (PARTITION BY dept_id ORDER BY salary) AS gap_to_prev_in_dept
FROM employees;

-- Running total of line revenue per order
SELECT
  oi.order_id,
  oi.id AS line_id,
  oi.qty * oi.unit_price AS line_amount,
  SUM(oi.qty * oi.unit_price) OVER (
    PARTITION BY oi.order_id
    ORDER BY oi.id
    ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
  ) AS running_order_total
FROM order_items oi
ORDER BY oi.order_id, oi.id;
