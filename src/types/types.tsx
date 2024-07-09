export type props = {
  birth_year: string;
  eye_color: string;
  films?: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld?: string;
  mass: string;
  name: string;
  skin_color: string;
};

export type state = {
  searchQuerry: string;
  result: props[];
  loading: boolean;
};
