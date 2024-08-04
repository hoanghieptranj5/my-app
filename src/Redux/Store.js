import {configureStore} from '@reduxjs/toolkit';
import counterReducer from "./Slice/CounterSlice";
import calculationReducer from "./Slice/CalculationSlice";
import hanziCardReducer from "./Slice/HanziCardSlice";
import navigationBarSlice from "./Slice/NavigationBarSlice";
import authReducer from './Slice/AuthSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    calculation: calculationReducer,
    hanziCard: hanziCardReducer,
    navigationBar: navigationBarSlice,
    auth: authReducer
  },
});