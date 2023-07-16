// CompoundArray
// https://www.codewars.com/kata/56044de2aa75e28875000017/train/javascript


// You have to create a method "compoundArray" which should take as input two int arrays of different length and return one int array with numbers of both arrays shuffled one by one.

// Input - {1,2,3,4,5,6} and {9,8,7,6} 
// Output - {1,9,2,8,3,7,4,6,5,6}


function compoundArray(arr1, arr2) {
  var arr = [];
  var length = Math.max(arr1.length, arr2.length);

  for (var i = 0; i < length; i++) {
    if (i < arr1.length) {
      arr.push(arr1[i]);
    }
    if (i < arr2.length) {
      arr.push(arr2[i]);
    }
  }

  return arr;
}