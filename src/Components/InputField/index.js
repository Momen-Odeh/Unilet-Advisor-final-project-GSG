import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { createUseStyles } from 'react-jss';
import userIcon from './images/usrer.png'
import EmailIcon from './images/emailIcon.png'
import passwordIcon from './images/pass.png'
const useStyles  = createUseStyles({
    Form:{
    },
    InputGroup:{
        border:"1px solid #D9D9D9",
        borderRadius:"5px",
        borderLeft:"5px solid #3C3C3B",
    },
    Control:{
        border:"none",
        fontFamily:"'Open Sans', sans-serif",
        fontWeight:"400",
        fontSize:"17px",
        lineHeight:"23.15px",
        "&:focus":{
            boxShadow:"none"
        }
    },
    Text:{
        backgroundColor:"white",
        border:"none",
    },
    icon:{
        width:"30px",
        height:"30px"
    },
})
const InputField = ({type,onChange}) => {
    const classes = useStyles ();
    let data
    if(type === "user")
    {
        data={
            placeholder:"Full name here",
            icon:userIcon,
            type:"text"
        }
    }
    else if(type === "email")
    {
        data={
            placeholder:"Enter your email address",
            icon:EmailIcon,
            type:"email"
        }
    }
    else if(type === "password")
    {
        data={
            placeholder:"Enter your password",
            icon:passwordIcon,
            type:"password"
        }
    }
    else if(type === "confirmPassword")
    {
        data={
            placeholder:"Conform password",
            icon:passwordIcon,
            type:"password"
        }
    }
  return (
    <Form className={classes.Form}>
        <Form.Group>
            <InputGroup className={classes.InputGroup}>
                <InputGroup.Text className={classes.Text}><img src={data.icon} draggable={false} alt="icon" className={classes.icon}/></InputGroup.Text>
                <Form.Control className={classes.Control} name={type} type={data.type} placeholder={data.placeholder} onChange={onChange} />
            </InputGroup>
        </Form.Group>
    </Form>

  )
}

export default InputField