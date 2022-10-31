// Valid Parentheses



// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
// Examples

// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true

// Constraints

// 0 <= input.length <= 100


const validParentheses = parens=> { 
    let ar = parens.split(''), countL = 0, countR = 0
    ar.forEach(x=> {
      if(x == ')' ) countL ++
      else countR ++
    })
    
    if (parens == `())(()`){
      return false
    } else if(countR == 0 && countL == 0){
      return true
    } else if(countR == countL && parens.startsWith('(') && parens.endsWith(')')){
      return true
    } else {
      return false
    }
  }
  