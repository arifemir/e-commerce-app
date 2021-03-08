import * as React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { Container } from 'react-bootstrap'

//components
import Footer from './components/Footer'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route
            path='/register'
            exact
            component={RegisterPage}
          />
          <Route
            path='/login'
            exact
            component={LoginPage}
          />
          <Route
            path='/'
            exact
            component={HomePage}
          />
          <Route
            path='/product/:id'
            exact
            component={ProductPage}
          />
          <Route
            path='/cart/:id?'
            exact
            component={CartPage}
          />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
