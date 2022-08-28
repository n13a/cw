// Case Swapping


// Given a string, swap the case for each of the letters.

// Examples
// ""           -->   ""
// "CodeWars"   -->   "cODEwARS"
// "abc"        -->   "ABC"
// "ABC"        -->   "abc"
// "123235"     -->   "123235"


const swap = str =>  str.split(' ').map(x=> [...x]
    .map(y=> y.toLowerCase() == y ? y.toUpperCase() : 
    y.toLowerCase()).join('')).join(' ')