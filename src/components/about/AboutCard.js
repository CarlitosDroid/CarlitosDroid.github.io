import { Card } from "react-bootstrap";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
    return (
        <Card>
            <Card.Body>
                <blockquote>
                    <p>
                        Hi Eeveryone, I'm <strong>Carlos Vargas </strong>
                        from <span>Lima, Perú.</span>
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

                    <p style={{ color: "rgb(155 126 172)" }}>
                        "To get something you never had, you have to do something you never did"{" "}
                    </p>
                    <footer>Denzel Washington</footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;