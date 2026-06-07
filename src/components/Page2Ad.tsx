import { motion } from "motion/react";
import { PageProps } from "../types";

export default function Page2Ad({ isActive }: PageProps) {
  return (
    <div className="relative w-full h-full min-h-0 paper-texture text-stone-900 p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-between overflow-y-auto zine-scrollbar">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft mint green brushstroke behind the illustration */}
        <div className="absolute top-[10%] left-[25%] w-80 h-48 rounded-full bg-[#93d7be]/20 blur-3xl" />
        {/* Soft gold brushstroke top-right */}
        <div className="absolute top-[5%] right-[10%] w-64 h-64 rounded-full bg-[#d4af37]/15 blur-3xl animate-pulse" />
      </div>

      {/* Top Banner Info */}
      <div className="relative z-10 flex justify-between items-center border-b border-stone-200 pb-2">
        <span className="font-sans text-[10px] tracking-widest text-stone-400 font-bold uppercase">
          Promotional Feature / Spotlight
        </span>
        <span className="font-typewriter text-[10px] text-stone-500">
          PAGE 02 // ADVERT
        </span>
      </div>

      {/* Top Half: Illustration */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center py-4 min-h-[150px] md:min-h-[220px]">
        {/* Floating words that resemble ad campaign keywords */}
        <div className="absolute inset-x-0 top-6 bottom-6 pointer-events-none text-stone-400 font-sans tracking-widest text-[9px] font-bold uppercase">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isActive ? { opacity: 0.6, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="absolute top-1/4 left-1/10 hover:text-stone-600 transition-colors"
          >
            ✦ EFFICIENT
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={isActive ? { opacity: 0.6, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="absolute top-1/5 right-1/10 hover:text-stone-600 transition-colors"
          >
            ✦ SEAMLESS
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isActive ? { opacity: 0.6, scale: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="absolute bottom-1/4 left-1/12 hover:text-stone-600 transition-colors"
          >
            ✦ INTELLIGENT
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={isActive ? { opacity: 0.6, x: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="absolute bottom-1/5 right-1/12 hover:text-stone-600 transition-colors"
          >
            ✦ AUTOMATED
          </motion.div>
        </div>

        {/* Scaled Sketch Illustration representing the corporate AI dream */}
        <div className="w-full max-w-[480px] aspect-[16/9] flex justify-center items-center">
          <svg
            viewBox="0 0 500 240"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            {/* Background elements */}
            <circle cx="250" cy="110" r="100" fill="url(#adBackGlow)" opacity="0.3" />

            {/* Mint Green Brush Accent stroke inside SVG */}
            <path
              d="M170 140 C200 160, 300 130, 330 150"
              stroke="#93d7be"
              strokeWidth="10"
              strokeLinecap="round"
              opacity="0.3"
            />
            {/* Gold Gold Stroke accent */}
            <path
              d="M140 80 Q210 50 350 90"
              stroke="#d4af37"
              strokeWidth="6"
              strokeLinecap="round"
              opacity="0.25"
            />

            {/* Hand-drawn Figure (Young relaxed person with feet up, cup in hand) */}
            <g stroke="#1c1917" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {/* Floor base line */}
              <line x1="80" y1="210" x2="420" y2="210" stroke="#d6d3d1" strokeWidth="1" />

              {/* Relaxed Desk Chair Outline */}
              <path d="M120 180 L140 205 L180 205 L160 180 Z" strokeWidth="1.5" fill="#f5f5f4" />
              <path d="M130 180 L110 135 L165 140 L180 178 Z" strokeWidth="1.8" />
              {/* Feet-Up Ottoman or Table shelf */}
              <rect x="330" y="160" width="60" height="40" rx="3" strokeWidth="1.5" fill="#fafaf9" />
              <line x1="345" y1="200" x2="345" y2="210" />
              <line x1="375" y1="200" x2="375" y2="210" />

              {/* Human figure relaxed */}
              {/* Torso/Coat */}
              <path d="M140 142 C150 150, 160 160, 175 162 L220 163" />
              {/* Left leg extended horizontally to the shelf */}
              <path d="M175 162 C195 160, 240 150, 310 155 C330 156, 340 158, 350 162" />
              {/* Right leg nested/crossed */}
              <path d="M175 162 C190 170, 220 172, 270 170 C290 168, 310 165, 345 162" />
              {/* Relaxed arms holding coffee */}
              <path d="M152 142 C165 145, 175 140, 185 144" /> {/* Arm */}
              <circle cx="192" cy="144" r="6" strokeWidth="1.5" fill="#f5f5f4" />{/* Coffee Mug */}
              <path d="M198 144 C199 146, 201 146, 202 144" /> {/* handle */}

              {/* Head / smiling face, curly hair */}
              <circle cx="150" cy="110" r="14" fill="#fafaf9" />
              <path d="M142 102 C140 108, 142 114, 146 112" /> {/* Hair curlies */}
              <path d="M136 108 Q140 102 148 100 Q152 105 148 111" />
              <path d="M137 114 Q141 110 146 114" />
              <path d="M158 108 C158 108, 158 111, 156 112" /> {/* smile/face */}
              <path d="M151 113 Q154 116 156 112" /> {/* mouth smile */}
              <circle cx="153" cy="108" r="1" fill="#000" /> {/* Eye */}

              {/* Glowing Screen Monitor (Tech ad screen) */}
              <rect x="250" y="90" width="60" height="42" rx="2" strokeWidth="2" fill="#fafaf9" />
              <line x1="280" y1="132" x2="280" y2="155" />
              <line x1="265" y1="155" x2="295" y2="155" />

              {/* AI "working" imagery inside the screen (charts, graphs, text generating) */}
              <path d="M255 102 L268 112 L280 100 L295 118 L305 106" stroke="#22c55e" strokeWidth="1.5" />
              <rect x="255" y="120" width="10" height="6" fill="#a8a29e" strokeWidth="0.5" />
              <rect x="270" y="120" width="15" height="6" fill="#ef7a76" strokeWidth="0.5" />
              <p className="text-[5px]">AI GENERATING</p>
              {/* Hand-drawn sparkles (magic effect) */}
              <path d="M242 85 L245 88 L242 91 L239 88 Z" fill="#d4af37" strokeWidth="0.5" />
              <path d="M315 110 L318 113 L315 116 L312 113 Z" fill="#d4af37" strokeWidth="0.5" />
              <path d="M285 75 L288 78 L285 81 L282 78 Z" fill="#ef7a76" strokeWidth="0.5" />
            </g>

            {/* Glowing yellow dots showing data packets */}
            <circle cx="245" cy="140" r="1.5" fill="#d4af37" className="animate-ping" />
            <circle cx="210" cy="120" r="2" fill="#ef7a76" />
            <circle cx="330" cy="100" r="2" fill="#93d7be" />

            <defs>
              <radialGradient id="adBackGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#93d7be" />
                <stop offset="100%" stopColor="#93d7be" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Bottom Half: Copy / Columns */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16 pt-4 border-t border-stone-200 mt-2">
        {/* Column 1 */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="font-serif text-base sm:text-xl md:text-2xl font-black text-stone-950 mb-1.5 tracking-tight">
              The machine does everything.
            </h2>
            <p className="font-typewriter text-[11px] sm:text-xs leading-relaxed text-stone-600">
              Type a prompt. Get an answer. Write a report. Generate an image.
              Translate a document. No training required. No breaks needed.
              Available 24 hours a day, 7 days a week.
            </p>
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col justify-end min-h-[80px] relative">
          <div className="font-serif text-[10px] sm:text-[11px] leading-relaxed text-stone-400 italic mb-4 md:mb-10 select-none pb-8 sm:pb-0">
            Our neural grids execute billions of parameters peer-to-second, letting you refocus on
            strategic ideation while cognitive automation drives deliverables. No labor overhead.
            No friction. Just answers.
          </div>

          {/* Footnote Disruption (Subtle Scribble) */}
          <motion.div
            initial={{ opacity: 0, rotate: 1 }}
            animate={isActive ? { opacity: 1, rotate: -2 } : {}}
            transition={{ delay: 1.2, duration: 1 }}
            className="absolute right-0 bottom-0 max-w-[220px] sm:max-w-[260px] bg-amber-50/90 border border-[#ef7a76]/40 p-2 sm:p-3 rounded shadow-sm hover:scale-103 transition-transform"
          >
            <p className="font-hand text-[#ef7a76] text-base sm:text-lg md:text-xl font-semibold leading-tight">
              "But who taught it everything it knows?"
            </p>
          </motion.div>
        </div>
      </div>

      {/* Corporate blueprint background grid */}
      <div className="absolute inset-x-8 bottom-8 top-[45%] border-t border-stone-200 border-dashed pointer-events-none" />
    </div>
  );
}
