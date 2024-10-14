import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import store from '../redux/store.jsx';


createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)



