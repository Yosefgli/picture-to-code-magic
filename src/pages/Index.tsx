import DigitalClock from "@/components/DigitalClock";
import InfoPanel from "@/components/InfoPanel";

const prayerTimes = [
  { name: "שחרית", time: "06:30" },
  { name: "מנחה", time: "13:00" },
  { name: "ערבית", time: "19:30" },
];

const announcements = [
  "שיעור תורה - יום שלישי 20:00",
  "זמני לימוד - בוקר 09:00-11:00",
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 flex items-center justify-center">
      <div className="wooden-frame p-8 rounded-xl max-w-5xl w-full">
        <div className="bg-board-bg p-8 rounded-lg">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-board-panel mb-4 hebrew-text">
              בית הכנסת המרכזי
            </h1>
            <DigitalClock />
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <InfoPanel title="זמני תפילה">
              <ul className="space-y-2">
                {prayerTimes.map((prayer, index) => (
                  <li key={index} className="flex justify-between">
                    <span>{prayer.name}</span>
                    <span>{prayer.time}</span>
                  </li>
                ))}
              </ul>
            </InfoPanel>

            <InfoPanel title="שיעורים">
              <ul className="space-y-2">
                <li>דף יומי - 20:00</li>
                <li>הלכה יומית - 18:00</li>
              </ul>
            </InfoPanel>

            <InfoPanel title="הודעות">
              <ul className="space-y-2">
                {announcements.map((announcement, index) => (
                  <li key={index}>{announcement}</li>
                ))}
              </ul>
            </InfoPanel>

            <InfoPanel title="זמני היום">
              <ul className="space-y-2">
                <li>הנץ החמה - 06:15</li>
                <li>שקיעה - 17:45</li>
              </ul>
            </InfoPanel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;