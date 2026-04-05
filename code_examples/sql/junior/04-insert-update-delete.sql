-- Junior: mutating rows (INSERT / UPDATE / DELETE)
--
-- TABLES THIS FILE USES
-- ---------------------
--
--   departments        column names: id | name
--   example row:        1 | Engineering
--
--   employees          column names: id | full_name | dept_id | salary | hired_at | email | manager_id
--   example row:        4 | Dan Dev | 1 | 88000 | 2022-09-01 | dan@example.com | 2
--
--   products           column names: id | sku | title | price | stock
--   example row:        2 | SKU-B2 | Gadget | 49.50 | 0
--
--   orders             column names: id | customer_id | placed_at | status
--   example row:        3 | 101 | <timestamp> | pending
--
BEGIN;

INSERT INTO departments (name)
VALUES ('Support')
RETURNING id, name;

INSERT INTO employees (full_name, dept_id, salary, email)
VALUES ('Frank Fix', 1, 92000.00, 'frank@example.com')
RETURNING id;

UPDATE products
SET stock = stock + 10
WHERE sku = 'SKU-B2';

UPDATE orders
SET status = 'cancelled'
WHERE id = 3 AND status = 'pending';

DELETE FROM employees
WHERE email = 'legacy@example.com';

ROLLBACK; -- remove ROLLBACK and use COMMIT in real scripts
