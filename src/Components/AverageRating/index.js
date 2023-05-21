import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DarkTitle from '../DarkTitle';
import ProgressBar from 'react-bootstrap/ProgressBar';
import ProgressBarContainer from './ProgressBarContainer';

const AverageRating = ({rate}) => {
    
  return (
    <>
        <Row className='mb-5'>
            <Col>
                <DarkTitle text={"Average Rating"} size={40} weight={600} lineHeight={47} space={1} />
            </Col>
        </Row>
        <Row className=''>
            <Col>
                <ProgressBarContainer starNum={1} Percentage={rate?.star1 ? rate.star1:0}/>
                <ProgressBarContainer starNum={2} Percentage={rate?.star2 ? rate.star2:0}/>
                <ProgressBarContainer starNum={3} Percentage={rate?.star3 ? rate.star3:0}/>
                <ProgressBarContainer starNum={4} Percentage={rate?.star4 ? rate.star4:0}/>
                <ProgressBarContainer starNum={5} Percentage={rate?.star5 ? rate.star5:0}/>
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