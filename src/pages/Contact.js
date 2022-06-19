import React from "react";
import Layout from "../components/Layout";

function Contact() {
  return (
    <Layout>
      <div className="grid grid-cols-2 md:grid-cols-1 ">
        <div className="h-screen mt-10 md:mt-0">
          <lottie-player
            src="https://assets10.lottiefiles.com/packages/lf20_88z2psap.json"
            background="transparent"
            speed="0.5"
            loop
            autoplay
          ></lottie-player>
        </div>

        <div className="w-screen mt-20 md:-mt-24 md:ml-7">
          <div className="md:w-5/6 w-2/5 h-5/6 md:h-fit p-10 shadow-2xl bg-gray-50">
            <h1 className="text-xl font-semibold">
              Do you have any questions? You can email me here.
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

            <button className="bg-red-500 rounded text-white px-5 py-1 mt-3">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
