import React, { useEffect, useState } from 'react';
import CounterRow from './CounterRow';
import styles from './DisplayCounter.module.css'; // Import the CSS Module

import { database } from "../../Firebase/Firebase"; // Update path as necessary
import { ref, onValue } from "firebase/database"; // Import necessary Firebase methods

interface CounterSectionProps {
  startCounter: number;
  endCounter: number;
  excludedCounter?: number; // to exclude counter 13 in right section
}

// Define the structure of the queue item
interface QueueItem {
  queueNumber: string;
}

interface QueueData {
  currentQueue: string;
  nextQueue: string;
}

const CounterSection: React.FC<CounterSectionProps> = ({ startCounter, endCounter, excludedCounter }) => {
  const [queueData, setQueueData] = useState<Record<number, QueueData>>({});

  useEffect(() => {
    // Monitor all counters, excluding Counter 13
    const countersToMonitor = Array.from({ length: endCounter - startCounter + 1 }, (_, i) => startCounter + i)
      .filter(num => num !== excludedCounter);

    countersToMonitor.forEach((counterNumber) => {
      const queueRef = ref(database, `counters/${counterNumber}/queue`);

      onValue(queueRef, (snapshot) => {
        const queueItems = snapshot.val() ? Object.values(snapshot.val()) as QueueItem[] : [];

        const currentQueue = queueItems[0]?.queueNumber || 'N/A';
        const nextQueue = queueItems.length > 1 ? queueItems[1]?.queueNumber : '';

        // Update the state with current and next queue data for the current counter
        setQueueData(prevState => ({
          ...prevState,
          [counterNumber]: { currentQueue, nextQueue },
        }));
      });
    });
  }, [startCounter, endCounter, excludedCounter]);

  // Generate the counters to display based on the range
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
          {counters.map((counter) => {
            const { currentQueue, nextQueue } = queueData[counter] || { currentQueue: 'N/A', nextQueue: 'N/A' };

            // Determine the class for the serving box based on currentQueue
            const servingBoxClass = currentQueue !== 'N/A' ? styles.ServingBox : styles.NotServingBox;

            return (
              <CounterRow
                key={counter}
                counterNumber={counter}
                servingStatus={currentQueue}
                upNextStatus={nextQueue}
                servingBoxClass={servingBoxClass} // Pass the class to CounterRow
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CounterSection;
