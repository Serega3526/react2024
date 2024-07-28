

export default function countPages(totalCount: number): number[] {
  const result = [];
  for (let i = 1; i < totalCount / 10; i++) {
    result.push(i);
  }
  return result;
}

