import { combineReducers, configureStore } from "@reduxjs/toolkit";
import feedSlice from "@/lib/features/feed/slice";
import departmentSlice from "@/lib/features/department/slice";
import serviceSlice from "@/lib/features/service/slice";
import questionsSlice from "@/lib/features/question/slice";
("@/lib/features/question/slice");
const isDevelopment = process.env.NODE_ENV === "development";

const rootReducer = combineReducers({
  // Add your reducers here
  feed: feedSlice,
  department: departmentSlice,
  service: serviceSlice,
  question: questionsSlice,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: isDevelopment ? true : false,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
