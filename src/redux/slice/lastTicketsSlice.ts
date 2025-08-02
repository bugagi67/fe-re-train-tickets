import { createSlice } from "@reduxjs/toolkit";
import { fetchLastTickets} from "../thunks/asyncThunks.ts";

interface LastTicketsState {
  loading: boolean;
  error: null | any;
  lastTickets: [];
}

const initialState: LastTicketsState = {
  loading: false,
  error: null,
  lastTickets: [],
};

export const lastTickets = createSlice({
  name: "lastTickets",
  initialState,
  reducers: {
    setLastTickets: (state, action) => {
      state.lastTickets = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchLastTickets.pending, (state) => {
      state.loading = true;
      state.error = null;
    }).addCase(fetchLastTickets.fulfilled, (state, action) => {
      state.lastTickets = action.payload;
      state.loading = false;
      state.error = null;
    }).addCase(fetchLastTickets.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
  }
});

export const { setLastTickets } = lastTickets.actions;

export default lastTickets;
