import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./App";
import ReactDOM from "react-dom"; // Import ReactDOM properly

// You should render your app inside ReactDOM.render
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
