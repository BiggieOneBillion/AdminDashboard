import { userStore } from "@/store/user";
import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

export default function useAxiosPost({ url, queryName, mainfn }) {
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
          "Content-Type": "application/json",
        },
      });
      // console.log(response);
      if (response.status === 201) {
        setIsLoading(false);
        setIsSuccess(true);
        queryClient.invalidateQueries(queryName);
        if (fn) fn();
      }
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        setIsError(true);
        if (mainfn) {
          mainfn(error, setErrorMsg);
        } else {
          setErrorMsg(
            error.response.data.message
              ? error.response.data.message
              : "Try again"
          );
        }
      } else if (error.request) {
        // The request was made but no response was received
        setErrorMsg("Network Error, Check Connection!");
        setIsError(true);
      } else {
        // Something happened in setting up the request that triggered an Error
        setErrorMsg("Contact Admin");
        setIsError(true);
      }
      setIsLoading(false);
      setIsSuccess(false);
    }
  };

  return { isLoading, isError, isSuccess, handleRequest, errorMsg };
}
