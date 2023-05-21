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
    function findTotal(place) {
        const {star1,star2,star3,star4,star5,} = place.AverageRating
        return star1+star2+star3+star4+star5
    }
    function findAvg(place) {
        let len = findTotal(place)
        if(len === 0) return 0 
        const {star1,star2,star3,star4,star5,} = place.AverageRating
        return ((1*star1+2*star2+3*star3+4*star4+5*star5)/len).toFixed(1)
    }
  return (
    <Container fluid>
    <Row className={classes.Row}>
        {
        places.map((item,index)=>
        <Col key={index} lg={4} md={6} xs={12}> 
            <CardAction title={item.title} img={item.imagesUrl[0]} value={findAvg(item)} numRated={findTotal(item)} clickOperation={()=>navigate(`/ReviewDetails/${item.title}`)}/>
        </Col>
        )}

    </Row>
    </Container>
  )
}

export default Cards