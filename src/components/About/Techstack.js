import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { ImAndroid, ImAppleinc } from "react-icons/im";
import { SiAndroid, SiApple, SiDocker, SiGooglecloud, SiJavascript, SiKotlin, SiNodedotjs, SiSwift } from "react-icons/si";
import { DiJava, DiJavascript } from "react-icons/di";

function Techstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <SiAndroid />
                <p>Android</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiApple />
                <p>iOS</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiKotlin />
                <p>Kotlin</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiSwift />
                <p>Swift</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiNodedotjs />
                <p>Nodejs</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiJavascript />
                <p>Javascript</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiGooglecloud />
                <p>Google Cloud</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiDocker />
                <p>Docker</p>
            </Col>
        </Row>
    );
}

export default Techstack;