import React from 'react';
import { Container } from 'react-bootstrap';

export default function Home() {
  return (
    <section id="home" className="hero-section d-flex align-items-center text-center">
      <Container>
        <h3 className="text-start ms-5 ps-5">Hi! I am</h3>
        <h1 className="display-1 text-accent fw-bolder" id="name">ELTON VICTOLERO</h1>
        <p className="lead"> - Web Developer -</p>
        <p className="lead">This webpage is the culmination of my journey as a career shifter. A space where I showcase what I’ve built throughout my transition into tech. I bring with me the knowledge and mindset shaped by my engineering experience: strong problem-solving, critical thinking, adaptability, structured execution, precision, and creativity. These qualities continue to guide my approach to web development as I design and build user-centered, functional, and scalable digital applications.</p>
      </Container>
    </section>
  );
}
