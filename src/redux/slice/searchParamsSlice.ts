import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";

const savedData = localStorage.getItem("search");

const emptyState = {
  from_city_id: "", //Идентификатор города, откуда планируется путешествие //string
  to_city_id: "", //Идентификатор города, куда планируется путешествие //string
  date_start: "", //Дата отбытия туда (в формате YYYY-MM-DD; например 2030-03-01) //string
  date_end: "", //Дата отбытия обратно (в формате YYYY-MM-DD; например 2030-03-01) //string
};

const initialState = savedData ? JSON.parse(savedData) : emptyState;

const searchParamsSlice = createSlice({
  name: "searchParamsSlice",
  initialState,
  reducers: {
    addOrChangeSearchParameter(state, action) {
      const { name, value } = action.payload;
      state[name] = value;
    },
    swapCityId(state) {
      [state.from_city_id, state.to_city_id] = [
        state.to_city_id,
        state.from_city_id,
      ];
    },
    removeSearchParams() {
      return emptyState;
    },
  },
});

export const { addOrChangeSearchParameter, swapCityId, removeSearchParams } =
  searchParamsSlice.actions;

export const selectDepartureCity = (state: RootState) =>
  state.search.from_city_id;
export const selectArrivalCity = (state: RootState) => state.search.to_city_id;
export const selecDepartureDate = (state: RootState) => state.search.date_start;
export const selectArrivalDate = (state: RootState) => state.search.date_end;

export default searchParamsSlice;
