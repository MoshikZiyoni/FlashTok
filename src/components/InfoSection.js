import React from 'react';
import seoSuccess from '../assets/seo_success.png';
import './InfoSection.css';

const InfoSection = () => {
    return (
        <section className="info-section">
            <div className="container">
                <div className="info-grid">
                    <div className="info-content">
                        <h2>למה העסק שלך חייב את <span className="gradient-text">RankUp?</span></h2>
                        <div className="info-block">
                            <h3>🚀 מקפיץ את הדירוג בגוגל</h3>
                            <p>
                                גוגל מזהים פעילות באתר כסימן לרלוונטיות. ככל שיש יותר כניסות וזמן שהייה ארוך יותר (בעזרת תנועה ממוקדת),
                                כך הדירוג שלכם בתוצאות החיפוש עולה בצורה טבעית.
                            </p>
                        </div>
                        <div className="info-block">
                            <h3>💎 בונים אמינות ומותג</h3>
                            <p>
                                מספר כניסות גבוה משדר אמינות ופופולריות. זה חיוני כדי למשוך ספונסרים, שותפים עסקיים
                                ולקוחות שרואים שיש "תנועה" בעסק שלכם.
                            </p>
                        </div>
                        <div className="info-block">
                            <h3>📍 שליטה בשוק המקומי</h3>
                            <p>
                                אנחנו מדמים גלישה מישראל (או מכל יעד שתבחרו), מה שעוזר לכם להופיע ראשונים
                                בחיפושים מקומיים חשובים.
                            </p>
                        </div>
                    </div>
                    <div className="info-image-container">
                        <img src={seoSuccess} alt="תוצאה ראשונה בגוגל" className="info-image" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InfoSection;
