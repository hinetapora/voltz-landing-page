import { MutableRefObject, useEffect, useState } from "react";

type RefType = MutableRefObject<null | HTMLElement>;

const useScrollPosition = (ref: RefType) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollThrottleDelay = 16; // set the desired throttle delay in milliseconds

  useEffect(() => {
    // function to handle scroll event with throttling
    const handleScroll = () => {
      // use requestAnimationFrame for smoother animation
      requestAnimationFrame(() => {
        // update scroll position
        const currentScrollPosition = ref
          ? ref?.current?.getBoundingClientRect()?.y || 0
          : window.scrollY;

        setScrollPosition(currentScrollPosition);
      });
    };

    // add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]); // update effect dependency to include scrollPosition

  return scrollPosition;
};

export default useScrollPosition;
