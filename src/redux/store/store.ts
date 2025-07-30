import { configureStore } from "@reduxjs/toolkit";
import searchFormSlice from "../slice/searchFormSlice";
import searchParamsSlice from "../slice/searchParamsSlice";

export const store = configureStore({
  reducer: {
    searchForm: searchFormSlice.reducer,
    searchParams: searchParamsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;