# Populate hash with array keys and default value
# https://www.codewars.com/kata/51c38e14ea1c97ffaf000003/solutions/python

# Complete the function so that it takes an array of keys and a default value and returns a hash (Ruby) / dictionary (Python) with all keys set to the default value.
# Example

# ["draft", "completed"], 0   # should return {"draft": 0, "completed: 0}

# Arrays
# Fundamentals


def populate_dict(keys, default):
   d = dict()
   for i in keys:
       d[i] = default
   return d 