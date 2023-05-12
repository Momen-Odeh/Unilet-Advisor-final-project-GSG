import React from 'react'
import Col from 'react-bootstrap/Col';
import SecondaryText from '../SecondaryText';
import { createUseStyles } from 'react-jss';
const useStyles  = createUseStyles({
    Col:{
        paddingTop:"50px"
    }
});
const Reason = ({icon,text}) => {
    const classes = useStyles ();
  return (
    <Col className={`text-center ${classes.Col}`} lg={3} sm={6} xs={12} >
            <img src={icon} alt='img'/>
            <SecondaryText text={text}/>
    </Col>
  )
}

export default Reason