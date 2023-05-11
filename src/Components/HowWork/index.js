import React from 'react'
import { createUseStyles } from 'react-jss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import PrimaryTitle from '../PrimaryTitle';
import SecondaryText from '../SecondaryText';
import WorkDescription from './WorkDescription';
import img1 from './images/g1.png'
import img2 from './images/g2.png'
import img3 from './images/g3.png'
import { GoLocation } from 'react-icons/go';
import { TbHandClick } from 'react-icons/tb';
import { FaRegShareSquare } from 'react-icons/fa';
import ButtonAction from '../ButtonAction';
const useStyles  = createUseStyles({
    BTN:{
        marginTop:"30px",
        marginBottom:"150px"
    }
});
const HowWork = () => {
    const classes = useStyles ();
  return (
    <Container>
        <Row className='mb-3'>
            <Col className='text-center'>
                <PrimaryTitle text="How It Works" sizeText={40} lineHeight={47} space={1}/>
            </Col>
        </Row>
        <Row className='mb-5'>
            <Col className='text-center'>
                <SecondaryText text="Lorem Ipsum is simply dummy text of the printing and typesetting"/>
            </Col>
        </Row>
        <WorkDescription
        Icon={GoLocation} 
        image={img1} 
            title="Search for the address" 
            description="Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make"/>
            <WorkDescription ltr={true}
            Icon={TbHandClick}
            image={img2}
            title="Add your review" 
            description="Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make"/>
            <WorkDescription 
            Icon={FaRegShareSquare}
            image={img3} 
            title="Search for the address" 
            description="Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make"/>
        <Row>
            <Col className= {`text-center ${classes.BTN}`}>
                <ButtonAction text="Get Started" bold dark/>
            </Col>
        </Row>
        
    </Container>
  )
}

export default HowWork