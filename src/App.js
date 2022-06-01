import "./App.css";
import Main from "./compoenents/main/Main";
import { useEffect, useRef, useState } from "react";

function App() {
  // const [width, setWidth] = useState(window.innerWidth);
  // window.addEventListener("resize", () => setWidth(window.innerWidth));

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
      <Main />
    </div>
  );
}

export default App;
