import { Divider, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import "./styles/webUsability.css";

const WebUsability = () => {
  const principles = [
    {
      Principle: "Availability",
      Point:
        "Availability refers to how accessible the website is for the user. My design of this web application should be compatible with all devices as it is meant to take into account all screen sizes and supports all major browsers.",
    },
    {
      Principle: "Clarity",
      Point:
        "Clarity refers to the strain on the eyes and reduction of white noise. All the features of the website are displayed through the navigation bar and highlighted information is focused on by keeping it within a white container which should be the user's center of focus.",
    },
    {
      Principle: "Recognition",
      Point:
        "Recognition refers to the learning process of new users. Since the website does not have many components at the moment, learning to use it should be quite straightforward. Any new components that are added will be placed into the navigation bar.",
    },
    {
      Principle: "Credibility",
      Point:
        "Credibility is quite self-explanatory. Since my website is not a media outlet and is simply a portfolio introducing information about myself, there is no reason a user should be concerned with this point.",
    },
    {
      Principle: "Relevance",
      Point:
        "Relevance refers to engaging content within the website, and I would say my website adheres to that by using interactive tools such as the navigation bar. I plan to add more features as well, ranging from a typing emulator to more interactive features such as a mini-game.",
    },
  ];
  return (
    <div className="web-usability-container">
      <Container>
        <h1 className="page-title">Web Usability</h1>

        <Typography variant="body1" className="page-subtitle">
          Web usability can be broken down into five principles which will be
          discussed below:
        </Typography>
        <Box height={50} />

        {principles.map((item, index) => {
          return (
            <div key={index} className="principle-container">
              <h2>{item.Principle}</h2>
              <Divider />
              <Typography variant="body1">{item.Point}</Typography>
            </div>
          );
        })}
      </Container>
    </div>
  );
};

export default WebUsability;
