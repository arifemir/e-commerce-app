import * as React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import { Container, Nav, Navbar } from 'react-bootstrap'

const {Brand,Toggle, Collapse} = Navbar

const Header: React.FC = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Brand>ShopyRif</Brand>
          </LinkContainer>
          <Toggle aria-controls='basic-navbar-nav' />
          <Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <LinkContainer to='/cart'>
                <Nav.Link><i className='fas fa-shopping-cart'/> Cart</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/login'>
                <Nav.Link>Sign In</Nav.Link>
              </LinkContainer>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
