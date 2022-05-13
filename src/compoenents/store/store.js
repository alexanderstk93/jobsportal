import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "./JobsSlice";
import statusReducer from "./StatusSlice";
import notificationReducer from "./NotificationsSlice";

export default configureStore({
  reducer: {
    jobs: jobsReducer,
    status: statusReducer,
    notifications: notificationReducer,
  },
});
