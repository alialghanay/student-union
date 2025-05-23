// feed actions
import { createAsyncThunk } from "@reduxjs/toolkit";
import useAxios from "@/hooks/use-axios-auth";
import { ApiResponse } from "feed";
const url = process.env.API_URL;

export const getFeed = createAsyncThunk("feed/getFeed", async () => {
  const axios = useAxios();
  console.log(url);
  const response = await axios.get<ApiResponse>(`${url}/feeds/?populate=*`);
  console.log(response.data);
  return response.data;
});
