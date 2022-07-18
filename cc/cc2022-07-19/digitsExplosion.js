// Digits Explosion

// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

// Examples
// explode("312")
// should return :

// "333122"
// explode("102269")
// should return :

// "12222666666999999999"

const explode = s=> {
    let r = ''
    const n = s.split('')
    for(let i = 0; i < n.length; i++){
      for(let j = 0; j < Number(n[i]); j++){
        r += n[i]
      }
    }
    return r
}