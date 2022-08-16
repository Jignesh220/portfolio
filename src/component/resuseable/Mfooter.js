import React from "react";
import { Link } from "gatsby";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

export default function Mfooter() {
  return (
    <div id="contact">
      <div class="container-fluid text-center bg-theme mb-4 py-1">
        <div className="mono-text text-light mb-4">
          Designed & Built by Jignesh Baria
          <Link
            to="https://github.com/Jignesh220/portfolio"
            className="mono-text mb-5 text-decoration-none"
          >
            <span className=" ms-2 me-1">(</span>
            <Tooltip title="Portfolio website GitHub" placement="top">
              <IconButton>
                <GitHubIcon className="text-light t1 fs-5" />
              </IconButton>
            </Tooltip>
            <span className="ms-1">)</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
