import * as React from 'react';
import { Accordion, Card, Col, Row, Button } from 'react-bootstrap';
//redux
import { useDispatch } from 'react-redux';
//types
import { IShippingLocation } from '../../@types';
import { selectShippingLocation } from '../../store/shipping/shippingActions';

interface Props extends IShippingLocation {
  index: number;
}

const ShippingLocationItem = (props: Props) => {
  const { name, address, city, country, postalCode, index } = props;

  const dispatch = useDispatch();

  const onSelectLocation = () => {
    dispatch(selectShippingLocation(index));
  };

  return (
    <>
      <Card.Header>
        <Accordion.Toggle onClick={onSelectLocation} as={Button} variant='link' eventKey={String(index)}>
          {name}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={String(index)}>
          <Card.Body>
            <Col>
              <Row>{country}</Row>
              <Row>{city}</Row>
              <Row>{address}</Row>
              <Row>{postalCode}</Row>
            </Col>
          </Card.Body>
        </Accordion.Collapse>
      </Card.Header>
    </>
  );
};

export default ShippingLocationItem;
