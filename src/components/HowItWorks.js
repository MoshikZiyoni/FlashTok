import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
    const steps = [
        {
            num: "01",
            title: "בחירת חבילה",
            desc: "בחרו את החבילה המתאימה לצרכים שלכם - מבסיסית ועד VIP לעסקים גדולים."
        },
        {
            num: "02",
            title: "הגדרת יעדים",
            desc: "הזינו את כתובת האתר שלכם ואת מילות המפתח שברצונכם לקדם בגוגל."
        },
        {
            num: "03",
            title: "הפעלת המנוע",
            desc: "המערכת שלנו מתחילה להזרים תנועה איכותית וממוקדת לאתר שלכם לפי המילים שבחרתם."
        },
        {
            num: "04",
            title: "בדיקת תוצאות",
            desc: "היכנסו ל-Google Console או Clarity וראו איך התנועה משתקפת בזמן אמת."
        }
    ];

    return (
        <section className="how-it-works-section">
            <div className="container">
                <div className="section-header">
                    <h2>איך זה <span className="gradient-text">עובד?</span></h2>
                    <p>תהליך פשוט, מהיר ושקוף בדרך לפסגה.</p>
                </div>

                <div className="steps-grid">
                    {steps.map((step, index) => (
                        <div key={index} className="step-card">
                            <div className="step-number">{step.num}</div>
                            <h3>{step.title}</h3>
                            <p>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
