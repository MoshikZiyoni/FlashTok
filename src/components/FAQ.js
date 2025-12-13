import React from 'react';
import './FAQ.css';

const FAQ = () => {
    const questions = [
        {
            q: "האם זה בטוח לשימוש עם גוגל אדסנס?",
            a: "כן, התנועה מדמה התנהגות אנושית לחלוטין ולכן בטוחה. עם זאת, תמיד מומלץ לנהוג באחריות."
        },
        {
            q: "איך אני יודע שזה עובד?",
            a: "פשוט מאוד! ניתן לראות את כל הנתונים והכניסות ישירות ב-Microsoft Clarity וב-Google Search Console."
        },
        {
            q: "תוך כמה זמן רואים תוצאות?",
            a: "התנועה מתחילה לזרום תוך פחות מ-24 שעות מרגע ההפעלה. השיפור בדירוגים בגוגל יכול לקחת מספר שבועות בהתאם לתחרות בתחום."
        },
        // {
        //     q: "האם אני מקבל חשבונית?",
        //     a: "כמובן. אנחנו עסק רשום וכל עסקה מלווה בחשבונית מס כחוק."
        // }
    ];

    return (
        <section className="faq-section">
            <div className="container">
                <div className="section-header">
                    <h2>שאלות <span className="gradient-text">נפוצות</span></h2>
                </div>

                <div className="faq-grid">
                    {questions.map((item, index) => (
                        <div key={index} className="faq-item">
                            <h3>{item.q}</h3>
                            <p>{item.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
