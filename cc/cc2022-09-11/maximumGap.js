// Maximum Gap

// Task
// Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.

const maxGap = numbers=>{
    const r = Math.max(...numbers.sort((a,b)=> b-a).map((x,i)=> numbers[i-1] - x).filter(Boolean))
    return isFinite(r) ? r : 0
}

