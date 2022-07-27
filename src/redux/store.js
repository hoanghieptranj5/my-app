import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "./slice/counterSlice";
import calculationReducer from "./slice/calculationSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    calculation: calculationReducer
  },
});