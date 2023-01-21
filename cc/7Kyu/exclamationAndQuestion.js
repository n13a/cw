// Count the number of exclamation marks and question marks, return the product


// Description:

// Count the number of exclamation marks and question marks, return the product.
// Examples

// Product("") == 0
// product("!") == 0
// Product("!ab? ?") == 2
// Product("!!") == 0
// Product("!??") == 2
// Product("!???") == 3
// Product("!!!??") == 6
// Product("!!!???") == 9
// Product("!???!!") == 9
// Product("!????!!!?") == 20


const product = string => {
    const ex = string.match(/[!]/g)
    const qu = string.match(/[?]/g)
    return (ex !== null ? ex.length : 0) * (qu !== null ? qu.length : 0)
}