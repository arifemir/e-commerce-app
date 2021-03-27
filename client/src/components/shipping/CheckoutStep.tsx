import * as React from 'react';
import {Nav} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

interface Props {
  step?: boolean;
  to: string;
  content: string;
}

const CheckoutStep = (props: Props) => {
  const { step, to, content } = props;
  return (
    <Nav.Item>
      {step ? (
        <LinkContainer to={to}>
          <Nav.Link>{content}</Nav.Link>
        </LinkContainer>
      ) : (
        <Nav.Link disabled>{content}</Nav.Link>
      )}
    </Nav.Item>
  );
}

export default CheckoutStep
