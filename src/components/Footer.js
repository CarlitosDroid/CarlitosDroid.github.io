import { Col, Container, Row } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {

    let date = new Date();
    let year = date.getFullYear();

    return (
        <Container fluid className="footer">
            <Row>
                <Col md="4" className="footer-copywright">
                    <h3>Designed and Developed by Carlos Vargas</h3>
                </Col>
                <Col md="4" className="footer-copywright">
                    <h3>Copyright © {year} HM</h3>
                </Col>
                <Col md="4" className="footer-body">
                    <ul className="footer-icons">
                        <li className="social-icons">
                            <a
                                href="https://github.com/CarlitosDroid"
                                style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillGithub />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://twitter.com/Carlitos_Droid"
                                style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiOutlineTwitter />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/carlitosdroid/"
                                style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedinIn />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.youtube.com/@carlitosdroid"
                                style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillYoutube />
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;