import React, { useState, useRef } from "react";
import { Typography, Box } from "@mui/material";
import HomePage from "./HomePage";
import LoadingVideo from "../assets/Loading.mp4";
import { useNavigate } from "react-router-dom";

const Loading = () => {
  const [showHomePage, setShowHomePage] = useState(false);
  const videoRef = useRef(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    const onVideoTimeUpdate = () => {
      if (videoRef.current && videoRef.current.currentTime >= 13) {
        navigate("/home");
        setShowHomePage(true);
        videoRef.current.removeEventListener("timeupdate", onVideoTimeUpdate);
      }
    };

    videoRef.current.addEventListener("timeupdate", onVideoTimeUpdate);

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener("timeupdate", onVideoTimeUpdate);
      }
    };
  }, []);

  return (
    <Box
      sx={{
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#000",
      }}
    >
      <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
        {!showHomePage && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 2,
            }}
          >
            <video
              src={LoadingVideo}
              autoPlay
              muted
              ref={videoRef}
              sx={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
            />
          </Box>
        )}
        <Box
          sx={{
            position: "relative",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
          }}
        >
          {showHomePage && <HomePage />}
        </Box>
      </Box>
    </Box>
  );
};

export default Loading;
