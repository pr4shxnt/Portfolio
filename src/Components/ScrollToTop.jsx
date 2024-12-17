import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
    };

    scrollToTop();
  }, [pathname]); // Trigger on pathname change

  useEffect(() => {
    const handleClick = (event) => {
      // Ensure the click is on a navigation link
      const closestLink = event.target.closest("a");
      if (closestLink && closestLink.getAttribute("href") === pathname) {
        window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top on repeated navigation
      }
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [pathname]);

  return null; // This component doesn't render anything
};

export default ScrollToTop;
