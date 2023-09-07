import { Col, Container, Row } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

import jenkfast from "../../assets/jenkfast.png"
import Particle from "../Particle";

function Projects() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My recent <strong className="purple">Works </strong>
                </h1>
                
                <p style={{ color: "white" }}>
                    Here are a few projects I've worked on recently.
                </p>

                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={jenkfast}
                            title="Jenkfast"
                            description="A simple android app"
                            techstack="ANDROID | KOTLIN"
                            link="https://play.google.com/store/apps/details?id=com.spidevs.jenkfast"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={jenkfast}
                            title="Jenkfast"
                            description="A simple android app"
                            techstack="ANDROID | KOTLIN"
                            link="https://play.google.com/store/apps/details?id=com.spidevs.jenkfast"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={jenkfast}
                            title="Jenkfast"
                            description="A simple android app"
                            techstack="ANDROID | KOTLIN"
                            link="https://play.google.com/store/apps/details?id=com.spidevs.jenkfast"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={jenkfast}
                            title="Jenkfast"
                            description="A simple android app"
                            techstack="ANDROID | KOTLIN"
                            link="https://play.google.com/store/apps/details?id=com.spidevs.jenkfast"
                        />
                    </Col>
                </Row>

            </Container>
        </Container>
    );
}

export default Projects;