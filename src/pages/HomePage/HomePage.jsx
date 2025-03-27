import React from 'react';
import './HomePage.scss';
import content from '../../data/content.json';

const HomePage = () => {
    return (
        <div className="homepage">
            <header className="header">
                <h1>Max</h1>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Series</li>
                        <li>Movies</li>
                        <li>HBO</li>
                        <li>Sports</li>
                        <li>News</li>
                    </ul>
                </nav>
            </header>

            <section className="todays-picks">
                <h2>Today's Picks</h2>
                <div className="cards">
                    {content.todaysPicks.map((pick, index) => (
                        <div className="card" key={index}>
                            <img src={pick.image} alt={pick.title} />
                            <p>{pick.title}</p>
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
        </div>
    );
};

export default HomePage;
