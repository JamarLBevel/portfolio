import React from "react";
import { Container,Row,Col,Image,Card, CardGroup} from "react-bootstrap";
import me from './me.jpg';
import mars from './mars.png';
import recipe from './recipe.png';
import countries from './countries.png';
import { Link } from "react-router-dom";
import tde from './tde.png'
import night from './night.jpg';
import astral from './astral.jpg';
import pride from './pride.jpg';
import fisher from './fisher.jpg';
import juug from './juug.jpg';
import pick from './pick.jpg';
import Button from "react-bootstrap";
export default function Home(){
    return(
        <div style={{backgroundColor:'black',color:'white',textAlign:'center'}}>
        <Container fluid>
        <div className="ratio ratio-16x9">
      <iframe src="https://www.youtube.com/embed/04wTzqYuVWM" title="YouTube video"></iframe>
    </div>
    <p style={{fontWeight:'bold'}}>$5.99 a month or 59.99 a year</p>
<stripe-pricing-table pricing-table-id="prctbl_1NUJeNFxUqSaaFM49zgETHoZ"
publishable-key="pk_live_51NPdaxFxUqSaaFM4QcFMAAyK9wbkdxIMt1fNDVMjmVakNjvJssna8esdMsR7Eh1PpvoapOD4th7yF73eoT4BZCoQ00qyi9wpxB">
</stripe-pricing-table>
  <h3 style={{fontWeight:'bold',textAlign:'start'}}> Just Added</h3>
    <Row xs={2} md={4} lg={6} className="g-4">
        <Card bg="black">
      <Card.Img variant="top" src={astral}/>
    </Card>
        <Card bg="black">
      <Card.Img variant="top" src={night}/>
    </Card>
        <Card bg="black">
      <Card.Img variant="top" src={pride}/>
    </Card>
    <Card bg="black">
      <Card.Img variant="top" src={fisher}/>
    </Card>
    <Card bg="black">
      <Card.Img variant="top" src={juug}/>
    </Card>
    <Card bg="black">
      <Card.Img variant="top" src={pick}/>
    </Card>
    </Row> 
    <div className="p-4">
    <h3 style={{fontWeight:'bold'}}>WATCH ORGINALS</h3>
   <p>No more sequals, remakes, prequel</p>
    <h3 style={{fontWeight:'bold'}}>UNLIMITED STREAMING</h3>
   <p>Get streaming access to all the content and all future releases</p>
   <h3 style={{fontWeight:'bold'}}>WATCH ANYWHERE</h3>
   <p>Enjoy on your favorite device</p>
   <h3 style={{fontWeight:'bold'}}>SUPPORT INDEPENDENT FILMMAKERS</h3>
   <p>Support independent creators and help them provide you with more content</p>
    </div>
    <Image className='p-3' src={tde} rounded  fluid />
    
    <stripe-pricing-table pricing-table-id="prctbl_1NUJeNFxUqSaaFM49zgETHoZ"
publishable-key="pk_live_51NPdaxFxUqSaaFM4QcFMAAyK9wbkdxIMt1fNDVMjmVakNjvJssna8esdMsR7Eh1PpvoapOD4th7yF73eoT4BZCoQ00qyi9wpxB">
</stripe-pricing-table>
   
    </Container>
        </div>
        
     
       
    );
}
declare global {
    namespace JSX {
      interface IntrinsicElements {
        'stripe-pricing-table': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      }
    }
  }

function ProjectLink(url:any){
    window.location.href = url
    return null
}
