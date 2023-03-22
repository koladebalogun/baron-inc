import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "../../styles/Projects.module.css";
import Socials from "../Socials"

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef(null);
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);
  const titleRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const section = document.querySelectorAll("section");
    const isMobile = window.innerWidth <= 768;

    console.log(isMobile);

    let ctx = gsap.context(() => {
      const Elem = sectionRef.current;
      const video1 = video1Ref.current;
      const video2 = video2Ref.current;

      let elements = gsap.utils.selector(titleRef);

      gsap.to(Elem, {
        ease: "power1",
        scrollTrigger: {
          trigger: Elem,
          start: "top top",
          end: `+=250`,
          scrub: true,
          // pin: true,
          pinSpacing: true,
        },
      });

      let t2 = gsap
        .timeline({
          ease: "power1",
          scrollTrigger: {
            trigger: Elem,
            start: "top top",
            end: `+=250`,
            scrub: true,
          },
        })
        .to(video1, { scale: 0.3, ease: "power1" }, "key1")
        .to(video2, { scale: 0.6, ease: "power1" }, "key1");

      elements("h1").forEach((el) =>
        t2.fromTo(
          el,
          {
            scrollTrigger: {
              trigger: el,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
            x: 50,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
          }
        )
      );

      const tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            scrub: true,
            pin: !isMobile,
            start: "top top",
            end: () => "+=" + containerRef.current.offsetWidth,
          },
        })
        .to(containerRef.current, {
          x: () =>
            -(
              containerRef.current.scrollWidth -
              document.documentElement.clientWidth
            ) + "px",
          ease: "none",
          duration: 1,
        })

        .to({}, { duration: 1 / (section.length + 1) });

      return () => {
        tl.kill();
      };
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className={styles.mainwrapper} ref={containerRef}>
        <section className={styles.section} ref={sectionRef}>
          <div className={styles.sectioninner}>
            <video
              src="/vid2.mp4"
              autoPlay
              muted
              loop
              className={styles.video1}
              ref={video1Ref}
            />
            <video
              src="/nft.mp4"
              // autoPlay
              // muted
              // loop
              className={styles.video2}
              ref={video2Ref}
            />

            <div className={styles.titleContainer} ref={titleRef}>
              <div className={styles.title}>
                <h1>Projects {">"}</h1>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section2}>
          <div className={styles.nav}>
            <div className={styles.navitem}>project gallery</div>
          </div>
          <div className={styles.container}>
            <div className={styles.items}>
              <div className={styles.item}>
                <div className={styles.itemwrapper}>
                  <img src="/i1.png" alt="" />
                  <div className={styles.imageoverlay}></div>
                  <div className={styles.itemcopy}>
                    <div className={styles.itemname}>Angelina Pownall</div>
                    <div className={styles.id}>1</div>
                  </div>
                </div>
              </div>

              <div className={styles.item}>
                <div className={styles.itemwrapper}>
                  <img src="/i2.png" alt="" />
                  <div className={styles.imageoverlay}></div>
                  <div className={styles.itemcopy}>
                    <div className={styles.itemname}>
                      Dall-e image-generator
                    </div>
                    <div className={styles.id}>2</div>
                  </div>
                </div>
              </div>

              <div className={styles.item}>
                <div className={styles.itemwrapper}>
                  <img src="/i3.png" alt="" />
                  <div className={styles.imageoverlay}></div>
                  <div className={styles.itemcopy}>
                    <div className={styles.itemname}>Cryptowurld</div>
                    <div className={styles.id}>3</div>
                  </div>
                </div>
              </div>

              <div className={styles.item}>
                <div className={styles.itemwrapper}>
                  <img src="/i4.png" alt="" />
                  <div className={styles.imageoverlay}></div>
                  <div className={styles.itemcopy}>
                    <div className={styles.itemname}>Unilend Finance</div>
                    <div className={styles.id}>4</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div>
        <Socials />
      </div>
    </>
  );
}
