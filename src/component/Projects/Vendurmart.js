import React from "react";
import { Link } from "gatsby";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import GitHubIcon from "@mui/icons-material/GitHub";
import ScreenshotMonitorIcon from "@mui/icons-material/ScreenshotMonitor";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Carousel } from "react-bootstrap";

import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import CloseIcon from "@mui/icons-material/Close";



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

export default function Vendurmart() {
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
        <div className="card_title pt-2 col-12 text-center">VendurMart</div>
        <div className="text-light mono-text mt-3">
          VendurMart is an <span className="mono-text">E-commerce website</span>{" "}
          where you can list your business and connect with businesses worldwide
          and grow together. It supports small, medium and large
          businesses.Users can also shop from the listed products.
        </div>
        <div className="mt-3">
          <span className="col-3 s_title bg-theme px-2 py-1 round me-1">
            ReactJs
          </span>
          <span className="col-3 s_title ms-1 me-1 bg-theme px-3 py-1 round">
            Gatsby
          </span>
          <span className="col-3 s_title ms-1 me-1 bg-theme px-3 py-1 round">
            Javascript
          </span>
          <span className="col-3 s_title ms-1 me-1 bg-theme px-3 py-1 round">
            Nodejs
          </span>
          <span className="col-3 s_title ms-1 me-1 bg-theme px-3 py-1 round">
            Firebase
          </span>
          <span className="col-3 s_title ms-1 me-1 bg-theme px-3 py-1 round">
            Firestore
          </span>
          <span className="col-3 s_title ms-1 me-1 bg-theme px-3 py-1 round">
            HTML
          </span>
          <span className="col-3 s_title ms-1 me-1 bg-theme px-3 py-1 round">
            CSS/Bootstrap
          </span>
        </div>

        <div className="align-bottom mt-4 col-12 text-center">
          <span className="me-1">
            <Tooltip title="website priview">
              <IconButton>
                <ScreenshotMonitorIcon
                  className="text-light t1"
                  onClick={handleClickOpen}
                />
              </IconButton>
            </Tooltip>
          </span>

          <span className="me-1">
            <Link to="https://vendur-mart.web.app/" target="_blank">
              <Tooltip title="Live website">
                <IconButton>
                  <OpenInNewIcon className="text-light t1" />
                </IconButton>
              </Tooltip>
            </Link>
          </span>

          <span className="ms-1">
            <Link
              to="https://github.com/Jignesh220/vendur_mart"
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
        <DialogContent dividers className="p_card" width="100%">
          <Carousel fade>
            <Carousel.Item interval={1000}>
              <img
                className="d-block"
                src={
                  "https://firebasestorage.googleapis.com/v0/b/jignesh-baria.appspot.com/o/screencapture-vendur-mart-web-app-2022-03-09-14_37_34.png?alt=media&token=3f723dfc-f976-458c-a8c5-adf469bb3b4d"
                }
                alt="First slide"
                width="600px"
              />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                className="d-block"
                src="https://firebasestorage.googleapis.com/v0/b/jignesh-baria.appspot.com/o/screencapture-vendur-mart-web-app-home-2022-03-09-14_38_59.png?alt=media&token=a0939965-3522-4366-abe3-f88e29742b45"
                alt="Second slide"
                width="600px"
              />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                className="d-block"
                src="https://firebasestorage.googleapis.com/v0/b/jignesh-baria.appspot.com/o/screencapture-vendur-mart-web-app-home-2022-03-09-14_43_59.png?alt=media&token=4821fdfd-3dbb-49a8-b896-ced2c4893217"
                alt="Third slide"
                width="400px"
              />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                className="d-block"
                src="https://firebasestorage.googleapis.com/v0/b/jignesh-baria.appspot.com/o/screencapture-vendur-mart-web-app-grocery-2022-03-09-14_45_17.png?alt=media&token=fa056f96-e878-4265-bea0-04fb7b8ae7e3"
                alt="Third slide"
                width="500px"
              />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                className="d-block"
                src="https://firebasestorage.googleapis.com/v0/b/jignesh-baria.appspot.com/o/Screenshot_20220814-231820_Chrome.png?alt=media&token=ed94f8ff-856c-490e-880d-7f7821ec0fa5"
                alt="Third slide"
                width="350px"
              />
            </Carousel.Item>
          </Carousel>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
const images = [
  {
    imgPath:
      "https://firebasestorage.googleapis.com/v0/b/jignesh-baria.appspot.com/o/screencapture-vendur-mart-web-app-2022-03-09-14_37_34.png?alt=media&token=3f723dfc-f976-458c-a8c5-adf469bb3b4d",
  },
  {
    imgPath:
      "https://firebasestorage.googleapis.com/v0/b/jignesh-baria.appspot.com/o/screencapture-vendur-mart-web-app-home-2022-03-09-14_38_59.png?alt=media&token=a0939965-3522-4366-abe3-f88e29742b45",
  },
  {
    imgPath:
      "https://firebasestorage.googleapis.com/v0/b/jignesh-baria.appspot.com/o/screencapture-vendur-mart-web-app-home-2022-03-09-14_43_59.png?alt=media&token=4821fdfd-3dbb-49a8-b896-ced2c4893217",
  },
  {
    imgPath:
      "https://firebasestorage.googleapis.com/v0/b/jignesh-baria.appspot.com/o/screencapture-vendur-mart-web-app-grocery-2022-03-09-14_45_17.png?alt=media&token=fa056f96-e878-4265-bea0-04fb7b8ae7e3",
  },
  {
    imgPath:
      "https://firebasestorage.googleapis.com/v0/b/jignesh-baria.appspot.com/o/Screenshot_20220814-231820_Chrome.png?alt=media&token=ed94f8ff-856c-490e-880d-7f7821ec0fa5",
  },
];
