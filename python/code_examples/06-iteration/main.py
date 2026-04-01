nums = [1, 2, 3, 4]

# List comprehension (Pythonic)
squares = [n * n for n in nums if n % 2 == 0]

# for-loop
total = 0
for n in nums:
    total += n


def main() -> None:
    print("squares(even):", squares, "total:", total)


if __name__ == "__main__":
    main()
