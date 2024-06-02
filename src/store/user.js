import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const userStore = create(
  persist(
    (set) => ({
      user: {
        fullname: "",
        id: "",
      },
      token_id: "",
      updateUser: (newUser) => set(() => ({ user: newUser })),
      setToken: (token) => set(() => ({ token_id: token })),
      reset: () => {
       
        // set({
        //   user: 0,
        //   token_id: "",
        // });
      },
    }),
    {
      name: "user-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

export const newTemplateStore = create((set) => ({
  count: [1],
  quotes: [],
  images: [],
  addCount: () =>
    set((state) => {
      state.count.push(1);
      return {
        count: state.count,
      };
    }),
  removeCount: () =>
    set((state) => {
      state.count.pop();
      return {
        count: state.count,
      };
    }),
  updateQuotes: (newQuote) => set((state) => ({ quotes: [...newQuote] })),
  // verifyFormData : () => {

  // }
}));

export const resetAll = (set) => ({
  resetAll: () => {
    userStore(set).reset()
  },
})
