import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  const path = [
    { key: 1, name: "Lab - 8", to: "/lab8" },
    { key: 2, name: "Lab - 9", to: "/lab9" },
    { key: 3, name: "Subtraction", to: "/sub" },
    { key: 4, name: "Shift Left", to: "/shift" },
    { key: 5, name: "OR", to: "/or" },
    { key: 6, name: "XOR", to: "/xor" },
  ];

  const NavLinkActive = ({ isActive }) => {
    return isActive ? " bg-slate-700 text-slate-300" : "text-slate-300";
  };

  return (
    <div className="nav-layout">
      <div className="nav-logo-layout">
        <h1 className="nav-logo">Binary Quiz</h1>
      </div>
      <div className="nav-list-layout">
        <ul className="menu menu-horizontal p-0">
          <li tabIndex={0}>
            <h1 className="text-slate-200">
              Labs list
              <svg
                className="fill-slate-500"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </h1>
            <ul className="nav-link-layout">
              {path.map((link) => {
                return (
                  <li key={link.key}>
                    <NavLink className={NavLinkActive} to={link.to}>
                      {link.name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
