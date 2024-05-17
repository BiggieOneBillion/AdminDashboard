import React, { useState } from "react";
import { PiImageThin, PiTrash } from "react-icons/pi";
import { v4 } from "uuid";

const ArticleForm = ({ index, removeForm }) => (
  <div className="grid grid-cols-[1fr_200px_1fr] gap-4 h-[50px] relative">
    {/* first input */}
    <div className="w-full h-full border border-blue-700 rounded-2xl">
      <label
        htmlFor="imgFile"
        className=" h-full flex px-5 justify-between items-center w-full "
      >
        <input type="file" id="imgFile" className="hidden" />
        <span className="text-xs font-light text-black">Upload An Image</span>
        <span>
          <PiImageThin size={20} />
        </span>
      </label>
    </div>
    {/* second input */}
    <div className="w-full h-full border rounded-2xl overflow-hidden">
      <input
        type="text"
        placeholder="Title"
        className="h-full px-3 py-1 w-full placeholder:text-sm placeholder:font-light rounded-2xl focus-within:outline-none text-sm font-normal"
      />
    </div>
    {/* third input */}
    <div className="w-full h-full border rounded-xl overflow-hidden">
      <input
        type="text"
        placeholder="Sub text"
        className="h-full px-3 py-1 w-full placeholder:text-sm placeholder:font-light rounded-2xl  focus-within:outline-none text-sm font-normal"
      />
    </div>
    {/* delete form btn */}
    {index !== 0 && (
      <button
        onClick={removeForm}
        className="absolute top-[-10px] right-[-10px] bg-white  rounded-full text-red-400 btn-animate"
      >
        <PiTrash size={18} />
      </button>
    )}
  </div>
);

const ImageFormContainer = () => {
  const [count, setCount] = useState([1]);
  const addMoreForm = () => {
    let result = [...count];
    result.push(1);
    setCount(result);
  };
  const removeForm = () => {
    let result = [...count];
    result.pop();
    setCount(result);
  };
  return (
    <div>
      <div className="space-y-3">
        {count.map((el, i) => (
          <ArticleForm key={v4()} index={i} removeForm={removeForm} />
        ))}
      </div>
      <div className="flex justify-end items-center mt-5">
        <button
          onClick={addMoreForm}
          className="text-base font-medium text-blue-500 bg-blue-200 rounded-md px-4 py-1 w-fit"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default ImageFormContainer;
