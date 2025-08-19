import React from 'react';
import { Container } from 'react-bootstrap';
import { FaFacebook, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="text-center p-4 mt-5 bg-dark text-light position-relative">
      <a href="#home" className="btn custom-btn-primary position-absolute back-to-top">⮝</a>
      <Container>
        <div className="mb-3">
          <a href="https://facebook.com" className="text-accent mx-2" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="mailto:victolero.elton@gmail.com" className="text-accent mx-2" target="_blank" rel="noopener noreferrer">
            <FaEnvelope />
          </a>
          <a href="https://www.linkedin.com/in/elton-jayk-victolero-320327238" className="text-accent mx-2" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/elton-victolero" className="text-accent mx-2" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>

        <p className="m-0">© {new Date().getFullYear()} Elton Victolero | All Rights Reserved</p>

        <p>📍 Based in the Philippines — Available for remote work</p>

      </Container>
    </footer>
  );
}
