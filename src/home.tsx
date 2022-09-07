import React from "react";
import { Container,Row,Col,Image,Card} from "react-bootstrap";
import me from './me.jpg';
import mars from './mars.png';
import recipe from './recipe.png';
import countries from './countries.png';

export default function Home(){
const projectsImages = [mars,recipe,countries]
const projects2 = [{'name':'mars rover photo','image':mars},{'name':'recipe','image':recipe},{'name':'countries','image':countries}]
    return(
        <div style={{backgroundColor:'black'}} className='p-5'>
          <Container fluid>
            <Row xs={1} md={1} lg={2} className='text-center' style={{ display:'flex',alignItems:'center'}}>
                <Col className="mt-5">
               <h1 style={{color:'white'}}>Hello I am Jamar Bevel</h1>
               <h2 style={{color:'white'}}>A computer science student at Stevens Institute of Technology. My goal is to further my study of technology and make the world a better place.</h2>
                </Col>
                <Col>
                <Image className="rounded shadow w-50 mx-auto" src={me} alt="me" fluid />
                </Col>
            </Row>
            <Row className="p-5 mt-5">
                <Col>
                <h1 style={{color:'white'}}>
            Projects
          </h1>
                </Col>
            </Row>
            <Row>
            {projects2.map((data) => (
                <Col>
                <Card className="shadow rounded text-center" bg='black' onClick={ProjectLink}>
                    <Image className="card-img-top" src={data.image} alt='website image' fluid />
                    <Card.Body>
                    <Card.Title style={{color:'white'}}>{data.name}</Card.Title>
                    </Card.Body>
                </Card>
                </Col>
                
            
            ))}
            </Row>
          </Container>
        
        </div>
       
    );
}

function ProjectLink(){

    window.location.href = 'www.google.com'

    return null

}