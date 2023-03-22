import React, { useEffect, useRef, useState, useContext } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import cn from "classnames";
import CursorManager, { CursorContext } from "../CustomCursor/CursorManager";
import useOnScreen from "../../utils/useOnscreen";

export default function ImageTrans({ imageDetails, image }) {
  const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

  const [reveal, setReveal] = useState(false);
  const scrollRef = useRef(null);
  const mouseRef = useRef(null);
  const mouseContext = useContext(CursorContext);
  const [clipMaskRadius, setClipMaskRadius] = useState(0);
  const [clipMask, setClipMask] = useState({ x: 0, y: 0 });
  const onScreen = useOnScreen(scrollRef, 0.3);

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
    <>
      <div className="wrapper">
        <div className={cn("container", { "is-reveal": reveal })}>
          <div className="row center">
            <div className="image-container">
              <div
                className="thumbnail"
                data-scroll
                data-scroll-speed={1}
                style={{
                  width: imageDetails.width,
                  height: imageDetails.height,
                }}
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
                <div className={cn("frame sepia", { reveal: onScreen })} ref={scrollRef}>
                  <motion.img
                    src="/img3.JPG"
                    alt="Yasmeen Tariq"
                    whileHover={{ scale: 1.1 }}
                    transition={transition}
                  />
                </div>

                <div className={cn("frame masked", { reveal: onScreen })}>
                  <motion.img
                    src="/img3.JPG"
                    alt="Yasmeen Tariq"
                    whileHover={{ scale: 1.1 }}
                    transition={transition}
                    style={{
                      clipPath: `circle(${clipMaskRadius}% at ${clipMask.x}% ${clipMask.y}%)`,
                    }}
                  />
                </div>
              </div>

              <motion.div
                exit={{ opacity: 0 }}
                transition={transition}
                className="information"
              >
                <div className="title">Yasmeen Tariq</div>
                <div className="location">
                  <span>28.538336</span>
                  <span>-81.379234</span>
                </div>
              </motion.div>
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
