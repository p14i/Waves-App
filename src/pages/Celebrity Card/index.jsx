import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap'
import './index.css'
import { Container } from 'react-bootstrap';
function CelebrityCard({celebrity}) {
  return (
  
     <Card style={{ width: '18rem' } } className='celebrity-card' >
      <Card.Title className='card-header'
      >{celebrity.name}</Card.Title>
      <Card.Img variant="top" src={celebrity.imgLink} className='card-Img'/>
      <Card.Body>
        <Card.Text className='text-muted card-text'
        style={{ textAlign: 'justify' }}>
         {celebrity.quote}
        </Card.Text>
        {celebrity.link && (
  <Button
    variant="outline-primary"
    href={celebrity.link}
    target="_blank"
    className="mt-2"
  >
    Watch on YouTube
  </Button>
)}

      </Card.Body>
    </Card>
  
    
  );

}

export default CelebrityCard;