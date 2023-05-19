import {useEffect,useState} from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import InteractivePost from '../../Components/InteractivePost'
import PostDescription from '../../Components/PostDescription';
import AverageRating from '../../Components/AverageRating';
import PostImage from '../../Components/PostImages';
import { useParams } from 'react-router-dom';
import RetriveData from '../../Firebase/RetriveData';

const ReviewDetailsPage = () => {
  const {title} = useParams();
  const [place, setPlace] = useState({});
  const [review, setReview] = useState({});
    useEffect(()=>{
        RetriveData("Places").then((resp)=>{
            const data = resp.docs.map((item) => item.data());
            let respData = data.filter((x)=>x.title === title)
            setPlace(respData[0]);
            setReview(respData[0].AverageRating)
            
        })
        
    },[])
  return (
    <Container>
      <Row className='justify-content-between'>
        <Col lg={7}>
          <PostDescription 
          title={place.title} 
          PublishTime={"Publish at: "+place.publishDate?.toDate().toLocaleString()}
          description={place.description}
          />
        </Col>
        <Col lg={4}>
          <AverageRating rate={place.AverageRating} />
        </Col>
      </Row>
      <Row>
        <PostImage imagesUrl={place?.imagesUrl}/>
      </Row>
      <Row>
        <Col>
          <InteractivePost title={place.title} comments={place.Comments} interactions={place.interactions} AverageRating={review} setAverageRating={setReview}/>
        </Col>
      </Row>
    </Container>
  )
}

export default ReviewDetailsPage