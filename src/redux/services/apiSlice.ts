import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import fetchToken from "@/lib/auth";

export const api = createApi({
  reducerPath: "api",
  tagTypes: [
    "Batchs",
    "Beneficiaries",
    "Customer",
    "Employee",
    "Expense",
    "Farms",
    "Feeds",
    "Harvest",
    "Inventory",
    "Notifications",
    "Ponds",
    "Sub",
    "Tasks",
    "Teams",
    "User",
  ],
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
  keepUnusedDataFor: 30,
  endpoints: (builder) => ({}),
});
