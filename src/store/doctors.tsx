import { create } from "zustand";

export interface IDoc {
  email: string;
  type: string;
  id: number;
}

export interface IDocs {
  doctors?: IDoc[];
  getDoctors(): void;
}

export const useDoctorsStore = create<IDocs>((set) => ({
  getDoctors: async () => {
    const getDoctors = await fetch("http://localhost:3000/doctors");
    const response = await getDoctors.json();

    set({ doctors: response.load });
  },
}));
