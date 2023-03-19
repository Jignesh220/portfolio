import React from "react";
import { Tooltip } from "@mui/material";
import AOS from "aos";

export default function Footer() {
  React.useEffect(() => {
    AOS.init({
      // Global settings:
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 100, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 199, // the delay on throttle used while scrolling the page (advanced)
      easing: "ease", // default easing for AOS animations
    });
  }, []);

  return (
    <div>
      <div class="container-fluid text-center bg-theme fixed-bottom py-1">
        <Tooltip title="Mail">
          <a
            className="text-danger t1 ms-3 me-2 fs-5"
            href="mailto:jigneshbaria1777@gmail.com"
            target="_blank"
            data-aos="zoom-out-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="1850"
            data-aos-duration="1000"
          >
            <i alt="Mail logo" class="bi bi-envelope" />
          </a>
        </Tooltip>
        <Tooltip title="Linkedin">
          <a
            className="text-primary t1 ms-3 me-2 fs-5"
            href="https://www.linkedin.com/in/jignesh-baria/"
            target="_blank"
            data-aos="zoom-out-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="2250"
            data-aos-duration="1000"
          >
            <i alt="Linkedin logo" class="bi bi-linkedin" />
          </a>
        </Tooltip>
        <Tooltip title="GitHub">
          <a
            className="text-light t1 ms-3 me-2 fs-5"
            href="https://github.com/Jignesh220"
            target="_blank"
            data-aos="zoom-out-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="2650"
            data-aos-duration="1000"
          >
            <i alt="GitHub logo" class="bi bi-github" />
          </a>
        </Tooltip>
      </div>
    </div>
  );
}
