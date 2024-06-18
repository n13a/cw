/*
Sum of prime-indexed elements
https://www.codewars.com/kata/59f38b033640ce9fc700015b/train/go

In this Kata, you will be given an integer array and your task is to return the sum of elements occupying prime-numbered indices.

The first element of the array is at index 0.

Good luck! */

package sumOfPrimeIndexedElements

import "math"

func Solve(arr []int) int {
	sum := 0
	for i := 0; i < len(arr); i++ {
		if isPrime(i) {
			sum += arr[i]
		}
	}
	return sum
}

func isPrime(num int) bool {
	if num < 2 {
		return false
	} else if num == 2 {
		return true
	}

	for i := 2; i <= int(math.Sqrt(float64(num))); i++ {
		if num%i == 0 {
			return false
		}
	}
	return true
}
