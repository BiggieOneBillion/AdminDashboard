import useAxiosPost2 from "@/hooks/useAxiosPost2";
import { useParams } from "next/navigation";
import React from "react";
import { useState, useEffect } from "react";
import { MdOutlineModeEdit } from "react-icons/md";
import { GrInProgress } from "react-icons/gr";
import { MdCheckCircle } from "react-icons/md";
import { MdErrorOutline } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";

const Logo = () => {
  const [changeLogo, setChangeLogo] = useState();

  const [modal, setModal] = useState(false);

  const params = useParams();

  console.log(params);

  const { errorMsg, handleRequest, isLoading, isError, isSuccess } =
    useAxiosPost2({
      url: `https://api-prestigecalendar.olotusquare.co/api/v1/admin/clients/${params.id}/logo`,
      queryName: "clients_info",
    });

  const handleChangeLogo = (e) => {
    setModal(true)
    const formData = new FormData();
    formData.append("logo", e.target.files[0]);
    handleRequest(formData);
  };

  useEffect(() => {
    if (isSuccess || isError) {
      setTimeout(() => {
        setModal(false);
      }, 2000);
    }
  }, [isSuccess, isError]);

  return (
    <>
      <label
        htmlFor="client-logo-upload"
        className="p-1 rounded-full bg-blue-900 text-white absolute z-[100] top-0 left-0"
      >
        <MdOutlineModeEdit size={16} />
        <input
          type="file"
          id="client-logo-upload"
          className="hidden"
          accept="image/*"
          value={changeLogo}
          onChange={handleChangeLogo}
        />
      </label>
      {modal && (
        <div className="fixed top-0 left-0 w-[100vw] h-[100vh] z-[100] bg-[rgba(0,0,0,0.3)] flex justify-center items-start pt-[50px]">
          {isLoading && (
            <div className="bg-[#007bffb8] text-white rounded-lg px-5 py-5 min-w-[300px]">
              <p className="flex items-center gap-4">
                <GrInProgress />
                <span className="text-base">Uploading...</span>
              </p>
            </div>
          )}
          {isSuccess && (
            <div className="bg-[#28A745] text-white rounded-lg px-5 py-5 min-w-[300px]">
              <p className="flex items-center gap-4">
                <FaRegCheckCircle  />
                <span className="text-base">Done</span>
              </p>
            </div>
          )}
          {isError && (
            <div className="bg-[#DC3545] text-white rounded-lg px-5 py-5 min-w-[300px]">
              <p className="flex items-center gap-4">
                <MdErrorOutline />
                <span className="text-base">Try Again!!</span>
              </p>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Logo;
