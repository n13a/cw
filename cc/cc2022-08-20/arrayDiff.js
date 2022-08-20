// Array.Diff

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

const arrayDiff = (a, b)=> a.length == 0 ? [] : 
  a.concat(b).filter(x => !a.includes(x) || !b.includes(x));



//   Time: 997ms Passed: 41Failed: 0
//   Test Results:
//   Basic tests
//   Should pass Basic tests
//   Completed in 2ms
//   Random tests
//   Testing for arrayDiff([-16,4,-16,19,16,-11,18,-15,-6,10,-4,-18,-18,8,8],[-16,4,-16,19,16,-11,18,-15,-6,10,-4,-18,-18,8,8])
//   Testing for arrayDiff([14,-14,-9,-4,-2,18,-5,11,-12,10,-7,18,17,13,-16,-5],[14,-14,-9])
//   Testing for arrayDiff([-11,-18,-7,9,15,14,6,-18,-15,-5,-15,3,-20,0,-7,0,12],[-11,-18,-7,9])
//   Testing for arrayDiff([-6,10,5,3,-16,-16,-15,17,12,-3,-9],[-6,10,5,3,-16,-16])
//   Testing for arrayDiff([13,8,5,-12,3,-17,-9,7,17,3,-16,7,7,15],[13])
//   Testing for arrayDiff([7,5,-9,-7,-12,1,-4,19],[7,5,-9,-7,-12,1])
//   Testing for arrayDiff([20,14,-13,-19,-20,-14,-7,20,0,-9,5,5,16,-4,12,20,13,-20],[])
//   Testing for arrayDiff([-13,17,-10,-8,-4,9,-10,-15,10,-10,-14],[-13,17,-10,-8,-4,9])
//   Testing for arrayDiff([12,18,-1,6,8,-6],[12,18,-1,6,8])
//   Testing for arrayDiff([-7,10,10,-1,10,20,3,11,19,6,-8,19],[-7,10,10,-1,10,20,3,11,19])
//   Testing for arrayDiff([-7,-10,-14,-17,13,19,7,0,-16,2,12,8,-15,-14,-8,11],[-7,-10,-14,-17,13,19,7,0,-16,2,12,8,-15,-14,-8,11])
//   Testing for arrayDiff([],[])
//   Testing for arrayDiff([1,-7,17,-18,-13,14,-7,3,-3,18,11],[1,-7,17,-18,-13,14,-7,3,-3,18])
//   Testing for arrayDiff([-19,-8,-8,-7,-12,-2,-15,5,-20,-18,12,-3,10,9,-12],[-19,-8,-8,-7,-12,-2,-15,5,-20,-18,12,-3,10,9])
//   Testing for arrayDiff([],[])
//   Testing for arrayDiff([13,20,-3,-13,-9,-3,-10,-10,-18],[13,20,-3,-13,-9,-3,-10])
//   Testing for arrayDiff([19,19,13,-6,4,1,-12,-16,-18,19,-5,-18,20,4,10,11,6],[19,19,13,-6,4,1,-12,-16])
//   Testing for arrayDiff([-20,-5],[-20])
//   Testing for arrayDiff([10,-6,-9,17,1,20,1,-2,0,-4],[10,-6,-9])
//   Testing for arrayDiff([-8,6,8,10,8,12,-2,20,4,12,0,4,17,15,12,-1],[-8,6,8,10,8,12])
//   Testing for arrayDiff([9,19,0,5,2,1,-8,-1,1,10,-9,-13,-19],[9,19,0,5,2,1,-8,-1,1,10,-9])
//   Testing for arrayDiff([-18,17,-11,0,10,18,1,14,0,-11,0,13],[-18,17,-11,0,10,18,1,14,0])
//   Testing for arrayDiff([-9,-5,14,-15],[-9,-5,14,-15])
//   Testing for arrayDiff([18,-17,10,-5,10,-9,6],[18,-17,10,-5,10,-9,6])
//   Testing for arrayDiff([-8,10,-18,16,-5,-18,-11,-17],[-8])
//   Testing for arrayDiff([1,-13,-3,-19,-5,-14,-15,-16,7,-16],[1,-13,-3])
//   Testing for arrayDiff([-7,18,-12,-15,6,16,-1,-15,-7,7,7,15,13],[-7,18,-12,-15,6])
//   Testing for arrayDiff([0,7,-6,6,-4,-2,11,-10,-4],[])
//   Testing for arrayDiff([-5,9,16,-13],[-5,9])
//   Testing for arrayDiff([19,14,-14,0,-3,-12],[19,14,-14,0,-3])
//   Testing for arrayDiff([10,-18,-6,-20,18],[10,-18,-6,-20])
//   Testing for arrayDiff([-6,7,15,14,-16,19,-16,18,-11,0,-18,-16,-13,-1],[-6,7,15,14,-16,19,-16,18,-11])
//   Testing for arrayDiff([18,-1,-8,6,10,-15,20,-9,-6,-4],[18,-1])
//   Testing for arrayDiff([14,-19,-9,-17,13,16,3],[14])
//   Testing for arrayDiff([-3,-1,16,-7,-6,19,18,4,9,3,-20],[-3,-1,16,-7,-6,19,18,4])
//   Testing for arrayDiff([-17,-1,-16,14,20,13,20,-8,-3,19,0,-18,11,-7,14,10,5,4],[])
//   Testing for arrayDiff([-20,2,2,8,-19,-5,-18,20,-5,13,12,13,15,13,5,6,8,17,-3,-14],[-20,2,2,8,-19,-5,-18])
//   Testing for arrayDiff([3,-9,20,15,20,-13,-2,-5,20,-17,-19,-3,-3,-11,-17,12,-17,4],[3,-9,20,15,20,-13,-2,-5,20])
//   Testing for arrayDiff([5,1,16,17,-6,-7,2,-15,2,-2,-17,7],[5,1,16])
//   Testing for arrayDiff([-19,5,-11],[-19,5,-11])
//   Completed in 4ms
//   You have passed all of the tests! :)