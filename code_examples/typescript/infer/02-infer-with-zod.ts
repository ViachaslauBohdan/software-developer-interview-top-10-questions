/**
 * Zod: `z.infer` turns a schema into a TypeScript type (the parsed object shape).
 * Needs: `npm install zod`
 */
import { z } from "zod";

const personSchema = z.object({
  name: z.string(),
  age: z.number(),
});

// Same as writing `{ name: string; age: number }` by hand — derived from the schema.
type Person = z.infer<typeof personSchema>;

const ok: Person = { name: "Ada", age: 36 };
void ok;
