import { useState } from 'react';

export default function FinalNote() {
  const [burst, setBurst] = useState(false);
  const [revealed, setRevealed] = useState(false);

  const trigger = () => {
    setBurst(true);
    setTimeout(() => setRevealed(true), 600);
    setTimeout(() => setBurst(false), 1200);
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-rose-50 to-white py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h3 className="mb-8 text-3xl sm:text-4xl text-rose-700" style={{ fontFamily: 'Playfair Display, serif' }}>
          I just wanted to say… you’re special to me 💕
        </h3>
        <button
          onClick={trigger}
          className="rounded-full bg-rose-500/90 px-6 py-3 text-white shadow-lg shadow-rose-200 transition hover:bg-rose-500 hover:shadow-rose-300"
        >
          Click me
        </button>

        {/* burst hearts */}
        <div className="relative mt-12 h-28">
          {burst && (
            <div className="absolute inset-0">
              {[...Array(24)].map((_, i) => (
                <span
                  key={i}
                  className="absolute animate-pop opacity-0 select-none"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 300}ms`,
                    color: '#fb7185',
                    filter: 'drop-shadow(0 6px 10px rgba(251, 113, 133, 0.35))',
                  }}
                >
                  💗
                </span>
              ))}
            </div>
          )}
        </div>

        {revealed && (
          <p className="mt-4 text-rose-700/90" style={{ fontFamily: 'Dancing Script, cursive', fontSize: '1.4rem' }}>
            From the bottom of my heart — this is for you, Sonia Vanciska Selvia 💗
          </p>
        )}
      </div>
    </section>
  );
}
