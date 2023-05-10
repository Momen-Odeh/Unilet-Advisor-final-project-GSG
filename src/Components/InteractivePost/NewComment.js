import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
const NewComment = () => {
  return (
    <>
    <Row>
        <Col>
            Comments
        </Col>
    </Row>
    <Row>
        <Col>
            
            <FloatingLabel controlId="floatingTextarea2">
                <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                // style={{ height: '100px' }}
                />
            </FloatingLabel>
        </Col>
    </Row>
    <Row>
        <Col>
            <span>Ratings </span>
        </Col>
    </Row>
    <Row>
        <Col>

        </Col>
    </Row>
    <Row>
        <Col>

        </Col>
    </Row>
    </>
  )
}

export default NewComment