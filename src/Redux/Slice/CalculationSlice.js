import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { calculate } from '../../Service/ElectricService';

const initialState = {
  items: [],
  isLoading: true,
  totalUsage: 0,
  total: 0,
  totalWithVAT: 0,
};

export const fetchCalculation = createAsyncThunk(
  'fetch_calculation',
  async ({ inputUsage, token }) => {
    const response = await calculate(inputUsage, token);
    return await response.json();
  },
);

export const calculationSlice = createSlice({
  name: 'value',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCalculation.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchCalculation.fulfilled, (state, action) => {
      state.isLoading = false;
      state.items = action.payload.value.items;
      state.usage = action.payload.value.usage;
      state.total = action.payload.value.total;
      state.totalWithVAT = action.payload.value.totalWithVAT;
    });

    builder.addCase(fetchCalculation.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = 'error while loading';
    });
  },
});

export default calculationSlice.reducer;
