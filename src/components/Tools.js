import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const tools = [
  { name: "HTML5", img: "https://dl.dropboxusercontent.com/scl/fi/97mfwbkv15e2tbvc7hag3/html5.png?rlkey=soyiuy0039d2nzaica8xwrfsd&st=c1tki7z4", link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" },
  { name: "CSS3", img: "https://dl.dropboxusercontent.com/scl/fi/wazmlof3w3svnadvv7q8m/css3.png?rlkey=tdbzkn1pn31rsnswx0ij02qty&st=mzcwzt4j", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { name: "JavaScript", img: "https://dl.dropboxusercontent.com/scl/fi/awj8qm9qofm6jxsk29wvb/javascript.png?rlkey=wqe2bmsmafyvcuob0e9uvongl&st=jlaoh9yd", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "Bootstrap", img: "https://dl.dropboxusercontent.com/scl/fi/3h7y0yf3t7xc49ahabmmo/bootstrap.png?rlkey=djtove5p2gh1db09gsk42vyol&st=2petm05j", link: "https://getbootstrap.com/" },
  { name: "MongoDB", img: "https://dl.dropboxusercontent.com/scl/fi/j3wkmwq2hwng221mhani3/mongodb.png?rlkey=sthhtb5cmqn9p7ichkxz1d5me&st=52dk3jng", link: "https://www.mongodb.com/" },
  { name: "Express.js", img: "https://dl.dropboxusercontent.com/scl/fi/2tcg77npfmre3gy7cfns4/express.png?rlkey=axghenzee808lqvyuokv7f1mq&st=j6g17ng2", link: "https://expressjs.com/" },
  { name: "ReactJS", img: "https://dl.dropboxusercontent.com/scl/fi/fcc2xu9urx5h0olc8cfl3/reactjs.png?rlkey=lfm38g9wtikfygnoxvuryllz7&st=rjvjkkuk", link: "https://reactjs.org/" },
  { name: "Node.js", img: "https://dl.dropboxusercontent.com/scl/fi/yhc235thelynu28vrcb38/nodejs.png?rlkey=67hbn3ixfmeyq5hjx6k6ygzfu&st=kp94coz3", link: "https://nodejs.org/" },
  { name: "Postman", img: "https://dl.dropboxusercontent.com/scl/fi/z46i3sp08hnjgjvcr22c2/postman.png?rlkey=61gqqlvv1bpsaonsyz0nqgh5o&st=perg5b9h", link: "https://www.postman.com/" },
  { name: "Sublime Text", img: "https://dl.dropboxusercontent.com/scl/fi/90usxebyv5g4x7sw0ce7e/sublime.png?rlkey=40qntc7vuliuyy44wbw7y6okk&st=1w5fab62", link: "https://www.sublimetext.com/" },
  { name: "Git", img: "https://dl.dropboxusercontent.com/scl/fi/j6puem4g4toy7cerh89cu/git.png?rlkey=r4kb9fuuxwvwbu52qgnn11wia&st=xi4wjdwh", link: "https://git-scm.com/" },
  { name: "AWS", img: "https://dl.dropboxusercontent.com/scl/fi/szhicylzhi3nwl75ejahw/aws.png?rlkey=jbsd3le6l8viuggl4wddgj9u6&st=zdq6m0rz", link: "https://aws.amazon.com/" },
  { name: "Render", img: "https://dl.dropboxusercontent.com/scl/fi/x3yccxv55talfc5gnfvi6/render.png?rlkey=il8rkfobp3bdu4dydrufnjnl5&st=yipxfif9", link: "https://render.com/" },
  { name: "Vercel", img: "https://dl.dropboxusercontent.com/scl/fi/38al6zot0wkn8nbvzvwxn/vercel.png?rlkey=mrxf28yumia2kyl3bvgivc39a&st=kmoavtwk", link: "https://vercel.com/" },
  { name: "Trello", img: "https://dl.dropboxusercontent.com/scl/fi/hch129v2tv13dwjy7k6gs/trello.png?rlkey=w5r37pkd4qpwo5f7swfdj92t3&st=d7531zfv", link: "https://trello.com/" }
];


export default function Tools() {
  return (
    <section id="tools" className="py-5 text-center">
      <Container>
        <h2 className="mb-4">Tools & Technologies</h2>
        <Row className="justify-content-center">
          {tools.map((t, i) => (
            <Col xs={4} md={2} key={i} className="mb-3">
              <a href={t.link} target="_blank" rel="noopener noreferrer">
                <img src={t.img} alt={t.name} className="img-fluid tool-img neon-border tool-icon" />
              </a>
              <p className="mt-2 fw-bolder">{t.name}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
