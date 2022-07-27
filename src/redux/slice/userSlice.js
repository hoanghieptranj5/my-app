import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getUsers} from "../../service/UserService";

const initialState = {
  isLoading: true,
  items: []
};

export const fetchUsers = createAsyncThunk(
  'fetch_users',
  async (value) => {
    const response = await getUsers();
    return await response.json();
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    });

    builder.addCase(fetchUsers.rejected, (state) => {
      state.isLoading = false;
      state.errorMessage = "error while loading";
    });
  }
});

export default userSlice.reducer;