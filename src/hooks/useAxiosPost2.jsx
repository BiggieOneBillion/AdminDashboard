import { userStore } from "@/store/user";
import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

export default function useAxiosPost2({ url, queryName, fn }) {
  const token_id = userStore((state) => state.token_id);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const queryClient = useQueryClient();

  const handleRequest = async (data, fn) => {
    try {
      setIsLoading(true);
      setIsError(false);
      setIsSuccess(false);
      const response = await axios.post(url, data, {
        headers: {
          Authorization: `Bearer ${token_id}`,
          "Content-Type": "multipart/form-data",
        },
      });
      // console.log(response);
      if (response.status === 201 || response.status === 200) {
        setIsLoading(false);
        setIsSuccess(true);
        queryClient.invalidateQueries(queryName);
        if (fn) fn();
      }
    } catch (error) {
      //  if (error.message === 'Network Error') {
      //     setErrorMsg('Network Error')
      //  }

      //  console.log(error);
       setErrorMsg(error)
      //  if () {
        
      //  }
      
      // if(response.status === 500){
      //    setErrorMsg(response)
      // }
      // console.log("The solid principle" + error.message);
      //   if (error.message === "Request failed with status code 500") {
      //     setErrorMsg("Device id or Imei id already exist!");
      //   }
      setIsError(true);
      setIsLoading(false);
      setIsSuccess(false);
    }
  };

  return { isLoading, isError, isSuccess, handleRequest, errorMsg };
}
