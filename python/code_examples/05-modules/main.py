# Single-file "module" demo: __name__ guard and importing stdlib
import json
import math

DATA = {"ok": True}


def main() -> None:
    print(json.dumps(DATA), math.sqrt(16))


if __name__ == "__main__":
    main()
