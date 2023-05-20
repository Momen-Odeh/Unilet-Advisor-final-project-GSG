import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import PrimaryTitle from '../PrimaryTitle';
import SecondaryText from '../SecondaryText';
import SearchInput from '../SearchInput';
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    Container:{
        marginTop:"100px",
        marginBottom:"100px"
    }
});
const KeepTouch = () => {
    const classes = useStyles();
    const [searchText,setSearchText]  = useState("")
    function handleSubscribeBtn(){
        
    }
  return (
    <Container className={classes.Container}>
        <Row className='mb-3'>
            <Col className='text-center'>
                <PrimaryTitle text="Let's keep in touch" sizeText={40} lineHeight={47} space={1}/>
            </Col>
        </Row>
        <Row className='mb-5'>
            <Col className='text-center'>
                <SecondaryText text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "/>
            </Col>
        </Row>
        <Row className='justify-content-center mb-5'>
            <Col className='text-center' lg={5} md={7}>
                <SearchInput placeHolder="Enter Your Email Here" btnText="Subscribe" onClick={handleSubscribeBtn} txetHandel={{searchText,setSearchText}} />
            </Col>
        </Row>
    </Container>
  )
}

export default KeepTouch