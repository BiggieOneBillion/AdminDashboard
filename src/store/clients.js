import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { userStore } from "./user";

export const clientStore = create((set) => ({
  singleClient: [],
  updateSingleClientDetails: (clientDetails) =>
    set((state) => ({ singleClient: clientDetails })),
  allClient: [],
  updateAllClientDetails: (clientDetails) =>
    set((state) => ({ allClient: clientDetails })),
  execute: async () => {
    const token_id = userStore.getState().token_id;
    try {
      const response = await axios.get(
        "https://api-prestigecalendar.olotusquare.co/api/v1/admin/clients?page=1&limit=15",
        {
          headers: {
            Authorization: `Bearer ${token_id}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status == 200) {
        // console.log(response.data);
        set({ allClient: response.data?.entity?.data });
      }
    } catch (error) {}
  },
}));

export const analyticsStore = create((set) => ({
  analyticsData: {},
  updateAnalyticsData: (analytics) =>
    set((state) => ({ analyticsData: analytics })),
}));


