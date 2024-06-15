/*
uniq (UNIX style)
Implement a function which behaves like the uniq command in UNIX.

It takes as input a sequence and returns a sequence in which all duplicate
elements following each other have been reduced to one instance.

Example:

["a", "a", "b", "b", "c", "a", "b", "c"]  =>  ["a", "b", "c", "a", "b", "c"]
*/

package uniq

func Uniq(a []string) []string {
	var res []string = []string{}
	var cur string
	for _, v := range a {
		if cur == "" || cur != v {
			res = append(res, v)
		}
		cur = v
	}
	return res
}
