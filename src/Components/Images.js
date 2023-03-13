import React from "react";

const Images = () => {
  return (
    <div className="container">
      <h1 className="title">Images in Multimedia</h1>
      <p className="paragraph">
        The term "multimedia" refers to the dissemination of information through
        a variety of media, including text, images, audio, and video. Pictures
        play a significant role in multimedia because they may efficiently and
        swiftly transmit information.{" "}
      </p>
      <h2 className="subtitle">Bitmap Images</h2>
      <p className="paragraph">
        A computer image made up of pixels organised in a grid is known as a
        bitmap image. The final image is made up of all the pixels, each of
        which contains data about its colour and brightness. Photographs and
        other complex images are frequently created using bitmap images.
      </p>
      <div className="image-container">
        <img
          className="bitmap-image"
          src="https://picsum.photos/800/500"
          alt="Bitmap Image"
        />
      </div>
      <p className="paragraph">
        The ability to effectively depict intricate images with plenty of detail
        and colour variation is one benefit of bitmap images. These might,
        however, also have big file sizes, which would slow down page loads.
        Moreover, scaling a bitmap image may result in quality loss.
      </p>
      <h2 className="subtitle">Vector-drawn Images</h2>
      <p className="paragraph">
        Digital images made using mathematical formulas that specify forms and
        lines are known as "vector-drawn" graphics. As vector images are
        independent of resolution, they can be scaled without sacrificing
        quality. For logos and other straightforward visuals, vector images are
        frequently utilised.
      </p>
      <div className="image-container">
        <svg
          className="vector-image"
          viewBox="0 0 500 300"
          style={{ width: "100%", height: "auto" }}
        >
          <rect x="50" y="50" width="400" height="200" fill="#0074D9" />
          <circle cx="250" cy="150" r="75" fill="#FFF" />
        </svg>
      </div>
      <p className="paragraph">
        One advantage of vector-drawn images is that...they can be scaled
        without losing quality, making them ideal for graphics that need to be
        displayed at different sizes. However, they can be limited in the
        complexity and level of detail that they can represent compared to
        bitmap images.
      </p>
      <p className="paragraph">
        It's crucial to take your project's particular requirements into account
        while deciding between bitmap and vector-drawn pictures. In contrast to
        simple graphics that need to be scaled or enlarged without losing
        quality, vector-drawn images are better for complicated visuals with
        plenty of colour variation.
      </p>
    </div>
  );
};

export default Images;