const memo: Map<number, number> = new Map();

export default function fibonacci(n: number): number {
  const memoValue = memo.get(n);

  if (memoValue !== undefined) {
    return memoValue;
  }

  if (n < 0) {
    return -1;
  } else if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }

  const result: number = fibonacci(n - 1) + fibonacci(n - 2);
  memo.set(n, result);
  return result;
}
