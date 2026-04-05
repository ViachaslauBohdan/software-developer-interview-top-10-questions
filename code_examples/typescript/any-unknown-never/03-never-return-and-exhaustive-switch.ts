/**
 * `never` — no value. Common uses: functions that never return, exhaustive switches.
 */

// 1) Return type `never` — does not return normally
function fail(message: string): never {
  throw new Error(message);
}

// 2) Exhaustive switch — `t` in `default` is `never` if all cases covered
type Theme = "light" | "dark";

function themeLabel(t: Theme): string {
  switch (t) {
    case "light":
      return "Light";
    case "dark":
      return "Dark";
    default: {
      const _exhaustive: never = t;
      return _exhaustive;
    }
  }
}

console.log("theme:", themeLabel("light"));
