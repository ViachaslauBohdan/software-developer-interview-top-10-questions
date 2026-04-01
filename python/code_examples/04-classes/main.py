class Greeter:
    def __init__(self, name: str) -> None:
        self.name = name

    def hello(self) -> str:
        return f"Hello, {self.name}"


class Admin(Greeter):
    def hello(self) -> str:
        return super().hello() + " (admin)"


def main() -> None:
    g = Admin("Ada")
    print(g.hello())


if __name__ == "__main__":
    main()
