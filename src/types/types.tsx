export type props = {
  name: string;
  image: string;
};

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
