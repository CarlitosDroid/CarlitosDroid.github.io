import { Card } from "react-bootstrap";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify"}}>
                        Hi Everyone, I'm <strong className="purple">Carlos Vargas </strong>
                        also known as <strong className="purple">CarlitosDroid</strong> from <span className="purple">Lima, Perú.</span>
                        <br />
                        I am a graduated from Universidad Nacional Federico Villarreal
                        with a software engineering degree.
                        <br />
                        I have experience on software development in general but my main focused
                        is mobile development.
                        <br />
                        Apart from coding, some other activities that I love to do!.
                    </p>
                    <ul>
                        <li className="about-activity">
                            <ImPointRight /> Read about Health Care
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Video Creator
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Play Soccer
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Play Games
                        </li>
                    </ul>

                    <p style={{ marginBlockEnd: 0 , color: "#B0BEC5" }}>
                        "To get something you never had, you have to do something you never did"{" "}
                    </p>
                    <br />
                    <footer className="blockquote-footer">Denzel Washington</footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;