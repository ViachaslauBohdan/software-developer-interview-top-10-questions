-- Senior: concurrency — isolation levels, row locks, MVCC mental model (PostgreSQL)
--
-- TABLES THIS FILE USES
-- ---------------------
--
--   products: column names id | sku | title | price | stock
--             example row:  1 | SKU-A1 | Widget | 29.99 | 100   (FOR UPDATE locks this row)
--
--   employees: column names id | full_name | ...  (mentioned for MVCC; not updated here)
--
-- Default READ COMMITTED: each statement sees a snapshot of committed rows as of statement start.
-- REPEATABLE READ: snapshot for the whole transaction (phantoms possible in standard SQL; PG tightens).
-- SERIALIZABLE: full serializable execution (expensive; retries on conflict).

BEGIN ISOLATION LEVEL READ COMMITTED;
SELECT id, stock FROM products WHERE id = 1 FOR UPDATE; -- row-level write lock
-- Another session blocks on FOR UPDATE until COMMIT/ROLLBACK
UPDATE products SET stock = stock - 1 WHERE id = 1;
COMMIT;

-- MVCC (high level): readers don't block writers; old row versions kept until vacuumed.
-- Long transactions can increase bloat and slow vacuum — operational concern.

-- Advisory locks (app-level mutex by key) — optional pattern
-- SELECT pg_advisory_lock(42);
-- SELECT pg_advisory_unlock(42);
