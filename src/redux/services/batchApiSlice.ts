import { apiSlice } from "./apiSlice";

const batchApiConfig = apiSlice.enhanceEndpoints({ addTagTypes: ["Batchs"] });

const batchApi = batchApiConfig.injectEndpoints({
  endpoints: (builder) => ({
    getAllData: builder.query({
      query: ({ farmId }) => `/farmer/${farmId}/batch`,
      providesTags: ["Batchs"],
    }),
    createBatch: builder.mutation({
      query: ({ formdata, farmId }) => ({
        url: `/farmer/${farmId}/batch`,
        method: `POST`,
        body: formdata,
      }),
      invalidatesTags: ["Batchs"],
    }),
    editBatch: builder.mutation({
      query: ({ formdata, farmId, batchId }) => ({
        url: `/farmer/${farmId}/batch/${batchId}`,
        method: `PATCH`,
        body: formdata,
      }),
      invalidatesTags: ["Batchs"],
    }),
    deleteBatch: builder.mutation({
      query: ({ farmId, batchId }) => ({
        url: `/farmer/${farmId}/batch/${batchId}`,
        method: `DELETE`,
      }),
      invalidatesTags: ["Batchs"],
    }),
    deleteAllBatch: builder.mutation({
      query: ({ formdata }) => ({
        url: `/farmer/delete-all`,
        method: `POST`,
        body: formdata,
      }),
      invalidatesTags: ["Batchs"],
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetAllDataQuery,
  useCreateBatchMutation,
  useEditBatchMutation,
  useDeleteBatchMutation,
  useDeleteAllBatchMutation,
} = batchApi;
