import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from "./contactsOps";

const initialState = {
  items: [],
  loading: false,
  error: null,
  filters: {
    name: "",
  },
};

const slice = createSlice({
  name: "contacts",
  initialState,
  // reducers: {
  //   addContact: (state, action) => {
  //     state.items.push(action.payload);
  //   },
  //   deleteContact: (state, action) => {
  //     state.items = state.items.filter((item) => item.id !== action.payload);
  //   },

  //   setLoading: (state, action) => {
  //     state.isLoading = action.payload;
  //   },
  //   setError: (state, action) => {
  //     state.isError = action.payload;
  //   },
  // },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts = action.payload;
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(fetchContacts.pending, (state, action) => {
        state.loading = true;
        state.error = false;
      });
  },
});

export const contactsReducer = slice.reducer;

export const { addContact, deleteContact, setLoading, setError } =
  slice.actions;

export const selectContacts = (state) => state.contacts.items;
export const selectIsLoading = (state) => state.contacts.loading;
export const selectIsError = (state) => state.contacts.error;
