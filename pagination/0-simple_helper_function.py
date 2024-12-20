#!/usr/bin/env python3
"""helper function"""
from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """index range"""
    index = page * page_size - page_size
    index_1 = index + page_size
    return (index, index_1)