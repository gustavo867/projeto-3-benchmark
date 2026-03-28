export function bestCase(n: number) {
  return Array.from({ length: n }, (_, i) => i);
}
export function worstCase(n: number) {
  return Array.from({ length: n }, (_, i) => n - i);
}


