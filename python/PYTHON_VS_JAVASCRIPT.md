# Python vs JavaScript — Concepts

Both are **dynamically typed** at runtime, but **culture and tooling** differ: Python often pairs with **type hints** + mypy; JavaScript often pairs with **TypeScript** for static checking.

## Execution model

| | Python | JavaScript |
|---|--------|------------|
| Typical runtime | CPython, interpreter + optional compile step | V8, SpiderMonkey, etc. |
| Browser | N/A (unless compiled e.g. Pyodide) | Native |
| Indentation | **Significant** (blocks by indent) | **Braces** `{ }` |
| Entry | Scripts, `if __name__ == "__main__"` | `main.js`, bundlers |

## Types and “nothing”

| Concept | Python | JavaScript |
|---------|--------|------------|
| Absence of value | `None` (singleton) | `null` and `undefined` |
| Type hints | `def f(x: int) -> str` (optional) | TS: `function f(x: number): string` |

## Collections

| Python | JavaScript |
|--------|------------|
| `list`, `tuple`, `dict`, `set` | `Array`, object as map, `Map`, `Set` |
| List literal `[1, 2]` | `[1, 2]` |
| Dict `{"a": 1}` | `{ a: 1 }` or `Map` |

## Functions

| Python | JavaScript |
|--------|------------|
| `def foo(a, b=1, *args, **kwargs)` | `function foo(a, b = 1, ...rest)` and `...` spread |
| Lambda `lambda x: x * 2` | `(x) => x * 2` |

## Classes

| Python | JavaScript |
|--------|------------|
| `class Foo:`, `self` explicit first param | `class Foo { }`, `this` (lexical rules differ) |
| Multiple inheritance supported | Single inheritance; mixins via composition |

## Modules

| Python | JavaScript |
|--------|------------|
| `import m`, `from x import y` | `import` / `require()` (CommonJS) / dynamic `import()` |
| `__init__.py` packages (classic) | `package.json` + node resolution |

## Async

| Python | JavaScript |
|--------|------------|
| `async def`, `await`, `asyncio` | `async function`, `await`, Promises |
| Often event loop + tasks | Promises + microtasks |

## Equality

| Python | JavaScript |
|--------|------------|
| `==` value equality (customizable) | `==` coercion, `===` strict equality |

## Error handling

| Python | JavaScript |
|--------|------------|
| `try / except / else / finally` | `try / catch / finally` |

## Interview soundbite

- **Python**: readability, data science, backends, scripting, **explicit is better than implicit** (Zen).
- **JavaScript**: one language for **browser + Node**; event-driven + Promise-heavy ecosystem.

See **[code_examples/README.md](code_examples/README.md)** for runnable side-by-side snippets.
