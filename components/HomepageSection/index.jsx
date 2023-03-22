import React, { useState, useEffect, useRef, useContext } from "react";
import cn from "classnames";
// import useOnScreen from "../utils/useOnscreen";
import CursorManager, { CursorContext } from "../CustomCursor/CursorManager";
import useOnScreen from "../../utils/useOnscreen";
import { motion } from "framer-motion";
import styles from "@/styles/HomepageSection.module.css";
import Link from "next/link";

const GalleryItem = ({ imageDetails }) => {
  const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

  const [reveal, setReveal] = useState(false);
  const ref = useRef(null);
  const mouseRef = useRef(null);
  const mouseContext = useContext(CursorContext);
  const [clipMaskRadius, setClipMaskRadius] = useState(0);
  const [clipMask, setClipMask] = useState({ x: 0, y: 0 });
  const onScreen = useOnScreen(ref, 0.3);

  useEffect(() => {
    setTimeout(() => {
      setReveal(true);
    }, 100);
  }, []);


  useEffect(() => {
    const getCoordinates = (mouse) => {
      const imagePosition = {
        posX: mouseRef.current.offsetLeft,
        posY: mouseRef.current.offsetTop,
      };

      const posX = mouse.pageX - imagePosition.posX;
      const posY = mouse.pageY - imagePosition.posY;

      setClipMask({
        x: (posX / mouseRef.current.clientWidth) * 100,
        y: (posY / mouseRef.current.clientHeight) * 100,
      });
    };

    mouseRef.current.addEventListener("mousemove", (mouse) => {
      window.requestAnimationFrame(() => {
        getCoordinates(mouse);
      });
    });
  }, []);

  return (
    <div
      className={cn([styles.galleryitemwrapper, { "is-reveal": reveal }])}
      ref={mouseRef}
      onMouseEnter={() => {
        setClipMaskRadius(25);
        mouseContext.setSize("hide");
      }}
      onMouseLeave={() => {
        setClipMaskRadius(0);

        mouseContext.setSize("small");
      }}
    >
      <Link href="/About">
        <div
          className={`${styles.galleryitem} galleryitem`}
          ref={ref}
          data-scroll
          data-scroll-speed={1}
        >
          <div className={styles.galleryiteminfo}>
          </div>

          <div
            className={cn(
              [styles.galleryitemimage, styles.sepia],
              [{ reveal: onScreen }]
            )}
            data-scroll
            style={{
              backgroundImage: `url('/IMG6.JPG')`,
              width: imageDetails.width,
              height: imageDetails.height,
            }}
          ></div>

          <div
            className={`${styles.galleryitemimage} ${styles.masked}`}
            style={{
              backgroundImage: `url('/IMG6.JPG')`,
              clipPath: `circle(${clipMaskRadius}% at ${clipMask.x}% ${clipMask.y}%)`,
              width: imageDetails.width,
              height: imageDetails.height,
            }}
            data-scroll
          ></div>
        </div>
      </Link>
      <motion.div
        exit={{ opacity: 0 }}
        transition={transition}
        className={styles.information}
      >
        
      </motion.div>
    </div>
  );
};

const ProjectGallery = () => {
  const imageDetails = {
    width: 524,
    height: 640,
  };

  return (
    <section className={styles.gallerywrap} data-scroll-section>
      <div className={`${styles.gallery} gallery`}>
        <h3 className={styles.projecttext}>
          {" "}
          PROJECTS
        </h3>
        <GalleryItem imageDetails={imageDetails} />
      </div>
    </section>
  );
};

export default ProjectGallery;
