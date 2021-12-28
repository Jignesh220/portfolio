import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import F1 from "../images/11.svg";
import F2 from "../images/12.svg";
import F3 from "../images/13.svg";
import F4 from "../images/14.svg";
import F5 from "../images/15.svg";

import C1 from "../images/21.svg";
import C2 from "../images/22.svg";
import C3 from "../images/23.svg";
import C4 from "../images/24.svg";

import U1 from "../images/31.svg";
import U2 from "../images/32.svg";
import U3 from "../images/33.svg";
import U4 from "../images/34.svg";
import U5 from "../images/35.svg";
import U6 from "../images/36.gif";


export default class Projects extends Component {
  render() {
    return (
      <div className="cust ">
        <div className="text-center mt-5">
          <h2 id="project">PROJECTS</h2>
        </div>
        <Carousel className="bg-theme text-dark col-10 mx-auto border-rounded mb-5 mt-4 shadow-lg">
  
          <Carousel.Item interval={5000}>
            <div className="text-center m-3">
              <h4 className="mt-2">Friendly Chat Application</h4>
            </div>
            <div className="row col-10 mb-5 mx-auto">
              <div className="col-8 text-font mt-4">
                <b>Friendly Chat An Android application using firebase to help
                people connect and chat by sending messages and images with
                Google secure login options.</b>

                <div className="mt-3">
                  Tech Involved: 
                  <span className="rounded bTheme font-size1 text-light px-2 py-1 me-1 ms-2">Java</span>
                  <span className="rounded bTheme font-size1 text-light px-2 py-1 me-1">Firebase</span>
                  <span className="rounded bTheme font-size1 text-light px-2 py-1 me-1">Android Studio</span>
                  <span className="rounded bTheme font-size1 text-light px-2 py-1 me-1">Firestore</span>
                  <span className="rounded bTheme font-size1 text-light px-2 py-1 me-1">NoSQL</span>
                  <span className="rounded bTheme font-size1 text-light px-2 py-1 me-1">XML</span>
                </div>

                <div className="mt-5 ms-5"> 
                  <a className="btn px-4 bTheme text-light" href="https://github.com/Jignesh220/Chat_Application">
                    GitHub
                  </a><br />
                  <span className="rounded bg-dark font-size2 text-light px-2 py-1 me-1">source code</span>
                </div>

                <div className="mt-5 ms-5">
                  <a className="btn px-4 bTheme text-light" href="https://drive.google.com/file/d/18NvULNfJYUEFqdd86mUba_UCt5q0tz9q/view">
                    Google Drive
                  </a><br />
                  <span className="rounded bg-dark font-size2 text-light px-2 py-1 me-1">Download Link</span>
                </div>
              </div>
              <div className="col-4 img-border">
                <marquee >
                  <img src={F1} width="160px" height="340px" className="me-1 img-border"/>
                  <img src={F2} width="160px" height="340px" className="me-1 img-border"/>
                  <img src={F3} width="160px" height="340px" className="me-1 img-border"/>
                  <img src={F4} width="160px" height="340px" className="me-1 img-border"/>
                  <img src={F5} width="160px" height="340px" className="me-1 img-border"/>
                </marquee>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item interval={5000}>
            <div className="text-center m-3">
              <h4 className="mt-2">Find My Session</h4>
            </div>
            <div className="row col-10 mb-5 mx-auto">
              <div className="col-8 text-font mt-3">
                <b>Find My Session helps find cowid-19 vaccine session, 
                you can find where and how many doses available in that center, 
                can find address of that center.</b>

                <div className="mt-3">
                  Tech Involved: 
                  <span className="rounded bTheme font-size1 text-light px-2 py-1 me-1 ms-2">Java</span>
                  <span className="rounded bTheme font-size1 text-light px-2 py-1 me-1">Firebase</span>
                  <span className="rounded bTheme font-size1 text-light px-2 py-1 me-1">Android Studio</span>
                  <span className="rounded bTheme font-size1 text-light px-2 py-1 me-1">JSON</span>
                  <span className="rounded bTheme font-size1 text-light px-2 py-1 me-1">API</span>
                  <span className="rounded bTheme font-size1 text-light px-2 py-1 me-1">Setu API</span>
                </div>

                <div className="mt-5 ms-5"> 
                  <a className="btn px-4 bTheme text-light" href="https://github.com/Jignesh220/Find_My_Session">
                    GitHub
                  </a><br />
                  <span className="rounded bg-dark font-size2 text-light px-2 py-1 me-1">source code</span>
                </div>

                <div className="mt-5 ms-5">
                  <a className="btn px-4 bTheme text-light" href="https://drive.google.com/file/d/11z9TXvUeL5OuwxWVpHQucy7z36EUHXc-/view">
                    Google Drive
                  </a><br />
                  <span className="rounded bg-dark font-size2 text-light px-2 py-1 me-1">Download Link</span>
                </div>

              </div>
              <div className="col-4 img-border">
                <marquee>
                  <img src={C1} width="160px" height="340px" className="me-1 img-border"/>
                  <img src={C2} width="160px" height="340px" className="me-1 img-border"/>
                  <img src={C3} width="160px" height="340px" className="me-1 img-border"/>
                  <img src={C4} width="160px" height="340px" className="me-1 img-border"/>
                </marquee>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item interval={5000}>
            <div className="text-center m-3">
              <h4 className="mt-3">UniInfo</h4>
            </div>
            <div className="row col-10 mb-5 mx-auto">
              <div className="col-8 text-font mt-3">
                <b>UniInfo application help to find University all over the world just 
                enter country name you get all university list and click that university 
                name you can university details and also you can visit university website
               by this app on just few clicks.</b>

               <div className="mt-3">
                  Tech Involved: 
                  <span className="rounded bTheme font-size1 text-light px-2 py-1 me-1 ms-2">Java</span>
                  <span className="rounded bTheme font-size1 text-light px-2 py-1 me-1">Firebase</span>
                  <span className="rounded bTheme font-size1 text-light px-2 py-1 me-1">Android Studio</span>
                  <span className="rounded bTheme font-size1 text-light px-2 py-1 me-1">JSON</span>
                  <span className="rounded bTheme font-size1 text-light px-2 py-1 me-1">API</span>
                  <span className="rounded bTheme font-size1 text-light px-2 py-1 me-1">HTTP API</span>
                </div>

                <div className="mt-5 ms-5"> 
                  <a className="btn px-4 bTheme text-light" href="https://github.com/Jignesh220/UniInfo">
                    GitHub
                  </a><br />
                  <span className="rounded bg-dark font-size2 text-light px-2 py-1 me-1">source code</span>
                </div>

                <div className="mt-5 ms-5">
                  <a className="btn px-4 bTheme text-light" href="https://drive.google.com/file/d/1qhye_vQ786VZ_4vNmPFny4V4S5M0FoOu/view">
                    Google Drive
                  </a><br />
                  <span className="rounded bg-dark font-size2 text-light px-2 py-1 me-1">Download Link</span>
                </div>

              </div>
              <div className="col-4 img-border">
                <marquee>
                  <img src={U1} width="160px" height="340px" className="me-1 img-border"/>
                  <img src={U2} width="160px" height="340px" className="me-1 img-border"/>
                  <img src={U3} width="160px" height="340px" className="me-1 img-border"/>
                  <img src={U4} width="160px" height="340px" className="me-1 img-border"/>
                  <img src={U5} width="160px" height="340px" className="me-1 img-border"/>
                  <img src={U6} width="160px" height="340px" className="me-1 img-border"/>
                </marquee>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
