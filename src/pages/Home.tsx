import { useAppContext } from "../context/appContext";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import CardModal from "../components/CardModal";
import Loader from "../components/Loader";

const Home = () => {
    const { isLoading, isModalOpen } = useAppContext();

    if (isLoading) {
        return <Loader />;
    }

    return (
        <>
            <Navbar />
            <main className='container'>
                <Cards />
            </main>
            {isModalOpen && <CardModal />}
        </>
    );
};
export default Home;
