// Simple Substitution Cipher Helper
// https://www.codewars.com/kata/52eb114b2d55f0e69800078d/train/javascripthttps://www.codewars.com/kata/52eb114b2d55f0e69800078d/train/javascript


// A simple substitution cipher replaces one character from an alphabet with a character from an alternate alphabet, where each character's position in an alphabet is mapped to the alternate alphabet for encoding or decoding.

// E.g.

// var abc1 = "abcdefghijklmnopqrstuvwxyz";
// var abc2 = "etaoinshrdlucmfwypvbgkjqxz";

// var sub = new SubstitutionCipher(abc1, abc2);
// sub.encode("abc") // => "eta"
// sub.encode("xyz") // => "qxz"
// sub.encode("aeiou") // => "eirfg"

// sub.decode("eta") // => "abc"
// sub.decode("qxz") // => "xyz"
// sub.decode("eirfg") // => "aeiou"

// If a character provided is not in the opposing alphabet, simply leave it as be.


function SubstitutionCipher(abc1, abc2) {
    this.encode = function (str) {
        return [...str].map(char => {
            const inx = abc1.indexOf(char)
            return inx != -1 ? abc2[inx] : char
        }).join('')
    }
    this.decode = function (str) {
        return [...str].map(char => {
            const inx = abc2.indexOf(char)
            return inx != -1 ? abc1[inx] : char
        }).join('')
    }
}