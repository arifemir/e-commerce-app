import * as React from 'react'
import { Accordion, Card, Col, Row, Button } from 'react-bootstrap';
import { IShippingLocation } from '../../@types'

interface Props extends IShippingLocation {
  index: number;
}

const ShippingLocationItem = (props: Props) => {
  const { address, city, country, postalCode, index } = props;

  return (
    <>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey={String(index)}>
          {country}
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
  )
}

export default ShippingLocationItem
