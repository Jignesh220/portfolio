import React from "react";
import { Link } from "gatsby";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Stack } from "@mui/system";
import Chip from "@mui/material/Chip";
import ScreenShots from "./ScreenShots";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
export default function Vendurmart() {
  return (
    <div>
      <div>
        <div className="text-light">
          <div className="card_title pt-2 col-12 text-center">VendurMart</div>
          <div
            className="text-light mono-text mt-3"
            style={{
              textAlign: "justify",
            }}
          >
            VendurMart is an{" "}
            <span className="mono-text">E-commerce website</span> where you can
            list your business and connect with businesses worldwide and grow
            together. It supports small, medium and large businesses.Users can
            also shop from the listed products.
          </div>
          <center className="mt-4">
            <Chip
              label="ReactJs"
              variant="filled"
              sx={{
                margin: 0.5,
                backgroundColor: "#06152c",
                color: "#BAD4FC",
                fontFamily: "Courier Prime, monospace",
                fontSize: "clamp(7px,1.6vw,14px)",
              }}
            />
            <Chip
              label="Gatsby"
              variant="filled"
              sx={{
                margin: 0.5,
                backgroundColor: "#06152c",
                color: "#BAD4FC",
                fontFamily: "Courier Prime, monospace",
                fontSize: "clamp(7px,1.6vw,14px)",
              }}
            />
            <Chip
              label="Javascript"
              variant="filled"
              sx={{
                margin: 0.5,
                backgroundColor: "#06152c",
                color: "#BAD4FC",
                fontFamily: "Courier Prime, monospace",
                fontSize: "clamp(7px,1.6vw,14px)",
              }}
            />
            <Chip
              label="Nodejs"
              variant="filled"
              sx={{
                margin: 0.5,
                backgroundColor: "#06152c",
                color: "#BAD4FC",
                fontFamily: "Courier Prime, monospace",
                fontSize: "clamp(7px,1.6vw,14px)",
              }}
            />
            <Chip
              label="Firebase"
              variant="filled"
              sx={{
                margin: 0.5,
                backgroundColor: "#06152c",
                color: "#BAD4FC",
                fontFamily: "Courier Prime, monospace",
                fontSize: "clamp(7px,1.6vw,14px)",
              }}
            />
            <Chip
              label="Firestore"
              variant="filled"
              sx={{
                margin: 0.5,
                backgroundColor: "#06152c",
                color: "#BAD4FC",
                fontFamily: "Courier Prime, monospace",
                fontSize: "clamp(7px,1.6vw,14px)",
              }}
            />
            <Chip
              label="HTML"
              variant="filled"
              sx={{
                margin: 0.5,
                backgroundColor: "#06152c",
                color: "#BAD4FC",
                fontFamily: "Courier Prime, monospace",
                fontSize: "clamp(7px,1.6vw,14px)",
              }}
            />
            <Chip
              label="CSS/Bootstrap"
              variant="filled"
              sx={{
                margin: 0.5,
                backgroundColor: "#06152c",
                color: "#BAD4FC",
                fontFamily: "Courier Prime, monospace",
                fontSize: "clamp(7px,1.6vw,14px)",
              }}
            />
            <Chip
              label="Snipcart"
              variant="filled"
              sx={{
                margin: 0.5,
                backgroundColor: "#06152c",
                color: "#BAD4FC",
                fontFamily: "Courier Prime, monospace",
                fontSize: "clamp(7px,1.6vw,14px)",
              }}
            />
          </center>

          <div className="my-auto mt-4 col-12 text-center">
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              justifyContent="center"
            >
              <Link to="https://vendur-mart.web.app/" target="_blank">
                <Tooltip title="Live website">
                  <IconButton>
                    <OpenInNewIcon className="text-light t1" />
                  </IconButton>
                </Tooltip>
              </Link>
              <ScreenShots
                name="Chat App"
                image1="https://firebasestorage.googleapis.com/v0/b/jignesh-baria.appspot.com/o/screencapture-vendur-mart-web-app-2022-03-09-14_37_34.png?alt=media&token=3f723dfc-f976-458c-a8c5-adf469bb3b4d"
                image2="https://firebasestorage.googleapis.com/v0/b/jignesh-baria.appspot.com/o/screencapture-vendur-mart-web-app-home-2022-03-09-14_38_59.png?alt=media&token=a0939965-3522-4366-abe3-f88e29742b45"
                image3="https://firebasestorage.googleapis.com/v0/b/jignesh-baria.appspot.com/o/screencapture-vendur-mart-web-app-home-2022-03-09-14_43_59.png?alt=media&token=4821fdfd-3dbb-49a8-b896-ced2c4893217"
                image4="https://firebasestorage.googleapis.com/v0/b/jignesh-baria.appspot.com/o/screencapture-vendur-mart-web-app-grocery-2022-03-09-14_45_17.png?alt=media&token=fa056f96-e878-4265-bea0-04fb7b8ae7e3"
                image5="https://firebasestorage.googleapis.com/v0/b/jignesh-baria.appspot.com/o/Screenshot_20220814-231820_Chrome.png?alt=media&token=ed94f8ff-856c-490e-880d-7f7821ec0fa5"
              />
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
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
}
