import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "./slice/counterSlice";
import valueReducer from "./slice/valueSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    vl: valueReducer
  },
});