import unittest
from src.solution import two_sum

class TestTwoSum(unittest.TestCase):
    def test_example_1(self):
        nums = [2, 7, 11, 15]
        target = 9
        expected = [0, 1]
        result = two_sum(nums, target)
        self.assertCountEqual(result, expected)

    def test_example_2(self):
        nums = [3, 2, 4]
        target = 6
        expected = [1, 2]
        result = two_sum(nums, target)
        self.assertCountEqual(result, expected)

    def test_example_3(self):
        nums = [3, 3]
        target = 6
        expected = [0, 1]
        result = two_sum(nums, target)
        self.assertCountEqual(result, expected)

    def test_negative_numbers(self):
        nums = [-1, -2, -3, -4, -5]
        target = -8
        expected = [2, 4] # -3 and -5
        result = two_sum(nums, target)
        self.assertCountEqual(result, expected)

    def test_mixed_numbers(self):
        nums = [-10, 5, 20, -5]
        target = 0
        expected = [1, 3] # 5 and -5
        result = two_sum(nums, target)
        self.assertCountEqual(result, expected)

if __name__ == '__main__':
    unittest.main()
