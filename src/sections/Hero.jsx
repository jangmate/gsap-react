import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
    const scope = useRef();

    useGSAP(
        () => {
            gsap.to(".hero h1", {
                y: 0,
                opacity: 1,
                ease: "power3.out",
                duration: 1,
                stagger: 0.15,
            });
        },
        { scope },
    );

    return (
        <section ref={scope} className="hero">
            <h1>Animate</h1>
            <h1>Your</h1>
            <h1>World</h1>
        </section>
    );
}
