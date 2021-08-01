import React from 'react';
import ReactDOM from 'react-dom';

// importar los estilos de CSS 
import './CSS/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Layout from './JS/layout';

ReactDOM.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>,
  document.getElementById('root')
);