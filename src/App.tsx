import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "@pages/Home";
import Analytics from "@pages/Analytics";
import Error from "@pages/Error";

const router = createBrowserRouter([
    { path: "/", element: <Home />, errorElement: <Error /> },
    { path: "/analytics", element: <Analytics />, errorElement: <Error /> },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
