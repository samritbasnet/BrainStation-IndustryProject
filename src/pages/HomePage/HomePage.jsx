import React from 'react';
import './HomePage.scss';
import content from '../../data/content.json';
import { Link } from 'react-router';
import Media from '../Media/Media';
import { useState, useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const HomePage = () => {
    const [activeComponent, setActiveComponent] = useState('A');
    let play = false;
    const [showVideoOverlay, setShowVideoOverlay] = useState(false);
    const [position, setPosition] = useState("normal");
    const [selectedNumber, setSelectedNumber] = useState(15);
    const numbers = [];
    for (let i = 1; i <= 15; i++) {
        numbers.push(i);
    }
    const handleToggle = (newPosition) => {
        setPosition(newPosition);
    };
    return (
        <div className="homepage">
            <header></header>
            <div className='control'>
                <div className="slider-container">
                    <div className="selected-number-display">
                        {selectedNumber}
                    </div>
                    <div className="slider-track">
                        <input
                            type="range"
                            min="1"
                            max="15"
                            value={selectedNumber}
                            onChange={(e) => setSelectedNumber(parseInt(e.target.value))}
                            className="slider-input"
                        />
                    </div>
                </div>
                <div className="toggle-container">
                    <button
                        className={`toggle-btn ${position === "quiz" ? 'active' : ''}`}
                        onClick={() => handleToggle("quiz")}
                    >
                        quiz
                    </button>
                    <button
                        className={`toggle-btn ${position === "normal" ? 'active' : ''}`}
                        onClick={() => handleToggle("normal")}
                    >
                        select
                    </button>
                    <button
                        className={`toggle-btn ${position === "ad" ? 'active' : ''}`}
                        onClick={() => handleToggle("ad")}
                    >
                        ad
                    </button>
                </div>
            </div>
            <Media
                isOpen={showVideoOverlay}
                onClose={() => setShowVideoOverlay(false)} mode={position} seconds={selectedNumber}
            />
            {/* <Media play={play} /> */}
            <section className="todays-picks">
                <h2 className='today-title'>Today's Picks</h2>
                <div className="cards">
                    {content.todaysPicks.map((pick, index) => (
                        <div className="card" key={index} onClick={() => setShowVideoOverlay(true)}>
                            <div className='click'>
                                <img src={pick.image} alt={pick.title} />
                                <p>{pick.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className="continue-watching">
                <h2 className='today-title'>Continue Watching</h2>
                <div className="cards">
                    {content.continueWatching.map((item, index) => (
                        <div className="card" key={index}>
                            <img src={item.image} alt={item.title} />
                            <p>{item.title}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section className="like-watching">
                <h2 className='today-title'>You may like:</h2>
                <div className="cards">
                    {content.like.map((item, index) => (
                        <div className="card" key={index}>
                            <img src={item.image} alt={item.title} />
                            <p>{item.title}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div >
    );
};
export default HomePage;


