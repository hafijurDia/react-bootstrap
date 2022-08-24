import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";
import App from './App'
import './index.css'
import 'react-toastify/dist/ReactToastify.min.css';
import {ContactProvider} from './context/Contact.context';
import { ThemeProvider } from './context/Theme.context';
import { AuthProvider } from './context/Auth.Context';
import {BrowserRouter} from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeProvider>
      <AuthProvider>
        <ContactProvider>
          <App />
        </ContactProvider>
      </AuthProvider>
    </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)
