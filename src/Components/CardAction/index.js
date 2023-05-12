import React from 'react'
import Card from 'react-bootstrap/Card';
import home from './images/home.jpg'


import { createUseStyles } from 'react-jss';
import DarkTitle from '../DarkTitle';
import RateContainer from '../RateContainer';
const useStyles  = createUseStyles({
    Card:{
        width:"100%",
    }
    
  })
const CardAction = ({title,img,value,numRated,clickOperation}) => {
    const classes = useStyles ();
  return (
    <Card className={classes.Card}>
      <Card.Img variant="top" src={home} />
      <Card.Body>
        <Card.Title>
          <DarkTitle text={title}/>
        </Card.Title>
        <Card.Text>
        <RateContainer value={value} numRated={numRated} clickOperation={clickOperation}/>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CardAction