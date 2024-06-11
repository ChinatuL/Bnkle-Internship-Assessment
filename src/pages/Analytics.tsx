import { usePostAnalytics } from "@hooks/usePostAnalytics";
import { useAppContext } from "@context/appContext";
import { Post } from "@lib/definitions";
import Navbar from "@components/Navbar";
import Loader from "@components/Loader";

const Analytics = () => {

  const { posts, isLoading } = useAppContext();
  const [analytics] = usePostAnalytics();
  const computedPosts = posts.map((post: Post) => {
      return { ...post, numberOfClicks: analytics[post.id] ?? 0 };
  });

  if (isLoading) {
      return <Loader />;
  }
    return (
        <>
            <Navbar />
            <main className='container'>
                <div className='analytics'>
                    <h1 className='analytics__heading'>Post Analytics</h1>
                    <table className='analytics__table'>
                        <thead>
                            <tr>
                                <th>S/N</th>
                                <th>Card ID</th>
                                <th>Card Title</th>
                                <th>Number of Clicks</th>
                            </tr>
                        </thead>
                        <tbody>
                            {computedPosts.map((post, index) => {
                                const { id, title, numberOfClicks } = post;
                                const serialNumber = index + 1;
                                return (
                                    <tr key={id}>
                                        <td>{serialNumber}</td>
                                        <td>{id}</td>
                                        <td className='analytics__post-title'>
                                            {title}
                                        </td>
                                        <td>{numberOfClicks}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    );
};
export default Analytics;
