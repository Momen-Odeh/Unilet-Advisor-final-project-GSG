import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import user from './images/user.png'
import { createUseStyles } from 'react-jss';
const useStyles  = createUseStyles({
    img:{
        width:"100px",
        height:"100px",
        borderRadius:"50%",
    },
    auther:{
        fontFamily:"'Maven Pro', sans-serif",
        fontWeight:"700",
        fontSize:"24px",
        lineHeight:"28.2px",
        color:"#0FB3AF",
        letterSpacing:"1px"
    },
    comment:{
        fontFamily:"'Open Sans', sans-serif",
        fontWeight:"400",
        fontSize:"17px",
        lineHeight:"23.15px",
        color:"#3C3C3B",
        letterSpacing:"0.25px"
    },
    text:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        gap:"5px"
    },
    Row:{
        width:"100%"
    }
})
  
const Comment = ({auther,comment}) => {
    const classes = useStyles();
  return (
    <Row className={classes.Row}>
        <Col xs={"auto"}>
            <img className={classes.img} draggable={false} src={user} alt='img'/>
        </Col>
        <Col className={classes.text}>
            <Row>
                <Col xs={12} className={classes.auther}>
                    {auther}
                </Col>
            </Row>
            <Row>
                <Col xs={12} className={classes.comment}>
                    {comment}
                </Col>
            </Row>
        </Col>
    </Row>
  )
}

export default Comment