/**
 * Quick Sort (simple pivot version)
 * Average: O(n log n), Worst: O(n^2), Space: O(log n) recursion stack
 */
function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i += 1) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([8, 4, 2, 7, 1, 3, 9, 5]));
