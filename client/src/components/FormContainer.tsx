import * as React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

interface Props {
  children: React.ReactNode
}

const FormContainer = (props: Props) => {
  const {children} = props

  return (
    <Container>
      <Row className='justify-content-md-center'>
        <Col xs={12} md={6}>
          {children}
        </Col>
      </Row>
    </Container>
  )
}

export default FormContainer
