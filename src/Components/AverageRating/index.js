import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DarkTitle from '../DarkTitle';
import ProgressBar from 'react-bootstrap/ProgressBar';
import ProgressBarContainer from './ProgressBarContainer';

const AverageRating = () => {
    
  return (
    <>
        <Row className='mb-5'>
            <Col>
                <DarkTitle text={"Average Rating"} size={40} weight={600} lineHeight={47} space={1} />
            </Col>
        </Row>
        <Row className=''>
            <Col>
                <ProgressBarContainer starNum={1} Percentage={10}/>
                <ProgressBarContainer starNum={2} Percentage={20}/>
                <ProgressBarContainer starNum={3} Percentage={30}/>
                <ProgressBarContainer starNum={4} Percentage={25}/>
                <ProgressBarContainer starNum={5} Percentage={15}/>
            </Col>
        </Row>
        <Row className='mb-5'>
            <Col>
                <DarkTitle text="Add your comments" size={18} weight={700} lineHeight={21.15} />
            </Col>
        </Row>
    </>
  )
}

export default AverageRating