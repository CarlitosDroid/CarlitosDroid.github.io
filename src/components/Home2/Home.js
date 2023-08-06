import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import homeProfile from "../../assets/home-profile.png"
import Type from './Type';


function Home() {
    return (
        <section>
            <Container fluid className='home-section' id='home'>
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
                                <strong className='main-name'> CARLOS VARGAS </strong>
                            </h1>
                            <h1 style={{ paddingBottom: 15, textAlign: 'left' }}>
                                also known as <strong className='main-name'> CarlitosDroid</strong>
                            </h1>

                            <div style={{ padding: 50, textAlign: 'left' }}>
                                <Type />
                            </div>


                        </Col>
                        <Col md={5} style={{ paddingBottom: 20 }}>
                            <img
                                src={homeProfile}
                                alt='home pic'
                                className='img-fluid'
                                style={{ maxHeight: "450px" }}
                            />
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    );
}

export default Home;