import { Divider, Paper, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import "./styles/webUsability.css";

const WebUsability = () => {
  const principles = [
    {
      Principle: "Avalibility",
      Point:
        "Avalibility refers to how accessible the website is for the user. My design of this web application should be compatible with all devices as it is meant to take into account all screen sizes and supports all major browsers.",
    },
    {
      Principle: "Clarity",
      Point:
        "Clarity refers to the strain on the eyes and reduction of white noise. All the features of the website are displayed through the navigation bar and highlighted information is focused on by leeping it within a white container which should be the user's center of focus",
    },
    {
      Principle: "Recognition",
      Point:
        "Recognition referes to the learning process of new users. Since the website does not have many components at the moment, learning to use it should be quite straightforward. Any new components that are added will be placed into the navigation bar.",
    },
    {
      Principle: "Credibility",
      Point:
        "Credibility is quite self explanitory, since my website is not a media outlet and is simply a portfolio introducing information about myself there is no reason a user should be concerened with this point",
    },
    {
      Principle: "Relevance",
      Point:
        "Relevance referes to engaging content within the website and I would say my website adheres to that by using interactive tools such as the navigation bar. I plan to add more features as well ranging from a typing emulator to more interactive features such as a minigame.",
    },
  ];
  return (
    <Container className="homepage">
      <Box height={10} />
      <h1>Web Usability</h1>

      <Typography>
        Web usability can be broken down into five principles which will be
        discussed below:
      </Typography>
      <Box height={50} />


        {principles.map((item) => {
          return (
            <div>
              <h2>{item.Principle}</h2>
              <Divider />
              <Typography>{item.Point}</Typography>
            </div>
          );
        })}
    </Container>
  );
};

export default WebUsability;
