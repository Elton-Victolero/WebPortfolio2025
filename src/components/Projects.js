import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const projects = [
  { title: "E-commerce App", img: "https://dl.dropboxusercontent.com/scl/fi/bg3tl203g2dvcwqovx3s1/img4.png?rlkey=2cx935o3etsb96bdlwtdgw3b6&st=it0tdfv1", link: "https://csp3-b550-silang-victolero.vercel.app/", text: "MERN E-Commerce Platform. the platform features dynamic product catalog with filtering and sorting, real-time search, seamless cart updates, secure checkout, and a comprehensive admin dashboard with real-time analytics and user management capabilities." },
  { title: "Blog App", img: "https://dl.dropboxusercontent.com/scl/fi/mqbrkye25xcoehy5de66y/img7.png?rlkey=xjgho2hrcd7zycqyomnhvbmes&st=4m9vh94f", link: "https://blogapp-client-alx3.vercel.app/", text: "MERN BlogApp. The application allows users to perform CRUD operations on blog posts—enabling them to create, edit, and delete content—while featuring a responsive interface and smooth data handling across devices." },
  { title: "Fitness Tracker App", img: "https://dl.dropboxusercontent.com/scl/fi/08hlh67vmkp729ae9x8z8/img10.1.png?rlkey=n6pmor61ki6hyyp3vr5z6lcj8&st=aj60ptub", link: "https://fitness-app-client-rouge.vercel.app/register", text: "MERN Fitness App. The application features a CRUD interface that lets users post, edit, and delete workouts. It is built with a simple, responsive design to ensure smooth interaction across devices." },
  { title: "MovieList App", img: "https://dl.dropboxusercontent.com/scl/fi/38j139ftjf1u9tsz5jcj7/img8.png?rlkey=tqb0wuixjtm2ap7wqb036axxh&st=tm4llzv6", link: "https://movie-app-client-ten-alpha.vercel.app/movies", text: "MERN MovieList App. The application aggregates movie data from multiple registered accounts into a unified list and supports CRUD operations, allowing users to create, edit, and delete movies through a simple and responsive interface." },
  { title: "Basic Web Homepage", img: "https://dl.dropboxusercontent.com/scl/fi/xoomoaiffe9v1x2l0f6oj/img11.1.png?rlkey=y8cb8t5fz5uy65a27deuvyiu8&st=a63ez3my", link: "https://elton-victolero.github.io/home-page-exam/#", text: "Basic Web Homepage. The project demonstrates a clean and responsive layout built with HTML5, CSS3, JavaScript, and Bootstrap, using the framework’s grid system and responsive utilities to organize structured sections and enable smooth navigation for a simple yet effective user experience." },
  { title: "Educational Resource Hub Webpage", img: "https://dl.dropboxusercontent.com/scl/fi/kn5mj8z96f5a8jgv8bfpj/img2.png?rlkey=dgceoh2uokdto05lgzok3eqos&st=4h7dr1vw", link: "https://elton-victolero.github.io/s82/#contact", text: "A Learning Website. The website features a clean and responsive layout, smooth in-page navigation, interactive JavaScript-based components, and structured content built with HTML5 and CSS3 for accessibility across devices." },
  { title: "Flight Reservation App - Unit testing", img: "https://dl.dropboxusercontent.com/scl/fi/j18j96srenlorsk9j9sd7/img5.png?rlkey=2fwsq2ywzk9qzegmrufgzfu5k&st=z6b6m92a", link: "https://example.com", text: "Flight Reservation App – Unit Testing. Implemented unit tests to validate core features such as booking creation, seat availability, and reservation updates, ensuring reliability and accuracy across the application. Skilled in using testing frameworks to catch bugs early, maintain code quality, and support scalable development." },
  { title: "Debugging", img: "https://dl.dropboxusercontent.com/scl/fi/3t97ngv5i2arddezurk2x/img9.png?rlkey=qx2vqfwr09hkeftv6rjvfzu0b&st=j0umq3ic", link: "https://example.com", text: "Debugging & Problem-Solving. Experienced in identifying, isolating, and resolving bugs across both frontend and backend codebases, using tools like browser DevTools, console logging, and breakpoints. Skilled at reading error stacks, tracing logic flow, and applying systematic fixes to ensure smooth application performance." }
];

export default function Projects() {
  return (
    <section id="projects" className="py-5 text-center">
      <Container>
        <h2 className="mb-4">Projects</h2>
        <Row>
          {projects.map((p, i) => (
            <Col md={4} key={i} className="mb-4">
              <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                <Card className="project-card neon-border bg-dark text-light">
                  <Card.Img variant="top" src={p.img} />
                  <Card.Body>
                    <Card.Title>{p.title}</Card.Title>
                    <p>{p.text}</p>
                  </Card.Body>
                </Card>
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
