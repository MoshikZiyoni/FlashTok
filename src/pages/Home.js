import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../components/Hero';
import GraphSection from '../components/GraphSection';
import InfoSection from '../components/InfoSection';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';

const Home = ({ onOpenModal }) => {
    return (
        <>
            <Helmet>
                <title>RankUp - קידום אורגני אמיתי ושיפור דירוג בגוגל</title>
                <meta name="description" content="הגדל את התנועה לאתר שלך עם משתמשים אמיתיים. שירותי קידום אורגני לשיפור הדירוג בגוגל, חיזוק המותג והגדלת המכירות." />
            </Helmet>

            <div id="hero">
                <Hero onOpenModal={() => onOpenModal()} />
            </div>

            <div id="tiktok-section">
                <GraphSection />
                <InfoSection />
                <HowItWorks />
            </div>

            <div className="section-divider"></div>

            <div id="testimonials">
                <Testimonials />
            </div>

            <div id="pricing">
                <Pricing onOpenModal={onOpenModal} />
            </div>

            <FAQ />
        </>
    );
};

export default Home;
