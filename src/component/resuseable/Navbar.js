import React from "react";
import { Link } from "gatsby";
import Logo from "../../images/Jignesh_logo.png";

export default function Navbar() {
  return (
    <nav class="bg-theme fixed-top">
      <div className="navbar bg-theme">
        <div class="container-fluid mt-2">
          <div class="navbar-brand text-theme ms-4 my-1">
            <img
              src={Logo}
              alt="logo"
              width="35px"
              className="t1 ms-2"
            />
          </div>
          <div class="d-flex">
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
              to=""
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
