import { useState, useEffect } from "react";
import { AppContext } from "./appContext";
import { disableScroll, enableScroll } from "../lib/utils";
import { Post } from "../lib/definitions";

const API_URL =
    "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [post, setPost] = useState<Post | null>(null);

    const openModal = (id: number) => {
        const post = posts.find((post) => post.id === id);
        if (!post) return;
        setPost(post);
        setIsModalOpen(true);
        disableScroll();
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setPost(null);
        enableScroll();
    };

    const fetchPosts = async () => {
        try {
            const response = await fetch(API_URL);
            const posts = await response.json();
            setPosts(posts);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <AppContext.Provider
            value={{
                posts,
                isLoading,
                isModalOpen,
                post,
                openModal,
                closeModal,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
