import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {fetchCalculation, justFetch} from "../redux/slice/valueSlice";

export function Counter() {
  const count = useSelector((state) => state.vl.valuesFromBE);
  const dispatch = useDispatch();

  return (
    <div>
      <button
        aria-label="Increase value"
        onClick={() => dispatch(fetchCalculation(12))}
      >
        Increment
      </button>
    </div>
  )
}