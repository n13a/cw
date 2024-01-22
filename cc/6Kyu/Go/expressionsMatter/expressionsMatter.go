package expressionsMatter

func ExpressionMatter(a int, b int, c int) int {
	v := a + b + c
	w := a * (b + c)
	x := a * b * c
	y := a + b*c
	z := (a + b) * c
	sl := [5]int{v, w, x, y, z}

	var m int = sl[0]
	for _, v := range sl {
		if v > m {
			m = v
		}
	}
	return m
}
