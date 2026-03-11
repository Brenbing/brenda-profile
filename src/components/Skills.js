import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Skills() {
  const technicalSkills = [
    { name: 'HTML/CSS', level: 'Advanced', percentage: 70 },
    { name: 'JavaScript', level: 'Beginner', percentage: 40 },
    { name: 'Python', level: 'Beginner', percentage: 30 },
    { name: 'Java', level: 'Intermediate', percentage: 50 },
    { name: 'MySQL', level: 'Beginner', percentage: 40 },
    { name: 'React.js', level: 'Beginner', percentage: 30 },
  ];

  const softSkills = [
    'Team Collaboration',
    'Problem Solving',
    'Time Management',
    'Adaptability',
    'Creative Thinking'
  ];

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title as="h2" className="text-center mb-4" style={{color: '#c2185b'}}>
                My Skills
              </Card.Title>
              
              <h4 className="mb-3">Technical Skills</h4>
              {technicalSkills.map((skill, index) => (
                <div key={index} className="mb-3">
                  <div className="d-flex justify-content-between">
                    <strong>{skill.name}</strong>
                    <span className="text-danger">{skill.level}</span>
                  </div>
                  <div className="progress" style={{ height: '10px' }}>
                    <div 
                      className="progress-bar bg-danger" 
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>
                </div>
              ))}

              <hr className="my-4" />

              <h4 className="mb-3">Soft Skills</h4>
              <div className="d-flex flex-wrap gap-2">
                {softSkills.map((skill, index) => (
                  <span 
                    key={index}
                    className="badge bg-danger p-3"
                    style={{ fontSize: '0.9rem' }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Skills;