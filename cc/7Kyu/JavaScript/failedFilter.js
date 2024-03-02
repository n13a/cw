/* Failed Filter
https://www.codewars.com/kata/55c606e6babfc5b2c500007c/train/javascript


Oh no, Timmy's filter doesn't seem to be working? Your task is to fix the FilterNumber function to remove all the numbers from the string. */


var FilterNumbers = str => str.split('').filter(x => isNaN(x)).join('')
