import { useEffect, useState, useRef } from "react";
// import LocomotiveScroll, {LocomotiveScrollOptions, Scroll} from "locomotive-scroll";

const useLocomotiveScroll = ({ ref, ...otherProps }) => {
  const [locomotiveScrollRef, setRef] = useState(null);

  useEffect(() => {
    if (ref.current) {
      import("locomotive-scroll").then((locomotiveModule) => {
        const scroll = new locomotiveModule.default({
          el: ref.current,
          lerp: 0.05,
          smooth: true,
          smoothMobile: false,
          resetNativeScroll: true,
          ...otherProps,
        });

        setRef(scroll);
      });
    }
    return () => {
      locomotiveScrollRef?.destroy();
    };
  }, [ref]);

  
  return locomotiveScrollRef;
};

export default useLocomotiveScroll;
