import { Post } from "../lib/definitions";
import Card from "./Card";
const Cards = ({ posts }: { posts: Post[] }) => {
    return (
        <div className='posts'>
            {posts.map((post: Post) => {
                return <Card key={post.id} post={post} />;
            })}
        </div>
    );
};
export default Cards;
