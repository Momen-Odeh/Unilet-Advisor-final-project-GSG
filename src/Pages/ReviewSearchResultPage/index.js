import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import PrimaryTitle from '../../Components/PrimaryTitle';
import SecondaryText from '../../Components/SecondaryText';
import Cards from '../../Components/Cards';
import SearchInput from '../../Components/SearchInput';
import SortResult from '../../Components/SortResult';
import {createUseStyles} from 'react-jss'
import RetriveData from '../../Firebase/RetriveData';
import {useParams,useNavigate} from 'react-router-dom'
const useStyle = createUseStyles({
  RowText:{
    justifyContent:"space-between",
    alignItems:"flex-end",
    gap:"20px"
  },
  ColText:{
    marginBottom:"10px",
  },
})
const ReviewSearchResultPage = () => {
  const clasess = useStyle()
  const [places, setPlaces] = useState([]);
  const {title} = useParams("title")
  const navigate = useNavigate()
  const [searchText,setSearchText] = useState("")
  const [sortText,setSortText] = useState("Most Recent")
  useEffect(()=>{
      RetriveData("Places").then((resp)=>{
        if(title === "ALL")
        {
          setPlaces(resp);
        }else{
          const filterData= []
          resp.map((item)=>{
            if(item.title.toLowerCase().includes(title))
            {
              
              filterData.push(item)
            }
          })
          setPlaces(filterData);
        }
          
      })
  },[title])
    function findTotal(place) {
        const {star1,star2,star3,star4,star5,} = place.AverageRating
        return star1+star2+star3+star4+star5
    }
    function findAvg(place) {
        let len = findTotal(place)
        if(len === 0) return 0 
        const {star1,star2,star3,star4,star5,} = place.AverageRating
        return ((1*star1+2*star2+3*star3+4*star4+5*star5)/len).toFixed(1)
    }
  useEffect(()=>{
    if(sortText === "Most Recent")
    {
      const sortedPlaces = [...places].sort((a, b) => {
        if (a.publishDate > b.publishDate) {
          return -1;
        } else if (a.publishDate < b.publishDate) {
          return 1;
        }
        return 0;
      });
      setPlaces(sortedPlaces);
    }
    else if(sortText === "Top Rated")
    {
      const sortedPlaces = [...places].sort((a, b) => {
        if (findAvg(a) > findAvg(b)) {
          return -1;
        } else if (findAvg(a) < findAvg(b)) {
          return 1;
        }
        return 0;
      });
      setPlaces(sortedPlaces);
    }
  },[sortText])
  function handleSearchBtn(){
    let val = searchText.trim()
    if(val.length === 0)
    {
      navigate(`/ReviewSearchResult/ALL`)
    }
    else{
      navigate(`/ReviewSearchResult/${val}`)
    }
    
  }
  return (
    <Container>
        <Row className='mb-5'>
            <Col className='text-center'>
                <PrimaryTitle text="Reviews properties" sizeText={40} space={1} lineHeight={47}/>
            </Col>
        </Row>
        <Row className={`${clasess.RowText} mb-5`}>
            <Col className='' xl={5} lg={6} md={7} xs={12}>
                <div className={clasess.ColText}>
                  <SecondaryText  text="Search for a specific UK address or town" weightText={400} lineHeight={23.15} sizeText={17}/>
                </div>
                <SearchInput btnText="Search" placeHolder="Start typing the address of the property" txetHandel={{searchText,setSearchText}} onClick={handleSearchBtn}/>
            </Col>
            <Col lg={3} md={3} xs={12}>
                <SortResult handleSort={{sortText,setSortText}}/>
            </Col>
        </Row>
        <Row className='mb-4'>
            <Col>
                <Cards places={places}/>
            </Col>
        </Row>
        <Row className='justify-content-center'>
            <Col className='' xs={"auto"}>
              {/* Pagination code here */}
            </Col>
        </Row>
    </Container>
  )
}

export default ReviewSearchResultPage