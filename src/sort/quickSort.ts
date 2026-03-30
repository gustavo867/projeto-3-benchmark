export function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  const pivotIndex = Math.floor(Math.random() * arr.length);
  const pivot = arr[pivotIndex];

  const left: number[] = [];
  const right: number[] = [];
  const equal: number[] = [];

  for (const value of arr) {
    if (value < pivot) left.push(value);
    else if (value > pivot) right.push(value);
    else equal.push(value);
  }

  return [...quickSort(left), ...equal, ...quickSort(right)];
}
