import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "./JobsSlice";
import statusReducer from "./StatusSlice";

export default configureStore({
  reducer: {
    jobs: jobsReducer,
    status: statusReducer,
  },
});
