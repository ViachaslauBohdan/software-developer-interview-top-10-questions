-- Senior: idempotent writes — UPSERT (PostgreSQL ON CONFLICT), SQL:2023 MERGE (where supported)
--
-- TABLES THIS FILE USES
-- ---------------------
--
--   products: column names id | sku | title | price | stock
--              example before upsert: 1 | SKU-A1 | Widget | 29.99 | 100
--              ON CONFLICT (sku) ...
--
--   employees: column names id | full_name | dept_id | salary | hired_at | email | manager_id
--                example:      2 | Bob Builder | 1 | 120000 | ... | bob@example.com | NULL
--                ON CONFLICT (email) DO NOTHING
--
-- Insert or bump stock if SKU already exists
INSERT INTO products (sku, title, price, stock)
VALUES ('SKU-A1', 'Widget v2', 31.00, 5)
ON CONFLICT (sku) DO UPDATE SET
  stock = products.stock + EXCLUDED.stock,
  price = EXCLUDED.price;

-- "Do nothing" on duplicate natural key
INSERT INTO employees (full_name, dept_id, salary, email)
VALUES ('Bob Builder', 1, 120000.00, 'bob@example.com')
ON CONFLICT (email) DO NOTHING;

-- MERGE (PostgreSQL 15+): unified upsert/delete semantics in one statement
-- MERGE INTO products p
-- USING (VALUES ('SKU-X', 'New', 10.00, 3)) AS v(sku, title, price, stock)
--   ON p.sku = v.sku
-- WHEN MATCHED THEN UPDATE SET price = v.price, stock = p.stock + v.stock
-- WHEN NOT MATCHED THEN INSERT (sku, title, price, stock) VALUES (v.sku, v.title, v.price, v.stock);
