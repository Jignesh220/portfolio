import React from "react";
import { Link } from "gatsby";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import AOS from "aos";

export default function Mfooter() {
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
    <div
      id="contact"
      
    >
      <div class="container-fluid text-center bg-theme mb-4 py-1">
        <div className="mono-text text-light mb-4" data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-delay="50"
        data-aos-duration="1000">
          Designed & Built by Jignesh Baria
          <Link
            to="https://github.com/Jignesh220/portfolio"
            className="mono-text mb-5 text-decoration-none"
          >
            <span className=" ms-2 me-1">(</span>
            <Tooltip title="Portfolio website GitHub" placement="top">
              <IconButton>
                <GitHubIcon className="text-light t1 fs-5" />
              </IconButton>
            </Tooltip>
            <span className="ms-1">)</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
