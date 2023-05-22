/* Find how many times did a team from a given country win the Champions League ?
  https ://www.codewars.com/kata/581b30af1ef8ee6aea0015b9/train/javascript


  Create a function that takes two arguments:

    An array of objects which feature the season, the team and the country of the Champions League winner.

  Country(as a string, for example, 'Portugal')

You function should then return the number which represents the number of times a team from a given country has won.Return 0 if there have been no wins.

For example if the input array is as follows:

countWins(winnerList1, 'Spain') => should return 2
countWins(winnerList1, 'Portugal') => should return 1
countWins(winnerList1, 'Sportland') => should return 0 */

const countWins = (winnerList, country) =>
  winnerList.reduce((a, c) => c.country === country ? a + 1 : a, 0)
