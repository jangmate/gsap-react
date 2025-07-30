import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./pages/home/Home.jsx";
import SubLayout from "./layouts/SubLayout.jsx";
import Book from "./pages/gsap/Book.jsx";
import Error from "./error/Error.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <Error />,
        children: [
            { index: true, element: <Home /> },
        ],
    },
    {
        path: "/gsap",
        element: <SubLayout />,
        errorElement: <Error />,
        children: [
            { index: true, element: <Book /> },
            // { path: "gsap/intro", element: <Intro /> },
            // { path: "gsap/history", element: <History /> },
            // { path: "gsap/organization", element: <Organization /> },
        ],
    },
    // {
    //     path: "/sass",
    //     element: <SubLayout />,
    //     children: [
    //         { index: true, element: <Home /> },
    //         { path: "gsap/intro", element: <Intro /> },
    //         { path: "gsap/history", element: <History /> },
    //         { path: "gsap/organization", element: <Organization /> },
    //     ],
    // },
    // {
    //   path: "/portfolio",
    //   element: <PortfolioLayout />,
    //   errorElement: <Error />,
    //   children: [
    //     { path: 'portfolio', element: <Portfolio />},
    //     { path: 'portfolioView/:boardSeq', element: <PortfolioView />}
    //   ]
    // }
]);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
