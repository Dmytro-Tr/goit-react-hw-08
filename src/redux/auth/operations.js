import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global";

export const registerThunk = createAsyncThunk(
  "/users/signup",
  async (credentials, thunkApi) => {
    try {
      const { data } = await axios.post("/users/signup", credentials);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  "/users/login",
  async (credentials, thunkApi) => {
    try {
      const { data } = await axios.post("/users/login", credentials);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  "/users/logout",
  async (_, thunkApi) => {
    const token = thunkApi.getState().auth.token;
    try {
      const { data } = await axios.post(
        "/users/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// saliwan321@mail.com
