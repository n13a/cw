//Sum Of Array Singles

// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

function repeats(arr){

    const a = arr.reduce((o, i)=> {
      if(!o[i]) o[i] = 0
      o[i]++
      return o
    }, {})
    let result = 0
    for(let item in a){
      if(a[item] == 1){
        result+= Number(item)
      }
    }
    return result
};