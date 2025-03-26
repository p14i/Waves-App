import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CelebrityCard from './pages/Celebrity Card/index';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function ResourceList() {
  const [videos, setVideos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("bipolar disorder");

  const API_KEY = 'AIzaSyBAAYq8W1HbowGs5qK6QfvDTQnZP5rYQuM';

  const searchVideos = async () => {
    try {
      const API_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&type=video&q=${searchQuery}&key=${API_KEY}`;
      const res = await fetch(API_URL);
      const data = await res.json();

      const formattedVideos = data.items.map(item => ({
        videoId: item.id.videoId,
        title: item.snippet.title,
        channelTitle: item.snippet.channelTitle,
        thumbnail: item.snippet.thumbnails.medium.url,
        description: item.snippet.description,
      }));

      setVideos(formattedVideos);
    } catch (error) {
      console.error('Error fetching videos: ', error);
    }
  };

  useEffect(() => {
    searchVideos();
  }, []);

  return (
    <>
      <Container className='resources-container'>
        <h1 className="text-xl font-bold mb-4 resources-info-heading">Resources to Know More About Bipolar Disorder</h1>
        <p className='resources-info-text mb-4 resources-container-text'>
          These videos can help you learn more about bipolar disorder from medical experts, real stories, and community voices.
        </p>

        <Row className="mt-4" lg={4} md={2} xs={1}>
          {videos.map((video, index) => (
            <Col key={index} className="mb-4">
              <CelebrityCard
                celebrity={{
                  name: video.title,
                  imgLink: video.thumbnail,
                  quote: `From: ${video.channelTitle}`,
                  link: `https://www.youtube.com/watch?v=${video.videoId}`
                }}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default ResourceList;