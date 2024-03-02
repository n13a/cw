// Password Hashes

// When you sign up for an account somewhere, some websites do not actually store your password in their databases. Instead, they will transform your password into something else using a cryptographic hashing algorithm.

// After the password is transformed, it is then called a password hash. Whenever you try to login, the website will transform the password you tried using the same hashing algorithm and simply see if the password hashes are the same.

// Create the function that converts a given string into an md5 hash. The return value should be encoded in hexadecimal.

// Remember that you can include the builtin require() function to include external modules (you're not expected to implement MD5 hash algorithm yourself, there are many modules that can do that for you).

// If you're not familiar with modules, see this kata.

// NodeJS documentation here.

// Code Examples

// passHash("password") // --> "5f4dcc3b5aa765d61d8327deb882cf99"

// passHash("abc123") // --> "e99a18c428cb38d5f260853678922e03"

const passHash = str => require('crypto').createHash('md5').update(str).digest("hex")