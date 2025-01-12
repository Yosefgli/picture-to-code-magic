import { useState, useEffect } from 'react';
import { getHebrewDate, getParasha, getUpcomingHoliday } from '@/utils/hebrewDate';

const HebrewDateDisplay = () => {
  const [hebrewDate, setHebrewDate] = useState('');
  const [parasha, setParasha] = useState('');
  const [holiday, setHoliday] = useState<{ name: string; date: string } | null>(null);

  useEffect(() => {
    setHebrewDate(getHebrewDate());
    setParasha(getParasha());
    setHoliday(getUpcomingHoliday());
  }, []);

  return (
    <div className="text-right space-y-2">
      <div className="text-xl">{hebrewDate}</div>
      <div className="text-lg">פרשת השבוע: {parasha}</div>
      {holiday && (
        <div className="text-lg">
          חג קרוב: {holiday.name} - {holiday.date}
        </div>
      )}
    </div>
  );
};

export default HebrewDateDisplay;