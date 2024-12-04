import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedPage: 'Calculator',
};

export const navigationBarSlice = createSlice({
  name: 'navigationBar',
  initialState,
  reducers: {
    setSelectedPage: (state, action) => {
      state.selectedPage = action.payload;
    },
  },
  extraReducers: {},
});

export const { setSelectedPage } = navigationBarSlice.actions;

export default navigationBarSlice.reducer;
