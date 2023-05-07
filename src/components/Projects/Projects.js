import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Celestial"
              description="This is a social media web application for star gazers, built with the MERN stack. Users can create accounts, share experiences, connect with others, and explore the night sky through photos and videos. Features include a newsfeed, search function, and commenting capabilities."
              ghLink="https://github.com/ganajayant/Celestial"
              demoLink="https://celestialfrontend.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="DTI-Interaction"
              description="This project predicts drug-target interactions using Graph Convolutional Neural Networks with PyTorch. The model is trained on graph data representing drugs and target proteins, and predicts the likelihood of a drug binding to a protein. GCNN improves accuracy by capturing complex relationships between nodes in the graph."
              ghLink="https://github.com/ganajayant/DTI-Prediction-Using-GCN"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Remote Sensing Change Detection"
              description="This project is currently in development and focuses on remote sensing change detection using transformers. The goal is to use transformer models to detect changes in remote sensing imagery over time, allowing for more efficient and accurate analysis of environmental and land use changes."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Zero-Day"
              description="This mobile app connects college alumni through social media, built with React Native and Firebase. It includes features such as profiles, search, news sharing, event creation providing a convenient platform for alumni to stay engaged with their college."
              ghLink="https://github.com/ganajayant/ZeroDay"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Hotel Management System"
              description="This is a Java-based command line application for hotel management, utilizing MySQL for data storage. Hotel managers can use the application to perform various tasks such as adding customers, allocating rooms, and ordering food. Additionally, the application enables hotel managers to create and remove employee accounts for managing the hotel."
              ghLink="https://github.com/ganajayant/Hotel-Management-System-CRUD"
            // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
