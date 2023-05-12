import React from 'react'
import CardAction from '../CardAction'
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { createUseStyles } from 'react-jss';
import Container from 'react-bootstrap/esm/Container';
const useStyles  = createUseStyles({
    Row:{
        rowGap:"50px"
    },
    Col:{
        // display:'flex',
        // justifyContent:"center"
    }
})

const Cards = () => {
    const classes = useStyles ();
  return (
    <Container fluid>
    <Row className={classes.Row}>
        {
        [1,2,3,4,5,6].map((item,index)=>
        <Col key={index} lg={4} md={6} xs={12}>  
            <CardAction title="123 That Road Bournemouth" value={2.9} numRated={59}/>
        </Col>
        )}

    </Row>
    </Container>
  )
}

export default Cards