import React from 'react'
import { createUseStyles } from 'react-jss';
import BG from './images/BG.png'
import DarkTitle from '../DarkTitle';
import SecondaryText from '../SecondaryText';
import ButtonAction from '../ButtonAction';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// 
import FirebaseApp from '../../Firebase'
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth'
import {collection,addDoc,serverTimestamp,onSnapshot,doc,deleteDoc} from 'firebase/firestore'
// 
const useStyles  = createUseStyles({
    Hero:{
        backgroundImage:`url(${BG})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width:"100%",
        height:"729px",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        gap:"30px",
        paddingTop:"5%"
    }

})


async function Auth(){
    console.log(FirebaseApp.FirebaseApp);
    const auth = getAuth(FirebaseApp.FirebaseApp)
    // 
    // const credintials = await createUserWithEmailAndPassword(auth,"momen.odeh74@gmail.com","123456")    
    // 
    const credintials = await signInWithEmailAndPassword(auth,"momen.odeh74@gmail.com","123456")
    console.log('credintials', credintials)
}

async function Store(){
    // const colRef = collection(FirebaseApp.db,'cards')
    // onSnapshot(colRef,(snapShot)=>{ //track change on data base
    //     console.log(snapShot);
    //     snapShot.docs.forEach(doc=>{
    //         console.log("doc",doc.data(),doc.id);
    //     })
    // })
    // await addDoc(colRef,{
    //     title:"Momen Odeh",
    //     publish:serverTimestamp(),
    // })

    // Delete and update
    // const docRef = doc(FirebaseApp.db,'cards',id)
}
const HeroSection = () => {
    const classes = useStyles ();
  return (
    <Container className={classes.Hero} fluid>
        <Row>
            <Col>
                <DarkTitle text="Share Your Student Renting Experience" size={50} weight={700} lineHeight={58.75} space={1} center/>   
            </Col>
        </Row>
        <Row>
            <Col>
                <SecondaryText text="Help other students make the right rental choice" sizeText={24} lineHeight={32.68} weightText={600} center/>
            </Col>
        </Row>
        <Row>
            <Col>
                <ButtonAction text="Search Now" dark bold onClick={Store}/>    
            </Col>
        </Row>
        
        
        
    </Container>
  )
}

export default HeroSection