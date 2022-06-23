// Duplicate Encoder

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

function duplicateEncode(word){
    const w = word.toLowerCase().split('').reduce((o,i)=>{
      if(!o[i]){
        o[i] = 0
      }
      o[i]++
      return o
    }, {})
    
    return word.toLowerCase().split('').map(x=> {
      if(w[x] > 1) {
      return ')';
    } else {
      return '(';
    }
  }).join('');
}
