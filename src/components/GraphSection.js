import React from 'react';
import trafficGraph from '../assets/traffic-graph.png';
import './GraphSection.css';

const GraphSection = () => {
    return (
        <section className="graph-section">
            <div className="container">
                <div className="graph-header">
                    <h2>ניתוח ביצועים <span className="gradient-text">בזמן אמת</span></h2>
                    <p>ראו בדיוק כיצד הבוט משפיע על התנועה לאתר שלכם.</p>
                </div>

                <div className="graph-card">
                    <div className="glass-panel graph-container">
                        <img src={trafficGraph} alt="גרף עליה בתנועה לאתר" className="graph-image" />

                        {/* Annotations */}
                        <div className="annotation annotation-off">
                            <span className="dot dot-red"></span>
                            ללא תנועה
                            <div className="arrow-down"></div>
                        </div>

                        <div className="annotation annotation-on">
                            <span className="dot dot-green"></span>
                            התחלת פעילות!
                            <div className="arrow-down"></div>
                        </div>

                        <div className="graph-overlay">
                            <div className="stat-box">
                                <div className="stat-label">סה"כ קליקים</div>
                                <div className="stat-value">2,920</div>
                                <div className="stat-trend">+154% ↗</div>
                            </div>
                        </div>
                    </div>

                    <div className="graph-details">
                        <div className="detail-item">
                            <h3>🔍 אימות מלא</h3>
                            <p>התנועה שלנו ניתנת לאימות מלא דרך Google Search Console ו-Microsoft Clarity, כך שאתם רואים בדיוק על מה אתם משלמים.</p>
                        </div>
                        <div className="detail-item">
                            <h3>⚡ משתמשים אמיתיים</h3>
                            <p>אנחנו לא מפעילים בוטים פשוטים. הפעילות באתר מבוצעת על ידי משתמשים המבצעים פעולות טבעיות לקידום האתר.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GraphSection;
