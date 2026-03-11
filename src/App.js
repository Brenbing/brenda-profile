import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar bg="danger" variant="dark" expand="lg" className="mb-4">
          <Container>
            <Navbar.Brand href="/">Brenda's Profile</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
                <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                <Nav.Link as={NavLink} to="/skills">Skills</Nav.Link>
                <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;