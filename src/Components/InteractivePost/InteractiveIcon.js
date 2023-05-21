import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiTwotoneLike } from 'react-icons/ai';
import { AiTwotoneDislike } from 'react-icons/ai';
import { AiOutlineComment } from 'react-icons/ai';

import { createUseStyles } from 'react-jss';
const useStyles  = createUseStyles({
    interact:{
        fontFamily:"'Maven Pro', sans-serif",
        fontSize:"13px",
        fontWeight:"500",
        lineHeight:"15.28px",
        color: (like) => (like ? "#0FB3AF" : "#D3D3D3"),
        cursor:"pointer",
        display:"flex",
        alignItems:"center",
        justifyContent:"flex-start",
        gap:"10px",
    },
    icon:{
        fontSize:"25px",
    },
})

// <div><AiTwotoneLike/><AiTwotoneDislike/><AiOutlineComment/></div>

const InteractiveIcon = ({Icon,label,count,active,onClick}) => {
    const classes = useStyles(active);

  return (
    <span 
    onClick={onClick}
    className={classes.interact}>
        <Icon className={classes.icon}/> {count} {label}
    </span>
  )
}

export default InteractiveIcon