# Penultimate
# https://www.codewars.com/kata/54162d1333c02486a700011d/train/python
#
# Find the second-to-last element of a list.
#
# The input list will always contain at least two elements.
#
# Example:
#
# penultimate([1,2,3,4])            # => 3
# penultimate("Python is dynamic") # => 'i'
#

def penultimate(a):
    return a[-2]
