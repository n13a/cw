package main

import "fmt"
import "codewars/cc/int32ToIPv4"
import "codewars/cc/ticTacToeChecker"

func main() {
	fmt.Println("CodeWars")
	fmt.Println(int32ToIPv4.Int32ToIp(2149583361)) // "128.32.10.1"
	fmt.Println(ticTacToeChecker.IsSolved([3][3]int{
		{1, 0, 1},
		{0, 1, 2},
		{2, 1, 1},
	}))
}
