import React from 'react';
import './Footer.css'
import { Icon } from 'react-icons-kit'
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import { chevronRight } from 'react-icons-kit/feather/chevronRight'
import { instagram } from 'react-icons-kit/feather/instagram'
import { facebookSquare } from 'react-icons-kit/fa/facebookSquare'
import { linkedinSquare } from 'react-icons-kit/fa/linkedinSquare'
import { ic_email_outline } from 'react-icons-kit/md/ic_email_outline'
import { androidHome } from 'react-icons-kit/ionicons/androidHome'
import { androidPhonePortrait } from 'react-icons-kit/ionicons/androidPhonePortrait'
const Footer = () => {
    return (
        <div className="last-section p-4 mt-5">
        <div className="footer-info">
            <Container>
                <Row className="justify-content-center">
                    <Col >
                        <h5 className="mb-5">CONTACT</h5>
                        <p><Icon size={32} icon={androidHome} /> 1945 Washington, San Francisco</p>
                        <p><Icon size={32} icon={androidPhonePortrait} />  +1 234 456 7890</p>
                        <p><Icon size={32} icon={ic_email_outline} /> hello@siteinfo.com</p>

                    </Col>
                    <Col className="icon-class">
                        <h5 className="mb-4">INFORMATION</h5>
                        <p> <Icon icon={chevronRight} /><Link to="/">  Press Center </Link></p>
                        <p><Icon icon={chevronRight} /> <Link to="/"> Travel News </Link></p>
                        <p><Icon icon={chevronRight} /> <Link to="/"> About us </Link></p>
                        <p><Icon icon={chevronRight} /> <Link to="/"> Privacy Policy </Link></p>
                    </Col>
                    <Col className="icon-class">
                        <h5 className="mb-4">OUR MENU</h5>
                        <p> <Icon icon={chevronRight} /> <Link to="/"> Home </Link></p>
                        <p><Icon icon={chevronRight} /><Link to="/" > Tours </Link></p>
                        <p><Icon icon={chevronRight} /><Link to="/" > About Us </Link></p>
                        <p><Icon icon={chevronRight} /><Link to="/" > Contact Us </Link></p>
                    </Col>


                    <Col class="mt-5">
                        <Container>
                            <h5 className="mb-4">Social Sites</h5>
                            <Row >
                                <Col>
                                    <Link to="/" className="text-white">
                                        <Icon size={64} icon={facebookSquare} />
                                    </Link>
                                </Col>
                                <Col>
                                    <Link to="/" className="text-white">
                                        <Icon size={64} icon={instagram} />
                                    </Link>
                                </Col>
                                <Col>
                                    <Link to="/" className="text-white">
                                        <Icon size={64} icon={linkedinSquare} />
                                    </Link>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>

    </div>
    );
};

export default Footer;