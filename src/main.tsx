import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Navbar from './components/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <Navbar />
        <div className='text-center mt-12 text-3xl'>
            <h2>Boost Quiz</h2>
        </div>
        <App />
    </React.StrictMode>
);
