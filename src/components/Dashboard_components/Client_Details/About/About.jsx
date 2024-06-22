import React from "react";
import EditAboutModal from "./EditAbout";
import { clientStore } from "@/store/clients";
import Modal from "@/components/Modal";
import { FiPlus } from "react-icons/fi";
import NewAboutForm from "./NewAbout";

const Trigger = () => (
  <div className="border text-sm bg-blue-50 text-blue-900 flex items-center gap-2 py-1 px-3 rounded-lg w-fit">
    <FiPlus size={16} />
    <span className="font-light text-sm">Add Info</span>
  </div>
);

const About = () => {
  const singleClient = clientStore((state) => state.singleClient);

  console.log(singleClient[0]);

  return (
    <div className="space-y-5 mt-10 mb-[200px]">
      <section className="bg-gray-50 px-4 py-6 rounded-xl space-y-5">
        <div className="flex justify-between items-center">
          <h1 className="font-medium text-lg text-black">About</h1>
           <EditAboutModal data={singleClient[0].about} /> 
        </div>
        <div className="text-[#79797B] text-sm font-light">
          {singleClient[0]?.about ? (
            <p className="text-sm font-normal text-slate-500">
              {singleClient[0].about}
            </p>
          ) : (
            <p className="font-bold text-4xl text-[rgba(0,0,0,0.1)] text-left">
              No Content Avaliable
            </p>
          )}
        </div>
      </section>
      {/* <EditAboutModal /> */}
    </div>
  );
};

export default About;
