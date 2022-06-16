import { createRoot } from 'react-dom/client';
import React from "react";
import './index.css';
import Router from './routes'

const root = createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
        <Router />
    </React.StrictMode>
);