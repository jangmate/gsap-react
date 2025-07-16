import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
    const scope = useRef();

    useGSAP(
        () => {
            // 섹션을 화면에 고정
            ScrollTrigger.create({
                trigger: scope.current,
                start: "top top",
                end: "+=150%",
                scrub: true,
                pin: true,
            });

            // 이미지 패럴랙스
            gsap.to(".gallery img", {
                yPercent: -20,
                ease: "none",
                scrollTrigger: {
                    trigger: scope.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            });

            // 캡션 페이드‑업
            gsap.to(".gallery .caption", {
                y: -40,
                opacity: 1,
                scrollTrigger: {
                    trigger: scope.current,
                    start: "top 60%",
                    end: "top 30%",
                    scrub: true,
                },
            });
        },
        { scope },
    );

    return (
        <section ref={scope} className="gallery">
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80" alt="Unsplash example" />

            <div className="caption">Scroll • Parallax • Magic</div>
        </section>
    );
}