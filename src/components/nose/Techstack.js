import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { ImAndroid } from "react-icons/im";
import { DiJava, DiJavascript } from "react-icons/di";

function Techstack() {
    return (
        <Row>
            <Col xs={4} md={4} className="tech-icons">
                <ImAndroid />
            </Col>
            <Col xs={4} md={4} className="tech-icons">
                <DiJavascript />
            </Col>
            <Col xs={4} md={4} className="tech-icons">
                <DiJava />
            </Col>
            <Col xs={4} md={4} className="tech-icons">
                <DiJava />
            </Col>
            <Col xs={4} md={4} className="tech-icons">
                <DiJava />
            </Col>
            <Col xs={4} md={4} className="tech-icons">
                <DiJava />
            </Col>
        </Row>
    );
}

export default Techstack;