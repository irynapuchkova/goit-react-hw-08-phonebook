import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "",
};

const filterSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addFilter: ({ filter }, { payload }) => {
      return { filter: payload };
    },
  },
});

export default filterSlice.reducer;
export const { addFilter } = filterSlice.actions;
