import { Button, Card } from "react-bootstrap";
import { FiExternalLink, FiGithub } from "react-icons/fi";

function ProjectCard(props) {
    return (
        <Card className="project-card-view">

            <Card.Img variant="top" src={props.imgPath} alt="card-img" />
           
            <Card.Body>

                <Card.Title>
                    {props.title}
                </Card.Title>

                <Card.Text style={{ textAlign: "justify" }}>
                    {props.description}
                </Card.Text>

                <Card.Text style={{ textAlign: "center" }}>
                    {props.techstack}
                </Card.Text>

                <Button
                    style={{ margin: "0.5rem" }}
                    variant="primary"
                    href={props.link}
                    target="_blank"
                >
                    <FiExternalLink /> &nbsp; View Project
                </Button>

                <Button
                    style={{ margin: "0.5rem" }}
                    variant="primary"
                    href={props.git}
                    target="_blank"
                >
                    <FiGithub /> &nbsp; View on GitHub
                </Button>

            </Card.Body>

        </Card>
    );
}

export default ProjectCard;