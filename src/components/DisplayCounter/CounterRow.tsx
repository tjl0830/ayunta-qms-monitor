// CounterRow.tsx
import React from 'react';
import styles from './DisplayCounter.module.css'; // Import the CSS Module

interface CounterRowProps {
  counterNumber: number;
  servingStatus: string;
  upNextStatus: string;
}

const CounterRow: React.FC<CounterRowProps> = ({ counterNumber, servingStatus, upNextStatus }) => {
  return (
    <tr className={styles.Row}>
      <td className={styles.Counter}>{counterNumber}</td>
      <td className={styles.Serving}>{servingStatus}</td>
      <td className={styles.UpNext}>{upNextStatus}</td>
    </tr>
  );
};

export default CounterRow;
