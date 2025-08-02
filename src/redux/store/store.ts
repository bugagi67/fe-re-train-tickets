import { configureStore } from "@reduxjs/toolkit";
import searchFormSlice from "../slice/searchFormSlice";
import searchParamsSlice from "../slice/searchParamsSlice";
import filterAsideSlice from "../slice/filteredAsideSlice";
import lastTickets from "../slice/lastTicketsSlice";
import selectedSlice from "../slice/selectedSlice";

export const store = configureStore({
  reducer: {
    searchForm: searchFormSlice.reducer,
    searchParams: searchParamsSlice.reducer,
    filterAside: filterAsideSlice.reducer,
    lastTickets: lastTickets.reducer,
    selectedSlice: selectedSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;