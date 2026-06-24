import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Jump to the top of the page whenever the route changes (e.g. when opening a
// project page). Without this, React keeps the previous scroll position.
export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
