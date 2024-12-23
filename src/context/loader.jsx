import { create } from "zustand";

export const useLoader = create(
    (set)=>({
        loader: true,
        setLoader: (estado) => 
            set(() => ({
            loader: estado,
        })),
    }), 
);