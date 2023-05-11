import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ButtonAction from '../ButtonAction';
import { createUseStyles } from 'react-jss';

const useStyles  = createUseStyles({
    InputGroup:{
        border:"1px solid #3C3C3B",
        borderRadius:"5px",
    },
    Form:{
        border:"none",
        fontSize:"14px",
        lineHeight:"19.07px",
        fontFamily:"'Open Sans', sans-serif",
        fontWeight:"400",
        color:"#B0B0B0"
    }
  
})

const SearchInput = ({placeHolder,btnText}) => {
    const classes = useStyles ();
  return (
    <InputGroup className={classes.InputGroup}>

        <Form.Control
          placeholder={placeHolder}
          className={classes.Form}
        />
        <ButtonAction text={btnText} dark bold/>

    </InputGroup>
  )
}

export default SearchInput