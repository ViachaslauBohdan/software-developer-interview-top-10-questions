# Variables: Python uses dynamic typing; None is the single "no value" sentinel.
name = "Ada"
count = 42
pi = 3.14
missing = None  # like null in other languages (only one None object)

# Type hints (optional, for tooling — not enforced at runtime by default)
age: int = 30


def main() -> None:
    print(name, count, pi, missing, age)


if __name__ == "__main__":
    main()
