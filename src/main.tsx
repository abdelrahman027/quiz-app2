import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Navbar from './components/Navbar';
import vid1 from "../src/images/vid.mp4"

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
                <video
        autoPlay
        muted
        loop
        id="myvideo"
        className="mx-auto w-full h-full left-0 absolute -top-[16px] -z-20 min-h-full "
      >
        <source src={vid1} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
        <Navbar />
        <div className='text-center mt-12 text-6xl font-bold p-4 bg-black/20'>
            <h2 className='text-white'>Boost Quiz</h2>
        </div>
        <App />
    </React.StrictMode>
);
