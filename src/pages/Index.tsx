import DigitalClock from "@/components/DigitalClock";
import InfoPanel from "@/components/InfoPanel";
import HebrewDateDisplay from "@/components/HebrewDateDisplay";
import DailyQuote from "@/components/DailyQuote";
import DailySponsor from "@/components/DailySponsor";
import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";

const MainContent = () => {
  const { isHebrew, isAnimating } = useLanguage();

  const content = {
    header: {
      he: "בית חב\"ד המרכזי",
      ru: "Центральный Хабад"
    },
    prayerTimes: {
      title: { he: "זמני תפילה", ru: "Время молитв" },
      shacharit: { he: "שחרית", ru: "Шахарит" },
      mincha: { he: "מנחה", ru: "Минха" },
      arvit: { he: "ערבית", ru: "Аравит" }
    },
    shabbatTimes: {
      title: { he: "זמני כניסת שבת", ru: "Время Шаббата" },
      candles: { he: "הדלקת נרות", ru: "Зажигание свечей" },
      end: { he: "צאת השבת", ru: "Исход Шаббата" }
    },
    announcements: {
      title: { he: "הודעות", ru: "Объявления" },
      farbrengen: { 
        he: "התוועדות מיוחדת - מוצ\"ש 20:30",
        ru: "Особый фарбренген - Исход Шаббата 20:30"
      },
      shiur: {
        he: "שיעור חסידות - יום שלישי 19:00",
        ru: "Урок хасидута - Вторник 19:00"
      }
    }
  };

  return (
    <div className="min-h-screen bg-board-bg p-4 flex items-center justify-center">
      <div className="wooden-frame p-8 rounded-xl max-w-6xl w-full">
        <div className="bg-board-bg p-8 rounded-lg">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className={`text-5xl font-bold text-board-panel mb-4 transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
              {isHebrew ? content.header.he : content.header.ru}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <DigitalClock />
              <div className="text-center">
                <HebrewDateDisplay />
              </div>
              <DailySponsor />
            </div>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <InfoPanel title={content.prayerTimes.title}>
              <ul className="space-y-2 text-right">
                <li className="flex justify-between">
                  <span>{isHebrew ? content.prayerTimes.shacharit.he : content.prayerTimes.shacharit.ru}</span>
                  <span>07:00</span>
                </li>
                <li className="flex justify-between">
                  <span>{isHebrew ? content.prayerTimes.mincha.he : content.prayerTimes.mincha.ru}</span>
                  <span>13:30</span>
                </li>
                <li className="flex justify-between">
                  <span>{isHebrew ? content.prayerTimes.arvit.he : content.prayerTimes.arvit.ru}</span>
                  <span>19:30</span>
                </li>
              </ul>
            </InfoPanel>

            <InfoPanel title={content.shabbatTimes.title}>
              <ul className="space-y-2 text-right">
                <li className="flex justify-between">
                  <span>{isHebrew ? content.shabbatTimes.candles.he : content.shabbatTimes.candles.ru}</span>
                  <span>16:30</span>
                </li>
                <li className="flex justify-between">
                  <span>{isHebrew ? content.shabbatTimes.end.he : content.shabbatTimes.end.ru}</span>
                  <span>17:45</span>
                </li>
              </ul>
            </InfoPanel>

            <InfoPanel title={content.announcements.title}>
              <ul className="space-y-2 text-right">
                <li>{isHebrew ? content.announcements.farbrengen.he : content.announcements.farbrengen.ru}</li>
                <li>{isHebrew ? content.announcements.shiur.he : content.announcements.shiur.ru}</li>
              </ul>
            </InfoPanel>
          </div>

          {/* Bottom Section */}
          <div className="mt-6">
            <DailyQuote />
          </div>
        </div>
      </div>
    </div>
  );
};

const Index = () => (
  <LanguageProvider>
    <MainContent />
  </LanguageProvider>
);

export default Index;