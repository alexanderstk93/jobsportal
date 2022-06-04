import "./App.css";
import Main from "./compoenents/main/Main";
import { useDispatch } from "react-redux";
import { setWitdth } from "./compoenents/store/StatusSlice";
import { Routes, Route } from "react-router-dom";
import Navbar from "./compoenents/navigation/Navbar";
import Notification from "./compoenents/MiniComponents/Notification";
import AdminDashboard from "./compoenents/Admin/AdminDashboard";
import Profile from "./compoenents/Profile/Profile";
import JobView from "./compoenents/jobview/JobView";
import TopEmployerDescription from "./compoenents/topEmployer/TopEmployerDescription";

function App() {
  const dispatch = useDispatch();
  window.addEventListener("resize", () =>
    dispatch(setWitdth(window.innerWidth))
  );

  return (
    // <div className="App">
    //   {width > 1100 ? (
    //     <Main />
    //   ) : (
    //     <h2
    //       style={{
    //         position: "absolute",
    //         top: "50%",
    //         left: "50%",
    //         transform: "translate(-50%, -50%)",
    //       }}
    //     >
    //       Please open the page on PC
    //     </h2>
    //   )}
    // </div>
    <div className="App">
      <Navbar />
      <Notification />
      <Routes>
        <Route path={"/"} element={<Main />} />
        <Route path={"/admin"} element={<AdminDashboard />} />
        <Route path={"/jobview/:jobId"} element={<JobView />} />
        <Route path={"/topemployer"} element={<TopEmployerDescription />} />
        <Route path={"/profile"} element={<Profile />} />
        <Route
          path="*"
          element={<h1>Page not found. Maybe check your request..?</h1>}
        />
      </Routes>
    </div>
  );
}

export default App;
