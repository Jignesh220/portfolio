import React from "react";
import { Link } from "gatsby";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Stack } from "@mui/system";
import Chip from "@mui/material/Chip";
import ScreenShots from "./ScreenShots";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export default function FoodFast() {
  return (
    <div>
      <div>
        <div className="text-light">
          <div className="card_title pt-2 col-12 text-center">FoodFast</div>
          <div
            className="text-light mono-text mt-3"
            style={{
              textAlign: "justify",
            }}
          >
            FoodFast is an{" "}
            <span className="mono-text">Food E-commerce website</span>.FoodFast
            offers a variety of dry snacks, sweets, and bakery products, while
            also supporting local businesses. Our platform provides a convenient
            space for home-based industries and shopkeepers to showcase their
            products and expand their sales.
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
              label="material UI"
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
              label="Stripe-Payment System"
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
          </center>

          <div className="my-auto mt-4 col-12 text-center">
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              justifyContent="center"
            >
              <Link to="https://food-fast.web.app/" target="_blank">
                <Tooltip title="Live website">
                  <IconButton>
                    <OpenInNewIcon className="text-light t1" />
                  </IconButton>
                </Tooltip>
              </Link>
              <Tooltip title="Repository not visible" sx={{
                cursor: 'pointer'
              }}>
                <IconButton>
                  <GitHubIcon className="text-light t1" />
                </IconButton>
              </Tooltip>
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
}
