import { useState, useEffect } from 'react';

const DailyQuote = () => {
  const [isHebrew, setIsHebrew] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setIsHebrew(prev => !prev);
        setIsAnimating(false);
      }, 500); // Wait for fade out before switching
    }, 5000); // Switch every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="parchment-panel p-4 rounded-lg mt-4">
      <h3 className="text-xl font-bold mb-2 hebrew-text text-right">פתגם היום</h3>
      <div className={`transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
        {isHebrew ? (
          <p className="hebrew-text text-right text-xl">
            "כל יהודי הוא יהלום, צריך רק ללטש אותו שיוכל להאיר"
          </p>
        ) : (
          <p className="text-right text-xl" style={{ fontFamily: 'Arial' }}>
            "Каждый еврей - это бриллиант, нужно только отшлифовать его, чтобы он мог светить"
          </p>
        )}
      </div>
    </div>
  );
};

export default DailyQuote;