import React from "react";
import { Container,Row,Col,Image,Card, CardGroup,Collapse,Button} from "react-bootstrap";
import me from './me.jpg';
import { useState } from "react";
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
export default function Home(){
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
    return(
        <div style={{backgroundColor:'black',color:'white',textAlign:'center'}}>
        <Container fluid>
        <div className="ratio ratio-16x9">
      <iframe src="https://www.youtube.com/embed/04wTzqYuVWM" title="YouTube video"></iframe>
    </div>
    <p style={{fontWeight:'bold'}}>$5.99 a month or 59.99 a year</p>
<script async src="https://js.stripe.com/v3/pricing-table.js"></script>
<stripe-pricing-table pricing-table-id="prctbl_1NeMl0FxUqSaaFM4yliLmQPj"
publishable-key="pk_live_51NPdaxFxUqSaaFM4QcFMAAyK9wbkdxIMt1fNDVMjmVakNjvJssna8esdMsR7Eh1PpvoapOD4th7yF73eoT4BZCoQ00qyi9wpxB">
</stripe-pricing-table>
  <h3 style={{fontWeight:'bold',textAlign:'start'}}> Just Added</h3>
    <Row xs={2} md={4} lg={6} className="g-4 p-3">
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
    <h3 style={{fontWeight:'bold'}}> Watch Orginals</h3>
   <p>Unshackle yourself from the sequel cycle! Embrace indie creators, fuel innovation. Say no to remakes, yes to fresh narratives. Your support ignites originality.</p>
   <h3 style={{fontWeight:'bold'}}>Support Independent Filmmakers</h3>
   <p>Your support is the key to unlocking a realm of creativity, delivering you extraordinary stories, art, and innovations. Become a patron of originality today and shape a world of imagination like never before.</p>
 
    </div>
    <Image className='p-3' src={tde} rounded  fluid />
    <div className="p-4">
    <h3 style={{fontWeight:'bold'}}>Cancel Anytime</h3>
    <p>Charged once per month or once per year.</p>
    <h3 style={{fontWeight:'bold'}}>Unlimited Streaming</h3>
   <p>Get streaming access to all the content and all future releases</p>
    </div>
    <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
<stripe-pricing-table pricing-table-id="prctbl_1NeMl0FxUqSaaFM4yliLmQPj"
publishable-key="pk_live_51NPdaxFxUqSaaFM4QcFMAAyK9wbkdxIMt1fNDVMjmVakNjvJssna8esdMsR7Eh1PpvoapOD4th7yF73eoT4BZCoQ00qyi9wpxB">
</stripe-pricing-table>
<div className="d-grid gap-2 p-3">
  <h2 style={{fontWeight:'bold'}}>Frequently Asked Questions</h2>
<Button style={{textAlign:'center'}} variant="dark" size="lg"  onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}>

What is Tree Dance?</Button>

<Collapse in={open}>
        <div id="example-collapse-text">
          Tree Dance is Streaming service that offers a great variety of independent TV shows, movies, animation, documentaries, and more. New entertainment is added every week!
        </div>
      </Collapse>
      <Button style={{textAlign:'center'}} variant="dark" size="lg"  onClick={() => setOpen2(!open2)}
        aria-controls="example-collapse-text2"
        aria-expanded={open2}>

How much does Tree Dance cost?</Button>

<Collapse in={open2}>
        <div id="example-collapse-text2">
         Watch Tree Dance on your smartphone, tablet, laptop, computer all for cost of $5.99 per month or 59.99 per year. No extra costs. No contracts
        </div>
      </Collapse>
      <Button style={{textAlign:'center'}} variant="dark" size="lg"  onClick={() => setOpen4(!open4)}
        aria-controls="example-collapse-text4"
        aria-expanded={open4}>

Where can I watch?</Button>

<Collapse in={open4}>
        <div id="example-collapse-text4">
        Watch anywhere, anytime. Sign in with your Tree Dance account on the Tree Dance app on your mobile device.
        </div>
      </Collapse>
      <Button style={{textAlign:'center'}} variant="dark" size="lg"  onClick={() => setOpen3(!open3)}
        aria-controls="example-collapse-text3"
        aria-expanded={open3}>

How do I cancel?</Button>

<Collapse in={open3}>
        <div id="example-collapse-text3">
          Tree Dance is flexible. There are no contracts, commitments and not a 20 step nonsense way to cancel. You can easily cancel your subscription in two clicks. Start or stop your account anytime.
        </div>
      </Collapse>
     
      </div>
      <div className="p-4">
      <hr
   style={{
   background: "#808080",
   height: "5px",
   border: "none",
   }}
   
/>
<a href="https://jamarbevel.wixsite.com/treedanceprivacy">privacy policy </a>
<a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">terms of use</a>
      </div>
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
