import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { AiTwotoneLike } from 'react-icons/ai';
import { AiTwotoneDislike } from 'react-icons/ai';
import { AiOutlineComment } from 'react-icons/ai';

import user from "./images/user.png"

import { createUseStyles } from 'react-jss';
import InteractiveIcon from './InteractiveIcon';
import Comment from './Comment';
import NewComment from './NewComment';
import HR from '../HR';
import UpdateData from '../../Firebase/UpdateData';
const useStyles  = createUseStyles({
    Row:{
        // justifyContent:"flex-start",
        // alignItems:"flex-start",
        width:"100%"

    }
})

const InteractivePost = ({title,comments,interactions,AverageRating,setAverageRating}) => {
  const classes = useStyles();
    const [like,setLike] = useState(false)
    const [disLike,setDisLike] = useState(false)
    const [commentsActive,setLCommentsActive] = useState(false)
    const [newComments,setNewComments] = useState()
    const [newInteractions,setNewInteractions]=useState()
    function handleLike() {
        setLike(!like);
      
        if (disLike) {
          setNewInteractions((prevInteractions) => ({
            ...prevInteractions,
            like: like ? prevInteractions.like - 1 : prevInteractions.like + 1,
            disLike: prevInteractions.disLike - 1,
          }));
          setDisLike(!disLike);
        } else {
          setNewInteractions((prevInteractions) => ({
            ...prevInteractions,
            like: like ? prevInteractions.like - 1 : prevInteractions.like + 1,
          }));
        }
      }
    function handleDisLike() {
        setDisLike(!disLike)
        // 
        if(like)
        {
            setNewInteractions((prevInteractions) => ({
                ...prevInteractions,
                disLike: disLike ? prevInteractions.disLike - 1 : prevInteractions.disLike + 1,
                like:prevInteractions.like - 1,
            }));
            setLike(!like)
        }
        else
        {
            setNewInteractions((prevInteractions) => ({
                ...prevInteractions,
                disLike: disLike ? prevInteractions.disLike - 1 : prevInteractions.disLike + 1,
            }));
        }
        // 
        
        
    }

    useEffect(() => {
        UpdateData("Places","title",title, {
          interactions: newInteractions,
        });
      }, [newInteractions]);
    // 
    // 
    useEffect(() => {
        if (comments) {
            setNewComments(comments)
        }
      }, [comments]);
    //
    // 
    useEffect(() => {
        if (interactions) {
            setNewInteractions(interactions)
        }
      }, [interactions]);
    //    
  return (
    <div>
    <HR color="#EAEAEA"/>
    <Row className={classes.Row}>
        <Col className={classes.Col} xs={'auto'}>
            <InteractiveIcon Icon={AiTwotoneLike} label={"likes"} count={newInteractions?.like} active={like} onClick={handleLike}/>
        </Col>
        <Col className={classes.Col} xs={'auto'}>
            <InteractiveIcon Icon={AiTwotoneDislike} label={"Dislikes"} count={newInteractions?.disLike} active={disLike} onClick={handleDisLike}/>
        </Col>
        <Col className={classes.Col} xs={'auto'}>
            <InteractiveIcon Icon={AiOutlineComment} label={"Comments"} count={newComments?.length} active={commentsActive} onClick={()=>{setLCommentsActive(!commentsActive)}}/>
        </Col>
    </Row>
    <HR color="#EAEAEA"/>
    
    {
    commentsActive&&
    newComments?.map(
        (item,index)=>
        <div key={index}>
            <Comment  {...item}/>
            <HR color="#EAEAEA"/>
        </div>
        
    )
    }
    {
        commentsActive&&
        <NewComment title={title} comments={comments} setNewComments={setNewComments} AverageRating={AverageRating} setAverageRating={setAverageRating}/>
    }
    </div>
  )
}

export default InteractivePost