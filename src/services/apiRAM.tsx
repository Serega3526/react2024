import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Pages } from '../components/enums/enums';
import { person } from '../types/types';
import { AllPersons } from '../types/types';

export const RAMApi = createApi({
  reducerPath: 'RAMApi',
  baseQuery: fetchBaseQuery({ baseUrl: Pages.BASE_PATH }),
  endpoints: (builder) => ({
    getAllPersons: builder.query<AllPersons, { searchQuerry: string; page: number }>({
      query: ({ searchQuerry, page }) => `?${Pages.SEARCH_PATH}=${searchQuerry}&${Pages.ATTR_PATH}=${page}`,
    }),
    getPerson: builder.query<person, number>({
      query: (id) => `${Pages.BASE_PATH}${id}`,
    }),
  }),
});
