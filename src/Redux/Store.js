import {configureStore} from '@reduxjs/toolkit';
import counterReducer from "./Slice/CounterSlice";
import calculationReducer from "./Slice/CalculationSlice";
import userReducer from "./Slice/UserSlice";
import hanziReducer from "./Slice/HanziSlice";
import hanziCardReducer from "./Slice/HanziCardSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    calculation: calculationReducer,
    user: userReducer,
    hanzi: hanziReducer,
    hanziCard: hanziCardReducer
  },
});