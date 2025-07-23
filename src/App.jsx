import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import Book from "./components/Book.jsx";
import './App.css';
gsap.registerPlugin(MotionPathPlugin);

export default function App() {
    const container = useRef(null);

    useGSAP(() => {
    }, { scope: container });

    return (
        <>
            <Book />
        </>
    );
}
