import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { TbBrandNextjs } from "react-icons/tb";
import { DiNodejs } from "react-icons/di";
import { AiOutlineLinkedin } from "react-icons/ai";
import {
  SiMongodb,
  SiJquery,
  SiGithub,
  SiTailwindcss,
  SiJest,
} from "react-icons/si";

import {
  FaBootstrap,
  FaCss3,
  FaHtml5,
  FaJsSquare,
  FaReact,
} from "react-icons/fa";
import AOS from "aos";
AOS.init({
  duration: 1000,
});
function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <div>
        {/* Intro section */}
        <div className="h-screen pt-24 bg-theme">
          <div
            className="grid grid-cols-2 h-5/6 items-center border-4 md:grid-cols-1  md:border-0
            mx-32 z-10 bg-theme
          border-white "
          >
            <div className="h-1/2">
              <lottie-player
                src="https://assets6.lottiefiles.com/packages/lf20_ne6kcqfz.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>

            <div className="font-bold text-white md:px-5 md:place-self-start">
              <h1 className="text-7xl md:text-4xl" data-aos="zoom-in">
                ASHVIN <br />
                <b className="text-yellow-500">SUNGA</b>
              </h1>
              <h1 className="text-4xl md:text-xl" data-aos="slide-left">
                <b className="text-orange-600">Full Stack Developer</b>
              </h1>
              <div className="grid grid-cols-3">
                <AiOutlineLinkedin size={70} />
              </div>
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className="mt-20">
          <h1
            className="text-4xl md:text-2xl text-blue-800 font-bold text-center my-8"
            data-aos="slide-up"
          >
            Technologies I've used so far
          </h1>
          <div
            className="grid md:grid-cols-1 grid-cols-6 "
            data-aos="slide-left"
          >
            <FaReact
              size={150}
              color="cyan"
              className="w-full text-center mt-20  "
            />
            <SiMongodb
              size={150}
              color="green"
              className="w-full text-center mt-20  "
            />
            <TbBrandNextjs
              size={150}
              color="black"
              className="w-full bg-white text-center mt-20"
            />
            <DiNodejs
              size={150}
              color="green"
              className="w-full text-center mt-20  "
            />
            <FaBootstrap
              size={150}
              color="#602C50"
              className="w-full text-center mt-20    "
            />
            <FaJsSquare
              size={150}
              color="#e6e600"
              className="w-full text-center text-black mt-20  "
            />
          </div>
          <div
            className="grid md:grid-cols-1 grid-cols-6"
            data-aos="slide-right"
          >
            <FaHtml5
              size={150}
              color="#EC6231"
              className="w-full text-center mt-20  "
            />
            <FaCss3
              size={150}
              color="blue"
              className="w-full text-center mt-20    "
            />

            <SiJquery
              size={150}
              color="#00009d"
              className="w-full text-center mt-20 "
            />

            <SiGithub
              size={150}
              color="black"
              className="w-full text-center mt-20  "
            />

            <SiTailwindcss
              size={150}
              color="skyblue"
              className="w-full text-center mt-20  "
            />

            <SiJest
              size={150}
              color="#a52a2a"
              className="w-full text-center mt-20 "
            />
          </div>
        </div>

        {/* {Javscript Buff} */}
        <div className="my-20">
          <div className="text-center h-52 bg-primary">
            <h1 className="text-white font-bold text-4xl py-10">
              My main is Javascript{" "}
            </h1>
          </div>

          <div className="md:mx-5 mx-32 shadow-2xl bg-gray-50 -mt-20 rounded-lg hover:bg-gray-700 hover:text-white">
            <div className="h-96" data-aos="zoom-in">
              <lottie-player
                src="https://assets7.lottiefiles.com/packages/lf20_bwlwtrx8.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>

            <p className="text-xl my-5 font-semibold md:px-5 px-14 py-10">
              JavaScript is one of the most top-ranked programming languages
              because of its ubiquitous use on all platforms and mass adoption.
              Main Use Cases: Web Development.
            </p>
          </div>
        </div>

        {/* {Tech stack section} */}
        <div className="my-20">
          <div className="text-center h-52 bg-red-500">
            <h1 className="text-white font-bold text-4xl py-10">
              My Tech Stack
            </h1>
          </div>

          <div className="md:mx-5 mx-32 shadow-2xl bg-gray-50 -mt-20 rounded-lg hover:bg-gray-700 hover:text-white">
            <div className="h-96" data-aos="zoom-in">
              <lottie-player
                src="https://assets2.lottiefiles.com/packages/lf20_aptscmnx.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>

            <div className="grid md:grid-cols-1 grid-cols-3 p-5">
              <div>
                <h1 className="text-xl font-bold">Front End</h1>
                <hr />
                <p className="font-semibold mt-2">HTML/CSS</p>
                <p className="font-semibold mt-2">React</p>

                <p className="font-semibold mt-2">Javascript</p>
              </div>

              <div className="text-center">
                <h1 className="text-xl font-bold">UI / UX</h1>
                <hr />
                <p className="font-semibold mt-2">Bootstrap</p>
                <p className="font-semibold mt-2">Tailwind</p>

                <p className="font-semibold mt-2">Ant Design</p>
                <p className="font-semibold mt-2">Material UI</p>
                <p className="font-semibold mt-2">Semantic UI</p>
              </div>

              <div className="text-right">
                <h1 className="text-xl font-bold">Backend and DB</h1>
                <hr />
                <p className="font-semibold mt-2">Node JS</p>
                <p className="font-semibold mt-2">Express JS</p>

                <p className="font-semibold mt-2">Mongo DB</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dev Info */}
        <div>
          <h1 className="text-4xl text-gray-500 text-center font-bold">
            Who is Ashvin ?
          </h1>

          <div className="h-screen relative text-gray-800">
            <div className="h-full">
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_1krz51xr.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h1 className="text-2xl font-bold">
                Hi , Hello , How are you?
                <hr />
                <pre className="text-xl md:text-sm my-5 font-quicksand font-semibold">
                  {JSON.stringify(
                    {
                      name: "Ashvin Sunga",
                      age: 28,
                      gender: "Male",
                      country: "Philippines",
                    },
                    null,
                    2
                  )}
                </pre>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
