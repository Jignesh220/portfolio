import React,{useEffect} from "react";
import Vendurmart from "./Vendurmart";
import Chatapp from "./Chatapp";
import FindMy from "./FindMy";


export default function Projects() {
  return (
    <div className="min-vh-100 bg-theme" id="project">
      <div className="container-fluid">
        <div className="card col-lg-6 col-md-10 col-sm-11 col-11 mx-auto bg-theme border-0 min-vh-100 mx-5 py-5">
          <div className="my-auto">
            <div className="col-12 mx-auto title mb-5 text-center">
              Projects
            </div>
            <div className="row mt-3">
              <div className="card border-0 bg-theme col-12 mx-auto">
                <div className="row gy-3 gx-3">
                  <div className="col-lg-8 col-md-8 col-sm-11 col-11 mx-auto">
                    <div className="p-4 p_card round shadow-lg">
                      <Vendurmart />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-11 col-11 mx-auto">
                    <div className="p-4 p_card round shadow-lg">
                      <Chatapp />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-11 col-11 mx-auto">
                    <div className="p-4 p_card round shadow-lg">
                      <FindMy />
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
