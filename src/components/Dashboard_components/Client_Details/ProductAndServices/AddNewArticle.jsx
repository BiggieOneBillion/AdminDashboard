import React, { useRef, useState } from "react";
import { PiImageThin } from "react-icons/pi";
import { FiPlus } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { PiTrash } from "react-icons/pi";
import { v4 } from "uuid";
import { useParams } from "next/navigation";
import { userStore } from "@/store/user";
import axios from "axios";
import { BiTrash } from "react-icons/bi";
import Image from "next/image";

const ArticleForm = ({ setImage, images }) => {
  const token_id = userStore((state) => state.token_id);

  const params = useParams();
  const [imageVal, setImageVal] = useState(null);
  const subtextRef = useRef(null);
  const titleRef = useRef(null);
  const [upload, setUpload] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [uploadMsg, setUploadMsg] = useState("Add");
  const handleAddForm = async () => {
    // console.log(imageVal);
    if (
      imageVal !== null &&
      subtextRef.current.value !== "" &&
      titleRef.current.value !== ""
    ) {
      // creating formdata
      const formData = new FormData();
      formData.append("asset", imageVal);

      // Log FormData content for debugging
      for (let pair of formData.entries()) {
        console.log(pair[0] + ": " + pair[1]);
      }

      try {
        setUpload(true);
        setUploadMsg("...uploading");
        const response = await axios.post(
          `https://api-prestigecalendar.olotusquare.co/api/v1/admin/assets/for/${params.id}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token_id}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        // console.log(response.status);
        if (response.status === 201) {
          setUpload(false);
          setUploadMsg("...done");
          setTimeout(() => setUploadMsg("Add"), 3000);
          // console.log(response.data.entity.url);
          let newEntry = {
            url: response.data.entity.url,
            title: titleRef.current.value,
            subtext: subtextRef.current.value,
          };
          setImage([...images, newEntry]);
        }
      } catch (error) {
        setErrMsg("Image Not Uploaded");
        setUpload("Try again!!");
        // console.log("Error msg: " + error.message);
      }
    }
  };
  
  return (
    <div className="space-y-2">
      {errMsg && (
        <p className="text-red-500 py-2 text-sm text-center bg-red-300">
          {errMsg}
        </p>
      )}
      <div className="grid grid-cols-[1fr_200px_1fr] gap-4 h-[50px] relative">
        {/* first input */}
        <div className="w-full h-full border border-blue-700 rounded-2xl">
          <label
            htmlFor="imgFile"
            className=" h-full flex px-5 justify-between items-center w-full "
          >
            <input
              type="file"
              id="imgFile"
              className="hidden"
              onChange={(e) => setImageVal(e.target.files[0])}
            />
            <span className="text-xs font-light text-black">
              {imageVal === null ? "Upload An Image" : imageVal.name}
            </span>
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
            ref={titleRef}
          />
        </div>
        {/* third input */}
        <div className="w-full h-full border rounded-xl overflow-hidden">
          <input
            type="text"
            placeholder="Sub text"
            className="h-full px-3 py-1 w-full placeholder:text-sm placeholder:font-light rounded-2xl  focus-within:outline-none text-sm font-normal"
            ref={subtextRef}
          />
        </div>
      </div>
      <div className="btn-add-container flex justify-end">
        <button
          onClick={handleAddForm}
          className="flex items-center gap-2 py-2 px-4 rounded-lg text-blue-900 bg-blue-50 btn-animate"
          disabled={upload}
        >
          {/* <span><FiPlus size={20} /></span> */}
          <span className="font-normal text-sm">{uploadMsg}</span>
        </button>
      </div>
    </div>
  );
};

const AddNewArticle = ({ register, images, setImages }) => {
  const removeImage = (id) => {
    const result = images.filter((el, i) => i !== id);
    setImages(result);
  };
  // NEW LOGIC

  return (
    <div className="space-y-6 mb-10">
      <div className="space-y-3">
        <div className=" grid grid-cols-2 gap-5">
          {images.map((el, i) => (
            <div
              key={v4()}
              // className="grid grid-cols-3 bg-slate-200 py-2 px-2 rounded-xl relative"
              className="space-y-2 bg-slate-100 py-2 px-2 rounded-xl relative"
            >
              {/* <p className="text-sm text-slate-500 flex items-center gap-1">
                <span>url:</span>
                <span>{el.url.slice(0, 20)}....</span>
              </p> */}
              <div className="h-[100px] w-full overflow-hidden">
                 <Image src={el.url} height={100} width={100} className="object-cover w-full h-full" />
              </div>
              <p className="text-sm text-slate-500 flex items-center gap-1">
                <span className="font-medium">Title:</span>
                <span>{el.title.slice(0, 40)}...</span>
              </p>
              <p className="text-sm text-slate-500 flex items-center gap-1">
                <span className="font-medium">Subtext:</span>
                <span>{el.subtext.slice(0, 40)}....</span>
              </p>
              <button
                onClick={() => removeImage(i)}
                className="absolute z-10 top-0 translate-x-[50%] translate-y-[-100%] transition-transform duration-200 active:scale-[0.95] right-0 text-red-600 bg-whitey p-2y rounded-full cursor-pointer"
              >
                <BiTrash size={16} />
              </button>
            </div>
          ))}
        </div>

        <ArticleForm key={v4()} setImage={setImages} images={images} />
      </div>
      {/* <div className="btn-add-container grid place-content-center">
        <button
          onClick={addForm}
          className="flex items-center gap-2 py-2 px-4 rounded-lg text-blue-900 bg-blue-50 btn-animate"
        >
          <span>
            <FiPlus size={20} />
          </span>
          <span className="font-normal text-sm">Add</span>
        </button>
      </div> */}
    </div>
  );
};

export default AddNewArticle;
