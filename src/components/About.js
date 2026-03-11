import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import brendaPhoto from '../images/Brennie.jpg';

function About() {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title as="h2" className="text-center mb-4" style={{color: '#c2185b'}}>
                About Brenda
              </Card.Title>
              
              <Row className="mb-4">
                <Col xs={12} md={4} className="text-center mb-3 mb-md-0">
                  <Image 
                    src={brendaPhoto}
                    roundedCircle 
                    fluid 
                    alt="Brenda"
                    className="border border-3 border-danger"
                    style={{ 
                      width: '150px', 
                      height: '150px', 
                      objectFit: 'cover' 
                    }}
                  />
                </Col>
                <Col xs={12} md={8}>
                  <h4>Hello! I'm Brenda</h4>
                  <p>
                    I'm a 3rd year Information Technology student at Cabuyao University with a passion 
                    for technology and innovation. I believe in continuous learning and always 
                    strive to improve my skills.
                  </p>
                </Col>
              </Row>

              <Row className="mb-4">
                <Col>
                  <h4>Education</h4>
                  <p>
                    <strong>Bachelor of Science in Information and Technology</strong><br />
                    Cabuyao University | 2022 - Present<br />
                    Relevant courses: Web Development, Object-Oriented Programming, Database Management, 
                    Human-Computer Interaction
                  </p>
                </Col>
              </Row>

              <Row>
                <Col>
                  <h4>Hobbies & Interests</h4>
                  <ul>
                    <li>📚 Reading fantasy novels and tech blogs</li>
                    <li>🎨 Digital art and graphic design</li>
                    <li>🎵 Listening to K-pop and OPM</li>
                    <li>📱 Mobile photography</li>
                    <li>🧋 Trying out new coffee shops</li>
                    <li>🎮 Playing mobile games</li>
                  </ul>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About;