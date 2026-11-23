import { create } from "zustand";

type Tema = "claro" | "oscuro";

interface TemaState {
    tema: Tema;
    cambiarTema: () => void;
}

export const useTemaStore = create<TemaState>((set) => ({
    tema: "claro",
    cambiarTema: () => set((e) => ({
        tema: e.tema === "claro" ? "oscuro" : "claro"
    }))
}));