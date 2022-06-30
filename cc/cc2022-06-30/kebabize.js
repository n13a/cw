// Kebabize


// Modify the kebabize function so that it converts a camel case string into a kebab case.

// kebabize('camelsHaveThreeHumps') // camels-have-three-humps
// kebabize('camelsHave3Humps') // camels-have-humps
// Notes:

// the returned string should only contain lowercase letters

const kebabize = str=> {
    let a = str.match(/[a-zA-Z]+/g).join('').split('')
    const b = a.map(x=> x.toUpperCase() == x ? `-${x.toLowerCase()}` : x)
    if(a[0].toUpperCase() == a[0]){
      return a[0].toLowerCase() + b.slice(1).join('')
    } else {
      return b.join('')
    }
    
}