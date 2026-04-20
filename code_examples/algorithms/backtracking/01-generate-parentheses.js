/**
 * Generate Parentheses
 * Backtracking
 * Time: O(Catalan(n)), Space: O(n) recursion
 */
function generateParenthesis(n) {
  const out = [];

  function backtrack(curr, open, close) {
    if (curr.length === 2 * n) {
      out.push(curr);
      return;
    }
    if (open < n) backtrack(curr + "(", open + 1, close);
    if (close < open) backtrack(curr + ")", open, close + 1);
  }

  backtrack("", 0, 0);
  return out;
}

console.log(generateParenthesis(3)); // ["((()))","(()())","(())()","()(())","()()()"]
