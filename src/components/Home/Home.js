import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Tilt from "react-parallax-tilt";

import homeProfile from "../../assets/home-profile.png"
import Type from './Type';
import Particle from '../Particle';
import HomeBody from './HomeBody';


function Home() {
    return (
        <section>
            <Container fluid className='home-section' id='home'>
                <Particle />
                <Container className='home-content'>
                    <Row>
                        <Col md={7} className='home-header'>
                            <h1 style={{ paddingBottom: 15 }} className='heading'>
                                Hi there!{" "}
                                <span className='wave' role='img' aria-labelledby='wave'>
                                    👋🏻
                                </span>
                            </h1>

                            <h1 className='heading-name'>
                                I'M
                                <strong className='main-name'> CARLOS VARGAS</strong>
                            </h1>

                            <h1 className='heading-name'>
                                also known as <strong className='main-name'> CarlitosDroid</strong>
                            </h1>

                            <div style={{ padding: 50, textAlign: 'left' }}>
                                <Type />
                            </div>

                        </Col>

                        <Col md={5} style={{ paddingBottom: 20 }}>
                            <Tilt>
                                <img
                                    src={homeProfile}
                                    className='img-fluid'
                                    alt='home pic'
                                />
                            </Tilt>
                        </Col>
                    </Row>
                </Container>
            </Container>

            <HomeBody />

        </section>
    );
}

export default Home;