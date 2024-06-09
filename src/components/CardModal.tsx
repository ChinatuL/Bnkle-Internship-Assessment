import { Post } from "../lib/definitions";

type ModalProps = {
    modalContent: Post;
    closeModal: () => void;
    isModalOpen: boolean;
};

const CardModal = ({ modalContent, closeModal, isModalOpen }: ModalProps) => {
    const { title, content, thumbnail, author } = modalContent;
    const { small } = thumbnail;
    const { avatar, name, role } = author;

    return (
        <div className='modal'>
            <div
                className={
                    isModalOpen
                        ? "modal__content show__modal"
                        : "modal__content"
                }
            >
                <div className='modal__header'>
                    <button
                        className='modal__btn'
                        onClick={closeModal}
                        aria-label='close modal'
                    >
                        <i className='fa-solid fa-xmark fa-xl'></i>
                    </button>
                </div>
                <div className='modal__img'>
                    <img src={small} alt='' />
                </div>
                <div className='modal__text'>
                    <h2 className='modal__title'>{title}</h2>
                    <p className='modal__description'>{content}</p>
                    <div className='modal__footer'>
                        <img src={avatar} alt='' />
                        <p>
                            <span>{name}</span> - <span>{role}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CardModal;
