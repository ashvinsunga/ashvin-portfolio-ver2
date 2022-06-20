import React from "react";

function Footer() {
  return (
    <>
      <div className="relative -mt-20">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#529e97"
            fillOpacity="1"
            d="M0,96L80,117.3C160,139,320,181,480,165.3C640,149,800,75,960,58.7C1120,43,1280,85,1360,106.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
        <div className="w-full flex justify-center absolute bottom-0">
          <div className="w-3/4">
            <div className="sm:text-sm text-xl sm:p-0 p-5 font-quicksand text-center">
              <p className="text-gray-50">Designed and Developed By</p>
              <p className="text-gray-50 pb-2 sm:my-0 my-1">Ashvin Sunga</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
