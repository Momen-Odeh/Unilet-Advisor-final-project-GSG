import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {createUseStyles} from 'react-jss'
import DarkTitle from '../../Components/DarkTitle';
import SecondaryText from '../../Components/SecondaryText';
import BG from './images/SearchBG.png'
import PrimaryTitle from '../PrimaryTitle';
import SearchInput from '../SearchInput';
const useStyle =createUseStyles({
  Container:{
    backgroundImage:`url('${BG}')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height:"650px",
    display:"flex", 
    flexDirection:"column", 
    justifyContent:"center"
  },
  textAdd:{
    justifyContent:"center",
    alignItems:"center"
  }
})
const SearchHero = () => {
      const classes = useStyle();
  return (
    <Container fluid className={classes.Container}>
      <Row className='mb-2'>
        <Col className='texr-center'>
          <PrimaryTitle text="Review a property that you've lived in" lineHeight={58.75} sizeText={50} space={1} center/>
        </Col>
      </Row>
      <Row className='mb-3'>
        <Col className='text-center'>
          <SecondaryText text={"(or still living in)"} weightText={600} sizeText={24} lineHeight={32.68} center/>
        </Col>
      </Row>
      <Row className={`mb-3 ${classes.textAdd}`}>
        <Col className='text-center' xs={"auto"}>
            <SecondaryText text="Street Address :" weightText={600} sizeText={17} lineHeight={23.15} center/>
        </Col>
        <Col className='text-center' lg={5} md={6} sm={8} xs={12}>
          <SearchInput placeHolder="Start typing the address of the property" btnText="Search"/>
        </Col>
      </Row>
    </Container>
  )
}

export default SearchHero
