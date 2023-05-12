import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {createUseStyles} from 'react-jss'
import DarkTitle from '../../Components/DarkTitle';
import SecondaryText from '../../Components/SecondaryText';
import Form from 'react-bootstrap/Form';
import InputField from '../InputField';
import ButtonAction from '../ButtonAction';
import HR from '../HR';
const useStyle =createUseStyles({
  Container:{
    marginTop:"100px",
    marginBottom:"100px"
  },
  login:{
    fontFamily:"'Open Sans', sans-serif",
    color:"#0FB3AF",
    fontWeight:"600",
    fontSize:"14px",
    lineHeight:"19.07px"
  }
})
const SignupForm = () => {
  const classes = useStyle();
  return (
    <>
    <Container className={classes.Container}>
      <Row className='mb-5'>
        <Col>
          <DarkTitle text="Sign up Now" size={40} lineHeight={47} center space={1} weight={700}/>
        </Col>
      </Row>
      <Row className='justify-content-center mb-4'>
        <Col lg={6} md={10} xs={12}>
            <InputField type="user"/>
        </Col>
      </Row>
      <Row className='justify-content-center mb-4' >
        <Col lg={6} md={10} xs={12}>
            <InputField type="email"/>
        </Col>
      </Row>
      <Row className='justify-content-center mb-4' >
        <Col lg={6} md={10} xs={12}>
            <InputField type="password"/>
        </Col>
      </Row>
      <Row className='justify-content-center mb-4' >
        <Col lg={6} md={10} xs={12}>
            <InputField type="confirmPassword"/>
        </Col>
      </Row>
      <Row className='mb-1' >
        <Col className='text-center'>
            <ButtonAction text="Submit" bold/>
        </Col>
      </Row>
      <Row className='justify-content-center mb-1' >
        <Col className='text-center' lg={6} md={10} xs={12}>
            <HR/>
        </Col>
      </Row>
      <Row className='justify-content-center mb-4' >
        <Col className='text-center' lg={6} md={10} xs={12}>
            <span>
              <SecondaryText text="Already have an account?" weightText={600} sizeText={14} lineHeight={19.07}/>
              <span className={classes.login}> Log In</span>
            </span>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default SignupForm