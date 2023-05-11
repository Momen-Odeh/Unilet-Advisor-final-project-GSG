import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PrimaryTitle from '../PrimaryTitle';
import SecondaryText from '../SecondaryText';
import ButtonAction from '../ButtonAction';
import { createUseStyles } from 'react-jss';
const useStyles  = createUseStyles({
    img:{
        width:"100%"
    },
    Col:{
        // display:"flex",
        // flexDirection:"column",
        textAlign:"end",
        // backgroundColor:"red",
        // alignItems:"flex-end"
        // order:"1"
    },
    Row:{
        marginTop:"120px"
    },
    Icon:{
        boxSizing:"content-box",
        padding:"8px",
        fontSize:"20px",
        color:"#0FB3AF",
        backgroundColor:"#E7F7F7",
        borderRadius:"50%"
    },
    text:{
        marginTop:"30px"
    }
});
const WorkDescription = ({image,Icon,title,description,ltr}) => {
    const classes = useStyles ();
  return (
    <Row className={classes.Row}>
        {
            !ltr&&
            <>
            <Col md={6} xs={12} className='text-center'>
                <img src={image} alt='img' className={classes.img}/>
                
            </Col>
            </>
            
        }
        
        <Col md={{span:6, order:0}} xs={{span:12, order:1}}  className={ltr?`${classes.Col} ${classes.text}`:`${classes.text}`}>
            <Row>
                {!ltr&&
                <Col xs={"auto"}>
                    <Icon className={classes.Icon}/>
                </Col>
                }
                <Col>
                    <PrimaryTitle text={title}/>
                    <br/>
                    <SecondaryText text={description}/>
                    <br/>
                    <ButtonAction text="Know More " arrow bold/>
                </Col>
                {ltr&&
                <Col xs={"auto"}>
                    <Icon className={classes.Icon}/>
                </Col>
                }
                
            </Row>
            
        </Col>
        {
            ltr&&<Col md={6} xs={12} className='text-center'>
                <img src={image} alt='img' className={classes.img}/>
            </Col>
        }
    </Row>
  )
}

export default WorkDescription