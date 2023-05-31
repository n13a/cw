/* Ordering the words!
https://www.codewars.com/kata/55d7e5aa7b619a86ed000070/train/javascript


Also, you should validate that the given string is not empty or null. If so, the method should return:

"Invalid String!"

Notes
• the given string can be lowercase and uppercase.
• the string could include spaces or other special characters like '# ! or ,'. Sort them based on their ASCII codes
Examples

"hello world" => " dehllloorw"
"bobby"       => "bbboy"
""            => "Invalid String!"
"!Hi You!"    => " !!HYiou"
*/


const orderWord = s =>
  !s ? 'Invalid String!' : s.split('').sort((a, b) => a.charCodeAt() - b.charCodeAt())
    .join('')
