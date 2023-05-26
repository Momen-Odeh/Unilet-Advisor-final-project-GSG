import React, { useEffect, useRef, useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LOGO from "./images/LOGO.png";
import { createUseStyles } from 'react-jss';
import ButtonAction from '../ButtonAction';
import { Link,useNavigate} from 'react-router-dom';
import { useCookies } from 'react-cookie';
import swalFire from '../Swal/swalFire';
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
            color:"#0FB3AF !important",
            textDecoration:"none !important"
        },
        "&:focus":{
            color:"#0FB3AF !important"
        }
    },
    
  })

  
  
const Header = () => {
    const classes = useStyles ();
    const [Cookies, setCookies, removeCookie] = useCookies();
    const [btnText, setBtnText] = useState("LogIn");
    const navigate = useNavigate()
    
    useEffect(() => {
      if (Cookies.UserToken) {
        setBtnText("LogOut");
      } else {
        setBtnText("LogIn");
      }
    }, [Cookies]);
    function handlelLogBtn(){
      if(Cookies.UserToken)
      {
        removeCookie("UserEmail")
        removeCookie("UserToken")
      }
    }
    function handelSwal() {
      if(!Cookies.UserToken)
        swalFire(navigate)
      else
        navigate("/NewPost")
      
    }
    
  return (
    <Navbar  expand="lg" className={classes.Navbar}>
        <Navbar.Brand  as={Link} to={"/"} className={classes.img}> <img src={LOGO} alt='LOGO'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`me-auto ${classes.Nav}`}>
            
            <Nav.Link as={Link} to={"/"} className={classes.NavLink} >Home</Nav.Link>
            <Nav.Link as={Link} to={"/ReviewSearch"} className={classes.NavLink}>Review Search</Nav.Link>
            <Nav.Link as={Link} to={"/ReviewSearchResult/ALL"} className={classes.NavLink}>All Places</Nav.Link>
            <Nav.Link onClick={handelSwal} className={classes.NavLink}>Create Post</Nav.Link>
            
            
            
            
          </Nav>
          <Nav.Link className={classes.NavLink} as={Link} to={"/login"}><ButtonAction text={btnText} onClick={handlelLogBtn}/></Nav.Link>
          
        </Navbar.Collapse>
    </Navbar>
  )
}

export default Header