import React from "react";
import { Link } from "gatsby";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import GitHubIcon from "@mui/icons-material/GitHub";
import ScreenshotMonitorIcon from "@mui/icons-material/ScreenshotMonitor";

import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import CloseIcon from "@mui/icons-material/Close";
import { Carousel } from "react-bootstrap";


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function FindMy() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="text-light">
        <div className="card_title pt-2 col-12 text-center">
          Find My Session
        </div>
        <div className="text-light mono-text mt-3">
          Find My Session helps find cowid-19 vaccine session, you can find
          where and how many doses available in that center, can find address of
          that center.
        </div>
        <div className="mt-3">
          <span className="col-3 s_title bg-theme px-2 py-1 round me-1">
            Android<span className="ms-1">Studio</span>
          </span>
          <span className="col-3 s_title ms-1 me-1 bg-theme px-3 py-1 round">
            Java
          </span>
          <span className="col-3 s_title ms-1 me-1 bg-theme px-3 py-1 round">
            Setu<span className="ms-1">API</span>
          </span>
          <span className="col-3 s_title ms-1 me-1 bg-theme px-3 py-1 round">
            JSON
          </span>
          <span className="col-3 s_title ms-1 me-1 bg-theme px-3 py-1 round">
            XML
          </span>
        </div>

        <div className="my-auto mt-4 col-12 text-center">
          <span className="me-1">
            <Tooltip title="Screenshot">
              <IconButton>
                <ScreenshotMonitorIcon
                  className="text-light t1"
                  onClick={handleClickOpen}
                />
              </IconButton>
            </Tooltip>
          </span>

          <span className="ms-1">
            <Link
              to="https://github.com/Jignesh220/Find_My_Session"
              target="_blank"
            >
              <Tooltip title="Github">
                <IconButton>
                  <GitHubIcon className="text-light t1" />
                </IconButton>
              </Tooltip>
            </Link>
          </span>
        </div>
      </div>

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        className="p_card"
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
          className="p_card"
        >
          <div className="text-light">Screenshot</div>
        </BootstrapDialogTitle>
        <DialogContent dividers className="p_card">
          <Carousel fade>
            <Carousel.Item interval={1000}>
              <img
                className="d-block"
                src={
                  "https://firebasestorage.googleapis.com/v0/b/jignesh-baria.appspot.com/o/21.svg?alt=media&token=89f63eef-2000-4344-a830-6adf0adab52f"
                }
                alt="First slide"
                width="300px"
              />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                className="d-block"
                src="https://firebasestorage.googleapis.com/v0/b/jignesh-baria.appspot.com/o/22.svg?alt=media&token=b8e046d6-2a34-40dd-9cee-3dc0d79f7ded"
                alt="Second slide"
                width="300px"
              />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                className="d-block"
                src="https://firebasestorage.googleapis.com/v0/b/jignesh-baria.appspot.com/o/23.svg?alt=media&token=956999b3-8721-4e15-b1f1-f4b7cf17570d"
                alt="Third slide"
                width="300px"
              />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                className="d-block"
                src="https://firebasestorage.googleapis.com/v0/b/jignesh-baria.appspot.com/o/24.svg?alt=media&token=80a13bfc-9f0c-47fb-8222-8dd4d37f9916"
                alt="Third slide"
                width="300px"
              />
            </Carousel.Item>
          </Carousel>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}

