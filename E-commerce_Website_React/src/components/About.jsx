import React from 'react';
import '../CSS/About.css';
import { Card, CardGroup, Col, Container, Image, ProgressBar, Row } from 'react-bootstrap';

export function About() {
    const women = 90;
    const men = 15;
    const teenagers = 5;
  return (
    <div>
          <main className='about pt-5'>
              <Container>
                  <Row className='px-4 my-5'>
                      <Col sm={7}>
                          <Image src="boutique-clothing-online-1024x683.jpg" fluid rounded />
                      </Col>
                      <Col sm={5} className='my-5'>
                          <h1>About Us</h1>
                          <p>
                              Founded by three partners of Egypt origin in 2023, Clothing Gold started its commercial life as a wholesale brand.
                              Established and registered in Egypt, Clothing Gold attracted attention with its t-shirt and sweatshirt designs in the first place.
                              With the separation of the two founding partners of the brand in time, Clothing Gold was passed to George Amouyal as the sole shareholder.
                              Tema Tekstil, which is connected to  Group and is the producer as well as licensor of Clothing Gold in Egypt.
                          </p>
                          <div className='progress-block'>
                              <h4>Women Clothes</h4>
                              <ProgressBar now={women} label={`${women}%`} variant="Progress" style={{backgroundColor:"#E8D5C4"}}/>
                          </div>
                          <div className='progress-block'>
                              <h4>Men Clothes</h4>
                              <ProgressBar now={men} label={`${men}%`} variant="Progress" style={{backgroundColor:"#E8D5C4"}}/>
                          </div>
                          <div className='progress-block'>
                              <h4>Teenagers Clothes</h4>
                              <ProgressBar now={teenagers} label={`${teenagers}%`} variant="Progress" style={{backgroundColor:"#E8D5C4"}}/>
                          </div>
                      </Col>
                  </Row>
              </Container>
              <h2 className='text-center'>Our Services</h2>
              <CardGroup>
                  <Card className='my-5'>
                      <Card.Img variant="top" src="Mobile_Smartphone_Shopping.jpg" />
                      <Card.Body className='cards'>
                          <Card.Title>Comfort Shopping</Card.Title>
                          <Card.Text>
                              The comfort and happiness of our customers is more important than everything, so we strive to make them feel the pleasure of shopping and comfort.
                          </Card.Text>
                      </Card.Body>
                      <Card.Footer>
                          <small className="text-muted">Last updated 3 mins ago</small>
                      </Card.Footer>
                  </Card>
                  <Card className='my-5'>
                      <Card.Img variant="top" src="group-beautiful-chlidren-posing_155003-1988.jpg" />
                      <Card.Body className='cards'>
                          <Card.Title>All Ages and All sizes</Card.Title>
                          <Card.Text>
                              We have the latest styles and models for all ages, and this makes us unique.
                          </Card.Text>
                      </Card.Body>
                      <Card.Footer>
                          <small className="text-muted">Last updated 2 mins ago</small>
                      </Card.Footer>
                  </Card>
                  <Card className='my-5'>
                      <Card.Img variant="top" src="rack-clothes-store.jpg" />
                      <Card.Body className='cards'>
                          <Card.Title>Creative Designs</Card.Title>
                          <Card.Text>
                            We strive and do our best to make the design and style of our clothes unique and suitable for all cultures and all ages.
                          </Card.Text>
                      </Card.Body>
                      <Card.Footer>
                          <small className="text-muted">Last updated 1 mins ago</small>
                      </Card.Footer>
                  </Card>
              </CardGroup>
            </main>
    </div>
  )
}
