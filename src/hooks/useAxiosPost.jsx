import { userStore } from "@/store/user";
import axios from "axios";
import { useState } from "react";

export default function useAxiosPost({ url, queryName }) {
  const token_id = userStore((state) => state.token_id);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleRequest = async (data) => {
      try {
        setIsLoading(true);
        setIsError(false)
        setIsSuccess(false)
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
        }
      } catch (error) {
        setIsError(true);
        setIsLoading(false)
        setIsSuccess(false)
      }
  }

  return { isLoading, isError, isSuccess, handleRequest };
}
