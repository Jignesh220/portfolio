import React from "react";
import { Link } from "gatsby";

export default function About() {
  return (
    <div className="min-vh-100 bg-theme" id="about">
      <div className="container-fluid">
        <div className="card col-lg-7 col-md-10 col-sm-11 col-11 mx-auto bg-theme border-0 min-vh-100 mx-5 py-5">
          <div className="my-auto">
            <div className="col-12 mx-auto title mb-5 text-center">About Me</div>
            <div className="row mt-3">
              <div className="col-12 col-lg-3 col-md-4 col-sm-12 mb-4 card bg-theme mx-auto border-0">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/jignesh-baria.appspot.com/o/j_photo.png?alt=media&token=be8ab714-e28f-4cbc-9d79-02049ed51e88"
                  alt="photo"
                  width="250px"
                  className="mx-auto img-fluid"
                />
              </div>
              <div className="col-12 col-md-10 col-lg-8 col-sm-12 card mx-auto bg-theme border-0">
                <div className="fs-6 text-light mono-text text-justify a_text">
                  Hello! My name is{" "}
                  <span className="mono-text">Jignesh Baria</span> and I enjoy
                  creating things that live on the internet and on different
                  machines.
                  <div className="mt-3">
                    I completed my{" "}
                    <span className="mono-text">
                      Computer Science and Engineering
                    </span>{" "}
                    degree with a{" "}
                    <span className="mono-text fs-5">7.49 CGPA</span> from Parul
                    University(Vadodara, Gujarat).
                  </div>
                  <div className="mt-3">
                    I invested Four years, learn and building the Manny project
                    on{" "}
                    <span className="mono-text">
                      Android application development and Web development.
                    </span>
                  </div>
                  <div className="mt-3">
                    My main focus these days is building accessible, inclusive
                    products and digital experiences at Upstatement for a
                    variety of clients.
                  </div>
                  <div className="mt-3 row ms-1">
                    Here are a few technologies I’ve been working with recently:
                    <div className="col-12 col-lg-6 col-md-6 col-sm-12 mx-auto mt-2 mono-text">
                      <ul>
                        <li>Javascript(ES 6+)</li>
                        <li>Nodejs</li>
                        <li>React(ES 6+)</li>
                        <li>Firebase</li>
                        <li>Rest API</li>
                      </ul>
                    </div>
                    <div className="col-12 col-lg-6 col-md-6 col-sm-12 mx-auto mt-2 mono-text">
                      <ul>
                        <li>Java</li>
                        <li>Android Studio</li>
                        <li>HTML</li>
                        <li>CSS/Bootstrap</li>
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
  );
}
