import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { PokemonProvider } from './context/PokemonContext';
import { ThemeProvider } from './context/ThemeContext';
import { SweetAlertProvider } from './context/SweetAlertContext';
import { ToastProvider } from './context/ToastContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PokemonProvider>
        <ThemeProvider>
          <SweetAlertProvider>
            <ToastProvider>
              <App />
            </ToastProvider>
          </SweetAlertProvider>
        </ThemeProvider>
      </PokemonProvider>
    </BrowserRouter>
  </React.StrictMode>
);
