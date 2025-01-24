// У файлі filtersSlice.js оголоси слайс фільтра, використовуючи функцію createSlice().
// Екшени слайса для використання в dispatch:
// changeFilter - зміна значення фільтра в властивості name
// З файла слайса експортуй редюсер, а також його екшени.

import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = slice.actions;

export const selectNameFilter = (state) => state.filters.name;

export const filtersReducer = slice.reducer;
