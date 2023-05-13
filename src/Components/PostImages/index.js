import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import img0 from './images/home.jpg'
import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'
import img4 from './images/img4.jpg'
import { createUseStyles } from 'react-jss';
const useStyles  = createUseStyles({
    img:{
        width:"100%",
        borderRadius:"5px"
    },
    bigImg:{
        alignSelf:"center",
        '@media (max-width: 767px)': {
            display:"none",
          },
    }
});
const PostImage = () => {
    const classes = useStyles ();
    const [currentImg,SetcurrentImg] =useState(img0)
    const [prevImg,SetcprevImg] =useState(img0)
  return (
    <>
        <Col lg={3} md={4} xs={12}>
            {
            [img0,img1,img2,img4]
            .map((item,index)=>
            <Row key={index} className='mb-2'>
                <Col>
                    <img src={item} alt="img" className={classes.img} 
                    onClick={()=>{SetcurrentImg(item);SetcprevImg(item)}} 
                    onMouseEnter={()=>{SetcurrentImg(item)}}
                    onMouseLeave={()=>{SetcurrentImg(prevImg)}}
                    />    
                </Col>
            </Row>
            )}
        </Col>
        <Col lg={9} md={8} visible="lg" className={classes.bigImg}>
            <Row>
                <Col>
                <img src={currentImg} alt="img" className={classes.img}/>    
                </Col>
            </Row>
        </Col>
    </>
    
  )
}

export default PostImage