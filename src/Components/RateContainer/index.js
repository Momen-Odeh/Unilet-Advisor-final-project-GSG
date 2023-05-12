import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { createUseStyles } from 'react-jss';
import PrettyRating from "pretty-rating-react";
import go from './images/Group 48.png'
const useStyles  = createUseStyles({
 Col:{
  padding:"0",
  margin:"0"
 },
 value:{
  fontFamily:"'Maven Pro', sans-serif",
  fontWeight:"500",
  fontSize:"24px",
  lineHeight:"28.2px",
  color:"#0FB3AF"
 },
 Num:{
  fontFamily:"'Open Sans', sans-serif",
  fontWeight:"400",
  fontSize:"10px",
  lineHeight:"13.62px",
  color:"#7E7E7E",
  letterSpacing:"0.2px"
 }
    
})
const RateContainer = ({value,numRated,clickOperation}) => {
  const classes = useStyles ();
  return (
    <Container>
      <Row>
        <Col xs={10}>
          <Row>
            <Col xs={3} className={`${classes.Col} ${classes.value}`}>{value}</Col>
            <Col xs={7} className={classes.Col}><PrettyRating  value={value} colors={["#0FB3AF","#0FB3AF","#E5E5E5"]} disabled={true} /></Col>
          </Row>
          <Row>
            <Col xs={6} className={`${classes.Col} ${classes.Num}`}>{numRated} Ratings</Col>
          </Row>
        </Col>
        <Col xs={2} className={classes.Col}>
          <img src={go} alt="go" onClick={clickOperation}/>
        </Col>
      </Row>
    </Container>
  )
}

export default RateContainer