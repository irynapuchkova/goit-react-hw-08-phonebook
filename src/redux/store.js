import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { contactsApi } from "./contacts/contacts-operations";
import filterSlice from "./contacts/contacts-slice";
import { userApi } from "./auth/auth-operations";
import authSlice from "./auth/auth-slice";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  contactsApi.middleware,
  userApi.middleware,
];

export const store = configureStore({
  reducer: {
    contacts: filterSlice,
    auth: persistReducer(authPersistConfig, authSlice),
    [contactsApi.reducerPath]: contactsApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
