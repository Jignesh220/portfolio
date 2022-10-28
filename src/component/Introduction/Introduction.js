import React from "react";
import { useEffect } from "react";
import { Link } from "gatsby";
import Aos from "aos";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import "aos/dist/aos.css";

export default function Introduction() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="min-vh-100 bg-theme" id="header">
      <div className="container-fluid">
        <div className="card bg-theme border-0 min-vh-100 mx-5">
          <div className="my-auto">
            <div className="row">
              <div
                className="col-11 col-md-8 col-lg-6 col-sm-11 card mx-auto bg-theme border-0"
                data-aos="fade-up"
              >
                <div className="mono-text ms-2 fs-5">Hi,My name is</div>
                <div className="intro">Jignesh Baria</div>
                <div className="role pt-1">App and web Developer</div>
                <div className="fs-6 text-light small-intro mt-3">
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
                  to="https://firebasestorage.googleapis.com/v0/b/jignesh-baria.appspot.com/o/Resume_Jignesh_Baria.pdf?alt=media&token=2f1f8e39-4734-4bc1-84cb-4fe532f9fd51"
                  className="col-6 mt-5 text-decoration-none"
                  target="_blank"
                >
                  <div className="bg-theme border-0 rbtn px-3">
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
