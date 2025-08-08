import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <motion.div 
        key={interval}
        className="bg-black/50 rounded-lg px-3 py-2 mx-1"
        animate={{ 
          scale: [1, 1.05, 1],
          boxShadow: [
            "0 0 0 rgba(239, 68, 68, 0)",
            "0 0 20px rgba(239, 68, 68, 0.5)",
            "0 0 0 rgba(239, 68, 68, 0)"
          ]
        }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        <span className="text-2xl font-bold text-red-400">
          {timeLeft[interval].toString().padStart(2, '0')}
        </span>
        <div className="text-xs text-red-300 uppercase">{interval}</div>
      </motion.div>
    );
  });

  return (
    <div className="flex items-center justify-center mt-2">
      {timerComponents.length ? timerComponents : <span className="text-red-400">Sale Ended!</span>}
    </div>
  );
};

export default CountdownTimer;