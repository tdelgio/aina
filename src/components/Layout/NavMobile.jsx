import React from "react";

import { Link } from "react-router-dom";

const StyledLink = ({ setDisplay, to, text }) => {
  return (
    <Link
      onClick={() => setDisplay("hidden")}
      to={to}
      activeClassName="border-b-2 border-gray-400 font-bold"
      className="ml-2 text-lg"
    >
      {text}
    </Link>
  );
};

const NavMobile = ({ display, setDisplay }) => {
  return (
    <div>
      <div className={display}>
        <div className="absolute left-0 top-16 right-0  w-full flex flex-col rounded-sm shadow-md space-y-6 bg-gray-100 p-4 tracking-tight backdrop-filter backdrop-blur">
          <StyledLink setDisplay={setDisplay} to="/" text="All" />
          <StyledLink
            setDisplay={setDisplay}
            to="/category/Pizza"
            text="Pizzas"
          />
          <StyledLink
            setDisplay={setDisplay}
            to="/category/Bread"
            text="Breads"
          />
        </div>
      </div>
    </div>
  );
};

export default NavMobile;
