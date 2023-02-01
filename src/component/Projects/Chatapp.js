import React from "react";
import { Link } from "gatsby";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Stack } from "@mui/system";
import Chip from "@mui/material/Chip";
import ScreenShots from "./ScreenShots";
export default function Chatapp() {
  return (
    <div>
      <div>
        <div className="text-light">
          <div className="card_title pt-2 col-12 text-center">
            Chat Application
          </div>
          <div
            className="text-light mono-text mt-3"
            style={{
              textAlign: "justify",
            }}
          >
            Chat An Android application using firebase to help people connect
            and chat by sending messages and images with Google secure login
            options.
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
                name="Chat App"
                image1="https://firebasestorage.googleapis.com/v0/b/jignesh-baria.appspot.com/o/11.svg?alt=media&token=28b9005a-77f4-4632-8dec-0e8f148ee3e2"
                image2="https://firebasestorage.googleapis.com/v0/b/jignesh-baria.appspot.com/o/12.svg?alt=media&token=24bd0905-e305-4ff4-8a3e-85d8aa52733f"
                image3="https://firebasestorage.googleapis.com/v0/b/jignesh-baria.appspot.com/o/13.svg?alt=media&token=a9a21b78-9e4e-498d-9067-84a417b01e21"
                image4="https://firebasestorage.googleapis.com/v0/b/jignesh-baria.appspot.com/o/14.svg?alt=media&token=2c6b31e8-d220-4e69-935e-1c66f7BAD4FC88a"
                image5="https://firebasestorage.googleapis.com/v0/b/jignesh-baria.appspot.com/o/15.svg?alt=media&token=9dec1bbd-aa40-41c7-8880-babde0276705"
              />
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
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
}
