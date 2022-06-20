import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

function Header() {
  const [showMenu, setShowMenu] = useState("sm:hidden");
  const menuItems = [
    {
      title: "Home",
      key: "intro",
    },
    {
      title: "Skills",
      key: "tech",
    },
    {
      title: "Projects",
      key: "projects",
    },
    {
      title: "Contact",
      key: "contact",
    },
  ];

  const showHideMenu = () => {
    if (showMenu === "sm:hidden") {
      setShowMenu("");
    } else {
      setShowMenu("sm:hidden");
    }
  };

  return (
    <div className="text-white font-quicksand fixed top-0 left-0 right-0 z-50">
      <div
        className={`flex bg-theme justify-between items-center p-2 shadow-lg ${
          showMenu === "" && "sm:flex-col"
        } `}
      >
        <div className="flex justify-between items-center w-screen">
          <a href="/#intro">
            <h1 className="text-4xl font-extrabold hover:text-yellow-500 cursor-pointer">
              A S
            </h1>
          </a>

          <FaBars
            onClick={showHideMenu}
            className="lg:hidden xl:hidden 2xl:hidden sm:flex cursor-pointer"
          />
        </div>

        {/* WEB VIEW */}
        <div className="flex sm:hidden">
          {menuItems.map((item) => {
            return (
              <li
                key={item.key}
                className="list-none mx-5 hover:bg-white px-2 rounded-xl hover:text-black hover:animate-pulse duration-150"
              >
                <a href={`#${item.key}`}>{item.title}</a>
              </li>
            );
          })}
        </div>
        {/* MOBILE VIEW */}
        <div
          className={`mt-5 sm:flex items-start justify-start w-full flex-col ${showMenu} lg:hidden 2xl:hidden xl:hidden`}
        >
          {menuItems.map((item) => {
            return (
              <li
                key={item.key}
                className="list-none mt-5 hover:bg-white px-2 rounded-xl hover:text-black hover:animate-pulse duration-150"
              >
                <a onClick={showHideMenu} href={`#${item.key}`}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Header;
