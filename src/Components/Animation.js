import { List, ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react';

const AnimationWeb = () => {
  const animationExamples = [
    { title: 'Traditional Animation', url: 'https://www.youtube.com/embed/T-uWyCtDRE0' },
    { title: '2D Animation', url: 'https://www.youtube.com/embed/OzUnqQk4eOg' },
    { title: '3D Animation', url: 'https://www.youtube.com/embed/KMpDF_OG2WI' },
    { title: 'Animation through Motion Graphics', url: 'https://www.youtube.com/embed/0gS0SxDZ_Dw' },
    { title: 'Stop Motion Animation', url: 'https://www.youtube.com/embed/cEn5IUANayI' },
    { title: 'Cutout and Collage Animation', url: 'https://www.youtube.com/embed/XAm4i1X7L_Y' },
    { title: 'Rotoscoping', url: 'https://www.youtube.com/embed/IS1hCSsmH1E' },
    { title: 'Cel Animation', url: 'https://www.youtube.com/embed/ElXRkfVBIp0' },
  ];

  return (
    <div className='container' style={{ margin: '2rem', background: 'black' }}>
      <Typography variant="h3" gutterBottom style={{ color: 'yellow' }}>
        Animation in Multimedia
      </Typography>
      <Typography variant="body1" gutterBottom style={{ color: 'white' }}>
        Animation is the process of creating a continuous motion and shape change illusion by means of the rapid display of a sequence of static images that minimally differ from each other. It is concerned with the visual or aesthetic aspect of the project. Animation is possible because of a biological phenomenon known as persistence of vision and a psychological phenomenon called phi.
      </Typography>
      <Typography variant="h4" gutterBottom style={{ color: 'yellow' }}>
        Types of Animation
      </Typography>
      <List style={{ color: 'white' }}>
        {animationExamples.map((example, index) => (
          <React.Fragment key={index}>
            <ListItem>
              <ListItemText primary={example.title} />
            </ListItem>
            <ListItem>
              <iframe title={example.title} width="100%" height="500" src={example.url} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </ListItem>
          </React.Fragment>
        ))}
      </List>
      <Typography variant="h4" gutterBottom style={{ color: 'yellow' }}>
        Using Animation in Multimedia
      </Typography>
      <Typography variant="body1" gutterBottom style={{ color: 'white' }}>
        Animations are used in a variety of industries, including education, entertainment, advertising, marketing, scientific visualization, creative arts, gaming, simulations, medical, architecture, engineering, and manufacturing.
      </Typography>
      <Typography variant="h4" gutterBottom style={{ color: 'yellow' }}>
        Creating and Editing Animation Files for Multimedia Presentation
      </Typography>
      <Typography variant="body1" gutterBottom style={{ color: 'white' }}>
        When creating or editing animation files for multimedia presentation, it is important to use high-quality animation tools and file formats that are suitable for the web. Some popular animation tools include OpenGL, AutoDesk’s Maya, Lightwave 3D, Papervision3D, GreenSock’s TweenMax, and Adobe’s Flash. To make successful animations, use animation carefully and sparingly, compress files for the web, and calculate movements accurately to create a realistic rolling or bouncing effect.
      </Typography>
      <Typography variant="h4" gutterBottom style={{ color: 'yellow' }}>
        Example Animation
      </Typography>
      <iframe title="Example Animation" width="100%" height="500" src="https://www.youtube.com/embed/1JKLM45aIik" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
  );
};

export default AnimationWeb;
