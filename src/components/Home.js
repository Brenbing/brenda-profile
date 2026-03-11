import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Home() {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title as="h1" className="display-4 mb-4" style={{color: '#c2185b'}}>
                Welcome to Brenda's Profile!
              </Card.Title>
              <Card.Subtitle className="mb-3 text-muted">
                3rd Year Information Technology Student | Cabuyao University
              </Card.Subtitle>
              <Card.Text className="lead">
                Hi! I'm Brenda Lazado, a passionate and dedicated 3rd year Information Technology student 
                at Cabuyao University. I love creating meaningful web applications and solving 
                real-world problems through code.
              </Card.Text>
              <Card.Text>
                My goal is to become a skilled software developer and contribute to projects that 
                make a positive impact on society. I'm particularly interested in web development 
                and UI/UX design.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;