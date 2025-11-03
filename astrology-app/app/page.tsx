'use client';

import { useState } from 'react';

const zodiacSigns = [
  { name: 'Aries', symbol: '♈', dates: 'Mar 21 - Apr 19', element: 'Fire', traits: 'Courageous, determined, confident, enthusiastic, optimistic' },
  { name: 'Taurus', symbol: '♉', dates: 'Apr 20 - May 20', element: 'Earth', traits: 'Reliable, patient, practical, devoted, responsible' },
  { name: 'Gemini', symbol: '♊', dates: 'May 21 - Jun 20', element: 'Air', traits: 'Gentle, affectionate, curious, adaptable, quick learner' },
  { name: 'Cancer', symbol: '♋', dates: 'Jun 21 - Jul 22', element: 'Water', traits: 'Tenacious, loyal, emotional, sympathetic, persuasive' },
  { name: 'Leo', symbol: '♌', dates: 'Jul 23 - Aug 22', element: 'Fire', traits: 'Creative, passionate, generous, warm-hearted, cheerful' },
  { name: 'Virgo', symbol: '♍', dates: 'Aug 23 - Sep 22', element: 'Earth', traits: 'Loyal, analytical, kind, hardworking, practical' },
  { name: 'Libra', symbol: '♎', dates: 'Sep 23 - Oct 22', element: 'Air', traits: 'Cooperative, diplomatic, gracious, fair-minded, social' },
  { name: 'Scorpio', symbol: '♏', dates: 'Oct 23 - Nov 21', element: 'Water', traits: 'Resourceful, brave, passionate, stubborn, determined' },
  { name: 'Sagittarius', symbol: '♐', dates: 'Nov 22 - Dec 21', element: 'Fire', traits: 'Generous, idealistic, great sense of humor, optimistic' },
  { name: 'Capricorn', symbol: '♑', dates: 'Dec 22 - Jan 19', element: 'Earth', traits: 'Responsible, disciplined, self-control, good managers' },
  { name: 'Aquarius', symbol: '♒', dates: 'Jan 20 - Feb 18', element: 'Air', traits: 'Progressive, original, independent, humanitarian' },
  { name: 'Pisces', symbol: '♓', dates: 'Feb 19 - Mar 20', element: 'Water', traits: 'Compassionate, artistic, intuitive, gentle, wise' },
];

const horoscopes = {
  Aries: 'Today brings new opportunities. Your natural leadership will shine through.',
  Taurus: 'Financial matters look promising. Trust your practical instincts.',
  Gemini: 'Communication is key today. Your words will have a lasting impact.',
  Cancer: 'Focus on emotional connections. Family time will bring joy.',
  Leo: 'Your creativity is at its peak. Express yourself boldly.',
  Virgo: 'Organization brings clarity. Small details matter today.',
  Libra: 'Balance is essential. Harmony in relationships is achievable.',
  Scorpio: 'Deep transformation awaits. Embrace change with courage.',
  Sagittarius: 'Adventure calls. Expand your horizons and take risks.',
  Capricorn: 'Hard work pays off. Your discipline will be rewarded.',
  Aquarius: 'Innovation leads the way. Your unique perspective is valuable.',
  Pisces: 'Intuition guides you. Trust your dreams and inner wisdom.',
};

export default function Home() {
  const [selectedSign, setSelectedSign] = useState<string | null>(null);
  const [birthDate, setBirthDate] = useState('');
  const [calculatedSign, setCalculatedSign] = useState<string | null>(null);

  const getZodiacFromDate = (date: string) => {
    const [year, month, day] = date.split('-').map(Number);

    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'Aries';
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'Taurus';
    if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return 'Gemini';
    if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return 'Cancer';
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'Leo';
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'Virgo';
    if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return 'Libra';
    if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return 'Scorpio';
    if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return 'Sagittarius';
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 'Capricorn';
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'Aquarius';
    if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return 'Pisces';

    return null;
  };

  const handleCalculateSign = () => {
    if (birthDate) {
      const sign = getZodiacFromDate(birthDate);
      setCalculatedSign(sign);
      setSelectedSign(sign);
    }
  };

  const selectedZodiac = zodiacSigns.find(z => z.name === selectedSign);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 text-transparent bg-clip-text">
            ✨ Astrology App ✨
          </h1>
          <p className="text-xl text-purple-200">Discover your cosmic destiny</p>
        </header>

        {/* Birth Date Calculator */}
        <div className="max-w-md mx-auto mb-12 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-purple-300/30">
          <h2 className="text-2xl font-semibold mb-4 text-center text-yellow-300">Find Your Zodiac Sign</h2>
          <div className="flex flex-col gap-4">
            <input
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="px-4 py-3 rounded-lg bg-white/20 border border-purple-300/50 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <button
              onClick={handleCalculateSign}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105"
            >
              Calculate My Sign
            </button>
          </div>
        </div>

        {/* Zodiac Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {zodiacSigns.map((sign) => (
            <button
              key={sign.name}
              onClick={() => setSelectedSign(sign.name)}
              className={`p-6 rounded-xl backdrop-blur-md transition-all transform hover:scale-105 ${
                selectedSign === sign.name
                  ? 'bg-gradient-to-br from-yellow-400/40 to-pink-400/40 border-2 border-yellow-300 scale-105'
                  : 'bg-white/10 border border-purple-300/30 hover:bg-white/20'
              }`}
            >
              <div className="text-5xl mb-2">{sign.symbol}</div>
              <div className="font-bold text-lg">{sign.name}</div>
              <div className="text-sm text-purple-200">{sign.dates}</div>
            </button>
          ))}
        </div>

        {/* Selected Sign Details */}
        {selectedZodiac && (
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-purple-300/30">
            <div className="text-center mb-6">
              <div className="text-7xl mb-4">{selectedZodiac.symbol}</div>
              <h2 className="text-4xl font-bold mb-2 text-yellow-300">{selectedZodiac.name}</h2>
              <p className="text-lg text-purple-200">{selectedZodiac.dates}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3 text-pink-300">Element</h3>
                <p className="text-lg">{selectedZodiac.element}</p>
              </div>

              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3 text-pink-300">Key Traits</h3>
                <p className="text-sm leading-relaxed">{selectedZodiac.traits}</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-purple-300/50">
              <h3 className="text-2xl font-semibold mb-3 text-yellow-300">Today&apos;s Horoscope</h3>
              <p className="text-lg leading-relaxed">{horoscopes[selectedZodiac.name as keyof typeof horoscopes]}</p>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="text-center mt-16 text-purple-300">
          <p>🌙 The stars align for those who believe ✨</p>
        </footer>
      </div>
    </div>
  );
}
