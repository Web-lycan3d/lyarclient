/** @format */

import { useEffect } from "react";
import AOS from "aos";

export const AosEffect = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);
};
