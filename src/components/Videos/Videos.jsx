import content from '../../data/content.json';
import React from 'react';
import './Videos.scss';
import { Link } from 'react-router';
import { useState, useEffect, useRef } from 'react'
const Videos = () => {
    console.log(content[0]);
    const [activeComponent, setActiveComponent] = useState('A');
    let play = false;
    const [showVideoOverlay, setShowVideoOverlay] = useState(false);
    const [position, setPosition] = useState("normal");
    const [selectedNumber, setSelectedNumber] = useState(2);
    const numbers = [];
    for (let i = 1; i <= 15; i++) {
        numbers.push(i);
    }
    const handleToggle = (newPosition) => {
        setPosition(newPosition);
    };
    return (
        <div className="homepage">
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
            <Media
                isOpen={showVideoOverlay}
                onClose={() => setShowVideoOverlay(false)} mode={position} seconds={selectedNumber}
            />
            <section className="todays-picks">
                <h2>Today's Picks</h2>
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
                <h2>Continue Watching</h2>
                <div className="cards">
                    {content.continueWatching.map((item, index) => (
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
export default Videos;
