import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App";
import store from "./app/store";
import { fetchUsers } from "./features/users/usersSlice";
import { fetchPosts } from "./features/posts/postsSlice";

store.dispatch(fetchUsers());
store.dispatch(fetchPosts());

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
