import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// //////////let it be for futher practce /////////
// import logger from "redux-logger";
// import { setupListeners } from "@reduxjs/toolkit/query";

import { contactsApi } from "./contacts/contacts-actions/fetchContacts";
import filterSlice from "./contacts/contacts-reducer";

const middleware = [...getDefaultMiddleware(), contactsApi.middleware];

const store = configureStore({
  reducer: {
    contacts: filterSlice,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

export default store;

// setupListeners(store.dispatch);
