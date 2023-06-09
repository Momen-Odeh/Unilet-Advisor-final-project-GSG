import { createUseStyles } from 'react-jss';
const useStyles  = createUseStyles({
    text:{
        color:"#3C3C3B",
        fontFamily:"'Open Sans', sans-serif",
        fontWeight:({weightText})=>weightText?weightText:"400",
        fontSize:({sizeText})=>sizeText?sizeText+"px":"17px",
        lineHeight:({lineHeight})=>lineHeight?lineHeight+"px":"23.15px",
        textAlign:({center})=>center?"center":"",
        wordBreak:"break-word"
        
    },
    img:{
        marginRight:"15px",
    }
})

const SecondaryText = ({text,sizeText,lineHeight,icon,weightText,center}) => {

  const classes = useStyles ({sizeText,lineHeight,weightText,center});
  return (
    <div className={classes.text}>
        {icon&&<img className={classes.img} src={icon} alt='logo'/>}
        {text}
    </div>
  )
}

export default SecondaryText