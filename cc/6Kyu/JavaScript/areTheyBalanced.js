// are they balanced

// Each exclamation mark's weight is 2; each question mark's weight is 3. Putting two strings left and right on the balance - are they balanced?

// If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right"; if they are balanced, return "Balance".
// Examples

// "!!", "??"     -->  "Right"
// "!??", "?!!"   -->  "Left"
// "!?!!", "?!?"  -->  "Left"
// "!!???!????", "??!!?!!!!!!!"  -->  "Balance"


const sum = arr => [...arr].reduce((a, c) => c == '!' ? a + 2 : a + 3, 0)
const balance = (left, right) => {
    const l = sum(left)
    const r = sum(right)
    return l == r ? 'Balance' : l > r ? 'Left' : 'Right'
}