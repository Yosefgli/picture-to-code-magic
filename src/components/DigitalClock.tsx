import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());
  const { isHebrew, isAnimating } = useLanguage();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`text-4xl font-bold text-board-panel transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
      {time.toLocaleTimeString(isHebrew ? 'he-IL' : 'ru-RU')}
    </div>
  );
};

export default DigitalClock;