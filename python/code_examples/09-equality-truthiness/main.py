# == compares value; custom types can override __eq__
# "truthy": empty containers are falsy ([], {}, "", 0, None)

def main() -> None:
    print(bool([]), bool([1]))  # False True
    print(1 == True)  # False in Python (int vs bool)
    print(1 == 1.0)  # True


if __name__ == "__main__":
    main()
