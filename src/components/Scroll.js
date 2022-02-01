/** @format */

import { useLocation } from "react-router-dom";

export const Scroll = () => {
  const location = useLocation();
  const { scroll } = window.Qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  if (scroll) {
    window.scrollTo(0, 0);

    //     setTimeout(() => {
    //       window.history.pushState({}, "gcs", "/gcs");
    //     }, 2000);
  }
};
