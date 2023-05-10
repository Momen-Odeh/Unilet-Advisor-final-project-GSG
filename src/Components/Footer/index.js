import React from 'react'
import { createUseStyles } from 'react-jss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FooterLogo from './FooterLogo';
import FooterSection from './FooterSection';
import i1 from './images/icon1.png'
import i2 from './images/Group22.png'
import i3 from './images/Group33.png'
import i4 from './images/Group44.png'
import i5 from './images/Group 38.png'
import i6 from './images/Group.png'
import HR from '../HR';
import SecondaryText from '../SecondaryText';
const useStyles  = createUseStyles({
    Footer: {
        // marginTop:"100px",
        // border:"0.1px solid black",
        // height:"462px",
        padding:"0px 20px",
        backgroundColor:"#F6F6F6",
        paddingBottom:"30px",
        paddingTop:"60px"
    },
    Row:{
        // backgroundColor:"red",
        rowGap:"40px"
        
    },
    Col:{
        // backgroundColor:"yellow",
        // height:"300px",
        // display:"flex",
        // justifyContent:"centers"

    },
    cetral:{
        display:"flex",
        justifyContent:"center"
    }
})
const Footer = () => {
    const classes = useStyles ();
    let quick=[{text:"Review a property"},{text:"Articles"},{text:"About us"},{text:"Contact us"},{text:"Terms & Conditions"},{text:"Privacy Policy"}]
    let Stay =[{text:"012 9638595661",icon:i1},
    {text:"info@uniletadvisor.com",icon:i5},
    {text:"Palistine Nablus",icon:i6},     
    ]
    let social =[{text:"Facebook",icon:i2},
    {text:"Twitter",icon:i3},
    {text:"Instagram",icon:i4},     
    ]
  return (
    <Container className={classes.Footer} fluid > 
        <Row className={classes.Row}>
            <Col lg={3} md={12} className={classes.Col}>
                <FooterLogo/>
            </Col>
            <Col lg={3} md={4} sm={6} className={classes.Col}>
                <FooterSection title="Quick Links" list={quick}/>  
            </Col>
            <Col lg={3} md={4} sm={6}  className={classes.Col}>
                <FooterSection title="Stay In Touch" list={Stay}/>  
            </Col>
            <Col lg={3} md={4} sm={6} className={classes.Col}>
                <FooterSection title="Connect with" list={social}/>  
            </Col>
        </Row>
        <Row>
            <Col>
                <HR/>
            </Col>
        </Row>
        <Row>
            
            <Col xs={12} className={classes.cetral}>
            <SecondaryText text={"Unilet Advisor © 2023"}sizeText={14} lineHeight={19.07}/>
            </Col>
            
        </Row>
    </Container>
  )
}

export default Footer