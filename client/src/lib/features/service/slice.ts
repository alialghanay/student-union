// slice for service
import { createSlice } from "@reduxjs/toolkit";
import { ServiceState } from "general";
import { getServices } from "./actions";

const initialState: ServiceState = {
  loading: false,
  error: undefined,
  services: null,
};

const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {},
  extraReducers: (bulider) => {
    bulider.addCase(getServices.pending, (state) => {
      state.loading = true;
    });
    bulider.addCase(getServices.fulfilled, (state, action) => {
      state.loading = false;
      state.services = action.payload;
    });
    bulider.addCase(getServices.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default serviceSlice.reducer;
