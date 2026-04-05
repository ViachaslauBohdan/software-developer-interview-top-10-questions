-- Load once before running topic examples (PostgreSQL).
-- psql -f code_examples/sql/setup/sample_schema.sql
--
-- =============================================================================
-- TABLES (reference diagram) — column names + example rows (from seed INSERTs)
-- =============================================================================
--
--   departments (1) ----< (N) employees
--   column names (departments): id | name
--   example row:                 1 | Engineering
--
--   column names (employees): id | full_name | dept_id | salary | hired_at | email | manager_id
--   example row:               1 | Alice Admin | 3 | 95000.00 | 2019-03-01 | alice@example.com | NULL
--
--   orders (1) ----< (N) order_items (N) >---- (1) products
--   column names (orders): id | customer_id | placed_at | status
--   example row:            1 | 101 | <timestamp> | paid
--
--   column names (order_items): id | order_id | product_id | qty | unit_price
--   example row:                1 | 1 | 1 | 2 | 29.99
--
--   column names (products): id | sku | title | price | stock
--   example row:              1 | SKU-A1 | Widget | 29.99 | 100
--
DROP TABLE IF EXISTS order_items CASCADE;
DROP TABLE IF EXISTS orders CASCADE;
DROP TABLE IF EXISTS products CASCADE;
DROP TABLE IF EXISTS employees CASCADE;
DROP TABLE IF EXISTS departments CASCADE;

CREATE TABLE departments (
  id          SERIAL PRIMARY KEY,
  name        VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE employees (
  id          SERIAL PRIMARY KEY,
  full_name   VARCHAR(120) NOT NULL,
  dept_id     INTEGER REFERENCES departments (id),
  salary      NUMERIC(12, 2) NOT NULL CHECK (salary >= 0),
  hired_at    DATE NOT NULL DEFAULT CURRENT_DATE,
  email       VARCHAR(200) UNIQUE,
  manager_id  INTEGER REFERENCES employees (id)
);

CREATE TABLE products (
  id          SERIAL PRIMARY KEY,
  sku         VARCHAR(40) NOT NULL UNIQUE,
  title       VARCHAR(200) NOT NULL,
  price       NUMERIC(12, 2) NOT NULL CHECK (price >= 0),
  stock       INTEGER NOT NULL DEFAULT 0 CHECK (stock >= 0)
);

CREATE TABLE orders (
  id          SERIAL PRIMARY KEY,
  customer_id INTEGER NOT NULL,
  placed_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  status      VARCHAR(20) NOT NULL DEFAULT 'pending'
    CHECK (status IN ('pending', 'paid', 'shipped', 'cancelled'))
);

CREATE TABLE order_items (
  id          SERIAL PRIMARY KEY,
  order_id    INTEGER NOT NULL REFERENCES orders (id) ON DELETE CASCADE,
  product_id  INTEGER NOT NULL REFERENCES products (id),
  qty         INTEGER NOT NULL CHECK (qty > 0),
  unit_price  NUMERIC(12, 2) NOT NULL
);

INSERT INTO departments (name) VALUES
  ('Engineering'),
  ('Sales'),
  ('HR');

INSERT INTO employees (full_name, dept_id, salary, hired_at, email, manager_id) VALUES
  ('Alice Admin', 3, 95000.00, '2019-03-01', 'alice@example.com', NULL),
  ('Bob Builder', 1, 120000.00, '2020-06-15', 'bob@example.com', NULL),
  ('Carol Coder', 1, 105000.00, '2021-01-10', 'carol@example.com', 2),
  ('Dan Dev', 1, 88000.00, '2022-09-01', 'dan@example.com', 2),
  ('Eve Exec', 2, 130000.00, '2018-11-20', 'eve@example.com', NULL);

INSERT INTO products (sku, title, price, stock) VALUES
  ('SKU-A1', 'Widget', 29.99, 100),
  ('SKU-B2', 'Gadget', 49.50, 0),
  ('SKU-C3', 'Cable', 9.00, 500);

INSERT INTO orders (customer_id, placed_at, status) VALUES
  (101, NOW() - INTERVAL '5 days', 'paid'),
  (102, NOW() - INTERVAL '2 days', 'shipped'),
  (101, NOW() - INTERVAL '1 day', 'pending');

INSERT INTO order_items (order_id, product_id, qty, unit_price) VALUES
  (1, 1, 2, 29.99),
  (1, 3, 1, 9.00),
  (2, 2, 1, 49.50),
  (3, 1, 1, 29.99);
