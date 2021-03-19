import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer: React.FC = () => {
  return (
    <Container>
      <Row>
        <Col className='text-center py-3'>Copyright &copy; ShopyRif</Col>
      </Row>
    </Container>
  );
};

export default Footer;
