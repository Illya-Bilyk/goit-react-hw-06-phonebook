import { createSlice } from '@reduxjs/toolkit';

const contactInitialState = [];

export const contactsSlice = createSlice({
  name: 'contact',
  initialState: contactInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
    },
    prepare(contact) {
      return { payload: contact };
    },
    removeContact(state, action) {
      const indexToDelete = action.payload;
      state.splice(indexToDelete, 1);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, removeContact } = contactsSlice.actions;
