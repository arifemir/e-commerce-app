import * as React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
const {Brand,Toggle, Collapse} = Navbar
//redux
import { useDispatch, useSelector } from 'react-redux'
//types
import { IRootState } from '../store'
import { IUserState } from '../store/userLoginRegister/types'
import { userLogout } from '../store/userLoginRegister/actions'

const Header: React.FC = () => {
  const dispatch = useDispatch()
  const { user } = useSelector<IRootState, IUserState>(state => state.userLoginRegister)

  const onLogout = () => {
    dispatch(userLogout())
  }

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
              {user ? (
                <NavDropdown title={user.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={onLogout}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
              <LinkContainer to='/login'>
                <Nav.Link>Sign In</Nav.Link>
              </LinkContainer>
              )
              }
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
