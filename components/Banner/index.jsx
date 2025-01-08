import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "../../utils/Split3.min.js";
import style from "../../styles/Banner.module.css";
import HomepageSection from "@/components/HomepageSection";
import useLocomotiveScroll from "@/hooks/useLocomotiveScroll.js";

export default function Home() {
  const tl = gsap.timeline();
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const headertextRef = useRef(null);
  const gradientRef = useRef(null);
  const mainRef = useRef(null);

  const locomotiveRef = useLocomotiveScroll({
    ref: mainRef,
    smooth: true,
    class: "is-reveal",
  });

  // useEffect(() => {
  //   const split = new SplitText(headertextRef.current, {
  //     type: "lines",
  //     linesClass: "lineChildren",
  //   });

  //   const splitParent = new SplitText(headertextRef.current, {
  //     type: "lines ",
  //     linesClass: "lineParent",
  //   });

  //   gsap.to(split.lines, {
  //     duration: 1,
  //     y: 0,
  //     opacity: 1,
  //     stagger: 0.1,
  //     ease: "power2",
  //   });
  // }, []);

  useEffect(() => {
    gsap.to(containerRef.current, 0, { css: { visibility: "visible" } });

    tl.to(heroRef.current, 1, {
      opacity: 1,
      y: 60,
      ease: "ease.inOut",
      delay: 0.2,
      stagger: {
        amount: 0.5,
      },
    });

    tl.to(gradientRef.current, 0.6, {
      opacity: 1,
      ease: "ease.inOut",
      delay: 0.3,
    });
  });

  return (
    <div ref={mainRef}>
      {/* <section
        className={style.container}
        ref={containerRef}
        data-scroll-section
      >
        <div className={style.bggradient} ref={gradientRef}>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 500 500"
            width="100%"
            id="blobSvg"
            style={{ opacity: 1 }}
          >
            {" "}
            <defs>
              {" "}
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                {" "}
                <stop
                  offset="0%"
                  style={{ stopColor: "rgb(239, 204, 163)" }}
                ></stop>{" "}
                <stop
                  offset="100%"
                  style={{ stopColor: "rgb(226, 85, 146)" }}
                ></stop>{" "}
              </linearGradient>{" "}
            </defs>{" "}
            <path id="blob" fill="url(#gradient)" style={{ opacity: 1 }}>
              <animate
                attributeName="d"
                dur="7.9s"
                repeatCount="indefinite"
                values="M440.89145,308.17188Q431.49014,366.34375,386.51892,408.54441Q341.5477,450.74507,280.86143,454.67188Q220.17516,458.59868,161.4046,439.6065Q102.63404,420.61431,74.24712,365.23068Q45.86019,309.84704,51.25164,251.37253Q56.64309,192.89803,94.98232,154.25946Q133.32155,115.62089,180.13528,103.21957Q226.94901,90.81826,286.5366,64.96012Q346.12418,39.10197,382.33594,90.33923Q418.5477,141.57648,434.42023,195.78824Q450.29277,250,440.89145,308.17188Z;M463.5,311.5Q441,373,396,422Q351,471,287,455Q223,439,179,411Q135,383,79,350Q23,317,51.5,258.5Q80,200,94,143.5Q108,87,162,49.5Q216,12,281.5,24.5Q347,37,383.5,89Q420,141,453,195.5Q486,250,463.5,311.5Z;M440.79254,295.90011Q393.21514,341.80021,357.53347,375.20746Q321.85181,408.61471,271.82218,427.01866Q221.79254,445.4226,171.55544,422.09659Q121.31834,398.77057,68.79254,358.84083Q16.26674,318.91109,38.15202,256.60373Q60.03731,194.29637,79.65586,134.88912Q99.27441,75.48187,157.19648,42.12622Q215.11855,8.77057,268.67782,50.11855Q322.2371,91.46653,362.16684,121.87761Q402.09659,152.2887,445.23326,201.14435Q488.36994,250,440.79254,295.90011Z;M430.80624,308.72934Q432.1339,367.45868,372.72647,377.66948Q313.31905,387.88027,263.72647,442.80911Q214.1339,497.73795,154.61821,463.08837Q95.10253,428.43879,60.15953,372.16526Q25.21653,315.89174,60.3661,260.16239Q95.51568,204.43305,120.04418,166.21939Q144.57268,128.00574,181.94874,82.19376Q219.32479,36.38179,273.74216,57.19376Q328.15953,78.00574,384.05413,102.85329Q439.94874,127.70084,434.71366,188.85042Q429.47858,250,430.80624,308.72934Z;M437.20545,311.82292Q441.89352,373.64584,380.77431,387.66608Q319.65509,401.68633,271.82754,416.34317Q224,431,184.22569,401.27431Q144.45139,371.54861,81.45601,344.74769Q18.46064,317.94676,58.87153,261.64584Q99.28242,205.34491,102.46413,144.38253Q105.64584,83.42014,164.05961,69.5926Q222.47338,55.76506,274.24769,69.97338Q326.02199,84.18171,376.989,109.95139Q427.95601,135.72107,430.23669,192.86053Q432.51737,250,437.20545,311.82292Z;M456.0768,303.76136Q418.13543,357.52271,379.98225,404.29316Q341.82907,451.0636,284.01817,433.65772Q226.20727,416.25185,163.99091,418.54046Q101.77456,420.82907,62.72047,368.86953Q23.66638,316.90999,61.99091,261.65772Q100.31545,206.40545,118.97771,163.62635Q137.63998,120.84725,179.51817,86.26136Q221.39637,51.67547,267.19818,81.83773Q313,112,367.68455,125.86045Q422.36911,139.7209,458.19364,194.86045Q494.01817,250,456.0768,303.76136Z;M440.89145,308.17188Q431.49014,366.34375,386.51892,408.54441Q341.5477,450.74507,280.86143,454.67188Q220.17516,458.59868,161.4046,439.6065Q102.63404,420.61431,74.24712,365.23068Q45.86019,309.84704,51.25164,251.37253Q56.64309,192.89803,94.98232,154.25946Q133.32155,115.62089,180.13528,103.21957Q226.94901,90.81826,286.5366,64.96012Q346.12418,39.10197,382.33594,90.33923Q418.5477,141.57648,434.42023,195.78824Q450.29277,250,440.89145,308.17188Z"
              ></animate>
            </path>
          </svg>
        </div>

        <div className={style.herocontainer}>
          <div className={style.hero} ref={heroRef}>
            <h1
              id={style.headertext}
              style={{ color: "#fff" }}
              ref={headertextRef}
            >
              *BARON-INC* <br />
            </h1>
            <p className={style.text}>
              Welcome to Baron-inc Events, where passion meets performance. We
              are the ultimate fusion of entertainment and sports excellence,
              crafting unforgettable experiences and empowering talent to
              shine on the global stage. Our mission is to be the premier
              destination for those who value the thrill of competition, the
              art of entertainment, and the pursuit of greatness.
            </p>
            <p
              className={style.text}
              style={{ textDecoration: "underline", color: "yellow" }}
            >
              Scroll down
            </p>
          </div>
        </div>
      </section> */}
      <HomepageSection />
    </div>
  );
}
