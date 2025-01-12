import { useLanguage } from '@/contexts/LanguageContext';

const DailyQuote = () => {
  const { isHebrew, isAnimating } = useLanguage();

  const content = {
    title: {
      he: "פתגם היום",
      ru: "Изречение дня"
    },
    quote: {
      he: "\"כל יהודי הוא יהלום, צריך רק ללטש אותו שיוכל להאיר\"",
      ru: "\"Каждый еврей - это бриллиант, нужно только отшлифовать его, чтобы он мог светить\""
    }
  };

  return (
    <div className="parchment-panel p-4 rounded-lg mt-4">
      <h3 className={`text-xl font-bold mb-2 text-right transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
        {isHebrew ? content.title.he : content.title.ru}
      </h3>
      <div className={`transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
        <p className="text-right text-xl" style={{ fontFamily: isHebrew ? 'David Libre' : 'Arial' }}>
          {isHebrew ? content.quote.he : content.quote.ru}
        </p>
      </div>
    </div>
  );
};

export default DailyQuote;