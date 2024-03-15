import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/movi.PNG";
import projImg2 from "../assets/img/ai.PNG";
import projImg3 from "../assets/img/hotel.PNG";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Api Movies",
      description: "website development to search for films using html, css, js , react js and fast api",
      imgUrl: projImg1,
    },
    {
      title: "Ai Generate Images",
      description: "website development to generate images produced by html, css, js and react js and fast api",
      imgUrl: projImg2,
    },
    {
      title: "hotel management system",
      description: "development of a hotel management system using html, css, js, react js , laravel and mysql",
      imgUrl: projImg3,
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>As a technical agent specializing in digital development with a passion for IT, I have designed and carried out various projects focused on web development and the creation of software applications. My portfolio reflects my commitment to exploring and mastering the latest technologies to promote my achievements and contribute to innovative solutions.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Get In Touch</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Decription</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Through my projects, I have explored a variety of frameworks and technologies to create dynamic and innovative digital experiences. My achievements include responsive websites, interactive web applications and tailor-made software solutions. I've had the opportunity to use popular frameworks such as React.js to build modern, high-performance user interfaces. Additionally, I leveraged the advanced features of libraries like Redux and Laravel to efficiently manage the state of complex web applications. At the same time, I also worked with back-end frameworks like Node.js to develop robust APIs and full-stack web applications. Each project represents an opportunity to explore new technologies and creatively integrate them to offer digital solutions tailored to the specific needs of my clients.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
