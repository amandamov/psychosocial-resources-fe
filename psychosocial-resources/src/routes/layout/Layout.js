import React from "react";
import {Outlet} from "react-router-dom";
import Navigationbar from "../../components/Navigationbar";

const Layout = () => {
  return (
    <>
      <Navigationbar />
      <Outlet />
    </>
  );
};

export default Layout;