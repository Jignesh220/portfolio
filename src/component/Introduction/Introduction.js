import React from "react";
import { useEffect } from "react";
import { Link } from "gatsby";
import AOS from "aos";

export default function Introduction() {
  useEffect(() => {
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
    <div className="min-vh-100 bg-theme" id="header">
      <div className="container-fluid">
        <div className="card bg-theme border-0 min-vh-100 mx-5">
          <div className="my-auto">
            <div className="row">
              <div className="col-11 col-md-8 col-lg-6 col-sm-11 card mx-auto bg-theme border-0">
                <div
                  className="mono-text ms-2 fs-5"
                  data-aos="fade-up"
                  data-aos-delay="1000"
                  data-aos-duration="1000"
                >
                  Hi,My name is
                </div>
                <div
                  className="intro"
                  data-aos="fade-up"
                  data-aos-delay="1200"
                  data-aos-duration="1000"
                >
                  Jignesh Baria
                </div>
                <div
                  className="role pt-1"
                  data-aos="fade-up"
                  data-aos-delay="1400"
                  data-aos-duration="1000"
                >
                  Web Developer
                </div>
                <div
                  className="fs-6 text-light small-intro mt-3"
                  data-aos="fade-up"
                  data-aos-delay="1600"
                  data-aos-duration="1000"
                >
                  I'm a <span className="mono-text">Software Engineer</span> and
                  building Application and Wesite.
                  <div>
                    I was working in{" "}
                    <span className="mono-text">
                      Tata Consultancy Services.
                    </span>
                  </div>
                  <div>As Assistant System Engineer</div>
                </div>
                <Link
                  to="https://firebasestorage.googleapis.com/v0/b/jignesh-baria.appspot.com/o/Resume_Jignesh_Baria.pdf?alt=media&token=b4bef8d4-0c7f-42ad-b61a-aad7d481b275"
                  className="col-6 mt-5 text-decoration-none"
                  target="_blank"
                >
                  <div className="bg-theme border-0 rbtn px-3"></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
