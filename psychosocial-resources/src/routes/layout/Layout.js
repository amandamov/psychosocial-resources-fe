import React from "react";
import {Outlet} from "react-router-dom";
import Navigationbar from "../../components/Navigationbar";

const Layout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default Layout;