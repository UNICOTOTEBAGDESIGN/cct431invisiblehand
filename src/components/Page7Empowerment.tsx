import { motion } from "motion/react";
import { PageProps } from "../types";
import { BookOpen, HelpCircle, Users, Hammer, CircleDot } from "lucide-react";

export default function Page7Empowerment({ isActive }: PageProps) {
  return (
    <div className="relative w-full h-full min-h-0 paper-texture text-stone-900 p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-between overflow-y-auto zine-scrollbar">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft mint green brushstroke behind the group sketch */}
        <div className="absolute top-[5%] left-[10%] w-[320px] h-[160px] rounded-full bg-[#93d7be]/20 blur-3xl" />
        {/* Soft coral brushstroke behind group sketch */}
        <div className="absolute top-[10%] right-[15%] w-[280px] h-[160px] rounded-full bg-[#ef7a76]/15 blur-3xl animate-pulse" />
      </div>

      {/* Top Banner Info */}
      <div className="relative z-10 flex justify-between items-center border-b border-stone-200 pb-2">
        <span className="font-sans text-[9px] tracking-widest text-[#93d7be] font-bold uppercase">
          MANIFESTO // FUTURE PERSPECTIVE
        </span>
        <span className="font-typewriter text-[9px] text-stone-500">
          PAGE 07 // EMPOWERMENT
        </span>
      </div>

      {/* Top Section: Large Hand-drawn Illustration */}
      <div className="relative z-10 my-2 flex justify-center items-center min-h-[160px] max-h-[210px]">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="w-full max-w-[400px] aspect-[16/7] relative"
        >
          {/* Hand drawn sketch: People sitting in a circle, talking */}
          <svg viewBox="0 0 400 160" className="w-full h-full" fill="none" strokeWidth="1.8" strokeLinecap="round">
            <defs>
              <radialGradient id="manifestoGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#93d7be" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#93d7be" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Faint surrounding background brushstroke in SVG */}
            <path d="M60 80 Q200 40 340 80" stroke="#93d7be" strokeWidth="12" opacity="0.25" />
            <path d="M120 100 Q200 130 280 100" stroke="#ef7a76" strokeWidth="8" opacity="0.2" />

            {/* Group sitting in a circle (sketched figures) */}
            <g stroke="#1c1917" strokeWidth="1.8" fill="none">
              {/* Figure 1 - left (sitting on floor, notebook in hand) */}
              <path d="M100 120 C95 110, 85 105, 90 92 C92 88, 98 84, 94 72" /> {/* torso */}
              <circle cx="95" cy="62" r="7" fill="#fafaf9" /> {/* head */}
              <path d="M92 92 L75 102 L85 114" /> {/* folded knee */}
              <path d="M102 96 L118 100" strokeWidth="1.2" /> {/* arm out holding notepad */}
              <rect x="118" y="93" width="10" height="13" rx="1" fill="#fff" />

              {/* Figure 2 - center rear (sitting in chair, gesturing) */}
              <path d="M190 125 L192 100 C188 95, 185 86, 186 75" />
              <circle cx="188" cy="65" r="7" fill="#fafaf9" />
              {/* chair outline */}
              <path d="M172 135 L182 110 H204 L212 135" stroke="#78350f" strokeWidth="1" />
              <path d="M188 78 Q202 82 210 75" /> {/* gesturing arm */}

              {/* Figure 3 - right (sitting on box, typing laptop) */}
              <path d="M290 125 L285 110 C280 105, 281 92, 290 82" />
              <circle cx="294" cy="71" r="7.2" fill="#fafaf9" />
              <path d="M285 110 C295 110, 312 110, 315 125" /> {/* Leg folds */}
              <path d="M290 95 L306 96 C308 96, 310 93, 305 88" strokeWidth="1.2" /> {/* Arm holding tablet */}
              <rect x="306" y="94" width="8" height="5" rx="1" transform="rotate(15, 306, 94)" fill="#fff" />
            </g>

            {/* Curiosity Symbols hovering above (fist/raised action, magnifier, question, book) */}
            <g stroke="#1c1917" strokeWidth="1.5" className="opacity-90 animate-pulse">
              {/* Question mark above person 1 */}
              <g transform="translate(105, 30)">
                <circle cx="0" cy="0" r="10" stroke="#d4af37" strokeWidth="1" strokeDasharray="2,2" />
                <path d="M-2 -3 Q0 -6 2 -3 Q3 0 0 2 V5" stroke="#1c1917" strokeWidth="1.5" />
                <circle cx="0" cy="8" r="1" fill="#000" stroke="none" />
              </g>

              {/* Magnifier above center person */}
              <g transform="translate(188, 32)">
                <circle cx="0" cy="0" r="7" stroke="#1c1917" />
                <line x1="5" y1="5" x2="11" y2="11" stroke="#1c1917" strokeWidth="2" />
              </g>

              {/* Lit Fist or Tool outline above person 3 */}
              <g transform="translate(280, 30)">
                <circle cx="0" cy="0" r="10" stroke="#ef7a76" strokeWidth="1" strokeDasharray="3,3" />
                {/* Small fist symbol sketch */}
                <path d="M-3 2 V-2 H-1 V-5 H1 V-3 H3 V-2 H2 V2 H-3" fill="#ef7a76" opacity="0.3" />
                <path d="M-3 2 V-2 H-1 V-5 H1 V-3 H3 V-2 H2 V2" stroke="#1c1917" strokeWidth="1.2" />
              </g>

              {/* Floating Book */}
              <g transform="translate(218, 20)">
                <path d="M-6 0 Q0 -3 6 0 L6 8 Q0 5 -6 8 Z" fill="#fafaf9" />
                <path d="M-6 0 C0 -2 0 6 -6 8" stroke="#1c1917" strokeWidth="1.5" />
              </g>
            </g>
          </svg>
        </motion.div>
      </div>

      {/* Middle Section: Headline and Columns */}
      <div className="relative z-10 flex-1 my-3 flex flex-col justify-center">
        <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-black text-stone-950 mb-3 tracking-tight">
          You already know something is off.
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-typewriter text-xs leading-relaxed text-stone-700">
          <div>
            <p>
              Using AI tools is not the issue. Accepting it without question as a magical, friction-free
              intelligence is.
            </p>
            <p className="mt-2.5 text-stone-900 font-semibold border-l-2 border-[#ef7a76] pl-2.5">
              Ask who built the training data. <br />
              Ask who reviewed the outputs. <br />
              Ask which communities were excluded from the definition of intelligence.
            </p>
          </div>

          <div>
            <p>
              The history of this technology is not hidden — it is just rarely told to the consumer on
              corporate onboarding portals.
            </p>
            <p className="mt-2.5">
              You are part of the generation that will decide what artificial intelligence becomes next.
              That starts with knowing what it already is.
            </p>
          </div>
        </div>
      </div>

      {/* Hand Drawn Action Steps with customized icons */}
      <div className="relative z-10 grid grid-cols-3 gap-3 py-4 border-t border-b border-stone-200 bg-stone-50/50 rounded-lg">
        {/* Step 1: READ */}
        <div className="flex flex-col items-center text-center space-y-1">
          <div className="p-1 px-3 border border-stone-200 bg-white rounded-full flex items-center justify-center shadow-sm">
            <BookOpen className="w-4 h-4 text-[#ef7a76]" />
          </div>
          <span className="font-sans text-[10px] font-black uppercase text-stone-900 tracking-wider">
            READ
          </span>
          <span className="font-typewriter text-[9px] text-stone-500">
            the history
          </span>
        </div>

        {/* Step 2: QUESTION */}
        <div className="flex flex-col items-center text-center space-y-1">
          <div className="p-1 px-3 border border-stone-200 bg-white rounded-full flex items-center justify-center shadow-sm">
            <Users className="w-4 h-4 text-[#93d7be]" />
          </div>
          <span className="font-sans text-[10px] font-black uppercase text-stone-900 tracking-wider">
            QUESTION
          </span>
          <span className="font-typewriter text-[9px] text-stone-500">
            the design
          </span>
        </div>

        {/* Step 3: DEMAND */}
        <div className="flex flex-col items-center text-center space-y-1">
          <div className="p-1 px-3 border border-stone-200 bg-white rounded-full flex items-center justify-center shadow-sm">
            <Hammer className="w-4 h-4 text-[#d4af37]" />
          </div>
          <span className="font-sans text-[10px] font-black uppercase text-stone-900 tracking-wider">
            DEMAND
          </span>
          <span className="font-typewriter text-[9px] text-stone-500">
            accountability
          </span>
        </div>
      </div>

      {/* Bottom credits */}
      <div className="relative z-10 pt-2 text-right">
        <p className="font-serif text-[11px] text-stone-400 italic max-w-lg ml-auto leading-relaxed">
          "Intelligence was never invented by machines. It was borrowed from people — most of whom
          were never credited."
        </p>
      </div>
    </div>
  );
}
