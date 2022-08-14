import React from "react";
import { Link } from "gatsby";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import GitHubIcon from "@mui/icons-material/GitHub";
import ScreenshotMonitorIcon from "@mui/icons-material/ScreenshotMonitor";
import Vendurmart from "./vendurmart";
import Chatapp from "./Chatapp";
import FindMy from "./FindMy";

export default function Projects() {
  return (
    <div className="min-vh-100 bg-theme" id="about">
      <div className="container-fluid">
        <div className="card col-lg-6 col-md-10 col-sm-11 col-11 mx-auto bg-theme border-0 min-vh-100 mx-5 py-5">
          <div className="my-auto">
            <div className="col-12 mx-auto title mb-5 text-center">
              Projects
            </div>
            <div className="row mt-3">
              <div className="card border-0 bg-theme col-12 mx-auto">
                <div className="row">
                  <div className="col-8 mx-auto p-4 p_card round shadow-lg">
                    <Vendurmart/>
                  </div>

                  <div className="col-5 mx-auto p-4 p_card round shadow-lg mt-5 mb-5">
                    <Chatapp/>
                  </div>

                  <div className="col-5 mx-auto p-4 p_card round shadow-lg mt-5 mb-5">
                    <FindMy/>
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
