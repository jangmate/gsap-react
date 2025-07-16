import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Cards() {
    const scope = useRef();

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: scope.current,
                    start: "top 80%",
                    end: "top 10%",
                    scrub: true,
                },
            });

            tl.to(".card:nth-child(1)", { x: "-120%", ease: "power1.out" })
                .to(".card:nth-child(2)", { x: "120%", ease: "power1.out" }, "<")
                .to(".card:nth-child(3)", { y: "-120%", ease: "power1.out" }, "<");
        },
        { scope },
    );

    return (
        <section ref={scope} className="cards">
            <div className="card">A</div>
            <div className="card">B</div>
            <div className="card">C</div>
        </section>
    );
}