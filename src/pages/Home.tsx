import { useState, useEffect } from "react";
import { Post } from "../lib/definitions";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";

const API_URL =
    "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts";

const Home = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState(true);

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
                <Cards posts={posts} />
            </main>
        </>
    );
};
export default Home;
