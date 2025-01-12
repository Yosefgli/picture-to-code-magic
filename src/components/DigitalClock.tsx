import { useState, useEffect } from 'react';

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-4xl font-bold text-board-panel hebrew-text">
      {time.toLocaleTimeString('he-IL')}
    </div>
  );
};

export default DigitalClock;