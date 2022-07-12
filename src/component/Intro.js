import React from "react";
import Profile from "../images/profile.svg";

export default function Intro() {
  return (
    <div>
      <div className="card col-10 mx-auto mt-5 border-0 zoom">
        <div className="card-body bg-theme border-rounded shadow-lg">
          <div className="row row-cols-3 row-cols-md-4">
            <div className="col-md-4 col-12 border-rounded d-flex align-items-center no-gutters">
              <img src={Profile} alt="" className="mx-auto" height="310px" />
            </div>
            <div className="col-md-8 col-lg-8 col-12 border-rounded mx-auto text-dark text-center">
              <div className="mt-4">
                <h3 className="card-title">Jignesh Baria</h3>
                <div className="card-text">Comp</div>
                <div className="card-text mt-3">Comapted computer science and engineering (B.Tech) Degree from Parul University with 7.4 CGPA</div>
                <div className="mt-3">
                  Skills:
                  <span className="rounded bTheme font-size1 text-light px-2 py-1 me-1 ms-2">
                    ReactJS
                  </span>
                  <span className="rounded bTheme font-size1 text-light px-2 py-1 me-1">
                    Javascript
                  </span>
                  <span className="rounded bTheme font-size1 text-light px-2 py-1 me-1">
                    Web-development
                  </span>
                  <span className="rounded bTheme font-size1 text-light px-2 py-1 me-1">
                    Firebase
                  </span>
                  <span className="rounded bTheme font-size1 text-light px-2 py-1 me-1">
                    Firestore
                  </span>
                  <span className="rounded bTheme font-size1 text-light px-2 py-1 me-1">
                    Java
                  </span>
                </div>

                <div className="mx-auto mt-3">
                  <a
                    className="navbar-brand text-danger zoom1"
                    href="mailto:jigneshbaria1777@gmail.com"
                    target="_blank"
                  >
                    <i alt="Mail logo" class="bi bi-envelope" />
                  </a>
                  <a
                    className="navbar-brand text-primary zoom"
                    href="https://www.linkedin.com/in/jignesh-baria/"
                    target="_blank"
                  >
                    <i alt="Linkedin logo" class="bi bi-linkedin" />
                  </a>
                  <a
                    className="navbar-brand text-dark zoom"
                    href="https://github.com/Jignesh220"
                    target="_blank"
                  >
                    <i alt="GitHub logo" class="bi bi-github" />
                  </a>
                </div>
                <a
                  className="btn col-10 col-md-6 mx-auto button-rounded p-1 py-2 mt-4 border-0 zoom1 text-light shadow-lg"
                  target="_blank"
                  href="https://firebasestorage.googleapis.com/v0/b/jignesh-baria.appspot.com/o/JigneshBaria_Resume.pdf?alt=media&token=b5364e57-887f-46d9-bebf-ba8405b09bb4"
                >
                  Resume
                </a>
                <br />
                <a
                  className="btn col-10 col-md-6 mx-auto button-rounded p-1 py-2 mt-4 border-0 zoom1 text-light shadow-lg"
                  href="#project"
                >
                  Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
