import { useEffect } from "react";
import "./App.css";
import Main from "./compoenents/main/Main";
import Navbar from "./compoenents/navigation/Navbar";
import { useDispatch } from "react-redux";
import { addList } from "./compoenents/store/JobsSlice";

function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
