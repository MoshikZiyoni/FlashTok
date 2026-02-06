import React from 'react';
import { FaRobot, FaSearch, FaUserSecret, FaBolt, FaCheck } from 'react-icons/fa';
import './FacebookMonitor.css';
import dashboardImg from '../assets/fb_monitor_dashboard.png';

const FacebookMonitor = ({ onOpenModal }) => {
    return (
        <section className="fb-monitor-section">
            <div className="fb-monitor-container">

                {/* Left Side: Sales Pitch & Pricing */}
                <div className="fb-content">
                    <div className="fb-header">
                        <span className="fb-badge">תוסף בלעדי</span>
                        <h2 className="fb-title">Facebook Monitor</h2>
                        <p className="fb-subtitle">הכלי האולטימטיבי לייצור לידים מקבוצות פייסבוק</p>
                    </div>

                    <div className="fb-pricing-card">
                        <div className="price-header">
                            <h3>מנוי חודשי</h3>
                            <div className="price-tag">
                                <span className="currency">₪</span>
                                <span className="amount">250</span>
                                <span className="period">/לחודש</span>
                            </div>
                            <span className="price-note">ללא התחייבות</span>
                        </div>

                        <ul className="price-features">
                            <li><FaCheck className="check-icon" /> <strong>כולל ניטור של עד 20 קבוצות</strong></li>
                            <li><FaCheck className="check-icon" /> סריקה אוטומטית 24/7</li>
                            <li><FaCheck className="check-icon" /> התראות בזמן אמת ל-google sheets/טלפון</li>
                            <li><FaCheck className="check-icon" /> כולל עדכונים ושיפורים</li>
                        </ul>

                        <button className="btn-buy" onClick={() => onOpenModal('fb-monitor-purchase')}>
                            רכוש מנוי
                        </button>
                        {/* Guarantee removed per user request */}
                    </div>
                </div>

                {/* Right Side: Visuals & Features */}
                <div className="fb-showcase">
                    <img src={dashboardImg} alt="Facebook Monitor Dashboard" className="fb-dashboard-img" />

                    <div className="fb-mini-features">
                        <div className="mini-feature">
                            <FaSearch className="mini-icon" />
                            <span>מוצא לידים חמים</span>
                        </div>
                        <div className="mini-feature">
                            <FaUserSecret className="mini-icon" />
                            <span>עובד מתחת לרדאר</span>
                        </div>
                        <div className="mini-feature">
                            <FaBolt className="mini-icon" />
                            <span>פניה אוטומטית מהירה</span>
                        </div>
                    </div>

                    <div className="fb-actions-secondary">
                        <button className="btn-link" onClick={() => window.open('https://addons.mozilla.org/en-US/firefox/addon/fb-monitor-saas/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search', '_blank')}>
                            להורדת התוסף (Firefox)
                        </button>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default FacebookMonitor;
