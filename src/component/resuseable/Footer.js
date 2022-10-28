import React from "react";
import { Tooltip } from "@mui/material";

export default function Footer() {
  return (
    <div>
      <div class="container-fluid text-center bg-theme fixed-bottom py-1">
        <Tooltip title="Mail">
          <a
            className="text-danger t1 ms-3 me-2 fs-5"
            href="mailto:jigneshbaria1777@gmail.com"
            target="_blank"
          >
            <i alt="Mail logo" class="bi bi-envelope" />
          </a>
        </Tooltip>
        <Tooltip title="Linkedin">
          <a
            className="text-primary t1 ms-3 me-2 fs-5"
            href="https://www.linkedin.com/in/jignesh-baria/"
            target="_blank"
          >
            <i alt="Linkedin logo" class="bi bi-linkedin" />
          </a>
        </Tooltip>
        <Tooltip title="GitHub">
          <a
            className="text-light t1 ms-3 me-2 fs-5"
            href="https://github.com/Jignesh220"
            target="_blank"
          >
            <i alt="GitHub logo" class="bi bi-github" />
          </a>
        </Tooltip>
      </div>
    </div>
  );
}
