import React from "react";
import ReactDOM from "react-dom";
import ChooseContext from "./context/choose";
import SearchContext from "./context/search";
import "./index.css";
import Root from "./Root";

ReactDOM.render(
  <React.StrictMode>
    <ChooseContext>
      <SearchContext>
        <Root />
      </SearchContext>
    </ChooseContext>
  </React.StrictMode>,
  document.getElementById("root")
);
