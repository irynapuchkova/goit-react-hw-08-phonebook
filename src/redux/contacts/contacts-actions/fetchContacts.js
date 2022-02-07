import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://61fef84d5e1c4100174f6dae.mockapi.io/contacts",
  }),
  tagTypes: ["CONTACT"],
  endpoints: (build) => ({
    getContacts: build.query({
      query: () => "/contacts",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ contactId }) => ({
                type: "CONTACT",
                contactId,
              })),
              { type: "CONTACT", id: "LIST" },
            ]
          : [{ type: "CONTACT", id: "LIST" }],
      // an error occurred, but we still want to refetch this query when
      // `{ type: 'Posts', id: 'LIST' }` is invalidated
    }),
    addContact: build.mutation({
      query: (contact) => ({
        url: `/contacts`,
        method: "POST",
        body: { name: contact.name, phone: contact.number },
      }),
      invalidatesTags: ["CONTACT"],
      // не перерендеруються контакти на сторінці, хоча на беку - так
      //   (result, error, contact) => [
      //   { type: "CONTACT", contact, error: error.message, data: result }],
    }),
    deleteContact: build.mutation({
      query: (contactId) => ({
        url: `/contacts/${contactId}`,
        method: "DELETE",
      }),
      invalidatesTags: (contactId) => [{ type: "CONTACT", contactId }],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;
