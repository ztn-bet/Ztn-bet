import React, { useState } from 'react';

const matches = [
  { id: 1, teamA: "Tunisia", teamB: "France", sport: "Football" },
  { id: 2, teamA: "USA", teamB: "Canada", sport: "Basketball" },
  { id: 3, teamA: "Spain", teamB: "Germany", sport: "Handball" },
  { id: 4, teamA: "Japan", teamB: "Brazil", sport: "Volleyball" },
];

const languages = {
  ar: "🇸🇦 العربية",
  fr: "🇫🇷 Français",
  en: "🇬🇧 English",
};

export default function ZTNBetApp() {
  const [language, setLanguage] = useState("en");
  const [predictions, setPredictions] = useState({});

  const handlePrediction = (matchId, prediction) => {
    setPredictions({ ...predictions, [matchId]: prediction });
  };

  const translate = (text) => {
    const translations = {
      "Choose your language": {
        ar: "اختر لغتك",
        fr: "Choisissez votre langue",
        en: "Choose your language"
      },
      "Make your predictions": {
        ar: "قم بتوقعاتك",
        fr: "Faites vos prédictions",
        en: "Make your predictions"
      },
      "Submit Prediction": {
        ar: "تأكيد التوقع",
        fr: "Valider la prédiction",
        en: "Submit Prediction"
      },
      "ZTN BET - Sports Predictions": {
        ar: "زد تي ان بيت - توقعات رياضية",
        fr: "ZTN BET - Prédictions Sportives",
        en: "ZTN BET - Sports Predictions"
      }
    };
    return translations[text]?.[language] || text;
  };

  return (
    <div className="p-6 space-y-6">
      <div className="text-2xl font-bold text-center">
        {translate("ZTN BET - Sports Predictions")}
      </div>

      <div className="text-xl font-bold">
        {translate("Choose your language")}
      </div>
      <select onChange={(e) => setLanguage(e.target.value)} value={language}>
        {Object.entries(languages).map(([key, label]) => (
          <option key={key} value={key}>{label}</option>
        ))}
      </select>

      <div className="text-lg font-semibold">
        {translate("Make your predictions")}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {matches.map((match) => (
          <div key={match.id} className="border p-4 rounded-md shadow">
            <div className="font-medium">
              {match.sport} - {match.teamA} vs {match.teamB}
            </div>
            <div className="space-x-2 mt-2">
              {[match.teamA, "Draw", match.teamB].map((option) => (
                <button
                  key={option}
                  className={`px-4 py-2 border rounded ${
                    predictions[match.id] === option ? "bg-blue-500 text-white" : "bg-white"
                  }`}
                  onClick={() => handlePrediction(match.id, option)}
                >
                  {option}
                </button>
              ))}
            </div>
            <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded">
              {translate("Submit Prediction")}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
