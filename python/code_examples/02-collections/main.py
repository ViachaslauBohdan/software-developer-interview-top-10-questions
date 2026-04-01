# list / tuple / dict / set
nums = [1, 2, 3]
point = (10, 20)  # immutable tuple
user = {"id": 1, "name": "Ada"}
unique = {1, 2, 3, 3}  # {1, 2, 3}

# dict access
user["role"] = "dev"
role = user.get("role", "guest")


def main() -> None:
    print(nums, point, user, unique, role)


if __name__ == "__main__":
    main()
