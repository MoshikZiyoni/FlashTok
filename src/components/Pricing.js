import React from 'react';
import './Pricing.css';

const Pricing = ({ onOpenModal }) => {
    const plans = [
        {
            name: "מתחיל",
            price: "199",
            features: ["1,200 מבקרים אמיתיים בחודש", "קידום 2 ביטויי מפתח", "תנועה שנראית ב-Google Console", "תמיכה במייל"],
            recommended: false
        },
        {
            name: "מקצוען",
            price: "399",
            features: ["2,500 מבקרים אמיתיים בחודש", "קידום 5 ביטויי מפתח", "ניווט מתקדם באתר", "אימות ב-Microsoft Clarity", "תמיכה מועדפת (VIP)"],
            recommended: true
        },
        {
            name: "VIP",
            price: "650",
            features: ["4,000 מבקרים אמיתיים בחודש", "קידום 10 ביטויי מפתח", "התנהגות משתמש טבעית לחלוטין", "מנהל תיק אישי", "דוחות אימות מלאים"],
            recommended: false
        }
    ];

    return (
        <section className="pricing-section">
            <div className="container">
                <div className="pricing-header">
                    <h2>חבילות <span className="gradient-text">תנועה לאתר</span></h2>
                    <p>מסלולים גמישים לקידום אורגני אמיתי.</p>
                </div>

                <div className="pricing-grid">
                    {plans.map((plan, index) => (
                        <div key={index} className={`pricing-card ${plan.recommended ? 'recommended' : ''}`}>
                            {plan.recommended && <div className="badge">הכי משתלם</div>}
                            <h3>{plan.name}</h3>
                            <div className="price">
                                <span className="currency">₪</span>
                                {plan.price}
                                <span className="period">/לחודש</span>
                            </div>
                            <ul className="features">
                                {plan.features.map((feature, i) => (
                                    <li key={i}>{feature}</li>
                                ))}
                            </ul>
                            <button
                                className={`btn-primary ${plan.recommended ? '' : 'btn-outline'}`}
                                onClick={() => onOpenModal && onOpenModal(plan.name)}
                            >
                                התחל עכשיו
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
