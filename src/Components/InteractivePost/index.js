import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { AiTwotoneLike } from 'react-icons/ai';
import { AiTwotoneDislike } from 'react-icons/ai';
import { AiOutlineComment } from 'react-icons/ai';

import arya from "./images/arya.jpg"

import { createUseStyles } from 'react-jss';
import InteractiveIcon from './InteractiveIcon';
import Comment from './Comment';
const useStyles  = createUseStyles({
    Row:{
        // justifyContent:"flex-start",
        // alignItems:"flex-start",

    }
})

const InteractivePost = () => {
  const classes = useStyles();
    const comments = [
        {image:arya,auther:"Arya Stark",comment:"Grace is a second year History student originally from Suffolk. She's an avid feminist,podcast addict and Quorn scotch egg lover who loves to write, dance and read."},
        {image:arya,auther:"Arya Stark",comment:"Grace is a second year History student originally from Suffolk. She's an avid feminist,podcast addict and Quorn scotch egg lover who loves to write, dance and read."},
    ]
  return (
    <>
    <Row className={classes.Row}>
        <Col className={classes.Col} xs={'auto'}>
            <InteractiveIcon Icon={AiTwotoneLike} label={"likes"} count={21} active={true}/>
        </Col>
        <Col className={classes.Col} xs={'auto'}>
            <InteractiveIcon Icon={AiTwotoneDislike} label={"Dislikes"} count={21} active={false}/>
        </Col>
        <Col className={classes.Col} xs={'auto'}>
            <InteractiveIcon Icon={AiOutlineComment} label={"Comments"} count={21} active={false}/>
        </Col>
    </Row>
    {
    comments.map(
        (item,index)=>
        <Comment key={index} {...item}/>
    )
    }
        
    </>
  )
}

export default InteractivePost