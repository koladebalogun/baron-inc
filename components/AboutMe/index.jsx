import React, { useEffect, useState, useRef } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import SplitText from "../../utils/Split3.min.js";

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const imageDetails = {
  width: 524,
  height: 640,
};
const firstName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const lastName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
};

const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { duration: 1, ...transition },
  },
};

export default function AboutMe() {
  const scrollRef = useRef(null);
  const textRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState();
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    if (canScroll === false) {
      document.querySelector("body").classList.add("no-scroll");
    } else {
      document.querySelector("body").classList.remove("no-scroll");
    }
  }, [canScroll]);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  console.log(windowWidth);

  return (
    <div className="maincon">
      <motion.div
        onAnimationComplete={() => setCanScroll(true)}
        className="single"
        initial="initial"
        animate="animate"
        exit="exit"
        ref={scrollRef}
      >
        <div className="container fluid">
          <div className="row center top-row">
            <div className="top">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="details"
              >
                <div className="location">
                  <span>6.5244° N</span>
                  <span>-3.3792° E</span>
                </div>
              </motion.div>
              <motion.div className="model">
                <motion.span className="first" variants={firstName}>
                  <motion.span variants={letter}>B</motion.span>
                  <motion.span variants={letter}>A</motion.span>
                  <motion.span variants={letter}>R</motion.span>
                  <motion.span variants={letter}>O</motion.span>
                  <motion.span variants={letter}>N</motion.span>
                </motion.span>
                <motion.span className="last" variants={lastName}>
                  <motion.span variants={letter}>E</motion.span>
                  <motion.span variants={letter}>V</motion.span>
                  <motion.span variants={letter}>E</motion.span>
                  <motion.span variants={letter}>N</motion.span>
                  <motion.span variants={letter}>T</motion.span>
                  <motion.span variants={letter}>S</motion.span>
                </motion.span>
              </motion.div>

              <div>
                <p style={{color:"#FEBE10"}}>scroll down</p>
              </div>
            </div>
          </div>
          <div className="row bottom-row">
            <div className="bottom">
              <motion.div className="image-container-single">
                <motion.div
                  initial={{
                    y: "-50%",
                    width: imageDetails.width,
                    height: imageDetails.height,
                  }}
                  animate={{
                    y: 0,
                    width: "100%",
                    height: windowWidth > 1440 ? 800 : 400,
                    transition: { delay: 0.2, ...transition },
                  }}
                  className="thumbnail-single"
                >
                  <motion.div
                    className="frame-single"
                    whileHover="hover"
                    transition={transition}
                  >
                    <motion.img
                      src="/image8.jpg"
                      alt="an image"
                      style={{ scale: scale }}
                      initial={{ scale: 1.0 }}
                      animate={{
                        transition: { delay: 0.2, ...transition },
                        y: windowWidth > 1440 ? -1200 : -600,
                      }}
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
            {/* <ScrollForMore /> */}
          </div>
        </div>
        <div className="detailed-information">
          <div className="container">
            <div className="text">
              <p>
                At Baron-inc Events, we’re driven by a passion for delivering
                unparalleled experiences in entertainment and sports. From
                curating unforgettable events to nurturing top-tier talent,
                we’re here to bring your visions to life and help you achieve
                your goals. Every project we undertake is thoughtfully
                crafted with precision and creativity, ensuring that you feel
                empowered, celebrated, and at the center of the action. Our
                team is dedicated to providing exceptional support, whether
                you’re an entertainer, or enthusiast. At Baron-inc, it’s about creating a legacy worth remembering.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
