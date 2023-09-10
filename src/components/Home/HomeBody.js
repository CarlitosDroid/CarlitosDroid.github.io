import { Col, Container, Row } from "react-bootstrap";
import Tilt from "react-parallax-tilt";

import channelLogo from "../../assets/channel_logo.png"
import HomeFooter from "./HomeFooter";

function HomeBody() {
    return (
        <Container>
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{ fontSize: "2.6em" }}>
                            LET ME <span className="purple"> INTRODUCE </span> MYSELF
                        </h1>

                        <p className="home-about-body">
                            I have over 8 years of experience on software development in general.
                            But still there is much to learn...¯\_( ͡❛ ͜ʖ ͡❛)_/¯
                            <br />
                            However my main focused is on &nbsp;
                            <i>
                                <b className="purple">
                                    Mobile and Backend technologies
                                </b>
                            </i>
                            <br />
                            Whenever possible, I applied my passion for developing products with &nbsp;
                            <i>
                                <b className="purple">
                                    Modern Mobile Library and Frameworks
                                </b>
                            </i>
                            &nbsp; like &nbsp;
                            <b className="purple">
                                Jetpack Compose
                            </b>
                            &nbsp; and &nbsp;
                            <b className="purple">
                                SwiftUI
                            </b>
                            .&nbsp; With regard to backend technologies, I mostly use &nbsp;
                            <i>
                                <b className="purple">
                                    Nodejs, Google Cloud, Docker, Typescript, React and Redux.
                                </b>
                            </i>
                        </p>
                    </Col>
                    <Col md={4} className="myAvtar">
                        <Tilt>
                            <img
                                src={channelLogo}
                                className="img-fluid"
                                alt="avatar"
                            />
                        </Tilt>
                    </Col>
                </Row>
                <HomeFooter />
            </Container>
        </Container>
    );
}

export default HomeBody;