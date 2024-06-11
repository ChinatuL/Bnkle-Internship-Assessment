import Card from "./Card";
import { useAppContext } from "@context/appContext";
import type { Post as PostData } from "@lib/definitions";


const Cards = () => {
  const { posts, openModal } = useAppContext();
    return (
        <div className='posts'>
            {posts.map((post: PostData) => {
              return <Card key={post.id} post={post} onClick={openModal} />;
            })}
        </div>
    );
};
export default Cards;
