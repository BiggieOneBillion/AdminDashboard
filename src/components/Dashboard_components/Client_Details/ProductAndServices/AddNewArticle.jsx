import React, { useState } from "react";
import { PiImageThin } from "react-icons/pi";
import { FiPlus } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { PiTrash } from "react-icons/pi";

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

const AddNewArticle = ({ register }) => {
  const [count, setCount] = useState([1]);
  const addForm = () => setCount([...count, 1]);
  const removeForm = () => {
    const result = count.toSpliced(count.length - 1, 1);
    setCount(result);
  };
  return (
    <div className="space-y-6 mb-10">
      <div className="space-y-3">
        {count.map((el, i) => (
          <ArticleForm index={i} removeForm={removeForm} />
        ))}
      </div>
      <div className="btn-add-container grid place-content-center">
        <button
          onClick={addForm}
          className="flex items-center gap-2 py-2 px-4 rounded-lg text-blue-900 bg-blue-50 btn-animate"
        >
          <span>
            <FiPlus size={20} />
          </span>
          <span className="font-normal text-sm">Add</span>
        </button>
      </div>
    </div>
  );
};

export default AddNewArticle;
