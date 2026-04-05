-- Senior: practical performance — batching, pagination, N+1 avoidance, batch reporting
--
-- TABLES THIS FILE USES
-- ---------------------
--
--   employees: column names id | full_name | ...
--              example rows: 3 Carol, 4 Dan, 5 Eve ... (keyset: WHERE id > 2)
--
--   orders:     column names id | customer_id | placed_at | status
--   order_items: column names id | order_id | product_id | qty | unit_price
--                example: order 1 + lines sum to 68.98 (JOIN vs scalar subquery)
--
-- Keyset pagination (stable under inserts): avoid OFFSET for deep pages
SELECT id, full_name
FROM employees
WHERE id > 2
ORDER BY id ASC
LIMIT 20;

-- Anti-pattern awareness: correlated subqueries in hot loops → prefer JOIN or LATERAL
SELECT
  o.id,
  o.status,
  (
    SELECT SUM(oi.qty * oi.unit_price)
    FROM order_items oi
    WHERE oi.order_id = o.id
  ) AS total
FROM orders o;

-- Often better as aggregate JOIN (single pass over order_items)
SELECT
  o.id,
  o.status,
  SUM(oi.qty * oi.unit_price) AS total
FROM orders o
LEFT JOIN order_items oi ON oi.order_id = o.id
GROUP BY o.id, o.status;

-- Reporting snapshot: materialized view refreshed nightly (pattern)
-- CREATE MATERIALIZED VIEW mv_daily_revenue AS ...;
-- REFRESH MATERIALIZED VIEW CONCURRENTLY mv_daily_revenue;

-- Partitioning (large fact tables): time or key range — prune partitions in queries
-- CREATE TABLE orders_2025 PARTITION OF orders FOR VALUES FROM ('2025-01-01') TO ('2026-01-01');
