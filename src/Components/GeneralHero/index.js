import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {createUseStyles} from 'react-jss'
import DarkTitle from '../../Components/DarkTitle';
import SecondaryText from '../../Components/SecondaryText';
import ButtonAction from '../ButtonAction';
import {useNavigate} from 'react-router-dom'
const useStyle =createUseStyles({
  Container:{
    backgroundImage:(BG)=>`url('${BG}')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height:"407px",
    display:"flex", 
    flexDirection:"column", 
    justifyContent:"center"
  }
})
const GeneralHero = ({BG,title,subTitle,notFound}) => {
  const classes = useStyle(BG);
  const navigate = useNavigate()
  return (
    <Container fluid className={classes.Container}>
      <Row className='mb-3'>
        <Col>
          <DarkTitle text={title} size={50} lineHeight={58.75} weight={700} space={1} center/>
        </Col>
      </Row>
      <Row className='mb-3'>
        <Col className='text-center'>
          <SecondaryText text={subTitle} weightText={600} sizeText={24} lineHeight={32.68} center/>
        </Col>
      </Row>
      {
        notFound&&  
        <Row>
          <Col className='text-center'>
            <ButtonAction text="Back to home page" bold onClick={()=>navigate("/")}/>
          </Col>
        </Row>
      }
    </Container>
  )
}

export default GeneralHero