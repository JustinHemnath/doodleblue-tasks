import { createSlice } from '@reduxjs/toolkit';

const getLocalStorage = () => {
  const contactStorageData = localStorage.getItem('contactStorageData');
  if (contactStorageData) {
    return JSON.parse(contactStorageData);
  } else return null;
};

const contactSlice = createSlice({
  name: 'contact',
  initialState: getLocalStorage(),
  reducers: {
    ADD_CONTACT: (state, { payload }) => {
      let newState = [...state, payload];
      localStorage.setItem('contactStorageData', JSON.stringify(newState));
      return newState;
    },

    DELETE_CONTACT: (state, { payload }) => {
      let newState = state.filter((item) => item.id != payload);
      localStorage.setItem('contactStorageData', JSON.stringify(newState));
      return newState;
    },
  },
});

export const { ADD_CONTACT, DELETE_CONTACT } = contactSlice.actions;

export default contactSlice.reducer;
