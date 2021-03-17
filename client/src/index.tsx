import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './bootstrap.min.css'
import './index.css'
import App from './App'
import { QueryClient, QueryClientProvider } from 'react-query'
import {Provider} from 'react-redux'
import store from './store/store'

const queryClient = new QueryClient();

ReactDOM.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </Provider>
  ,
  document.getElementById('root'),
)
