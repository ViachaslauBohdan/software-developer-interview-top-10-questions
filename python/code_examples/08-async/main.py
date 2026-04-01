import asyncio


async def fetch_value() -> int:
    await asyncio.sleep(0.05)
    return 42


async def main() -> None:
    a = await fetch_value()
    results = await asyncio.gather(fetch_value(), fetch_value())
    print(a, results)


if __name__ == "__main__":
    asyncio.run(main())
