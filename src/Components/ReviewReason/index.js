import React from 'react'
import { createUseStyles } from 'react-jss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import PrimaryTitle from '../PrimaryTitle';
import SecondaryText from '../SecondaryText';
import Reason from './Reason';
import img1 from './images/img1.png'
import img2 from './images/img2.png'
import img3 from './images/img3.png'
import img4 from './images/img4.png'
const useStyles  = createUseStyles({
   
});
const ReviewReason = () => {
    const classes = useStyles ();
  return (
    <Container >
    <Row className='mb-3'>
        <Col className="text-center">
            <PrimaryTitle text="Why Review Your Student Accommodation?" sizeText={40} lineHeight={47} space={1}/>
        </Col>
    </Row>
    <Row className='mb-3'>
        <Col className="text-center">
            <SecondaryText text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it  to make a type
            specimen book  It has survived not only five centuries"/>
        </Col>
    </Row>
    <Row className='mb-5'>
        <Reason icon={img1} text="Share relevant infomation with other students"/>
        <Reason icon={img2} text="Help other students make informed rental decisions"/>
        <Reason icon={img3} text="Help other students save time when making rental decision Help to improve"/>
        <Reason icon={img4} text="Help to improve student living standards"/>
    </Row>

    </Container>
    
  )
}

export default ReviewReason