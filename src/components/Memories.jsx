import { useEffect, useRef } from 'react';

const lines = [
  'Every time I hear your name, I smile unconsciously.',
  'Your laugh is my favorite melody.',
  'If happiness had a face, it would look like you, Sonia.',
  'You bring a quiet kind of sunshine to every day.',
];

export default function Memories() {
  const containerRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('opacity-100', 'translate-y-0');
        });
      },
      { threshold: 0.2 }
    );
    const els = containerRef.current?.querySelectorAll('[data-fade]') || [];
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="relative w-full bg-gradient-to-b from-white to-rose-50 py-24">
      <div className="absolute inset-0 pointer-events-none">
        {/* floating hearts */}
        <div className="animate-float-slow absolute left-10 top-10 text-rose-300">❤</div>
        <div className="animate-float-slower absolute right-10 top-32 text-pink-300">❤</div>
        <div className="animate-float-slow absolute left-1/3 bottom-10 text-rose-200">❤</div>
      </div>

      <div ref={containerRef} className="relative z-10 mx-auto max-w-3xl px-6">
        <h2 className="mb-10 text-center text-3xl sm:text-4xl text-rose-700" style={{ fontFamily: 'Playfair Display, serif' }}>
          Little Things I Adore
        </h2>
        <div className="space-y-10">
          {lines.map((line, idx) => (
            <p
              key={idx}
              data-fade
              className="transform opacity-0 translate-y-4 text-xl sm:text-2xl text-rose-700/90 leading-relaxed"
              style={{ fontFamily: 'Dancing Script, cursive' }}
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
