import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import MainNavBar from './components/MainNavBar';
import FeelingsBar from './components/FeelingsBar';
import CarousalComponent from './components/carousal'
import { Container } from 'react-bootstrap';
import CelebrityList from './CelebrityList';
import ResourceList  from './ResourceList';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainNavBar />
      <CarousalComponent />
      <Container>
        <h5 className='mt-3 text-muted waves-info'  style={{ textAlign: 'justify' }}>🌈 Waves is a compassionate and easy-to-use web app designed to help individuals living with bipolar disorder track their mood swings, medication, and emotional patterns over time. Whether you're going through a high or a low, Waves is your daily check-in companion — helping you make sense of what you're feeling and when.

  But we go beyond just tracking. ✨ Waves also curates inspiring stories from celebrities who’ve openly talked about their bipolar journey, and recommends YouTube content, podcasts, and educational videos to help you learn, heal, and feel a little less alone.

  Your mind matters — and Waves is here to support it.</h5>
        <hr></hr>
        </Container>
      <FeelingsBar />
      <CelebrityList/>
      <ResourceList/>
      </>
  )
}

export default App
