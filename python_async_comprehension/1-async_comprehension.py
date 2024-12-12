#!/usr/bin/env python3
"""Creates a generator"""
from typing import List

async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """collect 10 random numbers then return"""
    return [_ async for _ in async_generator()]