import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import PrettyRating from "pretty-rating-react";
import ButtonAction from '../ButtonAction';
import SecondaryText from '../SecondaryText';
import { createUseStyles } from 'react-jss';
import RetriveData from '../../Firebase/RetriveData';
import { useCookies } from 'react-cookie';
import UpdateData from '../../Firebase/UpdateData';
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

const NewComment = ({title,comments,setNewComments,AverageRating,setAverageRating}) => {
    const classes = useStyles();
    const [rateValue,setRateValue] = useState(1);
    const [comment,setComment] = useState("")
    const [Cookies, setCookies] = useCookies();
    function handelComment(e){
        setComment(e.target.value)

    }
    function handleSubmit(){
        let data
            RetriveData("Users").then((resp)=>{
            data = resp.docs.map((item) => item.data());
            let respData = data.filter((x)=>x.email === Cookies.UserEmail)
            console.log(respData);
            comments.push({
                comment,
                auther:respData[0].fullName

            })
            AverageRating[`star${rateValue}`]++
            setAverageRating({
                ...AverageRating
            })
            
            UpdateData("Places","title",title,{
                Comments:comments,
                AverageRating:AverageRating
            })
            setNewComments([...comments])
        })
        setComment("")

    }
    
  return (
    <>
    <Row className={classes.Row}>
        <Col>
            <SecondaryText text="Comments"/>
        </Col>
    </Row>
    <Row className={`${classes.textAreaContainer} ${classes.Row}`}>
        <Col>
            <Form.Control as="textarea" className={classes.textArea} value={comment} onChange={handelComment}/>
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
            <ButtonAction text="Post Comment" bold onClick={handleSubmit}/>
        </Col>
    </Row>
    </>
  )
}

export default NewComment