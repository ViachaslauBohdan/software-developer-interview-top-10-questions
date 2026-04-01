def may_fail(x: int) -> int:
    if x < 0:
        raise ValueError("negative")
    return x * 2


def main() -> None:
    try:
        print(may_fail(3))
        print(may_fail(-1))
    except ValueError as e:
        print("caught:", e)
    finally:
        print("cleanup")


if __name__ == "__main__":
    main()
