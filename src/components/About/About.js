import { Col, Container, Row } from "react-bootstrap";

import aboutImage from "../../assets/about.jpg"
import AboutCard from "./AboutCard";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";

function About() {

    return (
        <Container fluid className="about-section">
            <Container>
                <Row>
                    <Col md={7}
                        style={{
                            justifyContent: "center",
                            paddingTop: "30px",
                            paddingBottom: "50px"
                        }}
                    >
                        <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                            Known Who <strong className="purple">I'M</strong>
                        </h1>
                        <AboutCard />
                    </Col>

                    <Col md={5}
                        style={{ paddingTop: "120px", paddingBottom: "50px" }}
                        className="about-img"
                    >
                        <img src={aboutImage} alt="about" className="img-fluid" />
                    </Col>
                </Row>

                <h1 className="project-heading">
                    Professional <strong>Skillset </strong>
                </h1>

                <Techstack />

                <h1>
                    <strong>Tools</strong> I use
                </h1>

                <Toolstack />

            </Container>
        </Container>
    );
}

export default About;