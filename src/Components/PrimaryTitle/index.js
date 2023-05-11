import { createUseStyles } from 'react-jss';

//font-family: 'Open Sans', sans-serif;
const useStyles  = createUseStyles({
    text:{
        color:"#0FB3AF",
        fontFamily:"'Maven Pro', sans-serif",
        fontWeight:"700",
        fontSize:({sizeText})=>sizeText?sizeText+"px":"24px",
        lineHeight:({lineHeight})=>lineHeight?lineHeight+"px":"28.2px",
        letterSpacing:({space})=>space?"2px":"",
        wordWrap: 'break-word'
    }
})

const PrimaryTitle = ({text,sizeText,lineHeight,space}) => {

  const classes = useStyles ({sizeText,lineHeight,space});
  return (
    <div className={classes.text}>{text}</div>
  )
}

export default PrimaryTitle