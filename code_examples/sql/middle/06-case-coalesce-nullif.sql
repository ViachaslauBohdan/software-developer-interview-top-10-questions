-- Middle: conditional expressions and NULL helpers
--
-- TABLES THIS FILE USES
-- ---------------------
--
--   employees: column names id | full_name | salary | email | ...
--              example:       1 | Alice Admin | 95000 | alice@example.com | ...
--
--   products:  column names id | sku | title | price | stock
--              example:       2 | SKU-B2 | Gadget | 49.50 | 0   (NULLIF(stock,0) demo)
--
--   orders:    column names id | customer_id | placed_at | status
--              example:       1 | 101 | ... | paid
--
SELECT
  full_name,
  CASE
    WHEN salary >= 120000 THEN 'high'
    WHEN salary >= 95000 THEN 'mid'
    ELSE 'lower'
  END AS band,
  COALESCE(email, 'no-email') AS contact
FROM employees;

-- NULLIF: avoid divide-by-zero patterns; treat sentinel as NULL
SELECT NULLIF(stock, 0) AS stock_or_null FROM products WHERE sku = 'SKU-B2';

-- Search a prioritized status list with CASE + simple mapping
SELECT
  id,
  CASE status
    WHEN 'pending' THEN 1
    WHEN 'paid' THEN 2
    WHEN 'shipped' THEN 3
    WHEN 'cancelled' THEN 4
  END AS status_sort_key
FROM orders;
