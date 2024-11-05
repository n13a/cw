/* Dbftbs Djqifs
https://www.codewars.com/kata/546937989c0b6ab3c5000183/train/javascript


Caesar Ciphers are one of the most basic forms of encryption. It consists of a message and a key, and it shifts the letters of the message for the value of the key.

Read more about it here: https://en.wikipedia.org/wiki/Caesar_cipher
Your task

Your task is to create a function encryptor that takes 2 arguments - key and message - and returns the encrypted message.

Make sure to only shift letters, and be sure to keep the cases of the letters the same. All punctuation, numbers, spaces, and so on should remain the same.

Also be aware of keys greater than 26 and less than -26. There's only 26 letters in the alphabet!
Examples

A message 'Caesar Cipher' and a key of 1 returns 'Dbftbs Djqifs'.

A message 'Caesar Cipher' and a key of -1 returns 'Bzdrzq Bhogdq'.
*/

function encryptor(key, message) {
  key = ((key % 26) + 26) % 26
  const A = 'A'.charCodeAt()
  const Z = 'Z'.charCodeAt()
  const a = 'a'.charCodeAt()
  const z = 'z'.charCodeAt()

  return message.split('').map(c => {
    const code = c.charCodeAt()

    if (code < A || (code > Z && code < a) || code > z) {
      return c
    }

    if (code >= A && code <= Z) {
      return String.fromCharCode(A + (code - A + key) % 26);
    }
    return String.fromCharCode(a + (code - a + key) % 26)

  }).join('')
}



console.log(encryptor(13, 'Caesar Cipher'))
console.log(encryptor(27, 'Whoopi Goldberg'))
