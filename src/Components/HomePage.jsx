import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import softwareImage from '../assets/Software.jpg';
import rugbyImage from '../assets/Rugby.JPG';

const HomePage = () => {
  const interests = [
    {
      image: softwareImage,
      heading: 'Professional Interests',
      description: 'I stay updated on new software trends by regularly attending industry conferences and keeping up-to-date with the latest industry news and publications.'
    },
    {
      image: rugbyImage,
      heading: 'Personal Interests',
      description: 'In my free time, I enjoy playing rugby and have been a member of my local team for the past three years.'
    }
  ];

  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', color: 'white' }}>
      <Container className="py-5">
        <Row>
          <Col md={6} className="mb-4">
            <h1 className="mb-3">Hello, I'm Hussam Tahir</h1>
            <p className="lead mb-4">I'm a third-year Honors Degree student with experience in front-end web development. I'm eager to expand my skillset and develop my back-end programming capabilities.</p>
            <Button variant="light">View My Work</Button>
          </Col>
          <Col md={6}>
            {interests.map((interest, index) => (
              <Row key={index} className="mb-4">
                <Col xs={12} md={6}>
                  <img src={interest.image} alt={interest.heading} style={{ width: '100%', borderRadius: '10px' }} />
                </Col>
                <Col xs={12} md={6}>
                  <h4 className="mb-3">{interest.heading}</h4>
                  <p>{interest.description}</p>
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