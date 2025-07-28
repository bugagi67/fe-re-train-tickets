import { configureStore } from "@reduxjs/toolkit";
import searchParamsSlice from "../slice/searchParamsSlice";

export const store = configureStore({
  reducer: {
    search: searchParamsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;