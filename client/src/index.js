import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

// import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(<App />, document.getElementById("root"));

export default combineReducers({
    auth: authReducer,
    errors: errorReducer
  });
