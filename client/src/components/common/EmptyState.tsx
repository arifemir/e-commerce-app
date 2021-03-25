import * as React from 'react';
import EmptyBox from '../icons/EmptyBox';
import { Col, Row } from 'react-bootstrap';

interface Props {
  title: string;
  content: string;
}

const EmptyState = (props: Props) => {
  const { title, content } = props;

  return (
    <Col>
      <h1 className='text-center'>{title}</h1>
      <p className='text-center'>{content}</p>
      <Row className='justify-content-center'>
        <EmptyBox height={96} width={96} />
      </Row>
    </Col>
  );
};

export default EmptyState;
