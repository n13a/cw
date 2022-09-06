// Interview Question (easy)


// The return string should include only the letters (not the dashes, spaces, apostrophes, etc). There should be no spaces in the output, and the different letters are separated by a comma (,) as seen in the example above.

// Note that the return string must list the letters in order of their first appearance in the original string.

// More examples:

// "Bangkok"    -->  "b:*,a:*,n:*,g:*,k:**,o:*"
// "Las Vegas"  -->  "l:*,a:**,s:**,v:*,e:*,g:*"


function getStrings(city){
    const a = [...city.toLowerCase()].filter(x=> x!=' ').reduce((o,i)=> {
      if(!o[i]) o[i] = 0
      o[i]++
      return o
    }, {})
   let b = []
    for(let i in a) b.push(`${i}:${'*'.repeat(a[i])}`)
    return b.join(',')
}