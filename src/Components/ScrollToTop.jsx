import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top whenever the route changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  useEffect(() => {
    const handleClick = (event) => {
      // Ensure the click is on a navigation link
      const closestLink = event.target.closest("a");
      if (closestLink && closestLink.href.includes(window.location.href)) {
        // Scroll to top if the link points to the current page
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default ScrollToTop;
