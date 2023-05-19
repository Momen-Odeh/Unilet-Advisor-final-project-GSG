import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {createUseStyles} from 'react-jss'
import DarkTitle from '../../Components/DarkTitle';
import SecondaryText from '../../Components/SecondaryText';
import ButtonAction from '../ButtonAction';
import Alert from 'react-bootstrap/Alert';
import StoreNewData from '../../Firebase/StoreNewData';
import Form from 'react-bootstrap/Form';
import {serverTimestamp} from 'firebase/firestore'
import { useNavigate} from 'react-router-dom';
const useStyle =createUseStyles({
  Container:{
    marginTop:"100px",
    marginBottom:"100px"
  },
  Control:{
    marginBottom:"15px"
  }
})
const NewPostForm = () => {
  const classes = useStyle();
  const [postInfo,setPostInfo] = useState({imagesUrl:[]})
  const [err, setErr] = useState();
  const navigate = useNavigate();

  function handlePostInfo(e)
  {
    if(e.target.name === "image1")
    {
      setPostInfo({
        ...postInfo,
        imagesUrl: [
          e.target.value,
          ...postInfo.imagesUrl.slice(1)
        ]
      });
    }
    else if(e.target.name === "image2")
    {
      setPostInfo({
        ...postInfo,
        imagesUrl: [
          postInfo.imagesUrl[0],
          e.target.value,
          ...postInfo.imagesUrl.slice(2) 
        ]
      });
    }
    else if(e.target.name === "image3")
    {
      setPostInfo({
        ...postInfo,
        imagesUrl: [
          postInfo.imagesUrl[0],  
          postInfo.imagesUrl[1],  
          e.target.value, 
          ...postInfo.imagesUrl.slice(3)
        ]
      });
      
    }
    else if(e.target.name === "image4")
    {
      setPostInfo({
        ...postInfo,
        imagesUrl: [
          postInfo.imagesUrl[0],  
          postInfo.imagesUrl[1],  
          postInfo.imagesUrl[2],  
          e.target.value,
          ...postInfo.imagesUrl.slice(4)
        ]
      });
      
    }
    else
    {
      setPostInfo(
        {
          ...postInfo,
          [e.target.name]:e.target.value
        }
      )
    }
  }
  async function handleSubmit(){
    
    try {
      console.log(postInfo);
      if(!postInfo.title)
      {
        throw new Error("please enter title")
      }
      else if(!postInfo.description)
      {
        throw new Error("please enter description")
      }
      else if(postInfo.imagesUrl.length < 4)
      {
        throw new Error("plese Enter images URL")
      }
      else{
        let res = postInfo.imagesUrl.filter((x)=> x=== "")
        console.log("res",res);
        if(res.length > 0)
        {
          throw new Error("plese Enter images URL")
        }
      }
      setErr()
      StoreNewData("Places",{
        ...postInfo,
        AverageRating:{
          star1:0,
          star2:0,
          star3:0,
          star4:0,
          star5:0,
        },
        Comments:[],
        publishDate:serverTimestamp(),
        interactions:{
          like:0,
          disLike:0
        }

      })
      navigate("/ReviewSearch")
    } catch (error) {
      setErr(error.message)
    }
    
  }
  return (
    <>
    <Container className={classes.Container}>
      <Row className='mb-5'>
        <Col>
          <DarkTitle text="Create New Post Now" size={40} lineHeight={47} center space={1} weight={700}/>
        </Col>
      </Row>
      <Row className='justify-content-center mb-4'>
        <Col lg={6} md={10} xs={12}>
            <Form.Group  >
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter title include street name" name='title' onChange={handlePostInfo}/>
            </Form.Group> 
        </Col>
      </Row>
      <Row className='justify-content-center mb-4' >
        <Col lg={6} md={10} xs={12}>
            <Form.Group  controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" name='description' rows={3} onChange={handlePostInfo} />
            </Form.Group>
        </Col>
      </Row>
      <Row className='justify-content-center mb-4' >
        <Col lg={6} md={10} xs={12}>
            <Form.Group  controlId="exampleForm.ControlInput1">
                <Form.Label>URL images</Form.Label>
                <Form.Control className={classes.Control} name='image1' type="URL" onChange={handlePostInfo} />
                <Form.Control className={classes.Control} name='image2' type="URL" onChange={handlePostInfo} />
                <Form.Control className={classes.Control} name='image3' type="URL" onChange={handlePostInfo} />
                <Form.Control className={classes.Control} name='image4' type="URL" onChange={handlePostInfo} />
            </Form.Group> 
        </Col>
      </Row>
      
      <Row className='mb-1' >
        <Col className='text-center'>
            <ButtonAction text="Submit" bold onClick={handleSubmit}/>
        </Col>
      </Row>
      
      {err&&
      <Row className='justify-content-center mb-1' >
        <Col className='text-center' lg={6} md={10} xs={12}>
        <Alert  variant={"danger"}>
          <SecondaryText text={err}/>
        </Alert>
        </Col>
      </Row>
      }
    </Container>
    </>
  )
}

export default NewPostForm