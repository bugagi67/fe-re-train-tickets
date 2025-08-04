import type {PayloadAction} from "@reduxjs/toolkit";
import {createSlice} from "@reduxjs/toolkit";
import {fetchRoutes} from "../thunks/asyncThunks.ts";

interface AddOrChangeParamsParameterPayload {
  name: string;
  value: any;
}

const savedData = localStorage.getItem("searchParams");

const emptyState = {
  loading: false,
  error: null,
  routesList: [],

  // Для пагинации
  totalCount: 0,
  totalPages: 0,
  currentPage: 1,

  // Обязательные поля, которые должны быть заполнены пользователем
  from_city_id: "", //Идентификатор города, откуда планируется путешествие //string
  to_city_id: "", //Идентификатор города, куда планируется путешествие //string

  // Необязательные даты
  date_start: "", //Дата отбытия туда (в формате YYYY-MM-DD; например 2030-03-01) //string
  date_end: "", //Дата отбытия обратно (в формате YYYY-MM-DD; например 2030-03-01) //string
  date_start_arrival: "",
  date_end_arrival: "",

  // Необязательные булевы значения (используем null, если не выбрано)
  have_first_class: null,
  have_second_class: null,
  have_third_class: null,
  have_fourth_class: null,
  have_wifi: null,
  have_express: null,

  // Необязательные числа, которые имеют дефолтное "отсутствующее" значение
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

  // Обязательные или всегда присутствующие параметры пагинации/сортировки
  limit: 5,
  offset: 0,
  sort: "date", // Дефолтное значение сортировки
};

const initialState = savedData ? JSON.parse(savedData) : emptyState;

const searchParamsSlice = createSlice({
  name: "searchParams",
  initialState,
  reducers: {
    addOrChangeSearchParameter(
      state,
      action: PayloadAction<AddOrChangeParamsParameterPayload>
    ) {
      const {name, value} = action.payload;
      state[name] = value;
    },
    swapCityId(state) {
      [state.from_city_id, state.to_city_id] = [
        state.to_city_id,
        state.from_city_id,
      ];
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
      state.offset =
        state.currentPage === 1 ? 0 : state.limit * (state.currentPage - 1);
    },
    updateSearchParamsIsChanged: (state, action) => {
      const filters = action.payload;
      for (const key in filters) {
        if (Object.prototype.hasOwnProperty.call(filters, key)) {
          const oldValue = state[key];
          const newValue = filters[key];

          if (newValue !== oldValue) {
            state[key] = newValue;
          }
        }
      }
    },
    removeSearchParams() {
      return emptyState;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchRoutes.pending, (state) => {
      state.loading = true;
      state.error = null;
    }).addCase(fetchRoutes.fulfilled, (state, action) => {
      state.routesList = action.payload;
      state.totalCount = action.payload.total_count;
      state.totalPages = Math.ceil(state.totalCount / state.limit);
      state.loading = false;
      state.error = null;
    }).addCase(fetchRoutes.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
  }
});

export const {
  addOrChangeSearchParameter,
  swapCityId,
  setCurrentPage,
  updateSearchParamsIsChanged,
  removeSearchParams
} =
  searchParamsSlice.actions;

export default searchParamsSlice;
