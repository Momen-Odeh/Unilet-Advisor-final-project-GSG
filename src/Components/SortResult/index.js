import React, { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { createUseStyles } from 'react-jss';

const useStyles  = createUseStyles({
    InputGroup:{
        border:"1px solid #3C3C3B",
        borderRadius:"5px",
        backgroundColor:"white"
    },
    Form:{
        border:"none",
        fontSize:"14px",
        lineHeight:"19.07px",
        fontFamily:"'Open Sans', sans-serif",
        fontWeight:"400",
        color:"#B0B0B0",
        '&:disabled': {
            backgroundColor: 'white',
        }
    },
    DropdownButton:{
        backgroundColor:"#3C3C3B",
    },
    Item:{
        '&:hover': {
          backgroundColor: '#B0B0B0',
        }
    }
})
const SortResult = () => {
    const classes = useStyles ();
    const [text,setText] = useState("Most Recent");
  return (
    <InputGroup className={classes.InputGroup} >
        <Form.Control aria-label="Text input with dropdown button" 
        value={text}
        readOnly
        className={classes.Form}
        variant="dark"
        />

        <DropdownButton
          variant="dark"
        className={classes.DropdownButton}
        menuVariant="dark"
          title=""
          onSelect={(value)=>{setText(value)}}
        >
          <Dropdown.Item eventKey="Most Recent" className={classes.Item} >Most Recent</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="Top Rated" className={classes.Item}>Top Rated</Dropdown.Item>
        </DropdownButton>
      </InputGroup>
  )
}

export default SortResult