import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import PrimaryTitle from '../../Components/PrimaryTitle';
import SecondaryText from '../../Components/SecondaryText';
import Cards from '../../Components/Cards';
import ButtonAction from '../../Components/ButtonAction';
import SearchInput from '../../Components/SearchInput';
import SortResult from '../../Components/SortResult';

const ReviewSearchResultPage = () => {
  return (
    <Container>
        <Row className='mb-3'>
            <Col className='text-center'>
                <PrimaryTitle text="Reviews properties" sizeText={40} space={1} lineHeight={47}/>
            </Col>
        </Row>
        <Row className='mb-5'>
            <Col className='' xs={5}>
                <SecondaryText text="Search for a specific UK address or town" weightText={400} lineHeight={23.15} sizeText={17}/>
                <SearchInput btnText="Search" placeHolder="Start typing the address of the property"/>
            </Col>
            <Col className='text-center'  xs={3}>
                <SortResult/>
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

export default ReviewSearchResultPage