import { createSlice } from "@reduxjs/toolkit";
import { fetchSelectTrain } from "../thunks/asyncThunks.ts";

type Data = Array<{
  _id: string;
  name: string;
  class_type: 'first';
  have_wifi: boolean;
  have_air_conditioning: boolean;
  price: number;
  top_price: number;
  bottom_price: number;
  side_price: number;
  linens_price: number;
  wifi_price: number;
  avaliable_seats: number;
  is_linens_included: boolean;
  seats: Array<{
    index: number;
    available: boolean;
  }>;
}>;

interface SelectedSlice {
  loading: boolean,
  error: any,
  data: Data | null,
  routeData: any,
}

const initialState: SelectedSlice = {
  loading: false,
  error: null,
  data: null,
  routeData: null,
};

export const selectedSlice = createSlice( {
  name: "selectedTrain",
  initialState,
  reducers: {
    setData: ( state, action ) => {
      state.data = action.payload;
    },
    setRouteData: ( state, action ) => {
      state.routeData = action.payload;
    }
  },
  extraReducers( builder ) {
    builder.addCase( fetchSelectTrain.pending, ( state ) => {
      state.loading = true;
      state.error = null;
    } ).addCase( fetchSelectTrain.fulfilled, ( state, action ) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    } ).addCase( fetchSelectTrain.rejected, ( state, action ) => {
      state.error = action.payload;
      state.loading = false;
    } )
  }
} );

export const {
  setData, setRouteData
} = selectedSlice.actions;

export default selectedSlice;