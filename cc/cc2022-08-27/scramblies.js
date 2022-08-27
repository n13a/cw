// Scramblies

// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

function scramble(str1, str2) {
    const str1Obj = [...str1].reduce((o,i)=> {
      if(!o[i]) o[i] = 0;
      o[i]++
      return o
    }, {})
    const str2Obj = [...str2].reduce((o,i)=> {
      if(!o[i]) o[i] = 0;
      o[i]++
      return o
    }, {})
    var res = true
    for (const [key] of Object.entries(str2Obj)) {
      if(str2Obj[key] > str1Obj[key] || str1Obj[key] == undefined){
        res = false
      }
    }
    return res
    
}
  

// Time: 9999ms Passed: 3 Failed: 0
// Test Results:
// Fixed Tests
// Tests
// Completed in 6ms
// Random Tests
// Testing small strings
// Testing very long strings
// Completed in 9207ms
// You have passed all of the tests! :)