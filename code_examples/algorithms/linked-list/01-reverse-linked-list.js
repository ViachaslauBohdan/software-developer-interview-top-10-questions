/**
 * Reverse Singly Linked List (iterative)
 * Time: O(n), Space: O(1)
 */
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

function reverseList(head) {
  let prev = null;
  let curr = head;

  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}

const head = new ListNode(1, new ListNode(2, new ListNode(3)));
const rev = reverseList(head);
console.log(rev.val, rev.next.val, rev.next.next.val); // 3 2 1
