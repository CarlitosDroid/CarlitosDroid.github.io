import { Col, Row } from "react-bootstrap";

import { SiAndroidstudio, SiArduino, SiDocker, SiFigma, SiGithub, SiLinux, SiMacos, SiPostman, SiUbuntu, SiVisualstudio, SiVisualstudiocode, SiWindows, SiXcode } from "react-icons/si";

function Toolstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={4} className="tech-icons">
                <SiAndroidstudio />
                <p>Android Studio</p>
            </Col>
            <Col xs={4} md={4} className="tech-icons">
                <SiXcode />
                <p>Xcode</p>
            </Col>
            <Col xs={4} md={4} className="tech-icons">
                <SiVisualstudiocode />
                <p>Visual Studio Code</p>
            </Col>
            <Col xs={4} md={4} className="tech-icons">
                <SiGithub />
                <p>Postman</p>
            </Col>
            <Col xs={4} md={4} className="tech-icons">
                <SiMacos />
                <p>macOS</p>
            </Col>
            <Col xs={4} md={4} className="tech-icons">
                <SiFigma />
                <p>Figma</p>
            </Col>
            <Col xs={4} md={4} className="tech-icons">
                <SiPostman />
                <p>Postman</p>
            </Col>
        </Row>
    );
}

export default Toolstack;