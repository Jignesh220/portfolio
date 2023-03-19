import React from "react";
import { Link } from "gatsby";
import Logo from "../../images/Jignesh_logo.png";
import AOS from 'aos'

export default function Navbar() {
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
  }, [])
  
  return (
    <nav class="bg-theme fixed-top">
      <div className="navbar bg-theme">
        <div class="container-fluid mt-2">
          <div class="navbar-brand text-theme ms-4 my-1" data-aos="fade-down"
          data-aos-delay="100"
          data-aos-duration="1000">
            <img
              src={Logo}
              alt="logo"
              width="35px"
              className="t1 ms-2"
            />
          </div>
          <div class="d-flex" data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1000">
            <Link
              to=""
              className="bt btn border-0 px-4 shadow-lg t1 text-theme2 me-4 fs-6 text-decoration-none"
            >
              <b>Work</b>
            </Link>
            <Link
              to=""
              className="bt btn border-0 px-4 shadow-lg t1 text-theme2 me-4 ms-1 fs-6 text-decoration-none"
            >
              <b>About</b>
            </Link>
            <Link
              to=""
              className="bt btn border-0 px-4 shadow-lg t1 text-theme2 me-4 ms-1 fs-6 text-decoration-none"
            >
              <b>Contact</b>
            </Link>
            <Link
              to="https://firebasestorage.googleapis.com/v0/b/jignesh-baria.appspot.com/o/Resume_Jignesh_Baria.pdf?alt=media&token=482604e4-c92e-4c49-89ab-6e5ac8e247d9"
              className="bt btn border-0 px-4 shadow-lg t1 text-theme2 me-2 ms-1 fs-6 text-decoration-none"
            >
              <b>Resume</b>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
