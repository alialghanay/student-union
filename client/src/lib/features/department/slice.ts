// department slice
import { createSlice } from "@reduxjs/toolkit";
import { DepartmentState } from "general";
import { getDepartments } from "./actions";
const initialState: DepartmentState = {
  loading: false,
  error: undefined,
  departments: null,
};

const departmentSlice = createSlice({
  name: "department",
  initialState,
  reducers: {},
  extraReducers: (bulider) => {
    bulider.addCase(getDepartments.pending, (state) => {
      state.loading = true;
    });
    bulider.addCase(getDepartments.fulfilled, (state, action) => {
      state.loading = false;
      state.departments = action.payload;
    });
    bulider.addCase(getDepartments.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default departmentSlice.reducer;
