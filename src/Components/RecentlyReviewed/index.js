import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import PrimaryTitle from '../PrimaryTitle';
import SecondaryText from '../SecondaryText';
import Cards from '../Cards';
import ButtonAction from '../ButtonAction';

const RecentlyReviewed = () => {
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
                <Cards/>
            </Col>
        </Row>
        <Row>
            <Col className='text-center'>
                <ButtonAction text="View All" dark bold/>
            </Col>
        </Row>
    </Container>
  )
}

export default RecentlyReviewed