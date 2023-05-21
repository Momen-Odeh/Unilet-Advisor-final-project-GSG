import React from 'react'
import { createUseStyles } from 'react-jss';
import BG from './images/BG.png'
import DarkTitle from '../DarkTitle';
import SecondaryText from '../SecondaryText';
import ButtonAction from '../ButtonAction';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useNavigate } from 'react-router-dom';
const useStyles  = createUseStyles({
    Hero:{
        backgroundImage:`url(${BG})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width:"100%",
        height:"729px",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        gap:"30px",
        paddingTop:"5%"
    }

})


const HeroSection = () => {
    const classes = useStyles ();
    const navigate = useNavigate();
  return (
    <Container className={classes.Hero} fluid>
        <Row>
            <Col>
                <DarkTitle text="Share Your Student Renting Experience" size={50} weight={700} lineHeight={58.75} space={1} center/>   
            </Col>
        </Row>
        <Row>
            <Col>
                <SecondaryText text="Help other students make the right rental choice" sizeText={24} lineHeight={32.68} weightText={600} center/>
            </Col>
        </Row>
        <Row>
            <Col>
                <ButtonAction onClick={()=>navigate('/ReviewSearch')} text="Search Now" dark bold />    
            </Col>
        </Row>
        
        
        
    </Container>
  )
}

export default HeroSection