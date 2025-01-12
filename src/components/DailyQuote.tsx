const DailyQuote = () => {
  return (
    <div className="parchment-panel p-4 rounded-lg mt-4">
      <h3 className="text-xl font-bold mb-2 hebrew-text text-right">פתגם היום</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <p className="hebrew-text text-right">
          "כל יהודי הוא יהלום, צריך רק ללטש אותו שיוכל להאיר"
        </p>
        <p className="text-right" style={{ fontFamily: 'Arial' }}>
          "Каждый еврей - это бриллиант, нужно только отшлифовать его, чтобы он мог светить"
        </p>
      </div>
    </div>
  );
};

export default DailyQuote;