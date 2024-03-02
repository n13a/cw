// Convert PascalCase string into snake_case

// Complete the function/method so that it takes a PascalCase string and returns the string in snake_case notation. Lowercase characters can be numbers. If the method gets a number as input, it should return a string.
// Examples

// "TestController"  -->  "test_controller"
// "MoviesAndBooks"  -->  "movies_and_books"
// "App7Test"        -->  "app7_test"
// 1                 -->  "1"


const toUnderscore = string => {
    if (typeof string == 'number') return string.toString()
    let a = [string[0].toLowerCase()]
    for (let i = 1; i < string.length; i++) {
        let currentChar = string[i].charCodeAt()
        if (currentChar >= 65 && currentChar <= 90) a.push('_')
        a.push(string[i].toLowerCase())
    }
    return a.join('')
}