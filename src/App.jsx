import { useRef, useState } from 'react'
import HeroWelcome from './components/HeroWelcome'
import Memories from './components/Memories'
import InteractiveAffection from './components/InteractiveAffection'
import FinalNote from './components/FinalNote'

function App() {
  const audioRef = useRef(null)
  const [started, setStarted] = useState(false)

  return (
    <div className="min-h-screen w-full text-rose-900 bg-white">
      {/* hidden audio element controlled by UI */}
      <audio ref={audioRef} loop preload="auto">
        <source src="https://cdn.pixabay.com/download/audio/2021/09/30/audio_3e2fd9f9a5.mp3?filename=romantic-piano-ambient-9979.mp3" type="audio/mpeg" />
      </audio>

      <HeroWelcome onBegin={() => setStarted(true)} audioRef={audioRef} />

      {started && (
        <>
          <Memories />
          <InteractiveAffection />
          <FinalNote />
          <footer className="py-10 text-center text-rose-500/80">
            Made with love, in soft pastels and warm thoughts.
          </footer>
        </>
      )}

      {/* Local animation utilities */}
      <style>{`
        @keyframes float-slow { 0% { transform: translateY(0) } 50% { transform: translateY(-10px) } 100% { transform: translateY(0) } }
        @keyframes float-slower { 0% { transform: translateY(0) } 50% { transform: translateY(-6px) } 100% { transform: translateY(0) } }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-float-slower { animation: float-slower 8s ease-in-out infinite; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(8px) } to { opacity: 1; transform: none } }
        .animate-fadeIn { animation: fadeIn 800ms ease forwards; }
        @keyframes pop { 0% { transform: scale(0.6); opacity: 0 } 50% { transform: scale(1.15); opacity: 1 } 100% { transform: scale(1); opacity: 0 } }
        .animate-pop { animation: pop 900ms ease forwards; }
      `}</style>
    </div>
  )
}

export default App
