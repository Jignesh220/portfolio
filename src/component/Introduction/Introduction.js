import React from "react";
import { useEffect } from "react";
import { Link } from "gatsby";
import Aos from "aos";
import "aos/dist/aos.css"

export default function Introduction() {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])
  return (
    <div className="min-vh-100 bg-theme" id="header">
      <div className="container-fluid">
        <div className="card bg-theme border-0 min-vh-100 mx-5">
          <div className="my-auto">
            <div className="row">
              <div className="col-11 col-md-8 col-lg-6 col-sm-11 card mx-auto bg-theme border-0" data-aos="fade-up">
                <div className="mono-text ms-2 fs-5">Hi,My name is</div>
                <div className="intro">Jignesh Baria</div>
                <div className="role pt-1">App and web Developer</div>
                <div className="fs-6 text-light small-intro mt-3">
                  I'm a <span className="mono-text">Software Engineer</span> and
                  building Application and Wesite.
                  <div>
                    Currently I am working in{" "}
                    <span className="mono-text">
                      Tata Consultancy Services.
                    </span>
                  </div>
                  <div>As Assistant System Engineer</div>
                </div>
                <Link
                  to="https://firebasestorage.googleapis.com/v0/b/jignesh-baria.appspot.com/o/Resume_Jignesh_Baria.pdf?alt=media&token=482604e4-c92e-4c49-89ab-6e5ac8e247d9"
                  className="col-1 mt-5 ms-2"
                  target="_blank"
                >
                  <div className="btn t1 border-0 rbtn">Resume</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
