import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LOGO from './images/LOGO.png'
const FooterLogo = () => {
  return (
    <Container fluid>
        <Row>
            <Col>
                <img src={LOGO} alt='logo'/>
            </Col>
        </Row>
        <Row>
            <Col>
                <div>
                    We're shutting the door on second-rate student housing
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default FooterLogo