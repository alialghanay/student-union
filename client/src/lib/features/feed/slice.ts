// slice for feed feature
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FeedState } from "general";
import { getFeed } from "./actions";
const initialState: FeedState = {
  loading: false,
  feeds: null,
  error: undefined,
};

const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getFeed.fulfilled, (state, action) => {
        state.loading = false;
        state.feeds = action.payload;
      })
      .addCase(getFeed.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.feeds = null;
      })
      .addCase(getFeed.pending, (state) => {
        state.feeds = null;
        state.error = undefined;
        state.loading = true;
      });
  },
});

export default feedSlice.reducer;
