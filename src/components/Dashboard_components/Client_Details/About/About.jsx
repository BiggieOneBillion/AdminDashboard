import React from "react";
import EditAboutModal from "./EditAbout";

const About = () => {
  return (
    <div className="space-y-5 mt-10 mb-[200px]">
      <section className="bg-gray-50 px-4 py-6 rounded-xl space-y-5">
        <h1 className="font-medium text-lg text-black">About</h1>
        <p className="text-[#79797B] text-sm font-light">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque ut,
          sapiente earum maxime, voluptatibus voluptas consequatur, dolorum rem
          quia possimus et corrupti sequi nihil quae fugit qui. Eveniet quam
          incidunt obcaecati dolores, dolore dolor molestiae asperiores
          doloribus animi consequatur cum repellendus facere nihil esse ipsam
          quas sunt, sit maiores! Dolorem.
        </p>
      </section>
      <EditAboutModal />
    </div>
  );
};

export default About;
