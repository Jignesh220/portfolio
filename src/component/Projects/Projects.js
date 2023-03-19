import React, { useEffect } from "react";
import Vendurmart from "./Vendurmart";
import Chatapp from "./Chatapp";
import FindMy from "./FindMy";
import AOS from "aos";
import FoodFast from "./FoodFast";

export default function Projects() {
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
    <div className="min-vh-100 bg-theme" id="project">
      <div className="container-fluid">
        <div className="card col-lg-6 col-md-10 col-sm-11 col-11 mx-auto bg-theme border-0 min-vh-100 mx-5 py-5">
          <div className="my-auto">
            <div
              className="col-12 mx-auto title mb-5 text-center"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="50"
              data-aos-duration="1000"
            >
              Projects
            </div>
            <div className="row mt-3">
              <div className="card border-0 bg-theme col-12 mx-auto">
                <div className="row gy-3 gx-3">
                  <div className="col-lg-8 col-md-8 col-sm-11 col-11 mx-auto">
                    <div
                      className="p-4 p_card round shadow-lg"
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                      data-aos-delay="250"
                      data-aos-duration="1000"
                    >
                      <FoodFast />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-11 col-11 mx-auto">
                    <div
                      className="p-4 p_card round shadow-lg"
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                      data-aos-delay="550"
                      data-aos-duration="1000"
                    >
                      <Vendurmart />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-11 col-11 mx-auto">
                    <div
                      className="p-4 p_card round shadow-lg"
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                      data-aos-delay="450"
                      data-aos-duration="1000"
                    >
                      <Chatapp />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
