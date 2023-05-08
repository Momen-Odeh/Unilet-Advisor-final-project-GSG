import React from 'react'
import { createUseStyles } from 'react-jss';

const useStyles  = createUseStyles({
    HR:{
        backgroundColor:"#C4C4C4",
        height:"1px",
        padding:"0px",
        margin:"20px 0px",
    },
    
})
const HR = () => {
    const classes = useStyles ();
  return (
    <hr className={classes.HR}/>
  )
}

export default HR