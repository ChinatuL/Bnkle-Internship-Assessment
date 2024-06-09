import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Analytics from "./pages/Analytics";

const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/analytics", element: <Analytics /> },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
