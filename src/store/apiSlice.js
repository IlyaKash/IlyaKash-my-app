// store/apiSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Создание экземпляра API
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api' }),
  endpoints: (builder) => ({
    getFeedbacks: builder.query({
      query: () => 'feedbacks',
    }),
    addFeedback: builder.mutation({
      query: (feedback) => ({
        url: 'feedbacks',
        method: 'POST',
        body: feedback,
      }),
    }),
    deleteFeedback: builder.mutation({
      query: (email) => ({
        url: `feedbacks/${email}`,
        method: 'DELETE',
      }),
    }),
  }),
});

// Экспорт экшенов и селекторов
export const { useGetFeedbacksQuery, useAddFeedbackMutation, useDeleteFeedbackMutation } = apiSlice;
export const { reducer: apiReducer } = apiSlice;
