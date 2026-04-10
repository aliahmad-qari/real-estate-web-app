import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../features/dataSlice";
import uiReducer from "../features/uiSlice";
import filterReducer from "../features/filterSlice";

export default configureStore({
  reducer: {
    ui: uiReducer,
    data: dataReducer,
    filter: filterReducer,
  },
});
