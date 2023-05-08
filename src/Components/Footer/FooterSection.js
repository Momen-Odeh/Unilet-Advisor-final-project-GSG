import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PrimaryTitle from '../PrimaryTitle';
import SecondaryText from '../SecondaryText';
import { createUseStyles } from 'react-jss';

const useStyles  = createUseStyles({
    Col:{
        display:"flex",
        flexDirection:"column",
        gap:"15px",
        marginTop:"20px",
    },
    
})
const FooterSection = ({title, list}) => {
    const classes = useStyles ();
  return (
    <Container>
        <Row>
            <Col>
                <PrimaryTitle text={title} sizeText={24} lineHeight={28.2}/>
            </Col>
        </Row>
        <Row>
            <Col className={classes.Col}>
            {
                
                list.map(((item,index)=>
                <SecondaryText text={item.text} key={index} sizeText={17} lineHeight={23.15} icon={item.icon}/>
                ))
            }
            </Col>
        </Row>
    </Container>
  )
}

export default FooterSection