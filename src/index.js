import React from "react";
import { createRoot } from 'react-dom/client'
import {BrowserRouter as Router} from 'react-router-dom'
import './app.css'

import App from "./App";




const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
  <Router>
  <App />
  </Router>

</React.StrictMode>,
);