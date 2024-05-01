import { apiSlice } from "./apiSlice";

const userApiConfig = apiSlice.enhanceEndpoints({ addTagTypes: ["User"] });

const userApi = userApiConfig.injectEndpoints({
  endpoints: (builder) => ({
    getCurrentUser: builder.query({
      query: () => `/user`,
      providesTags: ["User"],
      keepUnusedDataFor: 5,
    }),
    editProfile: builder.mutation({
      query: ({ formdata }) => ({
        url: `/update-profile`,
        method: `POST`,
        body: formdata,
      }),
      invalidatesTags: ["User"],
    }),
  }),
  overrideExisting: true,
});

export const { useGetCurrentUserQuery, useEditProfileMutation } = userApi;
