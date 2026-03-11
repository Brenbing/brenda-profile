import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function SubmissionSuccess({ formData }) {
  const navigate = useNavigate();

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="text-center border-danger">
            <Card.Header className="bg-danger text-white">
              <h3 className="mb-0">✓ Message Sent!</h3>
            </Card.Header>
            <Card.Body>
              <Card.Title as="h2" className="mb-4">
                Thank You, {formData.name}!
              </Card.Title>
              
              <Card.Text className="lead mb-4">
                Brenda will get back to you soon!
              </Card.Text>

              <div className="bg-light p-4 rounded mb-4">
                <h5>Your Message:</h5>
                <p><strong>Name:</strong> {formData.name}</p>
                <p><strong>Email:</strong> {formData.email}</p>
                <p><strong>Message:</strong> {formData.message}</p>
              </div>

              <Button 
                variant="danger" 
                onClick={() => navigate('/contact')}
                size="lg"
              >
                Send Another Message
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default SubmissionSuccess;