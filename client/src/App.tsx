import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
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
import AddShippingLocationPage from './pages/AddShippingLocationPage';
import ProtectedRoute from './components/common/ProtectedRoute';
import PaymentPage from "./pages/PaymentPage";

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/register' exact component={RegisterPage} />
          <Route path='/login' exact component={LoginPage} />
          <Route path='/' exact component={HomePage} />
          <Route path='/orders' exact component={OrdersPage} />
          <ProtectedRoute path='/changemyinformation' exact component={UserUpdatePage} />
          <Route path='/product/:id' exact component={ProductPage} />
          <Route path='/cart/:id?' exact component={CartPage} />
          <ProtectedRoute path='/shipping' exact component={ShippingPage} />
          <ProtectedRoute path='/addshippinglocation' exact component={AddShippingLocationPage} />
          <Route path='/payment' exact component={PaymentPage} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
