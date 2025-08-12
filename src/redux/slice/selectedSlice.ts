import { createSlice } from "@reduxjs/toolkit";
import { fetchSelectTrain } from "../thunks/asyncThunks.ts";
import { calculateAvailableSeats } from "../../components/ChoosingPlaces/helpers/calculateAvailableSeats.ts";

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
  currentCarriage: any,
  allSeats: number,
  topSeats: number,
  bottomSeats: number,
}

const initialState: SelectedSlice = {
  loading: false,
  error: null,
  data: null,
  routeData: null,
  currentCarriage: null,
  allSeats: 0,
  topSeats: 0,
  bottomSeats: 0,
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
      state.currentCarriage = action.payload[ 0 ]
      state.allSeats = calculateAvailableSeats( state.currentCarriage.seats, 'all' )
      state.topSeats = calculateAvailableSeats( state.currentCarriage.seats, 'top' )
      state.bottomSeats = calculateAvailableSeats( state.currentCarriage.seats, 'bottom' )
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