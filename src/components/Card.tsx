import { Post } from "@lib/definitions";
import { formatDate } from "@lib/utils";

type CardProps = {
    post: Post;
    onClick: (id: number) => void;
};

const Card = ({ post, onClick }: CardProps) => {
    const { id, date, title, content, thumbnail, author } = post;
    const { large } = thumbnail;
    const { name, role } = author;
    return (
        <article className='post' onClick={() => onClick(id)} data-testid={id}>
            <div className='post__img'>
                <img src={large} alt='' />
                <div className='post__img-overlay'>
                    <button className='post__btn'>Learn more</button>
                </div>
            </div>
            <div className='post__content'>
                <div className='post__bullets'>
                    <div className='post__bullet post__bullet-blue'></div>
                    <div className='post__bullet post__bullet-yellow'></div>
                </div>
                <div className='post__text'>
                    <h2 className='post__title lato-bold'>{title}</h2>
                    <p className='post__description'>{content}</p>
                    <div className='post__attribution'>
                        <p>
                            <span>{name}</span> - <span>{role}</span>
                        </p>
                        <p>{formatDate(date)}</p>
                    </div>
                </div>
            </div>
        </article>
    );
};
export default Card;
