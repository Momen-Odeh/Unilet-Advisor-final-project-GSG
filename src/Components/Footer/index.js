import React from 'react'
import { createUseStyles } from 'react-jss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FooterLogo from './FooterLogo';
const useStyles  = createUseStyles({
    Footer: {
        marginTop:"100px",
        border:"0.1px solid black",
        height:"462px",
        backgroundColor:"#F6F6F6"
    },
    Row:{
        backgroundColor:"red",
    },
    col:{
        backgroundColor:"yellow",
        height:"300px"
    }
})
const Footer = () => {
    const classes = useStyles ();
  return (
    <Container className={classes.Footer} fluid >
        <Row className={classes.Row}>
            <Col className={classes.col}>
                <FooterLogo/>
            </Col>
            <Col className={classes.col}>
                col2
            </Col>
            <Col className={classes.col}>
                col3
            </Col>
            <Col className={classes.col}>
                col4
            </Col>
        </Row>
    </Container>
  )
}

export default Footer