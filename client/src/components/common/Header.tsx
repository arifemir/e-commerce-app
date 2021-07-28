import * as React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
const { Brand, Toggle, Collapse } = Navbar;
//redux
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../../store/user-auth/userAuthActions';
import { resetOrder } from '../../store/order/orderActions';
import { resetShipping } from '../../store/shipping/shippingActions';
import { resetUsers } from '../../store/admin/user/adminUserActions';
//types
import { IRootState } from '../../store/store';
import { IUserState } from '../../store/user-auth/userAuthTypes';
//components
import SearchBox from '../product/SearchBox';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const { user } = useSelector<IRootState, IUserState>(state => state.userAuth);

  const onLogout = () => {
    dispatch(userLogout());
    dispatch(resetOrder());
    dispatch(resetShipping());
    if (user?.isAdmin) dispatch(resetUsers());
  };

  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Brand>ShopyRif</Brand>
          </LinkContainer>
          <Toggle aria-controls='basic-navbar-nav' />
          <Collapse id='basic-navbar-nav'>
            <SearchBox />
            <Nav className='ml-auto'>
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart' /> Cart
                </Nav.Link>
              </LinkContainer>
              {user ? (
                <NavDropdown title={user.name} id='username'>
                  <LinkContainer to='/orders'>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/changemyinformation'>
                    <NavDropdown.Item>Change user info</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={onLogout}>Logout</NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link>Sign In</Nav.Link>
                </LinkContainer>
              )}
              {user?.isAdmin && (
                <NavDropdown title='admin' id='adminmenu'>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/productlist'>
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/orderList'>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
