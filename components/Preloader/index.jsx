import { timeline } from "motion";
import React, { useEffect, useRef } from "react";
import styles from "@/styles/Preloader.module.css";

function getSectionHeight(element) {
  const { height } = element.getBoundingClientRect();
  const { childElementCount } = element;

  return height / childElementCount;
}

export default function Preloader({ titleRef, imageRef }) {
  const loaderRef = useRef();
  const counterRef = useRef();
  const counterRef2 = useRef();

  useEffect(() => {
    if (counterRef.current && counterRef2.current) {
      const transformAmount = getSectionHeight(counterRef.current);

      const sequence = new Array(3).fill("").flatMap((_, index) => [
        [counterRef.current, { y: `-${transformAmount * (index + 1)}px` }],
        [
          counterRef2.current,
          { y: `-${transformAmount * (index + 1)}px` },
          { at: "-1.8" },
        ],
      ]);

      timeline(sequence, {
        defaultOptions: { easing: [0.77, 0, 0.175, 1], duration: 2 },
      });
    }
  }, []);

  useEffect(() => {
    const sequence = [
      
      [counterRef.current, { opacity: 0 }, { at: "<" }],
      [counterRef2.current, { opacity: 0 }, { at: "<" }],
      [loaderRef.current, { y: "-100vh" }, { at: "-0.5" }],
    
    ];

    timeline(sequence, {
      defaultOptions: {
        easing: [0.77, 0, 0.175, 1],
        duration: 1,
        delay: 7,
      },
    });
  }, []);

  return (
    <div className={styles.loadercontainer} ref={loaderRef}>
      <div className={styles.quote}>
        <h1>Prepare to see <span className={styles.dreams}>MAGIC</span></h1>
      </div>

      <div className={styles.countercontainer}>
        <ul className="counter-list" ref={counterRef}>
          <li>
            <h3>2</h3>
          </li>
          <li>
            <h3>4</h3>
          </li>
          <li>
            <h3>6</h3>
          </li>
          <li>
            <h3>9</h3>
          </li>
        </ul>
      </div>

      <div className={styles.countercontainer}>
        <ul className="counter-list" ref={counterRef2}>
          <li>
            <h3>3</h3>
          </li>
          <li>
            <h3>9</h3>
          </li>
          <li>
            <h3>8</h3>
          </li>
          <li>
            <h3>9</h3>
          </li>
        </ul>
      </div>
    </div>
  );
}
