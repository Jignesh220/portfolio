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

export const ChatApp = () => {
  return (
    <div>
      <div className="text-center m-3">
        <h4 className="mt-2">Friendly Chat Application</h4>
      </div>
      <div className="row col-10 mb-5 mx-auto">
        <div className="col-10 col-md-9 text-font mt-4 mx-auto">
          <b>
            Friendly Chat An Android application using firebase to help people
            connect and chat by sending messages and images with Google secure
            login options.
          </b>

          <div className="mt-3">
            Tech Involved:
            <span className="rounded bTheme font-size1 text-light px-2 py-1 me-1 ms-2">
              Java
            </span>
            <span className="rounded bTheme font-size1 text-light px-2 py-1 me-1">
              Firebase
            </span>
            <span className="rounded bTheme font-size1 text-light px-2 py-1 me-1">
              Android Studio
            </span>
            <span className="rounded bTheme font-size1 text-light px-2 py-1 me-1">
              Firestore
            </span>
            <span className="rounded bTheme font-size1 text-light px-2 py-1 me-1">
              NoSQL
            </span>
            <span className="rounded bTheme font-size1 text-light px-2 py-1 me-1">
              XML
            </span>
          </div>

          <div className="mt-5 ms-5">
            <a
              className="btn px-4 bTheme text-light"
              href="https://github.com/Jignesh220/Chat_Application"
            >
              GitHub
            </a>
            <br />
            <span className="rounded bg-dark font-size2 text-light px-2 py-1 me-1">
              source code
            </span>
          </div>

          <div className="mt-5 ms-5">
            <a
              className="btn px-4 bTheme text-light"
              href="https://drive.google.com/file/d/18NvULNfJYUEFqdd86mUba_UCt5q0tz9q/view"
            >
              Google Drive
            </a>
            <br />
            <span className="rounded bg-dark font-size2 text-light px-2 py-1 me-1">
              Download Link
            </span>
          </div>
        </div>
        <div className="col-11 col-md-3 img-border mt-3">
          <center>
            <Carousel className="">
              <Carousel.Item interval={800}>
                <img
                  src={F1}
                  width="160px"
                  height="340px"
                  className="me-1 img-border"
                />
              </Carousel.Item>
              <Carousel.Item interval={800}>
                <img
                  src={F2}
                  width="160px"
                  height="340px"
                  className="me-1 img-border"
                />
              </Carousel.Item>
              <Carousel.Item interval={800}>
                <img
                  src={F3}
                  width="160px"
                  height="340px"
                  className="me-1 img-border"
                />
              </Carousel.Item>
              <Carousel.Item interval={800}>
                <img
                  src={F4}
                  width="160px"
                  height="340px"
                  className="me-1 img-border"
                />
              </Carousel.Item>
              <Carousel.Item interval={800}>
                <img
                  src={F5}
                  width="160px"
                  height="340px"
                  className="me-1 img-border"
                />
              </Carousel.Item>
            </Carousel>
          </center>
        </div>
      </div>
    </div>
  );
};
export const Cowin = () => {
  return (
    <div>
      <div className="text-center m-3">
        <h4 className="mt-2">Find My Session</h4>
      </div>
      <div className="row col-10 mb-5 mx-auto">
        <div className="col-11 col-md-8 text-font mt-3 mx-auto">
          <b>
            Find My Session helps find cowid-19 vaccine session, you can find
            where and how many doses available in that center, can find address
            of that center.
          </b>

          <div className="mt-3">
            Tech Involved:
            <span className="rounded bTheme font-size1 text-light px-2 py-1 me-1 ms-2">
              Java
            </span>
            <span className="rounded bTheme font-size1 text-light px-2 py-1 me-1">
              Firebase
            </span>
            <span className="rounded bTheme font-size1 text-light px-2 py-1 me-1">
              Android Studio
            </span>
            <span className="rounded bTheme font-size1 text-light px-2 py-1 me-1">
              JSON
            </span>
            <span className="rounded bTheme font-size1 text-light px-2 py-1 me-1">
              API
            </span>
            <span className="rounded bTheme font-size1 text-light px-2 py-1 me-1">
              Setu API
            </span>
          </div>

          <div className="mt-5 ms-5">
            <a
              className="btn px-4 bTheme text-light"
              href="https://github.com/Jignesh220/Find_My_Session"
            >
              GitHub
            </a>
            <br />
            <span className="rounded bg-dark font-size2 text-light px-2 py-1 me-1">
              source code
            </span>
          </div>

          <div className="mt-5 ms-5">
            <a
              className="btn px-4 bTheme text-light"
              href="https://drive.google.com/file/d/11z9TXvUeL5OuwxWVpHQucy7z36EUHXc-/view"
            >
              Google Drive
            </a>
            <br />
            <span className="rounded bg-dark font-size2 text-light px-2 py-1 me-1">
              Download Link
            </span>
          </div>
        </div>
        <div className="col-11 col-md-4 img-border mt-3">
          <center>
            <Carousel className="">
              <Carousel.Item interval={800}>
                <img
                  src={C1}
                  width="160px"
                  height="340px"
                  className="me-1 img-border"
                />
              </Carousel.Item>
              <Carousel.Item interval={800}>
                <img
                  src={C2}
                  width="160px"
                  height="340px"
                  className="me-1 img-border"
                />
              </Carousel.Item>
              <Carousel.Item interval={800}>
                <img
                  src={C3}
                  width="160px"
                  height="340px"
                  className="me-1 img-border"
                />
              </Carousel.Item>
              <Carousel.Item interval={800}>
                <img
                  src={C4}
                  width="160px"
                  height="340px"
                  className="me-1 img-border"
                />
              </Carousel.Item>
            </Carousel>
          </center>
        </div>
      </div>
    </div>
  );
};
export const University = () => {
  return (
    <div>
      <div className="text-center m-3">
        <h4 className="mt-3">UniInfo</h4>
      </div>
      <div className="row col-10 mb-5 mx-auto">
        <div className="col-11 col-md-8 text-font mt-3 mx-auto">
          <b>
            UniInfo application help to find University all over the world just
            enter country name you get all university list and click that
            university name you can university details and also you can visit
            university website by this app on just few clicks.
          </b>

          <div className="mt-3">
            Tech Involved:
            <span className="rounded bTheme font-size1 text-light px-2 py-1 me-1 ms-2">
              Java
            </span>
            <span className="rounded bTheme font-size1 text-light px-2 py-1 me-1">
              Firebase
            </span>
            <span className="rounded bTheme font-size1 text-light px-2 py-1 me-1">
              Android Studio
            </span>
            <span className="rounded bTheme font-size1 text-light px-2 py-1 me-1">
              JSON
            </span>
            <span className="rounded bTheme font-size1 text-light px-2 py-1 me-1">
              API
            </span>
            <span className="rounded bTheme font-size1 text-light px-2 py-1 me-1">
              HTTP API
            </span>
          </div>

          <div className="mt-5 ms-5">
            <a
              className="btn px-4 bTheme text-light"
              href="https://github.com/Jignesh220/UniInfo"
            >
              GitHub
            </a>
            <br />
            <span className="rounded bg-dark font-size2 text-light px-2 py-1 me-1">
              source code
            </span>
          </div>

          <div className="mt-5 ms-5">
            <a
              className="btn px-4 bTheme text-light"
              href="https://drive.google.com/file/d/1qhye_vQ786VZ_4vNmPFny4V4S5M0FoOu/view"
            >
              Google Drive
            </a>
            <br />
            <span className="rounded bg-dark font-size2 text-light px-2 py-1 me-1">
              Download Link
            </span>
          </div>
        </div>
        <div className="col-11 col-md-4 img-border mt-3">
          <center>
            <Carousel className="">
              <Carousel.Item interval={800}>
                <img
                  src={U1}
                  width="160px"
                  height="340px"
                  className="me-1 img-border"
                />
              </Carousel.Item>
              <Carousel.Item interval={800}>
                <img
                  src={U2}
                  width="160px"
                  height="340px"
                  className="me-1 img-border"
                />
              </Carousel.Item>
              <Carousel.Item interval={800}>
                <img
                  src={U3}
                  width="160px"
                  height="340px"
                  className="me-1 img-border"
                />
              </Carousel.Item>
              <Carousel.Item interval={800}>
                <img
                  src={U4}
                  width="160px"
                  height="340px"
                  className="me-1 img-border"
                />
              </Carousel.Item>
              <Carousel.Item interval={800}>
                <img
                  src={U5}
                  width="160px"
                  height="340px"
                  className="me-1 img-border"
                />
              </Carousel.Item>
              <Carousel.Item interval={800}>
                <img
                  src={U5}
                  width="160px"
                  height="340px"
                  className="me-1 img-border"
                />
              </Carousel.Item>
              <Carousel.Item interval={800}>
                <img
                  src={U6}
                  width="160px"
                  height="340px"
                  className="me-1 img-border"
                />
              </Carousel.Item>
            </Carousel>
          </center>
        </div>
      </div>
    </div>
  );
};
export const VendurMart = () => {
  return (
    <div>
      <div className="text-center m-3">
        <h4 className="mt-3">UniInfo</h4>
      </div>
      <div className="row col-10 mb-5 mx-auto">
        <div className="col-11 col-md-8 text-font mt-3 mx-auto">
          <b>
          VendurMart is an E-commerce platform where you can list your business and 
          connect with businesses worldwide and grow together. It supports small, 
          medium and large businesses. Through VendurMart one gets buy leads which 
          helps users to contact any other vendur and turn it into a business deal.
          Users can also shop from the listed products.
          </b>

          <div className="mt-3">
            Tech Involved:
            <span className="rounded bTheme font-size1 text-light px-2 py-1 me-1 ms-2">
              ReactJS
            </span>
            <span className="rounded bTheme font-size1 text-light px-2 py-1 me-1">
              Gatsby
            </span>
            <span className="rounded bTheme font-size1 text-light px-2 py-1 me-1">
              Javascript
            </span>
            <span className="rounded bTheme font-size1 text-light px-2 py-1 me-1">
              Bootstrap
            </span>
            <span className="rounded bTheme font-size1 text-light px-2 py-1 me-1">
              API
            </span>
            <span className="rounded bTheme font-size1 text-light px-2 py-1 me-1">
              Firebase
            </span>
          </div>

          <div className="mt-5 ms-5">
            <a
              className="btn px-4 bTheme text-light"
              href="https://github.com/Jignesh220/vendur_mart"
            >
              GitHub
            </a>
            <br />
            <span className="rounded bg-dark font-size2 text-light px-2 py-1 me-1">
              source code
            </span>
          </div>

          <div className="mt-5 ms-5">
            <a
              className="btn px-4 bTheme text-light"
              href="https://vendur-mart.web.app/"
            >
              Live Website
            </a>
          </div>
        </div>
        <div className="col-11 col-md-4 img-border mt-3">
          <center>
            <Carousel className="">
              <Carousel.Item interval={800}>
                <img
                  src={"https://firebasestorage.googleapis.com/v0/b/jignesh-baria.appspot.com/o/screencapture-vendur-mart-web-app-2022-03-09-14_37_34.png?alt=media&token=3f723dfc-f976-458c-a8c5-adf469bb3b4d"}
                  width="160px"
                  height="340px"
                  className="me-1 img-border"
                />
              </Carousel.Item>
              <Carousel.Item interval={800}>
                <img
                  src={"https://firebasestorage.googleapis.com/v0/b/jignesh-baria.appspot.com/o/screencapture-vendur-mart-web-app-home-2022-03-09-14_38_59.png?alt=media&token=a0939965-3522-4366-abe3-f88e29742b45"}
                  width="160px"
                  height="340px"
                  className="me-1 img-border"
                />
              </Carousel.Item>
              <Carousel.Item interval={800}>
                <img
                  src={"https://firebasestorage.googleapis.com/v0/b/jignesh-baria.appspot.com/o/screencapture-vendur-mart-web-app-home-2022-03-09-14_43_59.png?alt=media&token=4821fdfd-3dbb-49a8-b896-ced2c4893217"}
                  width="160px"
                  height="340px"
                  className="me-1 img-border"
                />
              </Carousel.Item>
              <Carousel.Item interval={800}>
                <img
                  src={"https://firebasestorage.googleapis.com/v0/b/jignesh-baria.appspot.com/o/screencapture-vendur-mart-web-app-grocery-2022-03-09-14_45_17.png?alt=media&token=fa056f96-e878-4265-bea0-04fb7b8ae7e3"}
                  width="160px"
                  height="340px"
                  className="me-1 img-border"
                />
              </Carousel.Item>
            </Carousel>
          </center>
        </div>
      </div>
    </div>
  );
};