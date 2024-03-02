package convertStringToCamelCase

import (
	"strings"
)

func ToCamelCase(s string) string {
	a := strings.FieldsFunc(s, func(r rune) bool {
		return r == '-' || r == '_'
	})
	builder := strings.Builder{}

	for i, v := range a {
		if i == 0 {
			builder.WriteString(v)
			continue
		}
		builder.WriteString(strings.Title(v)) // Note that strings.Title is deprecated. Instead use golang.org/x/text/cases
	}
	return builder.String()
}
