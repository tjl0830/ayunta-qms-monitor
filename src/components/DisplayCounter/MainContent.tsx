// MainContent.tsx
import React from 'react';
import CounterSection from './CounterSection';
import styles from './DisplayCounter.module.css'; // Import the CSS Module

const MainContent: React.FC = () => {
  return (
    <div className={styles.MainContent}>
      <div className={styles.LeftSection}>
        <CounterSection startCounter={1} endCounter={8} />
      </div>
      <div className={styles.RightSection}>
        <CounterSection startCounter={9} endCounter={16} excludedCounter={13} />
      </div>
    </div>
  );
};

export default MainContent;
