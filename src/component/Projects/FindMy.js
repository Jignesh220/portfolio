import React from "react";
import { Link } from "gatsby";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Stack } from "@mui/system";
import Chip from "@mui/material/Chip";
import ScreenShots from "./ScreenShots";
export default function FindMy() {
  return (
    <div>
      <div>
        <div className="text-light">
          <div className="card_title pt-2 col-12 text-center">
          Find My Session
          </div>
          <div
            className="text-light mono-text mt-3"
            style={{
              textAlign: "justify",
            }}
          >
          Find My Session helps find cowid-19 vaccine session, you can find
          where and how many doses available in that center, can find address of
          that center.
          </div>
          <center className="mt-4">
            <Chip
              label="Android Studio"
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
              label="Java"
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
              label="Setu API"
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
              label="JSON"
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
              label="XML"
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
              <ScreenShots
                name="Find My Session"
                image1="https://firebasestorage.googleapis.com/v0/b/jignesh-baria.appspot.com/o/21.svg?alt=media&token=89f63eef-2000-4344-a830-6adf0adab52f"
                image2="https://firebasestorage.googleapis.com/v0/b/jignesh-baria.appspot.com/o/22.svg?alt=media&token=b8e046d6-2a34-40dd-9cee-3dc0d79f7ded"
                image3="https://firebasestorage.googleapis.com/v0/b/jignesh-baria.appspot.com/o/23.svg?alt=media&token=956999b3-8721-4e15-b1f1-f4b7cf17570d"
                image4="https://firebasestorage.googleapis.com/v0/b/jignesh-baria.appspot.com/o/24.svg?alt=media&token=80a13bfc-9f0c-47fb-8222-8dd4d37f9916"
              />
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
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
}
