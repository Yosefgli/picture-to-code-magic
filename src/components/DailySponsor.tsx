import { useLanguage } from '@/contexts/LanguageContext';

const DailySponsor = () => {
  const { isHebrew, isAnimating } = useLanguage();

  const content = {
    title: {
      he: "פרנס היום",
      ru: "Спонсор дня"
    },
    sponsor: {
      he: 'משפחת כהן לע"נ',
      ru: "Семья Коэн"
    }
  };

  return (
    <div className="text-board-panel text-right">
      <h3 className={`text-xl font-bold mb-2 transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
        {isHebrew ? content.title.he : content.title.ru}
      </h3>
      <p className={`transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
        {isHebrew ? content.sponsor.he : content.sponsor.ru}
      </p>
    </div>
  );
};

export default DailySponsor;