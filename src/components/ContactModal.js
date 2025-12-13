import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './ContactModal.css';

const ContactModal = ({ isOpen, onClose, selectedPackage }) => {
    // Replace 'YOUR_FORM_ID' with your actual Formspree form ID
    const [state, handleSubmit] = useForm("movjoegb");

    if (!isOpen) return null;

    if (state.succeeded) {
        return (
            <div className="modal-overlay">
                <div className="modal-content success">
                    <button className="close-btn" onClick={onClose}>×</button>
                    <div className="success-icon">✓</div>
                    <h2>תודה רבה!</h2>
                    <p>פנייתך התקבלה בהצלחה. נחזור אליך בהקדם האפשרי.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="modal-overlay" onClick={(e) => e.target.className === 'modal-overlay' && onClose()}>
            <div className="modal-content">
                <button className="close-btn" onClick={onClose}>×</button>

                <div className="modal-header">
                    <h2>התחילו לצמוח עם <span className="gradient-text">RankUp</span></h2>
                    <p>מלאו את הפרטים ונחזור אליכם עם הצעה מותאמת אישית.</p>
                </div>

                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">שם מלא</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            required
                            placeholder="ישראל ישראלי"
                        />
                        <ValidationError prefix="Name" field="name" errors={state.errors} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">אימייל</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            required
                            placeholder="your@email.com"
                        />
                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="website">כתובת האתר לקידום</label>
                        <input
                            id="website"
                            type="url"
                            name="website"
                            required
                            placeholder="https://www.yoursite.com"
                        />
                        <ValidationError prefix="Website" field="website" errors={state.errors} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="package">חבילה רצויה (אופציונלי)</label>
                        <select id="package" name="package" defaultValue={selectedPackage || ""}>
                            <option value="" disabled>בחר חבילה</option>
                            <option value="Starter">מתחיל (₪199)</option>
                            <option value="Pro">מקצוען (₪399)</option>
                            <option value="VIP">VIP (₪650)</option>
                            <option value="Custom">מותאם אישית</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">הערות נוספות</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="3"
                        />
                        <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </div>

                    <button type="submit" className="btn-primary submit-btn" disabled={state.submitting}>
                        {state.submitting ? 'שולח...' : 'שלח פרטים'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactModal;
