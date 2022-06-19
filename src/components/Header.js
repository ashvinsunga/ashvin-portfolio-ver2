import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
function Header() {
  const [showMenu, setShowMenu] = useState("md:hidden");
  const menuItems = [
    {
      title: "Home",
      key: "/",
    },
    {
      title: "Projects",
      key: "/projects",
    },
    {
      title: "Courses",
      key: "/courses",
    },
    {
      title: "Contact",
      key: "/contact",
    },
  ];

  const pathname = window.location.pathname;

  return (
    <div className="text-white font-quicksand fixed top-0 left-0 right-0 z-50">
      <div
        className={`flex bg-theme justify-between items-center p-2 shadow-lg ${
          showMenu === "" && "md:flex-col"
        } `}
      >
        <div className="flex justify-between items-center w-full">
          <Link to="/">
            <h1 className="text-4xl font-extrabold hover:text-yellow-500 cursor-pointer">
              A S
            </h1>
          </Link>

          <FaBars
            onClick={() => {
              if (showMenu === "md:hidden") {
                setShowMenu("");
              } else {
                setShowMenu("md:hidden");
              }
            }}
            className="lg:hidden xl:hidden 2xl:hidden md:flex cursor-pointer"
          />
        </div>

        {/* WEB VIEW */}
        <div className="flex md:hidden">
          {menuItems.map((item) => {
            return (
              <li
                className={`list-none mx-5 px-5 hover:bg-white rounded-xl pt-1 hover:text-black hover:animate-pulse duration-150  ${
                  item.key === pathname && "bg-white text-black rounded-xl p-2"
                }`}
              >
                <Link to={`${item.key}`}>{item.title}</Link>
              </li>
            );
          })}
        </div>
        {/* MOBILE VIEW */}
        <div
          className={`mt-5 md:flex items-start justify-start w-full flex-col lg:hidden 2xl:hidden xl:hidden ${showMenu}`}
        >
          {menuItems.map((item) => {
            return (
              <li
                className={`list-none mt-5 ${
                  item.key === pathname &&
                  "bg-white text-black rounded-md py-1 px-2 ml-2"
                }`}
              >
                <Link to={`${item.key}`}>{item.title}</Link>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Header;
