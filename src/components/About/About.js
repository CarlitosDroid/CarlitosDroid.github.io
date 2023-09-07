import { Col, Container, Row } from "react-bootstrap";

import aboutImage from "../../assets/mobile_stack_developer.png"
import AboutCard from "./AboutCard";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import Particle from "../Particle";

function About() {

    return (
        <Container fluid className="about-section">
            <Particle />
            <Container>
                <Row style={{ justifyContent: "center", padding: "10px" }}>
                    <Col
                        md={7}
                        style={{
                            justifyContent: "center",
                            paddingTop: "30px",
                            paddingBottom: "50px"
                        }}
                    >
                        <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                            Know Who <strong className="purple">I'M</strong>
                        </h1>
                        <AboutCard />
                    </Col>

                    <Col
                        md={5}
                        style={{ paddingTop: "100px", paddingBottom: "50px" }}
                        className="about-img"
                    >
                        <img src={aboutImage} alt="about" className="img-fluid" />
                    </Col>
                </Row>

                <h1 className="project-heading">
                    Professional <strong className="purple">Skillset </strong>
                </h1>

                <Techstack />

                <h1 className="project-heading">
                    <strong className="purple">Tools</strong> I use
                </h1>

                <Toolstack />

            </Container>
        </Container>
    );
}

export default About;