#!/usr/bin/env python3
"""async measure runtime"""
import time
import asyncio
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """measure runtime"""
    tasks = [async_comprehension() for _ in range(10)]
    start_time = time.perf_counter()
    await asyncio.gather(*tasks)
    end_time = time.perf_counter()

    return end_time - start_time