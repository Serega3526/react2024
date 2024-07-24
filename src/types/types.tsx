export interface props {
  name: string;
  image: string;
  click: (e: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => void;
}

export type state = {
  searchQuerry: string;
  result: props[];
  loading: boolean;
};

export type person = {
  gender: string;
  image: string;
  name: string;
  species: string;
  status: string;
  type: string;
};
