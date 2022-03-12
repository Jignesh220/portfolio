import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import { ChatApp } from "./Card";
import { Cowin } from "./Card";
import { University } from "./Card";
import { VendurMart } from "./Card";

export default class Projects extends Component {
  render() {
    return (
      <div className="cust ">
        <div className="text-center mt-5">
          <h2 id="project">PROJECTS</h2>
        </div>
        <Carousel className="bg-theme text-dark col-10 mx-auto border-rounded mb-5 mt-4 shadow-lg">
          <Carousel.Item interval={5000}>
            <div className="position-absolute top-50 start-0 translate-middle-y ms-5 display-5">
              <i class="bi bi-chevron-left"></i>
            </div>
            <div className="position-absolute top-50 end-0 translate-middle-y me-5 display-5">
              <i class="bi bi-chevron-right"></i>
            </div>
            <ChatApp />
          </Carousel.Item>

          <Carousel.Item interval={5000}>
            <div className="position-absolute top-50 start-0 translate-middle-y ms-5 display-5">
              <i class="bi bi-chevron-left"></i>
            </div>
            <div className="position-absolute top-50 end-0 translate-middle-y me-5 display-5">
              <i class="bi bi-chevron-right"></i>
            </div>
            <Cowin />
          </Carousel.Item>

          <Carousel.Item interval={5000}>
            <div className="position-absolute top-50 start-0 translate-middle-y ms-5 display-5">
              <i class="bi bi-chevron-left"></i>
            </div>
            <div className="position-absolute top-50 end-0 translate-middle-y me-5 display-5">
              <i class="bi bi-chevron-right"></i>
            </div>
            <University />
          </Carousel.Item>

          <Carousel.Item interval={5000}>
            <div className="position-absolute top-50 start-0 translate-middle-y ms-5 display-5">
              <i class="bi bi-chevron-left"></i>
            </div>
            <div className="position-absolute top-50 end-0 translate-middle-y me-5 display-5">
              <i class="bi bi-chevron-right"></i>
            </div>
            <VendurMart />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
