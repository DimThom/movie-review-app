import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Footer = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="bottom">
      <Container>
        <Navbar.Text style={{ color: 'white' }}>
          © {new Date().getFullYear()} All rights reserved.
        </Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default Footer;
