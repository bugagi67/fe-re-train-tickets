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
);

export const fetchLastTickets = createAsyncThunk(
  "lastTickets/fetchLastTickets",
  async function (_, {rejectWithValue}) {
    try {
      const response = await fetch(BASE_URL + "/routes/last");
      if (!response.ok) {
        return rejectWithValue("Ошибка при загрузке данных!");
      }
      return await response.json();
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const fetchSelectTrain = createAsyncThunk(
  "selectedSlice/fetchSelectTrain",
  async function (params: { id: string; queryString?: string }, {rejectWithValue}) {
    try {
      const { id, queryString } = params;
      const response = await fetch(BASE_URL + `/routes/${id}/seats${queryString ? `?${queryString}` : ""}`);
      
      if (!response.ok) {
        return rejectWithValue("Ошибка при загрузке данных!");
      }
      
      return await response.json();
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);