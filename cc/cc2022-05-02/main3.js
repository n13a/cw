
// min = age - 0.10 * age
// max = age + 0.10 * age
// You should floor all your answers so that an integer is given instead of a float (which doesn't represent age). Return your answer in the form [min]-[max]

// ##Examples:

// age = 27   =>   20-40
// age = 5    =>   4-5
// age = 17   =>   15-20



function datingRange(age){
    return age <= 14 ? `${Math.floor(age - 0.10 * age)}-${Math.floor(age + 0.10 * age)}` : `${Math.floor(age/2 + 7)}-${Math.floor((age-7) * 2)}`
  }