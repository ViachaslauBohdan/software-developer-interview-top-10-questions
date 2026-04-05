-- Senior: recursive CTE — org chart, bill-of-materials, graph reachability
--
-- TABLES THIS FILE USES
-- ---------------------
--
--   employees: column names id | full_name | dept_id | salary | hired_at | email | manager_id
--              example rows (hierarchy):
--                1 Alice Admin   manager_id NULL  (root)
--                2 Bob Builder   manager_id NULL  (root)
--                3 Carol Coder   manager_id 2      (reports to Bob)
--                4 Dan Dev       manager_id 2      (reports to Bob)
--                5 Eve Exec      manager_id NULL  (root)
--
WITH RECURSIVE org AS (
  -- Anchor: top of tree (no manager)
  SELECT id, full_name, manager_id, 1 AS depth
  FROM employees
  WHERE manager_id IS NULL

  UNION ALL

  -- Recursive: staff under current level
  SELECT e.id, e.full_name, e.manager_id, org.depth + 1
  FROM employees e
  JOIN org ON e.manager_id = org.id
)
SELECT * FROM org ORDER BY depth, id;
