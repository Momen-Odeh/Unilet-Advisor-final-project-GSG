import React, { useRef, useState } from 'react'
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
import UplodeFile from '../../Firebase/UplodeFile';
import Loader  from 'react-spinners/ClipLoader';

const useStyle =createUseStyles({
  Container:{
    marginTop:"100px",
    marginBottom:"100px"
  },
  Control:{
    marginBottom:"15px"
  },
})
const NewPostForm = () => {
  const classes = useStyle();
  const [postInfo,setPostInfo] = useState({imagesUrl:[]})
  const images = useRef([]);
  const [err, setErr] = useState();
  const [loading,setLoading]= useState(false)
  const navigate = useNavigate();

  function handelFiles(e)
  {
    if(e.target.name === "image1")
    {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          images.current[0] = file
        };
        reader.readAsDataURL(file);
      } else {
          images.current[0] = null
      }
    }
    else if(e.target.name === "image2")
    {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          images.current[1] = file
        };
        reader.readAsDataURL(file);
      } else {
          images.current[1] = null
      }
    }
    else if(e.target.name === "image3")
    {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          images.current[2] = file
        };
        reader.readAsDataURL(file);
      } else {
          images.current[2] = null
      }
      
    }
    else if(e.target.name === "image4")
    {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          images.current[3] = file
        };
        reader.readAsDataURL(file);
      } else {
          images.current[3] = null
      }
      
    }
  }

  function handlePostInfo(e)
  {
    
      setPostInfo(
        {
          ...postInfo,
          [e.target.name]:e.target.value
        }
      )
  }
  async function handleSubmit(){
    
    try {
      if(!postInfo.title)
      {
        throw new Error("please enter title")
      }
      else if(!postInfo.description)
      {
        throw new Error("please enter description")
      }
      else if(images.current.length <4)
      {
        throw new Error("Please Uplode all Images")
      }
      images.current.map((x=>{if(x===null) throw new Error("Please Uplode all Images")}))
      setErr()
      setLoading(true)
      for (let index = 0; index < images.current.length; index++) {
        images.current[index] = await UplodeFile(images.current[index], "momen.odeh74@gmail.com")
      }
      setLoading(false)
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
        },
        imagesUrl:images.current

      })
      navigate("/ReviewSearch")

    } catch (error) {
      console.log("Error",images.current);
      setErr(error.message)
    }
    
  }
  return (
    <>
    {/* <Loader size={30} color="#0fb3af"  speedMultiplier={1} /> */}
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
                <Form.Control type="text" placeholder="Enter title include street name" name='title' onChange={handlePostInfo} disabled={loading}/>
            </Form.Group> 
        </Col>
      </Row>
      <Row className='justify-content-center mb-4' >
        <Col lg={6} md={10} xs={12}>
            <Form.Group  controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" name='description' rows={3} onChange={handlePostInfo} disabled={loading}/>
            </Form.Group>
        </Col>
      </Row>
      <Row className='justify-content-center mb-4' >
        <Col lg={6} md={10} xs={12}>
            <Form.Group  controlId="exampleForm.ControlInput1">
                <Form.Label>Uploade images</Form.Label>
                <Form.Control className={classes.Control} name='image1' type="file" onChange={handelFiles} disabled={loading}/>
                <Form.Control className={classes.Control} name='image2' type="file" onChange={handelFiles} disabled={loading}/>
                <Form.Control className={classes.Control} name='image3' type="file" onChange={handelFiles} disabled={loading}/>
                <Form.Control className={classes.Control} name='image4' type="file" onChange={handelFiles} disabled={loading}/>
            </Form.Group> 
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
      {loading&&
      <Row className='justify-content-center mb-3' >
        <Col className='text-center' lg={6} md={10} xs={12}>
        <Loader size={50} color="#0fb3af"  speedMultiplier={1} />
        </Col>
      </Row>
      }
      <Row className='mb-1' >
        <Col className='text-center'>
            <ButtonAction text="Submit" bold onClick={handleSubmit}/>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default NewPostForm