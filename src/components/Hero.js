import React from 'react';
import heroBg from '../assets/hero_bg.png';
import './Hero.css';

const Hero = ({ onOpenModal }) => {
    return (
        <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <h1 className="hero-title">
                    <span className="gradient-text">1# בקידום אורגני</span><br />
                    וכניסות מובטחות לאתר
                </h1>
                <p className="hero-subtitle">
                    שלטו בתוצאות החיפוש בגוגל עם תנועה אורגנית איכותית של <span className="highlight">RankUp</span>.
                    משתמשים אמיתיים שמנווטים באתר שלכם לתוצאות מוכחות.
                </p>
                <div className="hero-cta">
                    <button className="btn-primary" onClick={onOpenModal}>התחל לקדם עכשיו</button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
