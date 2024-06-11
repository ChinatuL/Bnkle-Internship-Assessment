import { useState, useEffect } from "react";
import { AppContext } from "./appContext";
import { disableScroll, enableScroll } from "../lib/utils";
import { Post } from "../lib/definitions";
import { usePostAnalytics } from "../hooks/usePostAnalytics";

const API_URL =
    "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [post, setPost] = useState<Post | null>(null);
    const [analytics, updateAnalytics] = usePostAnalytics();

    const openModal = (id: number) => {
        const post = posts.find((post) => post.id === id);
        if (!post) return;
        const postClicks = analytics[id] ?? 0;
        setPost(post);
        updateAnalytics({ [id]: postClicks + 1 });
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
            if (!response.ok) {
                setError(true);
                setIsLoading(false);
            }
            const posts = await response.json();
            setPosts(posts);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
            setError(true);
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
                error,
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
