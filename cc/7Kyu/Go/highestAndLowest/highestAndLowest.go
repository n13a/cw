/* Highest and Lowest
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
Examples

HighAndLow("1 2 3 4 5")  // return "5 1"
HighAndLow("1 2 -3 4 5") // return "5 -3"
HighAndLow("1 9 3 4 -5") // return "9 -5"

Notes

    All numbers are valid Int32, no need to validate them.
    There will always be at least one number in the input string.
    Output string must be two numbers separated by a single space, and highest number is first.

*/

package highestandlowest

import (
	"fmt"
	"strconv"
	"strings"
)

func HighAndLow(in string) string {
	nums := strings.Fields(in)
	max, _ := strconv.Atoi(nums[0])
	min, _ := strconv.Atoi(nums[0])

	for _, v := range nums {
		num, _ := strconv.Atoi(v)
		if max < num {
			max = num
		}
		if min > num {
			min = num
		}
	}

	return fmt.Sprintf("%d %d", max, min)

}
