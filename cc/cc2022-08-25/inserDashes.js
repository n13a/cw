// Insert Dashes

// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

// Note that the number will always be non-negative (>= 0).


const insertDash = num=> {
    const n = num.toString()
    let res = ''
     for(let i = 0; i < n.length; i++){
        if(n[i] % 2 != 0 && n[i-1] % 2 != 0){
          res+= `-${n[i]}`
        } else {
          res+= n[i]
        }
     }
     if(res[0] == '-'){
       return res.slice(1)
     } else {
       return res
     }
  }

  
  