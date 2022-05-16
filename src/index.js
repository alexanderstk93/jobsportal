import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./compoenents/store/store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./compoenents/navigation/Navbar";
import TopEmployerDescription from "./compoenents/topEmployer/TopEmployerDescription";
import JobView from "./compoenents/jobview/JobView";
import Notification from "./compoenents/miniComponents/Notification";
import AdminDashboard from "./compoenents/Admin/AdminDashboard";
import Profile from "./compoenents/Profile/Profile";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Navbar />
        <Notification />
        <Routes>
          <Route path={"/"} element={<App />} />
          <Route path={"/admin"} element={<AdminDashboard />} />
          <Route path={"/jobview/:jobId"} element={<JobView />} />
          <Route path={"/topemployer"} element={<TopEmployerDescription />} />
          <Route path={"/profile"} element={<Profile />} />
          <Route
            path="*"
            element={<h1>Page not found. Maybe check your request..?</h1>}
          />
        </Routes>
      </Router>
    </React.StrictMode>
  </Provider>
);
