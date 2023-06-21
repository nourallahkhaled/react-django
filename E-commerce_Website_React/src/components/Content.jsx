import { Col, Container, Image, Row } from 'react-bootstrap';
import '../CSS/Content.css';
export default function Content () {
  return (
    <div className='p-5 text-center content'>
      <h2 className='mb-5'>Our Products</h2>
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <div className="text-center">
              <Image src="l_20231-s39959z8-few-75-62-89-178_a2.webp" roundedCircle style={{ width: '171px', height: '180px' }} />
              <p className='mt-3 fs-5 para'>Women Clothes</p>
          </div>
          </Col>
          <Col xs={6} md={4}>
            <div className="text-center">
              <Image src="l_20231-s3kh01z8-seh-99-76-96-188_a.webp" roundedCircle style={{ width: '171px', height: '180px' }} />
              <p className='mt-3 fs-5 para'>Men Clothes</p>
            </div>
          </Col>
          <Col xs={6} md={4}>
            <div className="text-center">
              <Image src="family-shot-caucasian-brother-sister-standing-close-each-other-posing-indoors-colourful-knitted-swea.jpg" roundedCircle style={{ width: '171px', height: '180px' }} />
              <p className='mt-3 fs-5 para'>Teenagers Clothes</p>
            </div>
          </Col>
      </Row>
      </Container>
    </div>
  )
}