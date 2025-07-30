
import gsap from "gsap";
import {useEffect, useRef} from "react";
import  { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Book () {
    const containerRef = useRef(null);

    useEffect(() => {
        const el = containerRef.current;

        gsap.to(el, {
            rotateY: 360,
            scrollTrigger: {
                trigger: document.body,
                start: "top top",
                end: "bottom bottom",
                scrub: true,
            },
        });
    }, []);

    return (
        <>
            <div className={'book-container'} ref={containerRef}>
                <div className={'book-front'}></div>
                <div className={'book-back'}></div>
                <div className={'book-left-side'}>카리나</div>
                <div className={'book-right-side'}>지민양</div>
            </div>
        </>
    )
}