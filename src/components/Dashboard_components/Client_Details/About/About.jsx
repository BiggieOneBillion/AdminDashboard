import React from "react";
import EditAboutModal from "./EditAbout";

const About = () => {
  return (
    <div className="space-y-5 mt-10 mb-[200px]">
      <section className="bg-gray-50 px-4 py-6 rounded-xl space-y-5">
        <h1 className="font-medium text-lg text-black">About</h1>
        <p className="text-[#79797B] text-sm font-light">
          <p className="font-bold text-4xl text-[rgba(0,0,0,0.1)] text-left">No Content Avaliable</p>
        </p>
      </section>
      <EditAboutModal />
    </div>
  );
};

export default About;
