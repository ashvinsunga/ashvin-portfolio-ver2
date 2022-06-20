import React, { useEffect } from "react";
import Layout from "../components/Layout";
import projectsData from "../resources/projects";
import { TbBrandNextjs } from "react-icons/tb";
import { DiNodejs } from "react-icons/di";
import { SiGmail } from "react-icons/si";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineYahoo,
} from "react-icons/ai";
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
      <div className="w-screen">
        {/* Intro section */}
        <section id="intro" className="h-screen pt-24 sm:pt-1 md:pt-1 bg-theme">
          <div
            className="grid grid-cols-2 h-5/6 items-center border-4 sm:grid-cols-1 md:grid-cols-1 md:border-0
            mx-32 sm:mx-3 md:mx-3 z-10 bg-theme
          border-white "
          >
            <div className="h-1/2 sm:h-3/4 md:h-2/4 justify-items sm:-mt-10">
              <lottie-player
                src="https://assets6.lottiefiles.com/packages/lf20_ne6kcqfz.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>

            <div className="font-bold text-white sm:-mt-3 md:px-5 sm:place-self-center md:place-self-start ">
              <h1
                className="text-7xl sm:text-4xl md:text-4xl"
                data-aos="zoom-in"
              >
                ASHVIN <br className="md:hidden" />
                <b className="text-yellow-500">SUNGA</b>
              </h1>
              <h1
                className="text-4xl sm:text-3xl md:text-3xl"
                data-aos="slide-left"
              >
                <b className="text-orange-600">Full Stack Developer</b>
              </h1>
              <div className="grid grid-cols-4 place-content-start lg:mt-2">
                <a
                  href="https://www.linkedin.com/in/ashvin-sunga/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <AiOutlineLinkedin
                    className="hover:text-yellow-500 cursor-pointer"
                    size={65}
                    data-aos="zoom-in"
                    data-aos-delay="100"
                  />
                </a>

                <a
                  href="https://github.com/ashvinsunga"
                  rel="noreferrer"
                  target="_blank"
                >
                  {" "}
                  <AiOutlineGithub
                    className="hover:text-yellow-500 cursor-pointer"
                    size={60}
                    data-aos="zoom-in"
                    data-aos-delay="300"
                  />
                </a>

                <a
                  href="mailto:ashvinsunga@yahoo.com.ph"
                  rel="noreferrer"
                  target="_blank"
                >
                  {" "}
                  <AiOutlineYahoo
                    className="hover:text-yellow-500 cursor-pointer"
                    size={70}
                    data-aos="zoom-in"
                    data-aos-delay="500"
                  />
                </a>

                <a
                  href="mailto:ashvinsunga@gmail.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  <SiGmail
                    className="hover:text-yellow-500 cursor-pointer"
                    size={60}
                    data-aos="zoom-in"
                    data-aos-delay="700"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section id="tech" className="pt-20">
          <h1
            className="text-4xl md:text-2xl text-blue-800 font-bold text-center"
            data-aos="fade-down"
          >
            Technologies I've used so far
          </h1>
          <div
            className="grid sm:grid-cols-3 grid-cols-6 content-start"
            data-aos="fade-up"
          >
            <FaReact
              size={120}
              color="cyan"
              className="w-full text-center mt-10"
            />
            <SiMongodb
              size={120}
              color="green"
              className="w-full text-center mt-10  "
            />
            <TbBrandNextjs
              size={120}
              color="black"
              className="w-full bg-white text-center mt-10"
            />
            <DiNodejs
              size={120}
              color="green"
              className="w-full text-center mt-10"
            />
            <FaBootstrap
              size={120}
              color="#602C50"
              className="w-full text-center mt-10"
            />
            <FaJsSquare
              size={120}
              color="#e6e600"
              className="w-full text-center text-black mt-10"
            />
          </div>
          <div className="grid sm:grid-cols-3 grid-cols-6" data-aos="fade-up">
            <FaHtml5
              size={120}
              color="#EC6231"
              className="w-full text-center mt-20  "
            />
            <FaCss3
              size={120}
              color="blue"
              className="w-full text-center mt-20    "
            />

            <SiJquery
              size={120}
              color="#00009d"
              className="w-full text-center mt-20 "
            />

            <SiGithub
              size={120}
              color="black"
              className="w-full text-center mt-20  "
            />

            <SiTailwindcss
              size={120}
              color="skyblue"
              className="w-full text-center mt-20  "
            />

            <SiJest
              size={120}
              color="#a52a2a"
              className="w-full text-center mt-20 "
            />
          </div>
        </section>

        {/* Projects */}
        <section id="projects">
          <div className="pt-5">
            <div
              className="bg-orange-500 font-bold text-center my-10 mx-20 p-2 text-white rounded-full md:mt-10 md:mx-5"
              data-aos="fade-up"
            >
              <h1
                className="text-3xl sm:text-xl md:text-3xl"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                MY WORKS
              </h1>
              <h1
                className="text-lg sm:text-sm md:text-3xl"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                Here are the projects I made so far
              </h1>
            </div>
          </div>

          <div className="grid mt-10 md:grid-cols-1 grid-cols-3 items-center justify-center gap-10 mx-20 md:mx-5">
            {projectsData.map((project) => {
              return (
                <div key={project.title}>
                  <div className="relative p-10 border-2 text-center rounded-tr-3xl rounded-bl-3xl border-gray-400">
                    <img
                      src={project.image}
                      alt="project1"
                      className="w-full h-52 text-center"
                    />

                    <div className="absolute inset-0 flex items-center justify-center flex-col opacity-0 bg-black hover:opacity-80 rounded-tr-3xl rounded-bl-3xl">
                      <h1 className="text-4xl font-semibold text-white">
                        {project.title}
                      </h1>
                      <button className="border-2 rounded border-white py-2 hover:bg-green-500 px-5 mt-5 text-white">
                        DEMO
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 pb-20 justify-items-center"
        >
          <div className="h-full sm:h-3/4">
            <lottie-player
              src="https://assets10.lottiefiles.com/packages/lf20_88z2psap.json"
              background="transparent"
              speed="0.5"
              loop
              autoplay
            ></lottie-player>
          </div>

          <div className="mt-14 sm:-mt-32 md:-mt-24">
            <div className="sm:w-screen w-4/5 h-80% md:h-fit p-10 shadow-2xl bg-gray-50">
              <h1 className="text-l sm:text-sm font-semibold">
                If there's anything you want to know more about me, do not
                hesitate to contact the number below or send an email.
              </h1>
              <input
                type="text"
                placeholder="Name"
                className="w-full border-2 border-gray-400 rounded p-1 shadow-lg mt-5"
              />
              <input
                type="text"
                placeholder="Email"
                className="w-full border-2 border-gray-400 rounded p-1 shadow-lg mt-5"
              />
              <textarea
                rows={5}
                type="text"
                placeholder="Message..."
                className="w-full border-2 border-gray-400 rounded p-1 shadow-lg mt-5"
              />

              <button className="bg-yellow-600 rounded text-white px-5 py-1 mt-3 cursor-pointer">
                SUBMIT
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default Home;
