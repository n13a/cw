// UEFA Euro 2016

// Finish the uefaEuro2016() function so it return string just like in the examples below:

// uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
// uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
// uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."

const uefaEuro2016 = (t, s)=> s[0] > s[1] ? `At match ${t[0]} - ${t[1]}, ${t[0]} won!` :
  s[0] < s[1] ? `At match ${t[0]} - ${t[1]}, ${t[1]} won!` :
  `At match ${t[0]} - ${t[1]}, teams played draw.`
