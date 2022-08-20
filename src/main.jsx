import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";
import App from './App'
import './index.css'
import 'react-toastify/dist/ReactToastify.min.css';
import {ContactProvider} from './context/Contact.context';
import { ThemeProvider } from './context/Theme.context';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContactProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ContactProvider>
  </React.StrictMode>
)
