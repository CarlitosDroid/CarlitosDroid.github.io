import { Col, Container, Row } from "react-bootstrap";

function HomeBody() {
    return (
        <Container>
            <Container>
                <Row>
                    <Col md={8}>
                        <h1 style={{ fontSize: "2.6em" }}>
                            LET ME <span className="purple"> INTRODUCE </span> MYSELF
                        </h1>
                    </Col>
                    <Col md={4}>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default HomeBody;