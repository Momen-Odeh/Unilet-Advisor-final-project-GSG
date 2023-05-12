import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import InteractivePost from '../../Components/InteractivePost'
import PostDescription from '../../Components/PostDescription';
import AverageRating from '../../Components/AverageRating';
import DarkTitle from '../../Components/DarkTitle';
import PostImage from '../../Components/PostImages';

const ReviewDetailsPage = () => {
  return (
    <Container>
      <Row className='justify-content-between'>
        <Col lg={7}>
          <PostDescription 
          title="Student house of horrors: a shock in Sunderland" 
          PublishTime="PUBLISHED 29 AUGUST 2020" 
          description="Welcome to a series; one which could be endless due to the sheer amount of horror experienced by students across the UK when it comes to student renting. Welcome to a series; one which could be endless due to the sheer amount of horror experienced by students across the UK when it comes to student renting.Welcome to a series; one which could be endless due to the sheer amount of horror experienced by students across the UK when it comes to student renting.Welcome to a series; one which could be endless due to the sheer amount of horror experienced by students across the UK when it comes to student renting."
          />
        </Col>
        <Col lg={4}>
          <AverageRating rate={{one:"",two:"",three:"",four:"",five:""}} />
        </Col>
      </Row>
      <Row>
        <PostImage/>
      </Row>
      <Row>
        <Col>
          <InteractivePost/>
        </Col>
      </Row>
    </Container>
  )
}

export default ReviewDetailsPage