import React from "react";

import NavBar from "./Navbar";
import Footer from "./Footer";
import { Logo } from "../Logo";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      {/* <NavBar /> */}
      <main className="pb-8 ">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
