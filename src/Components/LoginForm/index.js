import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {createUseStyles} from 'react-jss'
import DarkTitle from '../../Components/DarkTitle';
import SecondaryText from '../../Components/SecondaryText';
import Form from 'react-bootstrap/Form';
import InputField from '../InputField';
const useStyle =createUseStyles({
  
})
const LoginForm = () => {
  const classes = useStyle();
  return (
    <>
    <Container>
      <Row className='mb-5'>
        <Col>
          <DarkTitle text="Log In Please" size={40} lineHeight={47} center space={1} weight={700}/>
        </Col>
      </Row>
      <Row className='mb-4'>
        <Col>
            <InputField type="email"/>
        </Col>
      </Row>
      <Row className='mb-4'>
        <Col>
            <InputField type="password"/>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Check type={"checkbox"}
            id={`default-${"checkbox"}`}
            label={`default ${"checkbox"}`}
          />
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default LoginForm