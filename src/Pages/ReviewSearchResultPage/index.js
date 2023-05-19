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
import {createUseStyles} from 'react-jss'
const useStyle = createUseStyles({
  RowText:{
    justifyContent:"space-between",
    alignItems:"flex-end",
    gap:"20px"
  },
  ColText:{
    marginBottom:"10px",
  },
})
const ReviewSearchResultPage = () => {
  const clasess = useStyle()

  return (
    <Container>
        <Row className='mb-5'>
            <Col className='text-center'>
                <PrimaryTitle text="Reviews properties" sizeText={40} space={1} lineHeight={47}/>
            </Col>
        </Row>
        <Row className={`${clasess.RowText} mb-5`}>
            <Col className='' xl={5} lg={6} md={7} xs={12}>
                <div className={clasess.ColText}>
                  <SecondaryText  text="Search for a specific UK address or town" weightText={400} lineHeight={23.15} sizeText={17}/>
                </div>
                <SearchInput btnText="Search" placeHolder="Start typing the address of the property"/>
            </Col>
            <Col lg={3} md={3} xs={12}>
                <SortResult/>
            </Col>
        </Row>
        <Row className='mb-4'>
            <Col>
                <Cards places={[]}/>
            </Col>
        </Row>
        <Row className='justify-content-center'>
            <Col className='' xs={"auto"}>
              {/* Pagination code here */}
            </Col>
        </Row>
    </Container>
  )
}

export default ReviewSearchResultPage