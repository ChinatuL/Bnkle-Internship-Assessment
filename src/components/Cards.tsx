import { Post } from "../lib/definitions";
import Card from "./Card";

type CardsProps = {
  posts: Post[],
  openModal: (id: number) => void
}

const Cards = ({ posts, openModal }: CardsProps) => {
    return (
        <div className='posts'>
            {posts.map((post: Post) => {
              return <Card key={post.id} post={post} onClick={openModal} />;
            })}
        </div>
    );
};
export default Cards;
