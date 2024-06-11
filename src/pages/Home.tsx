import { useAppContext } from "../context/appContext";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import CardModal from "../components/CardModal";
import Loader from "../components/Loader";
import Error from "./Error";

const Home = () => {
    const { isLoading, error, isModalOpen } = useAppContext();

    if (isLoading) {
        return <Loader />;
    }

  if (error) { 
        return <Error />;
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
