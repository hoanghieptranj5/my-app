import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "./slice/counterSlice";
import calculationReducer from "./slice/calculationSlice";
import userReducer from "./slice/userSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    calculation: calculationReducer,
    user: userReducer
  },
});