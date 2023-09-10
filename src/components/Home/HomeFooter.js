import { Col, Container, Row } from "react-bootstrap";

import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";

import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillYoutube
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function HomeFooter() {
    return (
        <Row>
            <Col className="home-about-social">
                <h1>
                    Feel free to <span className="purple">connect </span> with me
                </h1>
                <div className="contact">
                    <div>
                        <PhoneIcon
                            color="success"
                            className="con_ico"
                            sx={{ fontSize: 45 }}
                        />
                        <a href="tel:+917069896660" className="con-det">
                            +51 945708989
                        </a>
                    </div>
                    <div>
                        <EmailIcon
                            className="con_ico"
                            color="success"
                            sx={{ fontSize: 45 }}
                        />
                        <a
                            href="mailto:carlosleonardovargashuaman@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                            className="con-det"
                        >
                            carlosleonardovargashuaman@gmail.com
                        </a>
                    </div>
                    <div>
                        <PlaceIcon
                            color="success"
                            className="con_ico"
                            sx={{ fontSize: 45 }}
                        />
                        <p className="con-det">Lima, Peru</p>
                    </div>
                </div>
                <h1>FIND ME ON</h1>
                <ul className="home-about-social-links">
                    <li className="social-icons">
                        <a
                            href="https://github.com/CarlitosDroid"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour  home-social-icons"
                        >
                            <AiFillGithub />
                        </a>
                    </li>
                    <li className="social-icons">
                        <a
                            href="https://twitter.com/Carlitos_Droid"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour  home-social-icons"
                        >
                            <AiOutlineTwitter />
                        </a>
                    </li>
                    <li className="social-icons">
                        <a
                            href="https://www.linkedin.com/in/carlitosdroid/"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour  home-social-icons"
                        >
                            <FaLinkedinIn />
                        </a>
                    </li>
                    <li className="social-icons">
                        <a
                            href="https://www.youtube.com/@carlitosdroid"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour home-social-icons"
                        >
                            <AiFillYoutube />
                        </a>
                    </li>
                </ul>
            </Col>
        </Row>
    );
}
export default HomeFooter;