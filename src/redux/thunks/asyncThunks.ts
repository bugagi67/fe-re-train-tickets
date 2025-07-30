import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const fetchSuitableCity = createAsyncThunk(
  "searchForm/fetchSuitableCity",
  async function (params, { rejectWithValue }) {
    try {
      const response = await fetch(BASE_URL + `/routes/cities?name=${params}`);

      if (!response.ok) {
        return rejectWithValue("Ошибка при загрузке данных!");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);
