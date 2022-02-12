import { emptySplitApi } from "../baseFetchApi";

export const userApi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    registerUser: build.mutation({
      query: (user) => ({
        url: `/users/signup`,
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["USER"],
    }),

    logInUser: build.mutation({
      query: (user) => ({
        url: `/users/login`,
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["USER"],
    }),

    logOutUser: build.mutation({
      query: () => ({
        url: `/users/logout`,
        method: "POST",
        headers: {
          authorization: "",
        },
      }),
      invalidatesTags: ["USER"],
    }),

    getCurrentUser: build.mutation({
      query: () => ({
        url: `/users/current`,
      }),
      // async onQueryStarted(
      //   headers,
      //   { getState, queryFulfilled, rejectWithValue }
      // ) {
      //   const state = getState();
      //   const persistedToken = state.auth.token;

      //   if (!persistedToken) {
      //     return rejectWithValue();
      //   }
      //   headers = { authorization: `Bearer ${persistedToken}` };

      //   try {
      //     const { data } = await queryFulfilled;
      //     return data;
      //   } catch (err) {
      //     alert("Please log in");
      //   }
      // },
      invalidatesTags: ["USER"],
      // providesTags: (result) =>
      //   result
      //     ? [
      //         ...result.map(({ userId }) => ({
      //           type: "CONTACT",
      //           userId,
      //         })),
      //         { type: "USER", id: "LIST" },
      //       ]
      //     : [{ type: "USER", id: "LIST" }],
    }),

    overrideExisting: false,
  }),
});

export const {
  useRegisterUserMutation,
  useLogInUserMutation,
  useLogOutUserMutation,
  useGetCurrentUserMutation,
} = userApi;
