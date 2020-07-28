import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import Draw from "./draw";
import Piechart from "./components/Piechart";
import Arc from "./components/Arc";

function App() {
  return (
    <div className="App">
      <Draw />
      <Piechart />
      <Arc />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
