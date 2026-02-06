import React from 'react';
import { Helmet } from 'react-helmet';
import FacebookMonitor from '../components/FacebookMonitor';

const FacebookMonitorPage = ({ onOpenModal }) => {
    return (
        <>
            <Helmet>
                <title>Facebook Monitor - סורק לידים אוטומטי מקבוצות פייסבוק</title>
                <meta name="description" content="התוסף הטוב ביותר למציאת לידים בפייסבוק. סריקה 24/7 של קבוצות, זיהוי מילות מפתח והתראות בזמן אמת. נסה עכשיו." />
            </Helmet>

            <div style={{ paddingTop: '80px', minHeight: '100vh' }}>
                <FacebookMonitor onOpenModal={onOpenModal} />
            </div>
        </>
    );
};

export default FacebookMonitorPage;
