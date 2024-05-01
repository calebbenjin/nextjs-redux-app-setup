import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import fetchToken from "@/lib/auth";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}`,
    prepareHeaders: async (headers) => {
      const token = await fetchToken(); // Fetch the token using the utility function
      if (token) {
        headers.set("Authorization", `Bearer ${token?.data?.token}`);
        headers.set("Content-Type", `application/json`);
        headers.set("Accept", `application/json`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({}),
});
