import { Card, CardMedia } from "@mui/material";
import { Button, Container, Row } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import Particle from "../Particle";

function Resume() {
    return (
        <div>
            <Container fluid className="resume-section">
                <Particle />

                <Row style={{ justifyContent: "center", position: "relative" }}>
                    <Button
                        variant="primary"
                        href="https://drive.google.com/uc?id=1I1DUaSf45lDKWNMw7_5IX1u22MGCEMAX&export=download"
                        target="_blank"
                    >
                        <AiOutlineDownload />
                        &nbsp;Download Resume
                    </Button>
                </Row>

                <Row className="resume">
                    <Card sx={{ maxWidth: 824 }}>
                        <CardMedia
                            className="cardmedia"
                            component="iframe"
                            height="1056px"
                            src="https://drive.google.com/file/d/1I1DUaSf45lDKWNMw7_5IX1u22MGCEMAX/preview"
                        />
                    </Card>
                </Row>

                <Row style={{ justifyContent: "center", position: "relative" }}>
                    <Button
                        variant="primary"
                        href={"https://drive.google.com/uc?id=1I1DUaSf45lDKWNMw7_5IX1u22MGCEMAX&export=download"}
                        target="_blank"
                    >
                        <AiOutlineDownload />
                        &nbsp;Download Resume
                    </Button>
                </Row>
            </Container>
        </div>
    );
}

export default Resume;