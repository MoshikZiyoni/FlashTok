import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm, ValidationError } from '@formspree/react';
// import logo from './flashtokimage.webp';
import logo from './android-chrome-192x192.png';
import Terms from './Terms';

// SEO Component
const SEOMetaTags = () => {
    return (
        <>
            {/* Meta tags are rendered as children but would need to be properly integrated in the real app */}
            <title>חבילות קידום טיקטוק | צפיות, לייקים, עוקבים ושיתופים | הגדלת חשיפה בטיקטוק</title>
            <meta name="description" content="חבילות פרסום בטיקטוק מקצועיות - הגדלת צפיות, לייקים, עוקבים ושיתופים. פתרונות קידום בטיקטוק לעסקים, אינפלואנסרים ויוצרי תוכן. עלייה במכירות והגדלת הנוכחות ברשת. בוטים לטיקטוק, הגדלת מעורבות ואינטראקציה." />
            <meta name="keywords" content="קידום טיקטוק, בוטים לטיקטוק, פרסום בטיקטוק, צפיות בטיקטוק, לייקים לטיקטוק, שיתופים טיקטוק, עוקבים טיקטוק, הגדלת חשיפה בטיקטוק, פרסום וירלי בטיקטוק, שיווק טיקטוק, קידום תוכן טיקטוק, קמפיין טיקטוק, אינפלואנסרים בטיקטוק, מעורבות בטיקטוק, אלגוריתם טיקטוק, FYP טיקטוק, מכירת עוקבים לטיקטוק, שירותי פרסום טיקטוק, הגדלת מכירות עם טיקטוק, קידום עסקים בטיקטוק, אינטראקציה בטיקטוק, טרנדים בטיקטוק" />
            <meta property="og:title" content="חבילות קידום טיקטוק מקצועיות | הגדלת צפיות, לייקים ועוקבים" />
            <meta property="og:description" content="חבילות פרסום וקידום בטיקטוק מותאמות אישית - הגדלת צפיות, לייקים, עוקבים ושיתופים. פתרונות מקצועיים להגדלת החשיפה וההשפעה שלך בטיקטוק." />
            <meta property="og:type" content="website" />
            <meta property="og:locale" content="he_IL" />
        </>
    );
};





const IconTrendingUp = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
        <polyline points="17 6 23 6 23 12"></polyline>
    </svg>
);

const IconCheck = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
);

const IconStar = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
);

const IconAward = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7"></circle>
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
    </svg>
);

const IconFire = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3s.58-1.5 1-2c.42.5 1 1 1 2s-.5 1.5-1 3a2.5 2.5 0 0 0 2.5 2.5c1.5 0 2.5-1 2.5-2.5 0-2-1.13-3-2-3.5.5-1 1.5-2 2.5-3m-7 0c-3-2.51-3.22-6-3-8 1 0 3 1 3 2 0 1-1 2-1 4s2 2.5 2 4-1.75 1.5-2 2.5z"></path>
    </svg>
);

const IconUsers = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
);

const TikTokPromotionPage = () => {
    const [hoveredPlan, setHoveredPlan] = useState(null);
    const [showScrollCTA, setShowScrollCTA] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
    const scrollToFooterForm = () => {
        document.getElementById('footerForm').scrollIntoView({ behavior: 'smooth' });
    };
    const ContactForm = () => {
        const [state, handleSubmit] = useForm("movjoegb");

        return (
            <form id="footerForm" onClick={scrollToFooterForm} onSubmit={handleSubmit} style={styles.contactForm}>
                <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="שם מלא"
                    style={styles.formInput}
                />
                <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                    style={styles.errorText}
                />

                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="אימייל"
                    style={styles.formInput}
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    style={styles.errorText}
                />

                <textarea
                    id="message"
                    name="message"
                    placeholder="אני מעוניין/ת ב..."
                    style={{ ...styles.formInput, height: '100px' }}
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    style={styles.errorText}
                />

                <button
                    type="submit"
                    disabled={state.submitting}
                    style={styles.submitButton}
                >
                    {state.submitting ? 'שולח...' : 'שלח הודעה'}
                </button>

                {state.succeeded && (
                    <p style={styles.successText}>תודה! ההודעה נשלחה בהצלחה</p>
                )}
            </form>
        );
    };

    // Add this form handler
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setError('');

        try {
            const response = await fetch('https://formspree.io/f/movjoegb', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    _replyto: formData.email,
                    _subject: `New message from ${formData.name} - Flash-Tok`,
                }),
            });

            if (response.ok) {
                setSuccess(true);
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setSuccess(false), 5000);
            } else {
                throw new Error('Failed to send message');
            }
        } catch (err) {
            setError('An error occurred while sending your message. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };
    // Track scroll position for scroll-based CTA
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollCTA(true);
            } else {
                setShowScrollCTA(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const plans = [
        {
            id: 'starter',
            name: 'Boost Starter',
            description: 'התחלה מושלמת להגדלת החשיפה בטיקטוק',
            price: '₪50',
            features: [
                '1,000 צפיות אורגניות לסרטון',
                '200 לייקים אמיתיים',
                '50 שיתופים להגעה ל-FYP',
                '30 שמירות במועדפים',
                'הגדלת סיכוי להופעה בעמוד הראשי'
            ],
            icon: <IconTrendingUp />,
            color: '#3B82F6' // blue-500
        },
        {
            id: 'influencer',
            name: 'Influencer Pack',
            description: 'לצמיחה משמעותית ובניית קהל עוקבים',
            price: '₪180',
            features: [
                '5,000 צפיות באיכות גבוהה',
                '800 לייקים מחשבונות אמיתיים',
                '200 שיתופים להגעה למשתמשים חדשים',
                '100 שמירות במועדפים',
                'מעקב וניתוח ביצועים',
                'תמיכה ב-3 סרטונים שונים'
            ],
            icon: <IconStar />,
            color: '#8B5CF6', // purple-500
            popular: true
        },
        {
            id: 'viral',
            name: 'Viral Pro',
            description: 'לתוצאות מקצועיות ופריצה ויראלית',
            price: '₪320',
            features: [
                '10,000 צפיות באיכות פרימיום',
                '1,500 לייקים אורגניים',
                '400 שיתופים אסטרטגיים',
                '200 שמירות במועדפים',
                'הגברת האינטראקציה והמעורבות',
                'ייעוץ לאופטימיזציה של תוכן',
                'תמיכה ב-5 סרטונים שונים'
            ],
            icon: <IconAward />,
            color: '#EC4899' // pink-500
        }
    ];

    // Enhanced benefits with more keywords
    const benefits = [
        {
            title: "תוצאות מהירות ואפקטיביות",
            description: "קבל אינטראקציות אמיתיות שיגדילו את החשיפה שלך בטיקטוק תוך 24-48 שעות בלבד",
            icon: <IconTrendingUp />,
            bgColor: '#DBEAFE',
            iconColor: '#3B82F6'
        },
        {
            title: "איכות גבוהה ובטוחה",
            description: "כל האינטראקציות נראות טבעיות, מחשבונות אמיתיים ועומדות בדרישות האלגוריתם של טיקטוק",
            icon: <IconCheck />,
            bgColor: '#F3E8FF',
            iconColor: '#8B5CF6'
        },
        {
            title: "שירות מקצועי ואישי",
            description: "צוות מומחים לשיווק בטיקטוק מלווה אותך בכל שלב להשגת התוצאות הטובות ביותר",
            icon: <IconStar />,
            bgColor: '#FCE7F3',
            iconColor: '#EC4899'
        },
        {
            title: "הופעה בדף הראשי (FYP)",
            description: "אסטרטגיות ממוקדות להגדלת הסיכוי להופיע בעמוד For You Page ולהגיע לקהלים חדשים",
            icon: <IconFire />,
            bgColor: '#FEF3C7',
            iconColor: '#F59E0B'
        }
    ];

    // Testimonials for social proof
    const testimonials = [
        {
            name: "רותם כהן",
            title: "יוצרת תוכן בטיקטוק",
            text: "הצלחתי להגיע מ-200 עוקבים ל-5000 תוך חודש וחצי! השירות מדהים והתוצאות מדברות בעד עצמן.",
        },
        {
            name: "חברת אופנה טרנדי",
            title: "מותג אופנה",
            text: "המכירות שלנו עלו ב-30% אחרי קמפיין הטיקטוק. ההשקעה החזירה את עצמה פי 5!",
        },
        {
            name: "יוסי אברהם",
            title: "בעל עסק קטן",
            text: "הגעתי ללקוחות חדשים בזכות החבילה שרכשתי. האלגוריתם התחיל להציג את הסרטונים שלי לקהל רחב יותר.",
        }
    ];

    // FAQ for SEO boost
    const faq = [
        {
            question: "כמה זמן לוקח לראות תוצאות אחרי קניית חבילת קידום?",
            answer: "אתה תתחיל לראות תוצאות תוך 24-48 שעות מרגע ההפעלה. האינטראקציות מתווספות בצורה הדרגתית ואורגנית כדי לשמור על חשבון בטוח ותקין."
        },
        {
            question: "האם השירות בטוח לחשבון הטיקטוק שלי?",
            answer: "כן, אנחנו משתמשים רק בשיטות בטוחות ועובדים עם משתמשים אמיתיים. כל האינטראקציות הן אורגניות ומותאמות לדרישות של טיקטוק ללא סיכון לחשבון שלך."
        },
        {
            question: "איך אוכל להגדיל את הסיכוי להופיע ב-FYP (For You Page)?",
            answer: "חבילות הקידום שלנו מגדילות באופן משמעותי את הסיכוי להופיע ב-FYP דרך הגדלת האינטראקציות. האלגוריתם של טיקטוק מעדיף תוכן עם מעורבות גבוהה, וזה בדיוק מה שאנחנו מספקים."
        },
        {
            question: "האם השירות מתאים גם לעסקים וגם ליוצרי תוכן?",
            answer: "בהחלט! יש לנו פתרונות מותאמים אישית לכל סוג לקוח - החל מיוצרי תוכן עצמאיים, דרך אינפלואנסרים ועד לעסקים בכל גודל המעוניינים להגדיל את הנוכחות שלהם בטיקטוק."
        }
    ];

    // Define Inline CSS styles
    const styles = {
        container: {
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 16px',
        },
        hero: {
            background: 'linear-gradient(to right, #2563EB, #EC4899)',
            color: 'white',
            padding: '64px 0',
            textAlign: 'center',
        },
        heroContent: {
            maxWidth: '768px',
            margin: '0 auto',
            textAlign: 'center',
        },
        heroTitle: {
            fontSize: '36px',
            fontWeight: 'bold',
            marginBottom: '16px',
        },
        heroSubtitle: {
            fontSize: '20px',
            marginBottom: '32px',
        },
        heroButton: {
            backgroundColor: 'white',
            color: '#2563EB',
            fontWeight: 'bold',
            padding: '12px 32px',
            borderRadius: '9999px',
            border: 'none',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
        },
        sectionTitle: {
            fontSize: '30px',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '48px',
        },
        benefitsSection: {
            backgroundColor: 'white',
            padding: '64px 0',
        },
        benefitsGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px',
        },
        benefitCard: {
            backgroundColor: '#f9fafb',
            padding: '32px',
            borderRadius: '8px',
            textAlign: 'center',
        },
        benefitIcon: {
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px',
        },
        benefitTitle: {
            fontSize: '20px',
            fontWeight: 'bold',
            marginBottom: '8px',
        },
        benefitText: {
            color: '#4B5563',
        },
        pricingSection: {
            backgroundColor: '#f9fafb',
            padding: '64px 0',
        },
        pricingGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px',
            maxWidth: '1024px',
            margin: '0 auto',
        },
        pricingCard: {
            backgroundColor: 'white',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s',
        },
        popularBadge: {
            backgroundColor: '#EAB308',
            color: 'white',
            textAlign: 'center',
            padding: '4px 0',
            fontWeight: 'bold',
        },
        pricingHeader: {
            padding: '24px',
            color: 'white',
            textAlign: 'center',
        },
        pricingIcon: {
            marginBottom: '16px',
        },
        pricingTitle: {
            fontSize: '24px',
            fontWeight: 'bold',
            marginBottom: '4px',
        },
        pricingDesc: {
            opacity: '0.8',
        },
        pricingContent: {
            padding: '24px',
        },
        pricingPriceLabel: {
            color: '#9CA3AF',
            marginBottom: '4px',
            textAlign: 'center',
        },
        pricingPrice: {
            fontSize: '36px',
            fontWeight: 'bold',
            marginBottom: '24px',
            textAlign: 'center',
        },
        featureItem: {
            display: 'flex',
            alignItems: 'center',
            marginBottom: '12px',
            gap: '8px',
        },
        featureIcon: {
            color: '#10B981',
            flexShrink: 0,
        },
        pricingButton: {
            width: '100%',
            padding: '12px',
            borderRadius: '8px',
            fontWeight: 'bold',
            marginTop: '32px',
            border: 'none',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
        },
        testimonialsSection: {
            backgroundColor: 'white',
            padding: '64px 0',
        },
        testimonialsGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px',
            maxWidth: '1024px',
            margin: '0 auto',
        },
        testimonialCard: {
            backgroundColor: '#f9fafb',
            padding: '32px',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
        },
        testimonialText: {
            fontSize: '16px',
            lineHeight: '1.6',
            marginBottom: '16px',
            fontStyle: 'italic',
        },
        testimonialAuthor: {
            fontWeight: 'bold',
        },
        testimonialTitle: {
            color: '#6B7280',
            fontSize: '14px',
        },
        faqSection: {
            backgroundColor: '#f9fafb',
            padding: '64px 0',
        },
        faqContainer: {
            maxWidth: '768px',
            margin: '0 auto',
        },
        faqItem: {
            borderBottom: '1px solid #E5E7EB',
            padding: '24px 0',
        },
        faqQuestion: {
            fontSize: '18px',
            fontWeight: 'bold',
            marginBottom: '8px',
        },
        faqAnswer: {
            color: '#4B5563',
            lineHeight: '1.6',
        },
        statsSection: {
            backgroundColor: 'white',
            padding: '64px 0',
        },
        statsGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '32px',
            maxWidth: '1024px',
            margin: '0 auto',
            textAlign: 'center',
        },
        statValue: {
            fontSize: '36px',
            fontWeight: 'bold',
            color: '#3B82F6',
            marginBottom: '8px',
        },
        statLabel: {
            color: '#4B5563',
        },
        ctaSection: {
            backgroundColor: '#111827',
            color: 'white',
            padding: '64px 0',
            textAlign: 'center',
        },
        ctaTitle: {
            fontSize: '30px',
            fontWeight: 'bold',
            marginBottom: '16px',
        },
        ctaText: {
            fontSize: '20px',
            marginBottom: '32px',
            maxWidth: '768px',
            margin: '0 auto 32px',
        },
        ctaButtons: {
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap',
        },
        ctaPrimaryButton: {
            backgroundColor: 'white',
            color: '#111827',
            fontWeight: 'bold',
            padding: '12px 32px',
            borderRadius: '9999px',
            border: 'none',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
        },
        ctaSecondaryButton: {
            backgroundColor: 'transparent',
            color: 'white',
            fontWeight: 'bold',
            padding: '12px 32px',
            borderRadius: '9999px',
            border: '2px solid white',
            cursor: 'pointer',
            transition: 'all 0.3s',
        },
        footer: {
            backgroundColor: '#1F2937',
            color: 'white',
            padding: '32px 0',
        },
        footerGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '48px',
        },
        footerTitle: {
            fontSize: '18px',
            fontWeight: 'bold',
            marginBottom: '16px',
        },
        footerLinks: {
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
        },
        footerLink: {
            color: '#D1D5DB',
            textDecoration: 'none',
        },
        footerBottom: {
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            marginTop: '32px',
            paddingTop: '32px',
            textAlign: 'center',
        },
        scrollCTA: {
            position: 'fixed',
            bottom: '20px',
            left: '20px',
            backgroundColor: '#3B82F6',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '9999px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer',
            zIndex: 100,
            transition: 'all 0.3s',
            opacity: showScrollCTA ? 1 : 0,
            visibility: showScrollCTA ? 'visible' : 'hidden',
            '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
            },

        },
        rtl: {
            direction: 'rtl',
            textAlign: 'right',
        },
        keywords: {
            position: 'absolute',
            width: '1px',
            height: '1px',
            padding: '0',
            margin: '-1px',
            overflow: 'hidden',
            clip: 'rect(0, 0, 0, 0)',
            whiteSpace: 'nowrap',
            borderWidth: '0',
        },
        contactForm: {
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            maxWidth: '400px',
        },
        formInput: {
            padding: '12px',
            borderRadius: '8px',
            border: '1px solid #D1D5DB',
            backgroundColor: '#F9FAFB',
            fontSize: '16px',
            direction: 'rtl',
            textAlign: 'right',
        },
        submitButton: {
            backgroundColor: '#3B82F6',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'background-color 0.3s',
            ':disabled': {
                backgroundColor: '#93C5FD',
                cursor: 'not-allowed',
            },
        },
        errorText: {
            color: '#EF4444',
            marginTop: '8px',
            textAlign: 'right',
            fontSize: '14px',
        },
        successText: {
            color: '#10B981',
            marginTop: '8px',
            textAlign: 'right',
            fontSize: '14px',
        },
        logoContainer: {
            marginBottom: '32px',
            display: 'flex',
            justifyContent: 'center',
        },
        logo: {
            width: '150px',
            height: '150px',
            borderRadius: '20px',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
            border: '3px solid white',
        },
    };
    return (
        <div style={{ ...styles.rtl, minHeight: '100vh', backgroundColor: '#f3f4f6' }}>
            {/* Hidden keywords for SEO */}
            <div style={styles.keywords}>
                קידום טיקטוק, בוטים לטיקטוק, פרסום בטיקטוק, צפיות בטיקטוק, לייקים לטיקטוק, שיתופים טיקטוק, עוקבים טיקטוק,
                הגדלת חשיפה בטיקטוק, פרסום וירלי בטיקטוק, שיווק טיקטוק, קידום תוכן טיקטוק, קמפיין טיקטוק, אינפלואנסרים בטיקטוק,
                מעורבות בטיקטוק, אלגוריתם טיקטוק, FYP טיקטוק, מכירת עוקבים לטיקטוק, שירותי פרסום טיקטוק, הגדלת מכירות עם טיקטוק,
                קידום עסקים בטיקטוק, אינטראקציה בטיקטוק, טרנדים בטיקטוק, איך להצליח בטיקטוק, פרסום אורגני בטיקטוק,
                להגיע לדף ראשי טיקטוק, לקנות צפיות טיקטוק, תגובות לטיקטוק, לייקים אמיתיים לטיקטוק, להיות ויראלי בטיקטוק,
                סטטיסטיקות טיקטוק, ניהול חשבון טיקטוק, פתרונות קידום טיקטוק, השפעה בטיקטוק, יוצרי תוכן טיקטוק
            </div>

            {/* Fixed CTA Button */}
            {showScrollCTA && (
                <div style={styles.scrollCTA} onClick={() => document.getElementById('footerForm').scrollIntoView({ behavior: 'smooth' })}>
                    <span>קבל חבילת קידום עכשיו!</span>
                </div>
            )}
            {/* Hero Section */}
            <div style={styles.hero}>
                <div style={styles.container}>
                    <div style={styles.heroContent}>
                        <div style={styles.logoContainer}>
                            <img src={logo} alt="TikTok Promotion Logo" style={styles.logo} />
                        </div>
                        <h1 style={styles.heroTitle}>הגדל את הנוכחות שלך בטיקטוק</h1>
                        <p style={styles.heroSubtitle}>חבילות פרסום מותאמות אישית להגדלת החשיפה והאינטראקציה</p>
                        <button style={styles.heroButton}>
                            <p onClick={scrollToFooterForm}>יצירת קשר</p>
                        </button>
                    </div>
                </div>
            </div>

            {/* Benefits Section */}
            <div style={styles.benefitsSection}>
                <div style={styles.container}>
                    <h2 style={styles.sectionTitle}>למה לבחור בשירות שלנו?</h2>
                    <div style={styles.benefitsGrid}>
                        <div style={styles.benefitCard}>
                            <div style={{ ...styles.benefitIcon, backgroundColor: '#DBEAFE', color: '#3B82F6' }}>
                                <IconTrendingUp />
                            </div>
                            <h3 style={styles.benefitTitle}>תוצאות מהירות</h3>
                            <p style={styles.benefitText}>קבל אינטראקציות ממשיות שיגדילו את החשיפה שלך בזמן קצר</p>
                        </div>
                        <div style={styles.benefitCard}>
                            <div style={{ ...styles.benefitIcon, backgroundColor: '#F3E8FF', color: '#8B5CF6' }}>
                                <IconCheck />
                            </div>
                            <h3 style={styles.benefitTitle}>איכות גבוהה</h3>
                            <p style={styles.benefitText}>כל האינטראקציות נראות טבעיות ועומדות בסטנדרטים של טיקטוק</p>
                        </div>
                        <div style={styles.benefitCard}>
                            <div style={{ ...styles.benefitIcon, backgroundColor: '#FCE7F3', color: '#EC4899' }}>
                                <IconStar />
                            </div>
                            <h3 style={styles.benefitTitle}>שירות מקצועי</h3>
                            <p style={styles.benefitText}>צוות מומחים שמלווה אותך בכל שלב להשגת התוצאות הטובות ביותר</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pricing Section */}
            <div style={styles.pricingSection}>
                <div style={styles.container}>
                    <h2 style={styles.sectionTitle}>חבילות הפרסום שלנו</h2>
                    <div style={styles.pricingGrid}>
                        {plans.map((plan) => (
                            <div
                                key={plan.id}
                                style={{
                                    ...styles.pricingCard,
                                    transform: hoveredPlan === plan.id ? 'scale(1.05)' : 'scale(1)'
                                }}
                                onMouseEnter={() => setHoveredPlan(plan.id)}
                                onMouseLeave={() => setHoveredPlan(null)}
                            >
                                {plan.popular && (
                                    <div style={styles.popularBadge}>
                                        הנבחרת ביותר
                                    </div>
                                )}
                                <div style={{ ...styles.pricingHeader, backgroundColor: plan.color }}>
                                    <div style={styles.pricingIcon}>
                                        {React.cloneElement(plan.icon, { style: { color: 'white', width: '32px', height: '32px' } })}
                                    </div>
                                    <h3 style={styles.pricingTitle}>{plan.name}</h3>
                                    <p style={styles.pricingDesc}>{plan.description}</p>
                                </div>
                                <div style={styles.pricingContent}>
                                    <div>
                                        <p style={styles.pricingPriceLabel}>מחיר</p>
                                        <p style={styles.pricingPrice}>{plan.price}</p>
                                    </div>
                                    <div>
                                        {plan.features.map((feature, index) => (
                                            <div key={index} style={styles.featureItem}>
                                                <span style={styles.featureIcon}>
                                                    <IconCheck />
                                                </span>
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <button style={{
                                        ...styles.pricingButton,
                                        backgroundColor: plan.popular ? '#EAB308' : '#F3F4F6',
                                        color: plan.popular ? 'white' : '#1F2937',
                                    }}
                                        onClick={scrollToFooterForm}>
                                        בחר עכשיו
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div style={styles.ctaSection}>
                <div style={styles.container}>
                    <h2 style={styles.ctaTitle}>מוכן להגדיל את הנוכחות שלך בטיקטוק?</h2>
                    <p style={styles.ctaText}>צור איתנו קשר עוד היום וקבל ייעוץ אישי חינם על איך להגדיל את החשבון שלך</p>
                    <div style={styles.ctaButtons}>
                        <button style={styles.ctaPrimaryButton}>
                            <p onClick={scrollToFooterForm}>יצירת קשר</p>
                        </button>
                        <button style={styles.ctaSecondaryButton}>
                            למידע נוסף
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer style={styles.footer}>
                <div style={styles.container}>
                    <div style={styles.footerGrid}>
                        {/* Contact Form Section */}
                        <div>
                            <h3 style={styles.footerTitle}>צור קשר</h3>
                            <ContactForm />
                        </div>

                        {/* Existing footer content */}
                        <div>
                            <h3 style={styles.footerTitle}>מידע נוסף</h3>
                            <div style={styles.footerLinks}>
                            <Link to="/terms" style={styles.footerLink}>תנאי שימוש</Link>
                            <Link to="/privacy" style={styles.footerLink}>מדיניות פרטיות</Link>
                                <a href="#" style={styles.footerLink}>שאלות נפוצות</a>
                            </div>
                        </div>
                    </div>

                    <div style={styles.footerBottom}>
                        <p style={{ marginBottom: '8px' }}>© 2025 כל הזכויות שמורות - שירותי קידום פלאש-טוק</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default TikTokPromotionPage;