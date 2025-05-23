// slice for question feature

import { createSlice } from "@reduxjs/toolkit";
import { ApiResponse } from "questions";
import { gethQuestions } from "./actions";
import { FAQState } from "general";

const initialState: FAQState = {
  loading: false,
  error: undefined,
  faqs: null,
};

const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(gethQuestions.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(gethQuestions.fulfilled, (state, action) => {
      state.loading = false;
      state.faqs = action.payload;
    });
    builder.addCase(gethQuestions.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default questionSlice.reducer;
