def greet(name: str, times: int = 1) -> str:
    return (f"Hello, {name}! " * times).strip()


def sum_all(*args: int) -> int:
    return sum(args)


def merge(**kwargs: str) -> dict:
    return dict(kwargs)


def main() -> None:
    print(greet("Ada"))
    print(sum_all(1, 2, 3))
    print(merge(a="1", b="2"))


if __name__ == "__main__":
    main()
