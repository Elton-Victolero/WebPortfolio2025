import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link as ScrollLink, Events } from 'react-scroll';

export default function NavigationBar() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    Events.scrollEvent.register('begin', () => {});
    Events.scrollEvent.register('end', () => {});
    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  const sections = [
    { id: 'home', label: '// home' },
    { id: 'projects', label: '// projects' },
    { id: 'tools', label: '// tools' },
    { id: 'contact', label: '// contact' },
  ];

  return (
    <Navbar expand="md" variant="dark" className="neon-nav fixed-top">
      <Container>
        <Navbar.Brand href="#home" className="text-accent">_ E.Victolero _</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto px-5">
            {sections.map((section) => (
              <ScrollLink
                key={section.id}
                to={section.id}
                spy={true}
                smooth={true}
                offset={-70} /* offset for fixed navbar  */
                duration={500}
                onSetActive={() => setActiveSection(section.id)}
                className={`nav-link text-accent nav-scroll-link ${
                  activeSection === section.id ? 'active-link' : ''
                }`}
              >
                {section.label}
              </ScrollLink>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
