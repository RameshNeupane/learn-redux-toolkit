import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import store from "./app/store";
import { fetchUsers } from "./features/users/usersSlice";

store.dispatch(fetchUsers());

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
