import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './bootstrap.min.css'
import './index.css'
import App from './App'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
  ,
  document.getElementById('root'),
)
