// actions for department
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiResponse } from "department";
import UseAxiosAuth from "@/hooks/use-axios-auth";

export const getDepartments = createAsyncThunk(
  "department/getDepartments",
  async () => {
    const axiosAuth = UseAxiosAuth();
    const response = await axiosAuth.get<ApiResponse>(
      "/departments/?populate=*"
    );
    return response.data;
  }
);
