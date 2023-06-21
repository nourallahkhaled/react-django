import React from 'react';
import '../CSS/Contact_Us.css';
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

export function Contact_Us() {
    const formStyle = {
        backgroundColor: '#f5f5f5',
        padding: '20px',
        borderRadius: '10px'
    };
  return (
      <div>
          <section id="contact" className="block contact-block pb-5">
              <Container fluid style={formStyle}>
                  <div className="title-holder">
                      <h2 className='text-center'>Contact us</h2>
                  </div>
                  <Form className='contact-form'>
                      <Row>
                          <Col sm={4}>
                              <Form.Control type="text" placeholder="Enter your full name" required />
                          </Col>
                          <Col sm={4}>
                              <Form.Control type="email" placeholder="Enter your email address" required />
                          </Col>
                          <Col sm={4}>
                              <Form.Control type="tel" placeholder="Enter your contact number" required />
                          </Col>
                      </Row>
                      <Row>
                          <Col className='my-3' sm={12}>
                              <Form.Control as="textarea" placeholder="Enter your contact message" required />
                          </Col>
                      </Row>
                      <div className='btn-holder'>
                          <Button style={{backgroundColor:"#3A98B9"}} type="submit">Submit</Button>
                      </div>
                  </Form>
              </Container>
          </section>
    </div>
  )
}
