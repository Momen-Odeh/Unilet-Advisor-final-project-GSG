import Button from 'react-bootstrap/Button';
import { createUseStyles } from 'react-jss';
import arrowImg from './images/arrow.png'

const useStyles  = createUseStyles({
  Button: {
    backgroundColor:({dark})=>{
      if(dark) return "#3C3C3B"
      else return "#0FB3AF"
    },
    borderRadius:"5px",
    padding:"10px 36px",
    transitionDuration:"400ms",
    fontFamily: "'Maven Pro', sans-serif",
    fontWeight:({bold})=>{
      if(bold) return "700"
      else return "500"
    },
    fontSize:"17px",
    lineHeight:"20px",
    border:'none',
    '&:hover': {
      backgroundColor: ({dark})=>{
        if(dark) return "#272726"
        else return "#0a7574"
      }
    },
    "&:focus":{
      outline:"none",
    }
  },
  img:{
    paddingLeft:"6px"
  }
  
})

const ButtonAction = ({text,arrow,dark,bold}) => {

  const classes = useStyles ({dark,bold});
  return (
    <Button  className={classes.Button}>
      {text}
      {arrow &&<img src={arrowImg} className={classes.img} alt=''/>}
    </Button>
  )
}

export default ButtonAction