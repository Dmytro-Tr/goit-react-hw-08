import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "../contacts/selectors";

export const selectNameFilter = (state) => state.filters.name;
export const selectNumberFilter = (state) => state.filters.number;

export const selectFilteredContacts = createSelector([selectContacts, selectNameFilter], (contacts, filters) => {
  if (!contacts) return contacts;
  return contacts.filter(
    (contact) => contact.name.toLowerCase().includes(filters.toLowerCase()) || contact.number.includes(filters)
  );
});
