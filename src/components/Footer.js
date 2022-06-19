import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaMailBulk,
} from "react-icons/fa";
function Footer() {
  return (
    <>
      <div className="relative -mt-24">
        <svg
          height={400}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#529e97"
            fill-opacity="1"
            d="M0,96L80,117.3C160,139,320,181,480,165.3C640,149,800,75,960,58.7C1120,43,1280,85,1360,106.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
        <div className="w-screen flex justify-center absolute bottom-0">
          <div className="md:w-full w-1/2">
            <div className="p-5 font-quicksand text-center">
              <p className="text-gray-50 pb-5">Designed and Developed By</p>

              <div className="h-1 border-2 border-white border-dotted"></div>

              <div className="flex text-white w-full justify-between py-3">
                <FaFacebook />
                <FaMailBulk />
                <FaInstagram />
                <FaLinkedin />
                <FaGithub />
              </div>

              <div className="h-1 border-2 border-gray-50 border-dotted"></div>

              <p className="text-gray-50 my-2">Ashvin Sunga</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
