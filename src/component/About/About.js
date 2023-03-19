import React from "react";
import { Link } from "gatsby";
import AOS from "aos";

export default function About() {
  React.useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  }, []);
  return (
    <div className="min-vh-100 bg-theme" id="about">
      <div className="container-fluid">
        <div className="card col-lg-7 col-md-10 col-sm-11 col-11 mx-auto bg-theme border-0 min-vh-100 mx-5 py-5">
          <div className="my-auto">
            <div
              className="col-12 mx-auto title mb-5 text-center"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="50"
            >
              About Me
            </div>
            <div className="row mt-3">
              <div
                className="col-12 col-lg-3 col-md-4 col-sm-12 mb-4 card bg-theme mx-auto border-0"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-delay="250"
                data-aos-duration="2000"
              >
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/jignesh-baria.appspot.com/o/j_photo.png?alt=media&token=be8ab714-e28f-4cbc-9d79-02049ed51e88"
                  alt="photo"
                  width="250px"
                  className="mx-auto img-fluid"
                />
              </div>
              <div className="col-12 col-md-10 col-lg-8 col-sm-12 card mx-auto bg-theme border-0" 
              data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-delay="450"
                data-aos-duration="1000"
              >
                <div
                  className="fs-6 text-light mono-text text-justify a_text"
                >
                  Hello! My name is{" "}
                  <span className="mono-text">Jignesh Baria</span> and I enjoy
                  creating things that live on the internet and on different
                  machines.
                  <div
                    className="mt-3"
                  >
                    I completed my{" "}
                    <span className="mono-text">
                      Computer Science and Engineering
                    </span>{" "}
                    degree with a{" "}
                    <span className="mono-text fs-5">7.49 CGPA</span> from Parul
                    University(Vadodara, Gujarat).
                  </div>
                  <div
                    className="mt-3"
                  >
                    I invested Four years, learn and building the Manny project
                    on{" "}
                    <span className="mono-text">
                      Android application development and Web development.
                    </span>
                  </div>
                  <div
                    className="mt-3"
                  >
                    My main focus these days is building accessible, inclusive
                    products and digital experiences at Upstatement for a
                    variety of clients.
                  </div>
                  <div className="mt-3 row ms-1">
                    <div
                    >
                      Here are a few technologies I’ve been working with
                      recently:
                    </div>

                    <div className="mt-1">
                      <div className="col-12 mono-text mt-2">
                        <ul>
                          <div className="row">
                            <span
                              className="col-0 col-sm-0 col-md-6 col-lg-6"
                            >
                              <li>Javascript(ES6+)</li>
                              <li>Nodejs</li>
                              <li>React</li>
                              <li>Firebase</li>
                              <li>Rest API</li>
                            </span>
                            <span
                              className="col-0 col-sm-0 col-md-6 col-lg-6"
                            >
                              <li>Java</li>
                              <li>Android Studio</li>
                              <li>HTML</li>
                              <li>CSS/Bootstrap</li>
                            </span>
                          </div>
                        </ul>
                      </div>
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
