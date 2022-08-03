import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getList, getSingle, findSingle} from "../../Service/HanziService";

const initialState = {
  isLoading: true,
  items: [],
  errorMessage: ''
};

export const getHanziList = createAsyncThunk(
  'get_hanzi_list',
  async () => {
    const response = await getList();
    return await response.json();
  }
);

export const hanziSlice = createSlice({
  name: 'hanzi',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getHanziList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    });

    builder.addCase(getHanziList.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(getHanziList.rejected, (state, action) => {
      state.isLoading = true;
      state.errorMessage = 'error while fetching Hanzi';
    });
  }
});

export default hanziSlice.reducer;