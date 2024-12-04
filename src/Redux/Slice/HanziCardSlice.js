import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getRandomHanzi } from '../../Service/HanziCardService';

const initialState = {
  isLoading: true,
  items: [],
  errorMessage: '',
};

export const getRandomHanziList = createAsyncThunk(
  'v2/getRandomHanzi',
  async (payload) => {
    const response = await getRandomHanzi(payload.length, payload.token);
    return response.json();
  },
);

export const hanziCardSlice = createSlice({
  name: 'hanziCard',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRandomHanziList.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getRandomHanziList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.items = action.payload.value;
      console.log(state.items);
    });

    builder.addCase(getRandomHanziList.rejected, (state) => {
      state.isLoading = false;
      state.errorMessage = 'error while loading';
    });
  },
});

export default hanziCardSlice.reducer;
