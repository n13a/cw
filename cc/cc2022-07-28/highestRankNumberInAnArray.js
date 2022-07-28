// Highest Rank Number In An Array

// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3


const highestRank = arr=>{
    const r = arr.reduce((o, i)=> {
      if(!o[i]) o[i] = 0
      o[i]++
      return o },{})
    let k = Object.keys(r).sort((a,b)=> r[b]-r[a])
    let v = Object.values(r).sort((a,b)=> b-a)
    return v[0] === v[1] ? Math.max(k[0], k[1]) : Number(k[0])
}