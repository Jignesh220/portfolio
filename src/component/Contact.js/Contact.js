import React from "react";
import { Tooltip } from "@mui/material";
import AOS from "aos";

export default function Contact() {
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
      <div className="min-vh-100 bg-theme" id="header">
        <div className="container-fluid">
          <div className="card bg-theme border-0 min-vh-100 mx-5">
            <div className="my-auto">
              <div className="row">
                <div className="col-11 col-md-8 col-lg-6 col-sm-11 card mx-auto bg-theme border-0">
                  <center>
                    <div
                      className="text-center title"
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                      data-aos-delay="50"
                      data-aos-duration="1000"
                    >
                      Contact
                    </div>
                    <div className="mono-text text-light fs-5 mb-3 mt-5"
                    data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                      data-aos-delay="250"
                      data-aos-duration="1000"
                    >
                      I’m currently looking for any new opportunities, my inbox
                      is always open.
                      <div className="mt-2">You can contact me on</div>
                    </div>
                    <Tooltip title="Mail me" data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-delay="450"
                    data-aos-duration="1000">
                      <a
                        className="text-danger t1 ms-3 me-2 fs-5"
                        href="mailto:jigneshbaria1777@gmail.com"
                        target="_blank"
                      >
                        <i alt="Mail logo" class="bi bi-envelope" />
                      </a>
                    </Tooltip>
                    <Tooltip title="Linkedin"
                    data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                      data-aos-delay="650"
                      data-aos-duration="1000"
                    >
                      <a
                        className="text-primary t1 ms-3 me-2 fs-5"
                        href="https://www.linkedin.com/in/jignesh-baria/"
                        target="_blank"
                      >
                        <i alt="Linkedin logo" class="bi bi-linkedin" />
                      </a>
                    </Tooltip>
                    <Tooltip title="GitHub"data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-delay="850"
                    data-aos-duration="1000"
                    
                    >
                      <a
                        className="text-light t1 ms-3 me-2 fs-5"
                        href="https://github.com/Jignesh220"
                        target="_blank"
                      >
                        <i alt="GitHub logo" class="bi bi-github" />
                      </a>
                    </Tooltip>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
