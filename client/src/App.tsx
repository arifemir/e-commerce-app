import * as React from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
//redux
import { useDispatch } from 'react-redux';
import { getStoredUserData } from './store/user-auth/userAuthActions';
import { getStoredCartData } from './store/cart/cartActions';
//components
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import OrdersPage from './pages/OrdersPage';
import UserUpdatePage from './pages/UserUpdatePage';
import ShippingPage from './pages/ShippingPage';
import AddShippingAddressPage from './pages/AddShippingAddressPage';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStoredUserData());
    dispatch(getStoredCartData());
  }, []);

  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/register' exact component={RegisterPage} />
          <Route path='/login' exact component={LoginPage} />
          <Route path='/' exact component={HomePage} />
          <Route path='/orders' exact component={OrdersPage} />
          <Route path='/changemyinformation' exact component={UserUpdatePage} />
          <Route path='/product/:id' exact component={ProductPage} />
          <Route path='/cart/:id?' exact component={CartPage} />
          <Route path='/shipping' exact component={ShippingPage} />
          <Route path='/addshippingaddress' exact component={AddShippingAddressPage} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
