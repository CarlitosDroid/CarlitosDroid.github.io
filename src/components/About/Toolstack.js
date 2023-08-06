import { Col, Row } from "react-bootstrap";

import { SiArduino, SiDocker, SiLinux, SiMacos, SiUbuntu, SiWindows } from "react-icons/si";

function Toolstack() {
    return (
        <Row >
            <Col xs={4} md={4} className="tech-icons">
                <SiMacos />
            </Col>
            <Col xs={4} md={4} className="tech-icons">
                <SiWindows />
            </Col>
            <Col xs={4} md={4} className="tech-icons">
                <SiUbuntu />
            </Col>
            <Col xs={4} md={4} className="tech-icons">
                <SiArduino />
            </Col>
            <Col xs={4} md={4} className="tech-icons">
                <SiLinux />
            </Col>
            <Col xs={4} md={4} className="tech-icons">
                <SiDocker />
            </Col>
        </Row>
    );
}

export default Toolstack;