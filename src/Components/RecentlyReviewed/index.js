import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import PrimaryTitle from '../PrimaryTitle';
import SecondaryText from '../SecondaryText';
import Cards from '../Cards';
import ButtonAction from '../ButtonAction';
import { useNavigate } from 'react-router-dom';
import RetriveData from '../../Firebase/RetriveData';

const RecentlyReviewed = () => {
    const navigate = useNavigate();
    const [places, setPlaces] = useState([]);
    useEffect(()=>{
        RetriveData("Places","publishDate",6).then((resp)=>{
            setPlaces(resp);
        })
    },[])
  return (
    <Container>
        <Row className='mb-3'>
            <Col className='text-center'>
                <PrimaryTitle text="Recently Reviewed" sizeText={40} space={1} lineHeight={47}/>
            </Col>
        </Row>
        <Row className='mb-5'>
            <Col className='text-center'>
                <SecondaryText text="More then 10000 clients who are happy with Us. Are You Next One?"/>
            </Col>
        </Row>
        <Row className='mb-4'>
            <Col>
                <Cards places={places}/>
            </Col>
        </Row>
        <Row>
            <Col className='text-center'>
                <ButtonAction text="View All" dark bold onClick={()=>navigate("/ReviewSearchResult/ALL")}/>
            </Col>
        </Row>
    </Container>
  )
}

export default RecentlyReviewed