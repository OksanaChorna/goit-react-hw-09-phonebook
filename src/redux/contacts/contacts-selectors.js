/* eslint-disable import/no-anonymous-default-export */
import { createSelector } from '@reduxjs/toolkit';

const getFilter = state => state.contacts.filter;
const getAllContacts = state => state.contacts.items;

const getFilteredContact = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    if (filter) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter),
      );
    }
    return contacts;
  },
);

export default { getFilter, getFilteredContact, getAllContacts };
