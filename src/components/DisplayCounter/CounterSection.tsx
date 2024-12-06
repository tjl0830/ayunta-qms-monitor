// CounterSection.tsx
import React from 'react';
import CounterRow from './CounterRow';
import styles from './DisplayCounter.module.css'; // Import the CSS Module

interface CounterSectionProps {
  startCounter: number;
  endCounter: number;
  excludedCounter?: number; // to exclude counter 13 in right section
}

const CounterSection: React.FC<CounterSectionProps> = ({ startCounter, endCounter, excludedCounter }) => {
  const counters = [];
  for (let i = startCounter; i <= endCounter; i++) {
    if (i === excludedCounter) continue; // Skip counter 13 if provided
    counters.push(i);
  }

  return (
    <div className={styles.CounterSection}>
      <table className={styles.Table}>
        <thead>
          <tr>
            <th className={styles.Header}>Counter</th>
            <th className={styles.Header}>Serving</th>
            <th className={styles.Header}>Up-Next</th>
          </tr>
        </thead>
        <tbody>
          {counters.map((counter) => (
            <CounterRow
              key={counter}
              counterNumber={counter}
              servingStatus="Serving Status" // Replace with dynamic data
              upNextStatus="Up Next Status" // Replace with dynamic data
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CounterSection;
