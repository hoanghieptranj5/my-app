import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {calculate} from "../../Service/ElectricService";

const initialState = {
  items: [],
  isLoading: true,
  totalUsage: 0,
  total: 0,
  totalVAT: 0
}

export const fetchCalculation = createAsyncThunk(
  'fetch_calculation',
  async (value) => {
    const response = await calculate(value);
    return await response.json();
  }
)

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
      state.items = action.payload.items;
      state.usage = action.payload.usage;
      state.total = action.payload.total;
      state.totalVat = action.payload.totalVat;
    });

    builder.addCase(fetchCalculation.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = "error while loading";
    });
  }
})

export default calculationSlice.reducer;