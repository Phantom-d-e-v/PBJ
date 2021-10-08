import create from "zustand";
import { devtools } from "zustand/middleware";

export const global = create(
  devtools((set) => ({
    login: false,
    username: "",
    uName: "",
    about: "",
    education: "",
    education1: "",
    work: "",
    work1: "",
    address: "",
    number: "",
    email: "",
    languages: "",
    techSkills: "",
    techSkills1: "",
    hobbies: "",
    hobbies1: "",

    setLogin: (login) => set({ login }),
    setUsername: (username) => set({ username }),
    setUName: (uName) => set({ uName }),
    setAbout: (about) => set({ about }),
    setEducation: (education) => set({ education }),
    setEducation1: (education1) => set({ education1 }),
    setWork: (work) => set({ work }),
    setWork1: (work1) => set({ work1 }),
    setAddress: (address) => set({ address }),
    setNumber: (number) => set({ number }),
    setEmail: (email) => set({ email }),
    setLanguages: (languages) => set({ languages }),
    setTechSkills: (techSkills) => set({ techSkills }),
    setTechSkills1: (techSkills1) => set({ techSkills1 }),
    setHobbies: (hobbies) => set({ hobbies }),
    setHobbies1: (hobbies1) => set({ hobbies1 }),
  }))
);
