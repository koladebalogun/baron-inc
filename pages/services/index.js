"use client";

import React, { useEffect } from "react";
import styles from "./styles.module.css";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Page() {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    const services = gsap.utils.toArray(`.${styles.service}`);
    console.log("Services elements:", services);

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const service = entry.target;
          const imgContainer = service.querySelector(`.${styles.img}`);
          console.log("Observed service:", service);
          console.log("Image container:", imgContainer);

          ScrollTrigger.create({
            trigger: service,
            start: "bottom bottom",
            end: "top top",
            scrub: true,
            onUpdate: (self) => {
              let progress = self.progress;
              let newWidth =
                window.innerWidth < 768
                  ? 70 + 50 * progress
                  : 150 + 100 * progress;
              gsap.to(imgContainer, {
                width: newWidth + "%",
                duration: 0.1,
                ease: "none",
              });
            },
          });

          ScrollTrigger.create({
            trigger: service,
            start: "top bottom",
            end: "top top",
            scrub: true,
            onUpdate: (self) => {
              let progress = self.progress;
              let newWidth =
                window.innerWidth < 768
                  ? 250 + 50 * progress
                  : 550 + 100 * progress;
              gsap.to(service, {
                width: newWidth + "px",
                duration: 0.1,
                ease: "none",
              });
            },
          });

          observer.unobserve(service);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    services.forEach((service) => {
      observer.observe(service);
    });

    return () => {
      services.forEach((service) => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        observer.unobserve(service);
      });
    };
  }, []);

  const serviceData = [
    {
      title: "ARTIST PROMOTION",
      description:
        "Promoting your content to the right audience with precision and impact.",
      image: "/image6.jpg",
    },
    {
      title: "ARTIST BOOKINGS",
      description: "Connecting artists to top media platforms and interviews.",
      image: "/image7.jpg",
    },
    {
      title: "TALENT MANAGEMENT",
      description: "Placing your music on curated, genre-specific playlists.",
      image: "/image10.jpg",
    },
    {
      title: "TALENT BOOKING",
      description:
        "Securing and organizing global music shows to push audience engagement and solidify the credibility of your brand and talent",
      image: "/image5.jpg",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.hero}></div>
      <div className={styles.services}>
        <div className={styles.services_header}>
          <div className={styles.col}></div>
          <div className={styles.col}>
            <h1>All Services</h1>
          </div>
        </div>

        {serviceData.map((service, index) => (
          <div key={index} className={`${styles.service} services`}>
            <div className={styles.service_info}>
              <h1>{service.title}</h1>
              <p>{service.description}</p>
            </div>
            <div className={styles.service_img}>
              <div className={styles.img}>
                <img src={service.image} alt={service.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
