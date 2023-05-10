import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LOGO from './images/LOGO.png'
import SecondaryText from '../SecondaryText';
import { createUseStyles } from 'react-jss';
const useStyles  = createUseStyles({
    Col:{
        marginTop:"20px",
        paddingLeft:"20px"
    },
    ColAlign:{
        
        '@media (max-width: 992px)': {
            display:"flex",
            alignItems:"center",
            flexDirection:"column",
        },
    }
})
const FooterLogo = () => {
    const classes = useStyles ();
  return (
    <Container fluid className={classes.ColAlign}>
        <Row>
            <Col>
                <img src={LOGO} alt='logo'/>
            </Col>
        </Row>
        <Row>
            <Col className={classes.Col}>
                <SecondaryText text={"We're shutting the door on second-rate student housing"} sizeText={17} lineHeight={23.15}/>
            </Col>
        </Row>
    </Container>
  )
}

export default FooterLogo