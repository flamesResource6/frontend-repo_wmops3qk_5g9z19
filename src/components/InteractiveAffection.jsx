import { useMemo, useState } from 'react';

const messages = [
  "You’re adorable when you smile 😊",
  "You make the world softer, Sonia 🌷",
  "You deserve every good thing.",
  "Your presence feels like home.",
  "Thank you for being you."
];

function Heart({ x, y, onReveal }) {
  const [popped, setPopped] = useState(false);
  return (
    <button
      onClick={() => {
        setPopped(true);
        onReveal();
        setTimeout(() => setPopped(false), 900);
      }}
      className={`transition-transform duration-300 ${popped ? 'scale-125' : 'scale-100'}`}
      style={{ transformOrigin: 'center' }}
      aria-label="heart"
    >
      <span
        className="inline-block select-none"
        style={{
          position: 'absolute',
          left: x,
          top: y,
          filter: 'drop-shadow(0 8px 12px rgba(244, 114, 182, 0.35))',
        }}
      >
        💖
      </span>
    </button>
  );
}

export default function InteractiveAffection() {
  const [note, setNote] = useState(messages[0]);

  const hearts = useMemo(() => {
    // generate gentle scattered hearts positions
    const arr = [];
    for (let i = 0; i < 14; i++) {
      arr.push({ x: `${Math.random() * 90 + 5}%`, y: `${Math.random() * 60 + 10}%` });
    }
    return arr;
  }, []);

  const reveal = () => {
    const n = Math.floor(Math.random() * messages.length);
    setNote(messages[n]);
  };

  return (
    <section className="relative w-full overflow-hidden bg-rose-50/60 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <h3 className="mb-6 text-center text-3xl text-rose-700" style={{ fontFamily: 'Playfair Display, serif' }}>
          Touch the hearts
        </h3>
        <p className="mx-auto mb-12 max-w-2xl text-center text-rose-700/80" style={{ fontFamily: 'Dancing Script, cursive', fontSize: '1.4rem' }}>
          Hover or tap a heart to make a tiny piece of affection appear.
        </p>

        <div className="relative h-72 sm:h-80 md:h-96 rounded-3xl bg-gradient-to-br from-rose-100 to-pink-100 shadow-inner overflow-hidden">
          {hearts.map((h, i) => (
            <Heart key={i} x={h.x} y={h.y} onReveal={reveal} />
          ))}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/70 px-5 py-2 backdrop-blur shadow">
            <span className="text-rose-700" style={{ fontFamily: 'Dancing Script, cursive', fontSize: '1.2rem' }}>{note}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
