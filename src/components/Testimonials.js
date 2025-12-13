import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
    const reviews = [
        {
            name: "דניאל כהן",
            role: "בעלים של חנות איקומרס",
            content: "התנועה לאתר שלי פשוט זינקה. קיבלתי מיילים מספקים שרצו לעבוד איתי רק בזכות הטראפיק שהצגתי להם. מומלץ בחום!"
        },
        {
            name: "שרה לוי",
            role: "מקבלת אתרי תדמית",
            content: "הייתי סקפטית בהתחלה, אבל אחרי שבוע ראיתי שהדירוגים שלי בגוגל מתחילים לזוז. הבוטים האלה עושים עבודה מדהימה."
        },
        {
            name: "רועי מזרחי",
            role: "סטארטאפ בתחום הפינטק",
            content: "השירות הכי יעיל שמצאתי להגדלת נפח תנועה בצורה מהירה ובטוחה. התוצאות הגיעו הרבה יותר מהר ממה שציפיתי."
        }
    ];

    return (
        <section className="testimonials-section">
            <div className="container">
                <div className="section-header">
                    <h2>מה הלקוחות <span className="gradient-text">אומרים</span></h2>
                    <p>הצטרפו למאות עסקים שכבר צומחים איתנו.</p>
                </div>

                <div className="reviews-grid">
                    {reviews.map((review, index) => (
                        <div key={index} className="review-card">
                            <div className="stars">⭐⭐⭐⭐⭐</div>
                            <p className="review-content">"{review.content}"</p>
                            <div className="reviewer-info">
                                <h4>{review.name}</h4>
                                <span>{review.role}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
