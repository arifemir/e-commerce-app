import * as React from 'react';
import { Alert } from 'react-bootstrap';

interface Props {
  variant: string,
  children: React.ReactNode
}

const Message = (props: Props) => {
  const { variant, children } = props;
  return (
    <Alert variant={variant}>
      {children}
    </Alert>
  );
}

Message.defaultProps = {
  variant: 'info'
}

export default Message
