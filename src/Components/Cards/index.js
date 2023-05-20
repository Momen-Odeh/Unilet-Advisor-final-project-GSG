import React from 'react'
import CardAction from '../CardAction'
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { createUseStyles } from 'react-jss';
import Container from 'react-bootstrap/esm/Container';
import { useNavigate } from 'react-router-dom';
const useStyles  = createUseStyles({
    Row:{
        rowGap:"50px"
    },
    Col:{
        // display:'flex',
        // justifyContent:"center"
    }
})

const Cards = ({places}) => {
    const classes = useStyles ();
    const navigate = useNavigate();
  return (
    <Container fluid>
    <Row className={classes.Row}>
        {
        places.map((item,index)=>
        <Col key={index} lg={4} md={6} xs={12}> 
            <CardAction title={item.title} img={item.imagesUrl[0]} value={2.9} numRated={59} clickOperation={()=>navigate(`/ReviewDetails/${item.title}`)}/>
        </Col>
        )}

    </Row>
    </Container>
  )
}

export default Cards