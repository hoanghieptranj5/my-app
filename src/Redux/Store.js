import {configureStore} from '@reduxjs/toolkit';
import counterReducer from "./Slice/CounterSlice";
import calculationReducer from "./Slice/CalculationSlice";
import hanziCardReducer from "./Slice/HanziCardSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    calculation: calculationReducer,
    hanziCard: hanziCardReducer
  },
});