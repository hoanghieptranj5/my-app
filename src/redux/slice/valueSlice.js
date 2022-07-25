import { createSlice } from "@reduxjs/toolkit";
import {getEndpoint} from "../../url/backendServices";

const initialValue = {
  value: 0
}

export const valueSlice = createSlice({
  name: 'value',
  initialValue,
  reducers: {
    getValues: state => state
  }
})