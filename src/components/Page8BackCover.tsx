import { motion } from "motion/react";
import { PageProps } from "../types";

export default function Page8BackCover({ isActive }: PageProps) {
  return (
    <div className="relative w-full h-full min-h-0 p-4 sm:p-6 md:p-8 lg:p-10 paper-dark text-white flex flex-col justify-between overflow-y-auto zine-scrollbar">
      {/* Absolute silence, no decorative brush stroke blobs */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-4 border border-zinc-900" />
      </div>

      {/* Top Section */}
      <div className="relative z-10 flex justify-between items-start">
        <div className="font-typewriter text-[9px] text-stone-500 tracking-wider">
          END OF ISSUE 01
        </div>
        {/* Top Right: Tiny hand-drawn QR placeholder */}
        <div className="flex flex-col items-center">
          <svg viewBox="0 0 40 40" className="w-10 h-10 stroke-stone-400 fill-none" strokeWidth="1">
            {/* Hand-drawn Outer square */}
            <path d="M4 4 Q20 3 36 4 T36 36 T4 36 Z" />
            {/* Inner dot blocks */}
            <rect x="8" y="8" width="6" height="6" fill="#78716c" stroke="none" />
            <rect x="26" y="8" width="6" height="6" fill="#78716c" stroke="none" />
            <rect x="8" y="26" width="6" height="6" fill="#78716c" stroke="none" />
            {/* random bit dots inside */}
            <circle cx="20" cy="12" r="1.5" fill="#78716c" />
            <circle cx="20" cy="20" r="1.5" fill="#78716c" />
            <circle cx="16" cy="24" r="1.5" fill="#78716c" />
            <circle cx="28" cy="20" r="1.5" fill="#78716c" />
            <rect x="24" y="24" width="4" height="4" fill="#78716c" stroke="none" />
          </svg>
          <span className="font-typewriter text-[7px] text-stone-500 mt-1">
            Go deeper →
          </span>
        </div>
      </div>

      {/* Center of page: High-Precision Cybernetic Schematic Illustration */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center my-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isActive ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full max-w-[280px] aspect-square relative text-stone-200"
        >
          <svg
            viewBox="0 0 300 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            {/* Ambient circular radar grids */}
            <circle cx="150" cy="150" r="130" stroke="#1f1f23" strokeWidth="1.2" />
            <circle cx="150" cy="150" r="110" stroke="#ef7a76" strokeWidth="0.8" strokeDasharray="3,10" opacity="0.18" />
            <circle cx="150" cy="150" r="85" stroke="#373740" strokeWidth="1" />
            <circle cx="150" cy="150" r="55" stroke="#1f1f23" strokeWidth="0.8" strokeDasharray="2,5" />
            
            {/* Fine alignment crosshair axis */}
            <line x1="150" y1="10" x2="150" y2="290" stroke="#27272a" strokeWidth="0.8" strokeDasharray="4,4" />
            <line x1="10" y1="150" x2="290" y2="150" stroke="#27272a" strokeWidth="0.8" strokeDasharray="4,4" />
            
            {/* Technical bounding corners */}
            <path d="M 20,40 L 20,20 L 40,20" stroke="#ef7a76" strokeWidth="1" strokeLinecap="square" opacity="0.5" />
            <path d="M 280,40 L 280,20 L 260,20" stroke="#ef7a76" strokeWidth="1" strokeLinecap="square" opacity="0.5" />
            <path d="M 20,260 L 20,280 L 40,280" stroke="#ef7a76" strokeWidth="1" strokeLinecap="square" opacity="0.5" />
            <path d="M 280,260 L 280,280 L 260,280" stroke="#ef7a76" strokeWidth="1" strokeLinecap="square" opacity="0.5" />

            {/* Clean labels */}
            <text x="25" y="14" fill="#ef7a76" fontSize="6.5" fontFamily="monospace" letterSpacing="1" opacity="0.6">SYS_MODEL: REVERSE_PROSTHESIS</text>
            <text x="210" y="14" fill="#d4af37" fontSize="6.5" fontFamily="monospace" letterSpacing="1" opacity="0.6">GRID // CC01</text>
            <text x="25" y="293" fill="#71717a" fontSize="6" fontFamily="monospace" letterSpacing="0.5">CAPTCHA TARGETING matrix [v1.07]</text>
            <text x="210" y="293" fill="#ef7a76" fontSize="6.5" fontFamily="monospace" letterSpacing="1" opacity="0.6">PALM_SYS_08</text>

            {/* HIGH-DESIGN GEOMETRIC CYBERNETIC PALM PIECE */}
            {/* Drawn with crisp, geometric, non-overlapping polygonal paths */}
            <g strokeLinecap="round" strokeLinejoin="round" fill="none">
              
              {/* Outer cybernetic hand shield (Geometric polygon segments) */}
              <polygon 
                points="115,245 88,205 92,165 110,135 150,118 190,135 208,165 212,205 185,245 150,255" 
                stroke="#e4e4e7" 
                strokeWidth="1.5" 
                opacity="0.85"
              />

              {/* Neural network link nodes inside the palm bounds */}
              {/* Wrist anchor */}
              <circle cx="150" cy="245" r="3.5" stroke="#ef7a76" strokeWidth="1.5" fill="#09090b" />
              
              {/* Main knuckles (Distinct non-overlapping node centers) */}
              <circle cx="110" cy="180" r="3" stroke="#d4af37" strokeWidth="1.2" fill="#09090b" />
              <circle cx="130" cy="165" r="3" stroke="#d4af37" strokeWidth="1.2" fill="#09090b" />
              <circle cx="150" cy="160" r="3" stroke="#d4af37" strokeWidth="1.2" fill="#09090b" />
              <circle cx="170" cy="165" r="3" stroke="#d4af37" strokeWidth="1.2" fill="#09090b" />
              <circle cx="190" cy="180" r="3" stroke="#d4af37" strokeWidth="1.2" fill="#09090b" />

              {/* Finger vector extensions extending straight upward to targeting intersections */}
              {/* Pinky */}
              <line x1="110" y1="180" x2="110" y2="90" stroke="#71717a" strokeWidth="1" />
              <circle cx="110" cy="90" r="2" fill="#ef7a76" />
              
              {/* Ring */}
              <line x1="130" y1="165" x2="130" y2="70" stroke="#71717a" strokeWidth="1" />
              <circle cx="130" cy="70" r="2" fill="#ef7a76" />
              
              {/* Middle */}
              <line x1="150" y1="160" x2="150" y2="55" stroke="#38bdf8" strokeWidth="1.2" />
              <circle cx="150" cy="55" r="2.5" fill="#38bdf8" />
              
              {/* Index */}
              <line x1="170" y1="165" x2="170" y2="70" stroke="#71717a" strokeWidth="1" />
              <circle cx="170" cy="70" r="2" fill="#ef7a76" />
              
              {/* Thumb */}
              <line x1="190" y1="180" x2="205" y2="120" stroke="#71717a" strokeWidth="1" />
              <circle cx="205" cy="120" r="2" fill="#ef7a76" />

              {/* Structural grid connections inside hand representing micro-chips */}
              <path d="M 150,245 L 110,180" stroke="#27272a" strokeWidth="1" />
              <path d="M 150,245 L 130,165" stroke="#27272a" strokeWidth="1" />
              <path d="M 150,245 L 150,160" stroke="#ef7a76" strokeWidth="1" strokeDasharray="2,2" opacity="0.6" />
              <path d="M 150,245 L 170,165" stroke="#27272a" strokeWidth="1" />
              <path d="M 150,245 L 190,180" stroke="#27272a" strokeWidth="1" />

              <path d="M 110,180 L 130,165 L 150,160 L 170,165 L 190,180" stroke="#52525b" strokeWidth="0.8" />
            </g>

            {/* Radar telemetry scan vectors (golden arc sweeping lines) */}
            <path d="M 75,90 A 90,90 0 0,1 225,90" stroke="#d4af37" strokeWidth="1" opacity="0.5" strokeDasharray="3,6" />
            <path d="M 100,70 A 110,110 0 0,1 200,70" stroke="#38bdf8" strokeWidth="0.8" opacity="0.4" />
            
            {/* Precise target cross indicators */}
            <g stroke="#ef7a76" strokeWidth="1">
              <path d="M 145,55 L 155,55 M 150,50 L 150,60" />
              <path d="M 105,90 L 115,90 M 110,85 L 110,95" opacity="0.6" />
              <path d="M 125,70 L 135,70 M 130,65 L 130,75" opacity="0.6" />
              <path d="M 165,70 L 175,70 M 170,65 L 170,75" opacity="0.6" />
              <path d="M 200,120 L 210,120 M 205,115 L 205,125" opacity="0.6" />
            </g>

            {/* Outer numeric scale symbols */}
            <text x="145" y="44" fill="#38bdf8" fontSize="5.5" fontFamily="monospace" opacity="0.7">00°</text>
            <text x="245" y="153" fill="#71717a" fontSize="5.5" fontFamily="monospace">90°</text>
            <text x="45" y="153" fill="#71717a" fontSize="5.5" fontFamily="monospace">270°</text>
            <text x="142" y="267" fill="#71717a" fontSize="5.5" fontFamily="monospace">180°</text>

            <defs>
              <radialGradient id="silentGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#78716c" />
                <stop offset="100%" stopColor="#78716c" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Serif Italic line below the hands */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 0.95 } : {}}
          transition={{ delay: 0.6, duration: 1.2 }}
          className="font-serif text-base sm:text-lg md:text-xl text-center italic tracking-wide text-white mt-4"
        >
          "The intelligence was always yours."
        </motion.p>
      </div>

      {/* Bottom Section: Micro typewriter credits */}
      <div className="relative z-10 flex flex-col items-center space-y-1 text-center">
        <p className="font-typewriter text-[10px] text-stone-400">
          INVISIBLE HANDS — Issue 01
        </p>
        <p className="font-typewriter text-[9px] text-[#ef7a76] font-medium tracking-wide">
          BY CHRISTINA HUANG & JERRY HU
        </p>
        <p className="font-typewriter text-[8px] text-stone-600">
          Based on the work of Matteo Pasquinelli
        </p>
      </div>
    </div>
  );
}
