
import React from "react";
import { createRoot } from 'react-dom/client'
import {BrowserRouter as Router} from 'react-router-dom'


import App from './App';
import 'remixicon/fonts/remixicon.css'
import './App.css'
import { Buffer } from "buffer";

Buffer.from("anything", "base64");
window.Buffer = window.Buffer || require("buffer").Buffer;

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
  <Router>
  <App />
  </Router>

</React.StrictMode>
)