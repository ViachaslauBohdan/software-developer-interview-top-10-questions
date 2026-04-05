-- Middle: ACID transactions — BEGIN / COMMIT / ROLLBACK, savepoints
--
-- TABLES THIS FILE USES
-- ---------------------
--
--   products:    column names id | sku | title | price | stock
--                 example:       1 | SKU-A1 | Widget | 29.99 | 100   (UPDATE stock)
--
--   orders:      column names id | customer_id | placed_at | status
--                 INSERT example: (200, 'paid') + RETURNING id
--
--   order_items:  column names id | order_id | product_id | qty | unit_price  (follow-up insert in app)
--
BEGIN;

UPDATE products SET stock = stock - 1 WHERE id = 1 AND stock >= 1;

INSERT INTO orders (customer_id, status) VALUES (200, 'paid') RETURNING id;
-- In app code: use returned id for order_items insert

SAVEPOINT after_order;

UPDATE products SET stock = stock - 2 WHERE id = 3 AND stock >= 2;

-- ROLLBACK TO SAVEPOINT after_order; -- partial undo
ROLLBACK; -- full undo for demo

-- Isolation: default in PostgreSQL is READ COMMITTED (each statement sees committed data)
