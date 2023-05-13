import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DarkTitle from '../DarkTitle';
import SecondaryText from '../SecondaryText';
const PostDescription = ({title,PublishTime,description}) => {
  return (
    <>
        <Row className='mb-3'>
            <Col>
                <DarkTitle text={title} size={40} weight={600} lineHeight={47} space={1} />
            </Col>
        </Row>
        <Row className='mb-4'>
            <Col>
                <SecondaryText text={PublishTime}/>
            </Col>
        </Row>
        <Row className='mb-5'>
            <Col>
                <SecondaryText text={description}/>
            </Col>
        </Row>
    </>
    
  )
}

export default PostDescription