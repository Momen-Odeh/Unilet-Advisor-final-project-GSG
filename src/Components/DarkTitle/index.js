import React from 'react'
import { createUseStyles } from 'react-jss';
const useStyles  = createUseStyles({
    text:{
        color:"#3C3C3B",
        fontFamily:"'Maven Pro', sans-serif",
        fontWeight:({weight})=>weight?weight:"600",
        fontSize:({size})=>size?size+"px":"19px",
        lineHeight:({lineHeight})=>lineHeight?lineHeight+"px":"23.5px",
        letterSpacing:({sizeText})=>sizeText?sizeText+"px":"",
        textAlign:"center"

    },
    img:{
        marginRight:"15px",
    }
})
const DarkTitle = ({text,size,weight,lineHeight,space}) => {
    const classes = useStyles ({size,weight,lineHeight,space});
  return (
    <div className={classes.text}>{text}</div>
  )
}

export default DarkTitle