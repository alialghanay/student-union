// actions for question feature
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiResponse } from "questions";
import UseAxiosAuth from "@/hooks/use-axios-auth";

export const gethQuestions = createAsyncThunk(
  "question/gethQuestions",
  async () => {
    const axios = UseAxiosAuth();
    const response = await axios.get<ApiResponse>("/questions");
    return response.data;
  }
);
