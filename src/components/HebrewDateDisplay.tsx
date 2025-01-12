import { useLanguage } from '@/contexts/LanguageContext';

const HebrewDateDisplay = () => {
  const { isHebrew, isAnimating } = useLanguage();

  const content = {
    parasha: {
      he: "פרשת משפטים",
      ru: "Недельная глава Мишпатим"
    },
    holiday: {
      he: "חג קרוב: פורים - י\"ד אדר",
      ru: "Ближайший праздник: Пурим - 14 Адара"
    }
  };

  return (
    <div className={`text-board-panel text-center space-y-2 transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
      <div className="text-xl">{isHebrew ? "כ\"ה שבט תשפ\"ד" : "25 Швата 5784"}</div>
      <div className="text-lg">February 4, 2024</div>
      <div className="text-lg">{isHebrew ? content.parasha.he : content.parasha.ru}</div>
      <div className="text-lg mt-2">
        {isHebrew ? content.holiday.he : content.holiday.ru}
      </div>
    </div>
  );
};

export default HebrewDateDisplay;