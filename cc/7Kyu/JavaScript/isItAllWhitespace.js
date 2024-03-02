/* is it all whitespace?
https://www.codewars.com/kata/567de8823fa5eee02100002a/train/javascript



Implement String#whitespace?(str) (Ruby), String.prototype.whitespace(str) (JavaScript), String::whitespace(str) (CoffeeScript), or whitespace(str) (Python), which should return true/True if given object consists exclusively of zero or more whitespace characters, false/False otherwise. */


String.prototype.whitespace = function() {
  return !/\S/.test(this)
}
