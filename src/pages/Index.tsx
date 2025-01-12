import DigitalClock from "@/components/DigitalClock";
import InfoPanel from "@/components/InfoPanel";
import HebrewDateDisplay from "@/components/HebrewDateDisplay";
import DailyQuote from "@/components/DailyQuote";
import DailySponsor from "@/components/DailySponsor";

const Index = () => {
  return (
    <div className="min-h-screen bg-board-bg p-4 flex items-center justify-center">
      <div className="wooden-frame p-8 rounded-xl max-w-6xl w-full">
        <div className="bg-board-bg p-8 rounded-lg">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-board-panel mb-4 hebrew-text">
              בית חב"ד המרכזי
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
            <InfoPanel title="זמני תפילה">
              <ul className="space-y-2 text-right">
                <li className="flex justify-between">
                  <span>שחרית</span>
                  <span>07:00</span>
                </li>
                <li className="flex justify-between">
                  <span>מנחה</span>
                  <span>13:30</span>
                </li>
                <li className="flex justify-between">
                  <span>ערבית</span>
                  <span>19:30</span>
                </li>
              </ul>
            </InfoPanel>

            <InfoPanel title="זמני כניסת שבת">
              <ul className="space-y-2 text-right">
                <li className="flex justify-between">
                  <span>הדלקת נרות</span>
                  <span>16:30</span>
                </li>
                <li className="flex justify-between">
                  <span>צאת השבת</span>
                  <span>17:45</span>
                </li>
              </ul>
            </InfoPanel>

            <InfoPanel title="הודעות">
              <ul className="space-y-2 text-right">
                <li>התוועדות מיוחדת - מוצ"ש 20:30</li>
                <li>שיעור חסידות - יום שלישי 19:00</li>
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

export default Index;