const fs = require('fs')


const fileContents = (err, files) => {
	if (err != null) {
		console.error(err)
	} else {
		console.log(files)
	}
}


fs.readdir(".", fileContents)

console.log("LAST LINE OF PROGRAM.")
