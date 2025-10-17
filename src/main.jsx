import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

createRoot(document.getElementById('root')).render(
   <BrowserRouter>
    <App />
   </BrowserRouter>
)
