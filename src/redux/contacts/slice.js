import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./operations";
import { logoutThunk } from "../auth/operations";

const initialState = {
  items: [],
  loading: false,
  error: null,
  filters: {
    name: "",
    number: "",
  },
};

const slice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload.id);
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(logoutThunk.fulfilled, (state) => {
        state.items = [];
        state.error = false;
        state.loading = false;
      });
  },
});

export const contactsReducer = slice.reducer;
