// What Century Is It?

// Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.
// Examples

// "1999" --> "20th"
// "2011" --> "21st"
// "2154" --> "22nd"
// "2259" --> "23rd"
// "1124" --> "12th"
// "2000" --> "20th"

const whatCentury = year => {
    const cent = Math.ceil(year / 100).toString()
    const suf = cent[cent.length - 1]
    let res
    switch (suf) {
        case '1':
            res = 'st'
            break
        case '2':
            res = 'nd'
            break
        case '3':
            res = 'rd'
            break
        default:
            res = 'th'
            break

    }
    return cent == '11' ? '11th' : cent == '12' ? '12th' : `${cent}${res}`
} 