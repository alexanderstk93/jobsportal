import { useEffect } from "react";
import "./App.css";
import Main from "./compoenents/main/Main";
import Navbar from "./compoenents/navigation/Navbar";
import { useDispatch } from "react-redux";
import { addList } from "./compoenents/store/JobsSlice";

function App() {
  const dispatch = useDispatch();
  console.log("sal");
  // const options = {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Host": "usa-jobs-for-it.p.rapidapi.com",
  //     "X-RapidAPI-Key": "e9392d2534msh2258e74ccf0ac39p10289djsn7c176a998240",
  //   },
  // };

  // fetch("https://usa-jobs-for-it.p.rapidapi.com/React", options)
  //   .then((response) => response.json())
  //   .then((response) => console.log(response))
  //   .catch((err) => console.error(err));

  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
