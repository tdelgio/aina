import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { Logo } from "../Logo";
import { CartWidget, HomeIcon, MenuIcon } from "../Icons";
import NavMobile from "./NavMobile";

const NavBar = () => {
  const [display, setDisplay] = useState("hidden");

  return (
    <div className="w-full shadow-md z-50 bg-gray-50 py-6">
      <div className="relative flex items-center lg:px-4 py-4">
        <div className="flex flex-col justify-center w-full items-center tracking-normal font-semibold">
          <Link
            className="text-center"
            onClick={() => setDisplay("hidden")}
            to="/"
          >
            <Logo />
          </Link>
          <div className="mt-4 xl:mt-6 text-4xl space-x-8 xl:text-5xl font-extralight">
            <NavLink
              to="/"
              activeClassName="border-b-2 border-gray-400 font-bold"
            >
              All
            </NavLink>
            <p>-</p>
            <NavLink
              to="/category/Pizza"
              activeClassName="border-b-2 border-gray-400 font-bold"
            >
              Pizza
            </NavLink>
            <p>-</p>
            <Link
              to="/category/Bread"
              activeClassName="border-b-2 border-gray-400 font-bold"
            >
              Bread
            </Link>
          </div>
          <Link
            to="/cart"
            className="absolute top-2 right-8 xl:top-8 xl:right-28"
          >
            <CartWidget />
          </Link>

          {/* <div className="absolute right-4 xl:hidden">
            <div
              onClick={() =>
                display === "hidden"
                  ? setDisplay("block")
                  : setDisplay("hidden")
              }
            >
              <MenuIcon display={display} />
            </div>
          </div> */}
          {/* <NavMobile display={display} setDisplay={setDisplay} /> */}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
