import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./pages/home/Home.jsx";
import SubLayout from "./layouts/SubLayout.jsx";
import Book from "./pages/gsap/Book.jsx";
import Error from "./error/Error.jsx";

const basename = process.env.NODE_ENV === "production" ? "/gsap-react" : "";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <MainLayout />,
            errorElement: <Error />,
            children: [{ index: true, element: <Home /> }],
        },
        {
            path: "/gsap",
            element: <SubLayout />,
            errorElement: <Error />,
            children: [{ index: true, element: <Book /> }],
        },
    ],
    { basename }  // ← 여기 변수 사용
);


function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
