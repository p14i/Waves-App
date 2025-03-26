import Carousel from 'react-bootstrap/Carousel';
import carousal_1 from '../assets/carousal-1.jpg';
import carousal_2 from '../assets/carousal-3.1.jpg';
import carousal_3 from '../assets/carousal-3.jpg';


function CarousalComponent() {
  return (
    <Carousel data-bs-theme="dark" className='carousal-compoenent'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carousal_1}
          alt="First slide" 
          height="700px"
        />
        <Carousel.Caption>
          <h5>WAVES</h5>
          <p>Where every mood has a motion.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carousal_2}
          alt="Second slide" 
          height="700px"       
          />
        <Carousel.Caption>
          <h5>WAVES</h5>
          <p>Where every mood has a motion.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carousal_3}
          alt="Third slide"
          height="700px"
        />
        <Carousel.Caption>
          <h5>WAVES</h5>
          <p>
          Where every mood has a motion.          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarousalComponent;