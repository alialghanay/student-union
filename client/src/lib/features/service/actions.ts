// action for service
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiResponse } from "services";
import UseAxiosAuth from "@/hooks/use-axios-auth";

export const getServices = createAsyncThunk("service/getServices", async () => {
  const axiosAuth = UseAxiosAuth();
  const response = await axiosAuth.get<ApiResponse>("/services/?populate=*");
  return response.data;
});
