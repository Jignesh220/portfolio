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
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useTheme } from '@mui/material/styles';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

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

export default function Chatapp() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  return (
    <div>
      <div>
        <div className="text-light">
          <div className="card_title pt-2 col-12 text-center">
            Chat Application
          </div>
          <div className="text-light mono-text mt-3">
            Chat An Android application using firebase to help people connect
            and chat by sending messages and images with Google secure login
            options.
          </div>
          <div className="mt-3">
            <span className="col-3 s_title bg-theme px-2 py-1 round me-1">
              Android<span className="ms-1">Studio</span>
            </span>
            <span className="col-3 s_title ms-1 me-1 bg-theme px-3 py-1 round">
              Java
            </span>
            <span className="col-3 s_title ms-1 me-1 bg-theme px-3 py-1 round">
              Firebase
            </span>
            <span className="col-3 s_title ms-1 me-1 bg-theme px-3 py-1 round">
              Firestore
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
                to="https://github.com/Jignesh220/Chat_Application"
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
          <Box className="p_card">
            <Paper
            square
            elevation={0}
            sx={{
              display: "flex",
              alignItems: "center",
              bgcolor: "background.default",
              borderRadius: 20,
              }}
            >
              <Typography>{images[activeStep].label}</Typography>
            </Paper>
            <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
            >
              {images.map((step, index) => (
                <div key={step.label}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <Box
                      component="img"
                      sx={{
                        height: 750,
                        display: "block",
                        overflow: "hidden",
                        width: "100%",
                        borderRadius: 5,
                      }}
                      src={step.imgPath}
                      alt={step.label}
                    />
                  ) : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              className="p_card"
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                >
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                ></Button>
              }
            />
          </Box>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}

const images = [
  {
    imgPath: " https://firebasestorage.googleapis.com/v0/b/jignesh-baria.appspot.com/o/11.svg?alt=media&token=28b9005a-77f4-4632-8dec-0e8f148ee3e2",
  },
  {
    imgPath: "https://firebasestorage.googleapis.com/v0/b/jignesh-baria.appspot.com/o/12.svg?alt=media&token=24bd0905-e305-4ff4-8a3e-85d8aa52733f",
  },
  {
    imgPath: "https://firebasestorage.googleapis.com/v0/b/jignesh-baria.appspot.com/o/13.svg?alt=media&token=a9a21b78-9e4e-498d-9067-84a417b01e21",
  },
  {
    imgPath: "https://firebasestorage.googleapis.com/v0/b/jignesh-baria.appspot.com/o/14.svg?alt=media&token=2c6b31e8-d220-4e69-935e-1c66f7fff88a",
  },
  {
    imgPath: "https://firebasestorage.googleapis.com/v0/b/jignesh-baria.appspot.com/o/15.svg?alt=media&token=9dec1bbd-aa40-41c7-8880-babde0276705",
  },
];
