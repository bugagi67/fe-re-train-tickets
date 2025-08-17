import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { fetchSelectTrain } from "../thunks/asyncThunks.ts";
import { calculateAvailableSeats } from "../../components/ChoosingPlaces/helpers/calculateAvailableSeats.ts";

export type Data = Array<IData>;

export type IData = {
  coach: ICoach;
  seats: ISeats;
};

export type ICoach = {
  _id: string;
  name: string;
  class_type: "first" | "second" | "third" | "fourth";
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
};

export type ISeats = Array<{
  index: number;
  available: boolean | "active";
}>;

export type RouteData = {
  total_count: number;
  items: [
    {
      have_first_class: boolean;
      have_second_class: boolean;
      have_third_class: boolean;
      have_fourth_class: boolean;
      have_wifi: boolean;
      have_air_conditioning: boolean;
      is_express: boolean;
      min_price: number;
      arrival: IRoute;
      departure: IRoute;
      total_avaliable_seats: number;
    }
  ];
};

export type IRoute = {
  _id: string;
  have_first_class: boolean;
  have_second_class: boolean;
  have_third_class: boolean;
  have_fourth_class: boolean;
  have_wifi: boolean;
  have_air_conditioning: boolean;
  train: {
    _id: string;
    name: string;
  };
  from: {
    railway_station_name: string;
    city: {
      _id: string;
      name: string;
    };
    datetime: number;
  };
  to: {
    railway_station_name: string;
    city: {
      _id: string;
      name: string;
    };
    datetime: number;
  };
  min_price: number;
  duration: number;
  price_info: {
    first: {
      price: number;
      top_price: number;
      bottom_price: number;
      side_price: number;
      linens_price: number;
      wifi_price: number;
    };
    second: {
      price: number;
      top_price: number;
      bottom_price: number;
      side_price: number;
      linens_price: number;
      wifi_price: number;
    };
    third: {
      price: number;
      top_price: number;
      bottom_price: number;
      side_price: number;
      linens_price: number;
      wifi_price: number;
    };
    fourth: {
      price: number;
      top_price: number;
      bottom_price: number;
      side_price: number;
      linens_price: number;
      wifi_price: number;
    };
  };
  seats_info: {
    first: number;
    second: number;
    third: number;
    fourth: number;
  };
};

export type SelectedSlice = {
  loading: boolean;
  error: unknown | null;
  data: Data | null;
  routeData: RouteData | null;
  currentCarriage: IData | null;
  allSeats: number | null;
  topSeats: number | null;
  bottomSeats: number | null;
  departure: number[];
  arrival: number[];
  totalCoast: ITotalCoast | null;
};

export type ITotalCoast = {
  topSeatsCountDeparture: number;
  bottomSeatsCountDeparture: number;
  topSeatsCountSeatsAvailable: number;
  bottomCountSeatsAvailable: number;
};

const initialState: SelectedSlice = {
  loading: false,
  error: null,
  data: null,
  routeData: null,
  currentCarriage: null,
  allSeats: 0,
  topSeats: 0,
  bottomSeats: 0,
  departure: [],
  arrival: [],
  totalCoast: null,
};

export const selectedSlice = createSlice({
  name: "selectedTrain",
  initialState,
  reducers: {
    setRouteData: (state, action: PayloadAction<RouteData>) => {
      state.routeData = action.payload;
    },
    setDeparture: (state, action: PayloadAction<number>) => {
      if (!state.currentCarriage) return;
      const seatIndex = action.payload;

      // создаём новый массив мест — не мутируем
      const updatedSeats = state.currentCarriage.seats.map((seat) => {
        if (seat.index !== seatIndex) return seat;
        return seat.available === "active"
          ? { ...seat, available: true }
          : { ...seat, available: "active" as const };
      });

      // заменяем currentCarriage на новый объект (новая ссылка)
      state.currentCarriage = {
        ...state.currentCarriage,
        seats: updatedSeats,
      };

      // обновляем массив выбранных departure
      if (state.departure.includes(seatIndex)) {
        state.departure = state.departure.filter((n) => n !== seatIndex);
      } else {
        state.departure = [...state.departure, seatIndex];
      }

      // пересчитываем глобальные счётчики в слайсе
      state.allSeats = calculateAvailableSeats(updatedSeats, "all");
      state.topSeats = calculateAvailableSeats(updatedSeats, "top");
      state.bottomSeats = calculateAvailableSeats(updatedSeats, "bottom");
    },
    setTotalCoast: (state, action: PayloadAction<ITotalCoast>) => {
      state.totalCoast = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchSelectTrain.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchSelectTrain.fulfilled,
        (state, action: PayloadAction<Data>) => {
          state.data = action.payload;
          state.currentCarriage = action.payload[0];
          if (state.currentCarriage !== null) {
            state.allSeats = calculateAvailableSeats(
              state.currentCarriage.seats,
              "all"
            );
            state.topSeats = calculateAvailableSeats(
              state.currentCarriage.seats,
              "top"
            );
            state.bottomSeats = calculateAvailableSeats(
              state.currentCarriage.seats,
              "bottom"
            );
          }
          state.loading = false;
          state.error = null;
        }
      )
      .addCase(fetchSelectTrain.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { setRouteData, setDeparture, setTotalCoast } =
  selectedSlice.actions;

export default selectedSlice;
