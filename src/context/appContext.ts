import { createContext, useContext } from "react";
import { Post } from "../lib/definitions";

type ContextType = {
    posts: Post[];
    isLoading: boolean;
    error: boolean;
    isModalOpen: boolean;
    post: Post | null;
    openModal: (id: number) => void;
    closeModal: () => void;
};

type AppContextType = ContextType | null;

export const AppContext = createContext<AppContextType>(null);

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within an AppProvider");
    }
    return context;
};
