import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const emptyState = {
  date_start: null,
  date_start_arrival: null,
  have_second_class: null,
  have_third_class: null,
  have_fourth_class: null,
  have_first_class: null,
  have_wifi: null,
  have_express: null,
  price_from: 0,
  price_to: 7000,
  start_departure_hour_from: 0,
  start_departure_hour_to: 24,
  start_arrival_hour_from: 0,
  start_arrival_hour_to: 24,
  end_departure_hour_from: 0,
  end_departure_hour_to: 24,
  end_arrival_hour_from: 0,
  end_arrival_hour_to: 24,
};

// Убрали использование localStorage для начального состояния
const initialState = emptyState;

const filterAsideSlice = createSlice({
  name: "filterAside",
  initialState,
  reducers: {
    addOrChangeFilterAsideParameter(
      state,
      action: PayloadAction<{ name: string; value: any }>
    ) {
      const { name, value } = action.payload;
      // @ts-ignore
      state[name] = value;
    },
    removeSearchParams: () => emptyState,
  },
});

export const { addOrChangeFilterAsideParameter, removeSearchParams } = filterAsideSlice.actions;

export default filterAsideSlice;