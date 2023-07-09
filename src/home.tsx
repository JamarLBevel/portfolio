import React from "react";
import { Container,Row,Col,Image,Card} from "react-bootstrap";
import me from './me.jpg';
import mars from './mars.png';
import recipe from './recipe.png';
import countries from './countries.png';
import { Link } from "react-router-dom";
import tde from './tde.png'
import night from './night.jpg';
import astral from './astral.jpg';
import pride from './pride.jpg';
import Button from "react-bootstrap";
export default function Home(){
    return(
        <div style={{backgroundColor:'black',color:'white',textAlign:'center'}}>
        <Container fluid>
        <div className="ratio ratio-16x9">
      <iframe src="https://www.youtube.com/embed/04wTzqYuVWM" title="YouTube video"></iframe>
    </div>
   
<stripe-pricing-table pricing-table-id="prctbl_1NRNg1FxUqSaaFM4a7afZpUw"
publishable-key="pk_live_51NPdaxFxUqSaaFM4QcFMAAyK9wbkdxIMt1fNDVMjmVakNjvJssna8esdMsR7Eh1PpvoapOD4th7yF73eoT4BZCoQ00qyi9wpxB">
</stripe-pricing-table>
    <p>$5.99 a month or 59.99 a year</p>
    <Image className='p-3' src={tde} rounded  fluid />
    <div className="p-3">
    <h3>Unlimited Streaming</h3>
    <p>Get streaming access to all the movies and shows along with all future relaeases</p>
    <h3>Watch Anywhere</h3>
    <p>Enjoy on your favorite device</p>
    <h3>Support independent filmmmakers</h3>
    <p>support filmmakers and help them provide you with more content</p>
    </div>
    <h1>Get Tree Dance Now</h1>
    <p>Here are a few great movies on Tree Dance</p>
    <Row>
        <Col xs={6} md={4}>
        <Card bg="dark" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={astral}/>
      <Card.Body>
        <Card.Title>Astral Woods</Card.Title>
      </Card.Body>
    </Card>
        </Col>
        <Col xs={6} md={4}>
        <Card bg="dark" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={night}/>
      <Card.Body>
        <Card.Title>Night Fire</Card.Title>
      </Card.Body>
    </Card>
        </Col>
        <Col xs={6} md={4}>
        <Card bg="dark" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pride}/>
      <Card.Body>
        <Card.Title>Pride Jewel</Card.Title>
      </Card.Body>
    </Card>
        </Col>
      </Row>
      <h1 className="p-3 ">Subscribe Now!</h1>
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
