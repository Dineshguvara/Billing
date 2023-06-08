import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const newSliceApi = createApi({
    reducerPath: 'newSliceApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com/",
      }),
      // query    - get endponits
      // mutation -post endpoints
      endpoints: (build) => ({
        getData: build.query({
          query: () => ({
            url: "users",
            method: "GET",
          }),
        }),
        getDataById: build.query({
          query: (id) => ({
            url: `users/${id}`,
            method: "GET",
          }),
        }),
        postData: build.mutation({
          query: (data) => ({
            url: "posts",
            method: "POST",
            body: data,
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }),
        }),
      }),
})

export const { useGetDataQuery, useGetDataByIdQuery, usePostDataMutation} = newSliceApi;