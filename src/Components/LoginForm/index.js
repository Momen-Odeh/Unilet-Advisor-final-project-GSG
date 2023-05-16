import React, { useState } from 'react'
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
import LogInFirebase from '../../Firebase/LogInFirebase';
import Alert from 'react-bootstrap/Alert';
import { useNavigate,Link  } from 'react-router-dom';
const useStyle =createUseStyles({
  check:{
      color:"#3C3C3B",
      fontFamily:"'Open Sans', sans-serif",
      fontWeight:"600",
      fontSize:"14px",
      lineHeight:"19.07px"
  },
  Container:{
    marginTop:"100px",
    marginBottom:"100px"
  },
  signUP:{
    fontFamily:"'Open Sans', sans-serif",
    color:"#0FB3AF",
    fontWeight:"600",
    fontSize:"14px",
    lineHeight:"19.07px",
    "&:hover":{
      textDecoration: "none",
    }
  }
})
const LoginForm = () => {
  const classes = useStyle();
  const [logInInfo,setlogInInfo] = useState({})
  const [err, setErr] = useState();
  const navigate = useNavigate();
  function handleLogInInfo(e)
  {
    setlogInInfo(
      {
        ...logInInfo,
        [e.target.name]:e.target.value
      }
    )
  }
  async function handleLogIn(){
    
    try {
      let token = await LogInFirebase(logInInfo.email,logInInfo.password);
      // console.log(token.user.accessToken);
      navigate('/');
      setErr()
    } catch (error) {
      setErr(error.message)
    }
    
  }
  return (
    <>
    <Container className={classes.Container}>
      <Row className='mb-5'>
        <Col>
          <DarkTitle text="Log In Please" size={40} lineHeight={47} center space={1} weight={700}/>
        </Col>
      </Row>
      <Row className='justify-content-center mb-4'>
        <Col lg={6} md={10} xs={12}>
            <InputField type="email" onChange={handleLogInInfo}/>
        </Col>
      </Row>
      <Row className='justify-content-center mb-4' >
        <Col lg={6} md={10} xs={12}>
            <InputField type="password" onChange={handleLogInInfo}/>
        </Col>
      </Row>
      <Row className='justify-content-center mb-4'>
        <Col  lg={3} md={5} xs={12} className='text-center'>
          <Form>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember Password?" className={classes.check} />
              </Form.Group>
          </Form>
        </Col>
        <Col  lg={3} md={5} xs={12} className='text-center'>
          <SecondaryText text="Forgot Password?" weightText={600} sizeText={14} lineHeight={19.07}/>
        </Col>
      </Row>
      <Row className='mb-1' >
        <Col className='text-center'>
            <ButtonAction text="Log In" bold onClick={handleLogIn}/>
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
              <SecondaryText text="Don’t have an account?" weightText={600} sizeText={14} lineHeight={19.07}  />
              <Link to={"/signUp"} className={classes.signUP}> SIGN UP</Link>
            </span>
        </Col>
      </Row>
      {err&&
      <Row className='justify-content-center mb-1' >
        <Col className='text-center' lg={6} md={10} xs={12}>
        <Alert  variant={"danger"}>
          <SecondaryText text={err}/>
        </Alert>
        </Col>
      </Row>
      }
    </Container>
    </>
  )
}

export default LoginForm