import { useEffect, useState } from "react";

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollThrottleDelay = 16; // set the desired throttle delay in milliseconds

  useEffect(() => {
    // function to handle scroll event with throttling
    const handleScroll = () => {
      // use requestAnimationFrame for smoother animation
      requestAnimationFrame(() => {
        // update scroll position
        const currentScrollPosition = window.scrollY;

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
