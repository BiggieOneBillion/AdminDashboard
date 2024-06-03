import { userStore } from "@/store/user";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export default function usePostData({ url, queryName, fn }) {
  const token_id = userStore((state) => state.token_id);
  const mutations = useMutation({
    mutationFn: (data) => {
      return axios.post(url, data, {
        headers: {
          Authorization: `Bearer ${token_id}`,
          "Content-Type": "application/json",
        },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(queryName);
      fn();
    },
    retry: false,
  });

  return { mutations };
}
