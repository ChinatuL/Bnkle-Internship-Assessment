import { useRouteError, Link } from "react-router-dom";
const Error = () => {
  const error = useRouteError();

    return (
        <main className='container'>
            <div className='error'>
                <div className='error__text'>
                    {error.status === 404 ? (
                        <>
                            <h1>404</h1>
                            <p>You seem to be lost</p>
                            <div>
                                <Link to='/'>Back Home</Link>
                            </div>
                        </>
                    ) : (
                        <>
                            <p>Something went wrong...</p>
                        </>
                    )}
                </div>
            </div>
        </main>
    );
};
export default Error;
