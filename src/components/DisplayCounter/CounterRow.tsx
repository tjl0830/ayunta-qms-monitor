import React from 'react';
import counterRowStyles from './DisplayCounter.module.css'; // Import the CSS Module for Row

interface CounterRowProps {
  counterNumber: number;
  servingStatus: string;
  upNextStatus: string;
  servingBoxClass: string; // Accept the serving box class as a prop
}

const CounterRow: React.FC<CounterRowProps> = ({ counterNumber, servingStatus, upNextStatus, servingBoxClass }) => {
  return (
    <tr className={counterRowStyles.Row}>
      <td className={counterRowStyles.Counter}>{counterNumber}</td>
      <td className={`${counterRowStyles.Serving} ${servingBoxClass}`}>{servingStatus}</td> {/* Apply the dynamic class directly to <td> */}
      <td className={counterRowStyles.UpNext}>{upNextStatus}</td>
    </tr>
  );
};

export default CounterRow;
