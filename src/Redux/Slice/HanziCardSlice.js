import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getHanziRange} from "../../Service/HanziCardService";

const initialState = {
  isLoading: true,
  items: [],
  errorMessage: ''
};

export const getHanziList = createAsyncThunk(
  'v2/getHanziList',
  async (payload) => {
    const response = await getHanziRange(payload.skip, payload.take);
    return response.json();
  }
);

export const hanziCardSlice = createSlice({
  name: 'hanziCard',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getHanziList.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getHanziList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    });

    builder.addCase(getHanziList.rejected, (state) => {
      state.isLoading = false;
      state.errorMessage = "error while loading";
    });
  }
});

export default hanziCardSlice.reducer;