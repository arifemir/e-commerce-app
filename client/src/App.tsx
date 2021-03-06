import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
//components
import ProtectedRoute from './components/common/ProtectedRoute';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Meta from './components/common/Meta';
//pages
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import OrdersPage from './pages/OrdersPage';
import UserUpdatePage from './pages/UserUpdatePage';
import ShippingPage from './pages/ShippingPage';
import AddShippingLocationPage from './pages/AddShippingLocationPage';
import PaymentPage from './pages/PaymentPage';
import PlaceOrderPage from './pages/PlaceOrderPage';
import OrderPage from './pages/OrderPage';
import AdminRoute from './components/common/AdminRoute';
import UserListPage from './pages/admin/UserListPage';
import UserEditPage from './pages/admin/UserEditPage';
import ProductListPage from './pages/admin/ProductListPage';
import ProductEditPage from './pages/admin/ProductEditPage';
import OrderListPage from './pages/admin/OrderListPage';

const App = () => {
  return (
    <Router>
      <Meta />
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/register' exact component={RegisterPage} />
          <Route path='/login' exact component={LoginPage} />
          <Route path='/' exact component={HomePage} />
          <Route path='/search/:keyword' exact component={HomePage} />
          <Route path='/page/:pageNumber' exact component={HomePage} />
          <Route path='/search/:keyword/page/:pageNumber' exact component={HomePage} />
          <Route path='/orders' exact component={OrdersPage} />
          <ProtectedRoute path='/changemyinformation' exact component={UserUpdatePage} />
          <Route path='/product/:id' exact component={ProductPage} />
          <Route path='/cart/:id?' exact component={CartPage} />
          <ProtectedRoute path='/shipping' exact component={ShippingPage} />
          <ProtectedRoute path='/addshippinglocation' exact component={AddShippingLocationPage} />
          <ProtectedRoute path='/payment' exact component={PaymentPage} />
          <ProtectedRoute path='/placeorder' exact component={PlaceOrderPage} />
          <ProtectedRoute path='/order/:id' exact component={OrderPage} />
          <AdminRoute path='/admin/userlist' exact component={UserListPage} />
          <AdminRoute path='/admin/user/:id/edit' exact component={UserEditPage} />
          <AdminRoute path='/admin/productlist' exact component={ProductListPage} />
          <AdminRoute path='/admin/productlist/:pageNumber' exact component={ProductListPage} />
          <AdminRoute path='/admin/orderlist' exact component={OrderListPage} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
