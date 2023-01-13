import { Outlet } from "react-router-dom";

import Header from "./Header";

const Layout = () => {
  return (
    <>
      <div className="header-container">
        <Header />
      </div>
      <div className="App">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
