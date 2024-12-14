import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../api/api";

const todos = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    isLoading: false
  },

  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
    });

    builder.addCase(getProducts.rejected, (state) => {
      state.isLoading = false;
    });
  }
});

export default todos.reducer;
