import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function useAOS(options = { duration: 1000, once: true }) {
  useEffect(() => {
    AOS.init(options);
  }, [options]);
}