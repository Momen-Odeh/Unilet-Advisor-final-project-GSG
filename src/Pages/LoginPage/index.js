import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {createUseStyles} from 'react-jss'
import BG from './images/loginBG.png'
import DarkTitle from '../../Components/DarkTitle';
import SecondaryText from '../../Components/SecondaryText';
import GeneralHero from '../../Components/GeneralHero';
import LoginForm from '../../Components/LoginForm';
const useStyle =createUseStyles({
  
})
const LoginPage = () => {
  const classes = useStyle();
  return (
    <>
    <GeneralHero BG={BG} title={"Nice to See You Again"} subTitle={"Welcome back"}/>
    <LoginForm/>
    </>
  )
}

export default LoginPage