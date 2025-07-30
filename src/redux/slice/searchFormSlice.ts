import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchSuitableCity } from "../thunks/asyncThunks";

interface AddOrChangeFormParameterPayload {
  name: string;
  value: string;
}

const savedData = localStorage.getItem("searchForm");

const emptyState = {
  loading: false,
  error: null,
  whereFromCity: "", //Название города туда //string
  whereToCity: "", //Название города обратно //string
  dateStartFrom: "", //Дата отбытия туда (в формате YYYY-MM-DD; например 2030-03-01) //string
  dateArrivalTo: "", //Дата отбытия обратно (в формате YYYY-MM-DD; например 2030-03-01) //string
};

const initialState = savedData ? JSON.parse(savedData) : emptyState;

const searchFormSlice = createSlice({
  name: "searchForm",
  initialState,
  reducers: {
    addOrChangeFormParameter(
      state,
      action: PayloadAction<AddOrChangeFormParameterPayload>
    ) {
      const { name, value } = action.payload;
      state[name] = value;
    },
    swapCity(state) {
      [state.whereFromCity, state.whereToCity] = [
        state.whereToCity,
        state.whereFromCity,
      ];
    },
    removeFormParams() {
      return emptyState;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchSuitableCity.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSuitableCity.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(fetchSuitableCity.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { addOrChangeFormParameter, swapCity, removeFormParams } =
  searchFormSlice.actions;

export default searchFormSlice;
