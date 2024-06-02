import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const clientStore = create((set) => ({
  singleClient: [],
  updateSingleClientDetails: (clientDetails) =>
    set((state) => ({ singleClient: clientDetails })),
}));

export const analyticsStore = create((set) => ({
  analyticsData: {},
  updateAnalyticsData: (analytics) =>
    set((state) => ({ analyticsData : analytics })),
}));
