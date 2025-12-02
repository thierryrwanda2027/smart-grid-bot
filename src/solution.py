from typing import List

def two_sum(nums: List[int], target: int) -> List[int]:
    """
    Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
    You may assume that each input would have exactly one solution, and you may not use the same element twice.
    You can return the answer in any order.
    """
    num_map = {}  # val -> index

    for i, num in enumerate(nums):
        complement = target - num
        if complement in num_map:
            return [num_map[complement], i]
        num_map[num] = i

    # Should not be reached given the problem constraints (exactly one solution)
    return []
