import { userStore } from "@/store/user";
import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

export default function useAxiosPost({ url, queryName, fn }) {
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
      console.log(response);
      if (response.status === 201) {
        setIsLoading(false);
        setIsSuccess(true);
        queryClient.invalidateQueries(queryName);
        if (fn) setTimeout(() => fn(), 2000);
      }
    } catch (error) {
      if (error.message === "Request failed with status code 500") {
        setErrorMsg("Device id or Imei id already exist!");
        setIsError(true);
        setIsLoading(false);
        setIsSuccess(false);
      } else {
        setIsLoading(false);
        setIsSuccess(false);
      }
    }
  };

  return { isLoading, isError, isSuccess, handleRequest, errorMsg };
}
