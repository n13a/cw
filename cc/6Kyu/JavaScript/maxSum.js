/* Fun with trees: max sum
https://www.codewars.com/kata/57e5279b7cf1aea5cf000359/train/javascript

You are given a binary tree. Implement the method maxSum which returns the maximal sum of a route from root to leaf. For example, given the following tree:

    17
   /  \
  3   -10
 /    /  \
2    16   1
         /
        13

The method should return 23, since [17,-10,16] is the route from root to leaf with the maximal sum.

The class TreeNode is available for you:

var TreeNode = function(value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
}; */

const walk = (curr, path) => {
  if (!curr) return [path]

  path.push(curr.value)

  if (!curr.left && !curr.right) return [path]

  return [...walk(curr.left, path.slice()), ...walk(curr.right, path.slice())]
}

const maxSum = root =>
  Math.max(...walk(root, []).reduce((a, c) => {
    const inArr = c.reduce((x, z) => x + +z, 0)
    a.push(inArr)
    return a
  }, []))
