import React, { useEffect } from "react";
import { Link } from "gatsby";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import GitHubIcon from "@mui/icons-material/GitHub";
import ScreenshotMonitorIcon from "@mui/icons-material/ScreenshotMonitor";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import CloseIcon from "@mui/icons-material/Close";
import { Carousel } from "react-bootstrap";
import { Stack } from "@mui/system";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Slide from "@mui/material/Slide";
import DialogActions from "@mui/material/DialogActions";
import DialogContentText from "@mui/material/DialogContentText";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { blue } from "@mui/material/colors";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ScreenShots({
  name,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Tooltip title="Screenshot">
        <IconButton>
          <ScreenshotMonitorIcon
            className="text-light t1"
            onClick={handleClickOpen}
          />
        </IconButton>
      </Tooltip>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        maxWidth="sm"
        TransitionComponent={Transition}
        sx={{
          backgroundColor: "transparent",
          backdropFilter: "blur(5px)",
        }}
        PaperProps={{
          style: {
            borderRadius: 25,
            backgroundColor: "#3C5275",
          },
        }}
      >
        <DialogTitle
          id="alert-dialog-title"
          className="text-center text-light card_title"
        >
          <CloseRoundedIcon
            sx={{
              fontSize: 25,
              color: blue[100],
              float: "right",
              cursor: "pointer",
            }}
            onClick={handleClose}
          />
        </DialogTitle>
        <DialogContent>
          <center>
            <Carousel fade indicators={false}>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block"
                  src={image1}
                  alt="1"
                  width="70%"
                  style={{
                    borderRadius: 25,
                  }}
                />
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block"
                  src={image2}
                  alt="2"
                  width="70%"
                  style={{
                    borderRadius: 25,
                  }}
                />
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block"
                  src={image3}
                  alt="3"
                  width="70%"
                  style={{
                    borderRadius: 25,
                  }}
                />
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block"
                  src={image4}
                  alt="4"
                  width="70%"
                  style={{
                    borderRadius: 25,
                  }}
                />
              </Carousel.Item>
              {image5 != undefined && (
                <Carousel.Item interval={1000}>
                  <img
                    className="d-block"
                    src={image5}
                    alt="6"
                    width="70%"
                    style={{
                      borderRadius: 25,
                    }}
                  />
                </Carousel.Item>
              )}
              {image6 != undefined && (
                <Carousel.Item interval={1000}>
                  <img
                    className="d-block"
                    src={image6}
                    alt="6"
                    width="70%"
                    style={{
                      borderRadius: 25,
                    }}
                  />
                </Carousel.Item>
              )}
            </Carousel>
          </center>
        </DialogContent>
      </Dialog>
    </div>
  );
}
