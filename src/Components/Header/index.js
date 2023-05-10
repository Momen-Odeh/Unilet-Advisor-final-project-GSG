import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LOGO from "./images/LOGO.png";
import { createUseStyles } from 'react-jss';
import ButtonAction from '../ButtonAction';
const useStyles  = createUseStyles({
    img:{
      padding:"0",
      margin:"0",
    },
    Navbar:{
        padding:"10px 4.8%",
    },
    Nav:{
        width:"100%",
        justifyContent:"center",
        gap:"10px"
    },
    NavLink:{
        display:"flex",
        justifyContent:"center",

        fontFamily:"'Open Sans', sans-serif",
        color:"#3C3C3B !important",
        fontWeight:"600",
        fontSize:"18px",
        lineHeight:"21.15px",
        transitionDuration:"400ms",
        "&:hover":{
            color:"#0FB3AF !important"
        },
        "&:focus":{
            color:"#0FB3AF !important"
        }
    },
    
  })
const Header = () => {
    const classes = useStyles ();
  return (
    <Navbar  expand="lg" className={classes.Navbar}>
        <Navbar.Brand href="#home" className={classes.img}> <img src={LOGO} alt='LOGO'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`me-auto ${classes.Nav}`}>
            <Nav.Link className={classes.NavLink} href="#home" color="red">Home</Nav.Link>
            <Nav.Link className={classes.NavLink} href="#link1">Review a Property</Nav.Link>
            <Nav.Link className={classes.NavLink} href="#link2">Read Reviews</Nav.Link>
            <Nav.Link className={classes.NavLink} href="#link3">Create Post</Nav.Link>
          </Nav>
          <Nav.Link className={classes.NavLink} href="#link4"><ButtonAction text="Login"/></Nav.Link>
          
        </Navbar.Collapse>
    </Navbar>
  )
}

export default Header