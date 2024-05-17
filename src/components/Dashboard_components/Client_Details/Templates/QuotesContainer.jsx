import React, { useState } from "react";
import { PiTrash } from "react-icons/pi";
import { v4 } from "uuid";

const ArticleForm = ({ index, removeForm }) => (
  <div className="h-[50px] relative">
    {/* quote input */}
    <div className="w-full h-full border rounded-2xl overflow-hidden">
      <input
        type="text"
        placeholder="Write your quote"
        className="h-full px-3 py-1 w-full placeholder:text-sm placeholder:font-light rounded-2xl focus-within:outline-none text-sm font-normal"
        required={true}
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

const QuoteContainer = () => {
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

export default QuoteContainer;
