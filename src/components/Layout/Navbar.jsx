import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { Logo } from "../Logo";
import { CartWidget, HomeIcon, MenuIcon } from "../Icons";
import NavMobile from "./NavMobile";

const NavBar = () => {
  const [display, setDisplay] = useState("hidden");

  const active = "border-gray-400 font-bold underline ";
  const pending = "border-b-2 border-gray-400 active:font-normal";

  return (
    <div className="w-full shadow-md z-50 bg-gray-50 py-6 lg:py-16 font-mono">
      <div className="relative flex items-center lg:px-4 py-2">
        <div className=" flex flex-col justify-center w-full items-center tracking-normal font-semibold">
          <Link
            className="text-center"
            onClick={() => setDisplay("hidden")}
            to="/"
          >
            <Logo />
            <p className="text-lg lg:text-3xl font-sans font-extralight tracking-widest">
              ORGANIC SOURDOUGH
            </p>
          </Link>
          <div className="flex flex-col lg:flex-row justify-center w-1/2 px-4 mt-4 xl:mt-10   text-xl space-y-1 lg:space-y-0 lg:space-x-12 xl:text-3xl font-extralight">
            <NavLink
              exact
              className={({ isActive, isPending }) =>
                isPending ? `${pending}` : isActive ? `${active}` : ""
              }
              to="/"
            >
              All
            </NavLink>
            {/* <p>-</p> */}
            <NavLink
              to="/category/Bread"
              className={({ isActive, isPending }) =>
                isPending ? `${pending}` : isActive ? `${active}` : ""
              }
            >
              Bread
            </NavLink>
            {/* <p>-</p> */}
            <NavLink
              to="/category/Pastries"
              className={({ isActive, isPending }) =>
                isPending ? `${pending}` : isActive ? `${active}` : ""
              }
            >
              Pastries
            </NavLink>
            {/* <p>-</p> */}

            <NavLink
              to="/category/Focaccia"
              className={({ isActive, isPending }) =>
                isPending ? `${pending}` : isActive ? `${active}` : ""
              }
            >
              Focaccia
            </NavLink>
          </div>
          <Link
            to="/cart"
            className="absolute top-3 right-8 xl:top-8 xl:right-28 "
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
