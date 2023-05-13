import React from 'react'
import { createUseStyles } from 'react-jss';
import ProgressBar from 'react-bootstrap/ProgressBar';
import SecondaryText from '../SecondaryText';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const useStyle = createUseStyles({
  progressBar: {
    backgroundColor: '#FAFAFA',
    '& .progress-bar': {
      backgroundColor: '#0FB3AF',
    },
  },
  Row:{
    alignItems:"center",
    gap:"10px"
  },
  Col:{
    padding:"0",
  }
});
const ProgressBarContainer = ({starNum,Percentage}) => {
    const classes = useStyle();
  return (
    <>
    <Row className={`${classes.Row} mb-3`}>
        <Col xs="auto" className={classes.Col}>
            <SecondaryText text={`${starNum} star`} sizeText={17} weightText={400} lineHeight={23.15}/>
        </Col>
        <Col className={classes.Col}>
            <ProgressBar className={classes.progressBar} now={Percentage}/>
        </Col>
        <Col xs="auto" className={classes.Col}>
            <SecondaryText text={`${Percentage}%`} sizeText={17} weightText={400} lineHeight={23.15}/>
        </Col>
    </Row>
        
        
    </>
    
  )
}

export default ProgressBarContainer