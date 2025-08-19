import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch(form.action, { method: 'POST', body: new FormData(form), mode: 'no-cors' })
      .then(() => { form.reset(); setSubmitted(true); });
  };

  return (
    <section id="contact" className="py-5 text-center">
      <Container>
        <h2 className="mb-4">Contact Me</h2>
        {!submitted ? (
          <Form
            onSubmit={handleSubmit}
            action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSf3gHXKuRTfPUhI5NsbSlpLP9-OYrOYy8dgF4p-B-0Mi4sjXw/formResponse"
            method="POST"
            className="mx-auto contact-form"
            style={{ maxWidth: '500px' }}
          >
            <Form.Control type="text" name="entry.1346691642" placeholder="Name" className="mb-3" required />
            <Form.Control type="email" name="entry.971686030" placeholder="Email" className="mb-3" required />
            <Form.Control as="textarea" rows={4} name="entry.32186357" placeholder="Your Message" className="mb-3" required />
            <Button type="submit" className="custom-btn-primary w-100">Send Message</Button>
          </Form>
        ) : <p className="text-success mt-3">✅ \\Thank you! Your message has been sent.</p>}
      </Container>
    </section>
  );
}
