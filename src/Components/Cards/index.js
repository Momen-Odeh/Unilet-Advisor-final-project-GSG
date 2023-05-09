import React from 'react'
import CardAction from '../CardAction'
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { createUseStyles } from 'react-jss';
const useStyles  = createUseStyles({
    Row:{
        margin:"0 auto",
        width:"85%",
        justifyContent:"center",
        alignItems:"center",
        rowGap:"50px"
    },
    Col:{
        display:'flex',
        justifyContent:"center"
    }
})

const Cards = () => {
    const classes = useStyles ();
  return (
    <Row className={classes.Row}>
        {
        [1,2,3,4,5,6].map((item,index)=>
        <Col key={index} className={classes.Col} lg={4} md={6} xs={12}>  
            <CardAction title="123 That Road Bournemouth" value={2.9} numRated={59}/>
        </Col>
        )}

    </Row>
    
  )
}

export default Cards