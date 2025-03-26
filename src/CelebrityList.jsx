import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import CelebrityCard from './pages/Celebrity Card/index'
import { Container } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap'

function CelebrityList() {

  const celebrities = [
    {
      cid: 1,
      name: "Selena Gomez",
      imgLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmTj_mdUT492XGqQU6sWzPq7BGNLGFanQOo6MIYyCE3O6vB9WoxHMDAMWzS8um0hSwVHyVC9TMxV1NY4SVKSO_ww",
      quote: `I think now I’m at the place where I wear it proudly, and I’m not ashamed...`,
    },
    {
      cid: 2,
      name: "Demi Lovato",
      imgLink: "https://yt3.googleusercontent.com/DevbEmPsb5My95U0LtJoFSeIHbROOvcYZfu31oHpQKH6rX-GYqe--LFf3Jc5FPCZDLcHerA38A=s900-c-k-c0x00ffffff-no-rj",
      quote: `It’s a part of who I am, and I’m not ashamed anymore.`,
    },
    {
      cid: 3,
      name: "Kanye West",
      imgLink: "https://images-prod.dazeddigital.com/355/azure/dazed-prod/1250/8/1258995.jpg",
      quote: `I feel a heightened connection with the universe when I’m ramped up.`,
    },
    {
      cid: 4,
      name: "Mariah Carey",
      imgLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShHm56OEeVtLdNJreEzslWRlXdmy3fbcDtlQ&s",
      quote: `I lived in denial and isolation... It was too heavy a burden to carry.`,
    },
    {
      cid: 5,
      name: "Catherine Zeta-Jones",
      imgLink: "https://upload.wikimedia.org/wikipedia/commons/d/df/Catherine_Zeta-Jones_VF_2012_Shankbone_2.jpg",
      quote: `There is no shame in seeking help.`,
    },
    {
      cid: 6,
      name: "Jean-C V Damme",
      imgLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Jean-Claude_Van_Damme_2012.jpg/440px-Jean-Claude_Van_Damme_2012.jpg",
      quote: `Sometimes you're happy, sometimes you're sad — that's life. But when you’re bipolar... it's deeper.`,
    },
    {
      cid: 7,
      name: "Russell Brand",
      imgLink: "https://cdn.britannica.com/34/220934-050-7A795996/Russell-Brand-2017.jpg",
      quote: `I’m often up and down. It’s like surfing emotions — you have to learn how to ride them.`,
    },
    {
      cid: 8,
      name: "Sinead O’Connor",
      imgLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Sinead_O%27Connor_%2814828633401%29_%28cropped%29.jpg/440px-Sinead_O%27Connor_%2814828633401%29_%28cropped%29.jpg",
      quote: `Bipolar disorder is like a tornado in your head. Talking about it helped me heal.`,
    }
];


  return (
    <>
    
      <Container className='celebrities-container '>
      <h1 className="text-xl font-bold mb-4 celebrity-info-heading">Celebrities With Bipolar</h1>
       <span className='mt-3 celebrity-info-heading'>There are lots of famous people that have also struggled with bipolar disorder, here are some quotes and information to make you feel less alone and more hopeful. </span>
       <Row className="mt-4" lg={4} md={2} xs={1}>
        {celebrities.map((celebrity) => (
          <Col key={celebrity.cid} className="mb-4">
            <CelebrityCard celebrity={celebrity} />
          </Col>
        ))}
      </Row>

      </Container>

      </>
  )
}

export default CelebrityList
