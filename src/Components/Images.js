import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Typography,
  Grid,
  Paper,
  Box,
  SvgIcon,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "3rem",
    textAlign: "center",
    marginBottom: theme.spacing(4),
  },
  subtitle: {
    fontSize: "2rem",
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
  paragraph: {
    fontSize: "1.2rem",
    lineHeight: "1.5",
    marginBottom: theme.spacing(2),
  },
  bitmapImage: {
    maxWidth: "100%",
    borderRadius: theme.spacing(1),
  },
  vectorImage: {
    maxWidth: "100%",
    height: "auto",
    borderRadius: theme.spacing(1),
  },
}));

const Images = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <Typography variant="h1" className={classes.title}>
        Images in Multimedia
      </Typography>
      <Typography variant="body1" className={classes.paragraph}>
        The term "multimedia" refers to the dissemination of information through
        a variety of media, including text, images, audio, and video. Pictures
        play a significant role in multimedia because they may efficiently and
        swiftly transmit information.{" "}
      </Typography>
      <Typography variant="h2" className={classes.subtitle}>
        Bitmap Images
      </Typography>
      <Typography variant="body1" className={classes.paragraph}>
        A computer image made up of pixels organised in a grid is known as a
        bitmap image. The final image is made up of all the pixels, each of
        which contains data about its colour and brightness. Photographs and
        other complex images are frequently created using bitmap images.
      </Typography>
      <Grid container spacing={2} justify="center">
        <Grid item xs={12} sm={8}>
          <Paper>
            <Box p={2}>
              <img
                className={classes.bitmapImage}
                src="https://picsum.photos/800/500"
                alt="Bitmap Image"
              />
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <Typography variant="body1" className={classes.paragraph}>
        The ability to effectively depict intricate images with plenty of detail
        and colour variation is one benefit of bitmap images. These might,
        however, also have big file sizes, which would slow down page loads.
        Moreover, scaling a bitmap image may result in quality loss.
      </Typography>
      <Typography variant="h2" className={classes.subtitle}>
        Vector-drawn Images
      </Typography>
      <Typography variant="body1" className={classes.paragraph}>
        Digital images made using mathematical formulas that specify forms and
        lines are known as "vector-drawn" graphics. As vector images are
        independent of resolution, they can be scaled without sacrificing
        quality. For logos and other straightforward visuals, vector images are
        frequently utilised.
      </Typography>
      <Grid container spacing={2} justify="center">
        <Grid item xs={12} sm={8}>
          <Paper>
            <Box p={2}>
            <SvgIcon viewBox="0 0 500 300" className={classes.vectorImage} style={{ width: "100%", height: "auto" }}>
                <rect x="50" y="50" width="400" height="200" fill="#0074D9" />
                <circle cx="250" cy="150" r="75" fill="#FFF" />
              </SvgIcon>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <Typography variant="body1" className={classes.paragraph}>
        One advantage of vector-drawn images is that they can be scaled without
        losing quality, making them ideal for graphics that need to be displayed
        at different sizes. However, they can be limited in the complexity and
        level of detail that they can represent compared to bitmap images.
      </Typography>
      <Typography variant="body1" className={classes.paragraph}>
        It's crucial to take your project's particular requirements into account
        while deciding between bitmap and vector-drawn pictures. In contrast to
        simple graphics that need to be scaled or enlarged without losing
        quality, vector-drawn images are better for complicated visuals with
        plenty of colour variation.
      </Typography>
    </Container>
  );
};

export default Images;
