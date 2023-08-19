import React from "react";

import NavBar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <NavBar />
      <main className="pb-8">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
