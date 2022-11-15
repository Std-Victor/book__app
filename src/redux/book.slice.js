import { createSlice } from "@reduxjs/toolkit";
import { fetchBookData } from "./book.api.call";

const initialState = {
  pending: false,
  error: false,
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  extraReducers: {
    [fetchBookData.pending]: (state) => {
      state.pending = true;
    },
    [fetchBookData.fulfilled]: (state, action) => {
      state.pending = false;
      state.bookList = action.payload;
    },
    [fetchBookData.rejected]: (state) => {
      state.error = true;
      state.pending = false;
    },
  },
});

export default bookSlice.reducer;