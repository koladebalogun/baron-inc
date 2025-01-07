import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";


const Banner = () => {
  useEffect(() => {
    document.body.addEventListener("mousemove", (event) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      gsap.set(".cursor", {
        x: mouseX,
        y: mouseY,
      });

      gsap.to(".shape", {
        x: mouseX,
        y: mouseY,
        stagger: -0.1,
      });
    });
  });

  return (
    <>
      <div className="banner-container">
        <div className="cursor"></div>
        <div className="shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        <div className="banner-content">
          <h1 className="banner-text">Hello, I'm KOLADE.</h1>
          <div className="txt">
            <p>
              I'm a frontend developer who loves crafting creative solutions to
              problems of various complexities.
            </p>
            <p>
              I also see my self as the bridge between the gap of implementation
              and design
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
