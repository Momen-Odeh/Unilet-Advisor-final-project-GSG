import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiTwotoneLike } from 'react-icons/ai';
import { AiTwotoneDislike } from 'react-icons/ai';
import { AiOutlineComment } from 'react-icons/ai';

import { createUseStyles } from 'react-jss';
import InteractiveIcon from './InteractiveIcon';
const useStyles  = createUseStyles({
    Row:{
        // justifyContent:"flex-start",
        // alignItems:"flex-start",

    }
})

const InteractivePost = ({colored}) => {
    const [like, setLike] = useState(false);
  const classes = useStyles(like); // Pass the "like" state to the useStyles function

  return (
    // <div><AiTwotoneLike/><AiTwotoneDislike/><AiOutlineComment/></div>
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
  )
}

export default InteractivePost