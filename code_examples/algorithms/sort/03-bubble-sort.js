/**
 * Bubble Sort
 * Time: O(n^2), Space: O(1)
 */
function bubbleSort(arr) {
  const a = [...arr];

  for (let i = 0; i < a.length - 1; i += 1) {
    let swapped = false;
    for (let j = 0; j < a.length - 1 - i; j += 1) {
      if (a[j] > a[j + 1]) {
        const tmp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = tmp;
        swapped = true;
      }
    }
    if (!swapped) break; // optimization if already sorted
  }

  return a;
}

console.log(bubbleSort([5, 1, 4, 2, 8])); // [1, 2, 4, 5, 8]
