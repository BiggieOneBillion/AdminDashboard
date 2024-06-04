import { userStore } from "@/store/user";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export default function usePostData({ url, queryName,  }) {
  const token_id = userStore((state) => state.token_id);
  // const queryClient = useQueryClient();
  const mutations = useMutation({
    mutationFn: (data) => {
      return axios.post(url, data, {
        headers: {
          Authorization: `Bearer ${token_id}`,
          "Content-Type": "application/json",
        },
      });
    },
    onSuccess: (data) => {
      console.log(data);
      // queryClient.invalidateQueries(queryName);
      // if (fn) fn();
    },
    retry: false,
  });

  return { mutations };
}
