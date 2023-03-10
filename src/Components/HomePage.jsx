import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import softwareImage from '../assets/Software.jpg';
import rugbyImage from '../assets/Rugby.JPG';
import './styles/homepage.css';
//import ChatBot from './ChatBot';

const HomePage = () => {
  const interests = [
    {
      image: softwareImage,
      heading: 'Software Experience',
      description: 'I stay updated on new software trends by regularly attending industry conferences and keeping up-to-date with the latest industry news and publications.'
    },
    {
      image: rugbyImage,
      heading: 'About Me',
      description: 'In my free time, I enjoy playing rugby and have been a member of my local team for the past three years.'
    }
  ];

  return (
    <div className="homepage">
      <Container className="py-5">
        <Row>
          <Col md={6} className="mb-4">
            <h1 className="mb-3" style={{ fontSize: "3rem", color: "#ffd700" }}>Hello, I'm Hussam Tahir</h1>
            <p className="lead mb-4" style={{ fontSize: "1.5rem", lineHeight: "2rem", color: "#fff" }}>I'm a third-year Honors Degree student with experience in front-end web development. I'm eager to expand my skillset and develop my back-end programming capabilities.</p>
            <Button className="yellow-button" variant="warning">View My Work</Button>
            
          </Col>
          <Col md={6}>
            {interests.map((interest, index) => (
              <Row key={index} className="mb-4">
                <Col xs={12} md={6}>
                  <div className="image-container">
                    <img src={interest.image} alt={interest.heading} className="interest-image" />
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <h4 className="mb-3" style={{ fontSize: "2rem", color: "#ffd700" }}>{interest.heading}</h4>
                  <p style={{ fontSize: "1.25rem", lineHeight: "1.5rem", color: "#fff" }}>{interest.description}</p>
                </Col>
              </Row>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;