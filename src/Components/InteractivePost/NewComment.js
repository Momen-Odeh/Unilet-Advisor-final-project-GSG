import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import PrettyRating from "pretty-rating-react";
import ButtonAction from '../ButtonAction';
import SecondaryText from '../SecondaryText';
import { createUseStyles } from 'react-jss';
const useStyles  = createUseStyles({
    textAreaContainer:{
        marginTop:"8px"
    },
    rating:{
        marginTop:"28px"
    },
    postCommint:{
        marginTop:"31px"
    },
    textArea:{
        height:"144px"
    },
    Row:{
        width:"100%"
    }
})

const NewComment = () => {
    const classes = useStyles();
    const [rateValue,setRateValue] = useState(0);
  return (
    <>
    <Row className={classes.Row}>
        <Col>
            <SecondaryText text="Comments"/>
        </Col>
    </Row>
    <Row className={`${classes.textAreaContainer} ${classes.Row}`}>
        <Col>
            <Form.Control as="textarea" className={classes.textArea}/>
        </Col>
    </Row>
    <Row className={`${classes.Row} ${classes.Row}`}>
        <Col className={classes.rating}>
            <span>
                 <SecondaryText text="Rating"/>
                 <PrettyRating  colors={["#0FB3AF","#0FB3AF","#E5E5E5"]} value={rateValue}
                  onChange={(val)=>{setRateValue(val)}}/>
            </span>
        </Col>
    </Row>
    <Row className={`${classes.postCommint} ${classes.Row} mb-5`}>
        <Col>
            <ButtonAction text="Post Comment" bold/>
        </Col>
    </Row>
    </>
  )
}

export default NewComment