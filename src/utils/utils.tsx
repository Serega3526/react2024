import { Pages } from '../components/enums/enums';

export default function countPages(totalCount: number): number[] {
  const result = [];
  for (let i = 1; i < totalCount / 10; i++) {
    result.push(i);
  }
  return result;
}

export async function getSingleCharacter(id: number) {
  const url = Pages.BASE_PATH + `${id}`;
  console.log('url', url);
  return await (await fetch(url)).json();
}
