package main

import "fmt"
import "codewars/cc/findTheOddInt"
import "codewars/cc/expressionsMatter"
import "codewars/cc/errorsHistogram"
import "codewars/cc/convertStringToCamelCase"
import "codewars/cc/uniq"

func main() {
	fmt.Println("CodeWars")
	fmt.Println(findTheOddInt.FindOdd([]int{1, 2, 3, 4, 4, 3, 2}))
	fmt.Println(expressionsMatter.ExpressionMatter(1, 2, 3))
	fmt.Println(errorsHistogram.Hist("uuaaaxbbbbyyhwawiwjjjwwxymzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"))
	fmt.Println(convertStringToCamelCase.ToCamelCase("The_Stealth-Warrior"))
	fmt.Println(uniq.Uniq([]string{"a", "a", "b", "b", "c", "a", "b", "c"}))
}
