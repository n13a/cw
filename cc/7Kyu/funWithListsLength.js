/* Fun with lists: length
https://www.codewars.com/kata/581e476d5f59408553000a4b/train/javascript



Implement the method length, which accepts a linked list (head), and returns the length of the list.

For example: Given the list: 1 -> 2 -> 3 -> 4, length should return 4.

The linked list is defined as follows:

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}

Note: the list may be null and can hold any type of value. */


function length(head) {
  let curr = head
  let length = 0
  while(curr){
    curr = curr.next
    length++
  }
  return length
}
