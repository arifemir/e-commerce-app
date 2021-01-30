import * as React from 'react'
import {BrowserRouter as Router, Route, RouteComponentProps} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Footer from './components/Footer'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
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
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
