import {createAsyncThunk} from "@reduxjs/toolkit";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const fetchRoutes = createAsyncThunk(
  "searchParams/fetchRoutes",
  async function (params, {rejectWithValue}) {
    try {
      const response = await fetch(BASE_URL + `/routes?${params}`);
      if (!response.ok) {
        return rejectWithValue("Ошибка при загрузке данных!");
      }
      return await response.json();
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
)
