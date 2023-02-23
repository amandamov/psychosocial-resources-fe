import React from "react";
import {Outlet} from "react-router-dom";
import Footer from "../../components/Footer";
import Navigationbar from "../../components/Navigationbar";
import Footer from "../../components/Footer";

const Layout = () => {
  return (
    <>
      <Navigationbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;