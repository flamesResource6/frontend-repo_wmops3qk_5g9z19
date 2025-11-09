import { useEffect, useState, useRef } from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroWelcome({ onBegin, audioRef }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.25);
  const hoverTimer = useRef(null);
  const [showVolume, setShowVolume] = useState(false);

  useEffect(() => {
    if (audioRef?.current) {
      audioRef.current.volume = volume;
    }
  }, [volume, audioRef]);

  const togglePlay = async () => {
    if (!audioRef?.current) return;
    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (e) {
      // Autoplay may be blocked; user can try again
    }
  };

  const handleMouseEnter = () => {
    clearTimeout(hoverTimer.current);
    setShowVolume(true);
  };
  const handleMouseLeave = () => {
    clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setShowVolume(false), 800);
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-rose-50">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Tu-wEVxfDuICpwJI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient veil to keep text legible */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-pink-50/70 via-rose-50/70 to-white/95" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 text-center">
        <div className="space-y-4 animate-fadeIn">
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-rose-700" style={{ fontFamily: 'Playfair Display, serif' }}>
            Hi Sonia Vanciska Selvia 🌸
          </h1>
          <p className="text-rose-600/90 text-lg sm:text-2xl" style={{ fontFamily: 'Dancing Script, cursive' }}>
            This little website is made just for you.
          </p>
        </div>

        <button
          onClick={onBegin}
          className="mt-10 rounded-full bg-rose-500/90 px-7 py-3 text-white shadow-lg shadow-rose-200 transition hover:bg-rose-500 hover:shadow-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-300"
        >
          Let’s Begin 💖
        </button>
      </div>

      {/* Floating Music Control */}
      <div className="absolute bottom-6 right-6 z-20" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="flex items-center gap-3 rounded-full bg-white/70 px-4 py-2 backdrop-blur shadow-md">
          <button
            onClick={togglePlay}
            className="rounded-full bg-rose-500 px-3 py-2 text-white shadow-sm transition hover:bg-rose-600"
            aria-label={isPlaying ? 'Pause music' : 'Play music'}
          >
            {isPlaying ? '⏸️' : '▶️'}
          </button>
          <span className="text-sm text-rose-700 hidden sm:inline">Soft music</span>
          {showVolume && (
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="h-1 w-28 accent-rose-500"
            />
          )}
        </div>
      </div>
    </section>
  );
}
