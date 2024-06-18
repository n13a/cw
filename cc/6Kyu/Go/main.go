package main

import (
	"codewars/cc/convertStringToCamelCase"
	"codewars/cc/errorsHistogram"
	"codewars/cc/expressionsMatter"
	"codewars/cc/findTheOddInt"
	sumOfPrimeIndexedElements "codewars/cc/sumOfPrime-indexedElements"
	"codewars/cc/uniq"
	"fmt"
)

func main() {
	fmt.Println("CodeWars")
	fmt.Println(findTheOddInt.FindOdd([]int{1, 2, 3, 4, 4, 3, 2}))
	fmt.Println(expressionsMatter.ExpressionMatter(1, 2, 3))
	fmt.Println(errorsHistogram.Hist("uuaaaxbbbbyyhwawiwjjjwwxymzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"))
	fmt.Println(convertStringToCamelCase.ToCamelCase("The_Stealth-Warrior"))
	fmt.Println(uniq.Uniq([]string{"a", "a", "b", "b", "c", "a", "b", "c"}))
	fmt.Println(sumOfPrimeIndexedElements.Solve([]int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15}), 47)
}
