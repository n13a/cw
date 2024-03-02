// ROT13

// How can you tell an extrovert from an introvert at NSA? Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

// I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it? According to Wikipedia, ROT13 (http://en.wikipedia.org/wiki/ROT13) is frequently used to obfuscate jokes on USENET.

// Hint: For this task you're only supposed to substitue characters. Not spaces, punctuation, numbers etc.

// Test examples:

// "EBG13 rknzcyr." -->
// "ROT13 example."

// "This is my first ROT13 excercise!" -->
// "Guvf vf zl svefg EBG13 rkprepvfr!"


const rot13 = str => str.split('').map(x=> {
    const char = x.charCodeAt()
    const newChar = char + 13
    if(char <= 122 && char >= 97 || char >= 65 && char <= 90){
      if(char <= 122 && char >= 97){
        if(newChar > 122){
          return String.fromCharCode((newChar - 122) + 96)
        } else {
          return String.fromCharCode(newChar)
        }
      } else {
        if(newChar > 90){
          return String.fromCharCode((newChar - 90) + 64)
        } else {
          return String.fromCharCode(newChar)
        }
      }
    } else {
      return x
    }
  
  }).join('')