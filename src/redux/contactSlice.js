import { createSlice } from '@reduxjs/toolkit';

const contactInitialState = {
  items: [],
  filter: '',
};

export const contactsSlice = createSlice({
  name: 'contact',
  initialState: contactInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
    },
    prepare(contact) {
      return { payload: contact };
    },
    removeContact(state, action) {
      const indexToDelete = action.payload;
      state.items.splice(indexToDelete, 1);
    },
    addFilter(state, action) {
      return (state.filter = action.payload);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, removeContact, addFilter } = contactsSlice.actions;
