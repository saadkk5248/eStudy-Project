import React, { useState } from "react";
import { Link } from "react-scroll";
import { IoMenu } from "react-icons/io5";
import { HEADER_NAV_ITEMS } from "../../lib/constants/headerNavItems";

export function NavbarSection() {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  return (
    <div className="container">
      <div className="flex flex-row justify-between p-5 md:px-32 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div>
          <Link to="/" className="text-3xl font-semibold p-1 cursor-pointer ">
            eStudy
          </Link>
        </div>
        <nav className=" hidden md:flex gap-5 p-1 font-semibold cursor-pointer">
          {HEADER_NAV_ITEMS.map(({ label, to }) => (
            <li className="list-none hover:text-brightGreen transition-all">
              <a href={to}>{label}</a>
            </li>
          ))}
        </nav>
        <div className="flex md:hidden" onClick={handleChange}>
          <div className="p-2">
            <IoMenu className=" cursor-pointer text-3xl" />
          </div>
        </div>
      </div>
      <div
        className={`${
          menu ? "translate-x-0" : "translate-x-full"
        } md:hidden flex flex-col absolute bg-white left-0 top20 font-semibold text-2xl  text-center pt-8 pb-4 gap-8 w-full h-fit  transition-transform  duration-300 cursor-pointer`}
      >
        {HEADER_NAV_ITEMS.map(({ label, to }) => (
          <li className="list-none  hover:text-brightGreen transition-all ">
            <a href={to}>{label}</a>
          </li>
        ))}
      </div>
    </div>
  );
}
