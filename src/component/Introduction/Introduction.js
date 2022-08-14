import React from "react";
import { Link } from "gatsby";

export default function Introduction() {
  return (
    <div className="min-vh-100 bg-theme">
      <div className="container-fluid">
        <div className="card bg-theme border-0 min-vh-100 mx-5">
          <div className="my-auto">
            <div className="row">
              <div className="col-11 col-md-8 col-lg-6 col-sm-11 card mx-auto bg-theme border-0">
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
                <Link to="" className="col-1 mt-5 ms-2">
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