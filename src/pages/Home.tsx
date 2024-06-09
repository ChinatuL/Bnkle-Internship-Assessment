import { useState, useEffect } from "react";
import { Post } from "../lib/definitions";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import CardModal from "../components/CardModal";
import { disableScroll, enableScroll } from "../lib/utils";

const API_URL =
    "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts";

const Home = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState<Post | null>(null);

    const openModal = (id: number) => {
        const post = posts.find((post) => post.id === id);
        if (!post) return;
        setModalContent(post);
        setIsModalOpen(true);
        disableScroll();
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalContent(null);
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

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Navbar />
            <main className='container'>
                <Cards posts={posts} openModal={openModal} />
            </main>
            {isModalOpen && modalContent && (
                <CardModal
                    modalContent={modalContent}
                    closeModal={closeModal}
                    isModalOpen={isModalOpen}
                />
            )}
        </>
    );
};
export default Home;
