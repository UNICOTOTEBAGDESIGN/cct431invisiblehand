import { motion } from "motion/react";
import { PageProps } from "../types";

export default function Page1Cover({ isActive }: PageProps) {
  return (
    <div className="relative w-full h-full min-h-0 filter saturate-110 paper-dark text-white p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-between overflow-y-auto zine-scrollbar">
      {/* Background ambient brushstrokes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Coral brushstroke top-right */}
        <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full brush-coral opacity-40 blur-2xl" />
        {/* Mint brushstroke bottom-left */}
        <div className="absolute -bottom-24 -left-12 w-[350px] h-[350px] rounded-full brush-mint opacity-20 blur-3xl" />
        {/* Gold glow around illustration */}
        <div className="absolute top-[40%] right-[10%] w-[320px] h-[320px] rounded-full brush-gold opacity-60 blur-3xl animate-pulse" />
      </div>

      {/* Top Section */}
      <div className="relative z-10 flex justify-between items-start">
        <div className="font-typewriter text-xs text-stone-400 tracking-wider">
          <span className="inline-block px-2 py-0.5 border border-stone-700 rounded bg-stone-900/60 font-medium">
            ISSUE 01
          </span>
        </div>
        <div className="text-right flex flex-col">
          <span className="font-sans text-[10px] tracking-widest text-stone-500 font-bold">
            ZINE SERIES
          </span>
          <span className="font-mono text-xs text-stone-300">2026.06</span>
        </div>
      </div>

      {/* Main Content Area (Layout: Text left, sketch illustration right) */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 items-center my-auto">
        <div className="col-span-1 sm:col-span-7 flex flex-col justify-center text-left">
          {/* Title and subtitle */}
          <div className="flex flex-col space-y-2 sm:space-y-4">
            <h1 className="font-serif leading-[0.95] tracking-tighter text-left flex flex-col select-none">
              <span className="text-3xl xs:text-4xl sm:text-4.5xl md:text-5xl lg:text-7xl font-extralight text-stone-400/70 select-none">
                INVISIBLE
              </span>
              <span className="text-4xl xs:text-5xl sm:text-5.5xl md:text-6.5xl lg:text-8xl font-black text-white drop-shadow-md select-none tracking-tight">
                HANDS
              </span>
            </h1>

            <div>
              <p className="font-sans text-[10px] xs:text-xs sm:text-sm tracking-widest text-[#ef7a76] font-bold uppercase select-none">
                Who Really Runs the Machine?
              </p>
            </div>
          </div>

          <div className="mt-2 sm:mt-4 md:mt-5 lg:mt-8 max-w-xs sm:max-w-sm">
            <p className="font-typewriter text-[10px] xs:text-[11px] leading-relaxed text-stone-400">
              An editorial catalog exploring the hidden machinery of automation,
              micro-tasked labor, and the planetary-scale infrastructure powering AI.
            </p>
          </div>

          <div className="mt-3 sm:mt-5 font-typewriter text-[10px] xs:text-[11px] text-stone-400 border-l border-[#ef7a76]/40 pl-3 space-y-0.5">
            <span className="block text-[8px] sm:text-[9px] text-stone-500 tracking-wider uppercase font-bold">CREATED BY</span>
            <span className="block text-white font-medium">Christina Huang & Jerry Hu</span>
          </div>
        </div>

        {/* Render interactive SVG illustration with hand-drawn pencil/ink effect */}
        <div className="col-span-1 sm:col-span-5 flex justify-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0.8, scale: 0.95 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full max-w-[130px] xs:max-w-[170px] sm:max-w-[210px] md:max-w-[260px] lg:max-w-[320px] aspect-square relative"
          >
            <svg
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full select-none"
            >
              {/* Golden circular source glow */}
              <circle cx="230" cy="180" r="80" fill="url(#goldGlow)" opacity="0.4" />

              {/* Faint hands reaching up in shadows (background, barely visible, wobbly) */}
              <g opacity="0.18">
                {/* Hand 1 */}
                <path
                  d="M100 370 C105 340, 110 320, 100 290 C95 270, 75 250, 80 230 C82 210, 92 190, 88 175 V170 L93 170 V185 C97 195, 96 210, 101 220 L108 190 H112 L112 230 C115 220, 115 200, 122 195 L126 198 C122 215, 122 230, 120 248 C124 240, 131 228, 137 232 L133 250 C136 250, 142 245, 145 249 C140 268, 132 290, 128 320 C125 345, 120 365, 120 370"
                  stroke="#ef7a76"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Hand 2 */}
                <path
                  d="M260 380 C250 340, 248 310, 255 280 C260 260, 275 240, 270 215 C268 195, 255 180, 258 160 C262 161, 264 165, 263 175 C261 190, 273 205, 276 220 C278 195, 280 185, 283 175 L288 178 C283 200, 282 220, 281 240 L293 210 C297 212, 297 218, 292 230 C288 245, 284 260, 289 285 C295 315, 305 350, 310 380"
                  stroke="#93d7be"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Hand 3 */}
                <path
                  d="M170 390 C175 355, 168 330, 172 295 C174 275, 185 260, 180 235 C176 215, 162 205, 164 185 L169 186 C167 205, 181 220, 185 238 C188 208, 192 195, 195 185 L200 188 C194 210, 192 230, 191 250 L204 220 C208 222, 206 230, 201 245 C195 265, 190 285, 195 315 C200 345, 205 375, 205 390"
                  stroke="#d4af37"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>

              {/* Expressive overlay loose brushstrokes (coral, mint green, gold) */}
              {/* Bold Coral Sweeping stroke */}
              <path
                d="M120 130 C130 90, 280 80, 310 140 C320 160, 250 200, 190 190"
                stroke="#ef7a76"
                strokeWidth="16"
                strokeLinecap="round"
                opacity="0.25"
                className="filter blur-[1px]"
              />
              {/* Mint Green splash */}
              <path
                d="M150 260 C180 230, 270 270, 290 200"
                stroke="#93d7be"
                strokeWidth="12"
                strokeLinecap="round"
                opacity="0.22"
              />
              {/* Gold slash */}
              <path
                d="M210 120 L270 240"
                stroke="#d4af37"
                strokeWidth="18"
                strokeLinecap="round"
                opacity="0.18"
                className="filter blur-[2px]"
              />

              {/* Main glowing laptop screen and sleek robot figure (Pencil sketch style) */}
              <g className="opacity-90">
                {/* Screen Outline */}
                <path
                  d="M150 210 L160 142 C161 138, 164 135, 168 135 L282 145 C286 145, 289 149, 288 153 L278 221 C277 225, 274 228, 270 228 L156 218 C152 218, 149 214, 150 210 Z"
                  stroke="#ffffff"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Screen Inner lines */}
                <path
                  d="M157 205 L165 149 L276 156 L268 214 Z"
                  stroke="#a8a29e"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
                {/* Glowing Golden Face of Robot inside Screen */}
                <path
                  d="M190 185 C195 170, 215 171, 220 185 L225 180"
                  stroke="#d4af37"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  className="animate-pulse"
                />
                {/* Robot Ears/Prongs */}
                <path
                  d="M185 160 Q175 140 182 135"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                />
                {/* Laptop Keyboard Base */}
                <path
                  d="M136 226 L154 217 L272 227 L285 244 C287 246, 285 250, 281 250 L141 237 C138 237, 135 234, 134 231 Z"
                  stroke="#ffffff"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Keyboard Grid scribble */}
                <path
                  d="M150 230 L260 238 M155 233 L255 241"
                  stroke="#a8a29e"
                  strokeWidth="1.2"
                />

                {/* Hand-drawn sketchy wires leaking out representing artificial/biological merge */}
                <path
                  d="M135 233 Q110 240 105 265 T120 300"
                  stroke="#ffffff"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  opacity="0.6"
                />
                <path
                  d="M280 241 Q305 250 310 275 T290 315"
                  stroke="#a8a29e"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  opacity="0.5"
                />
              </g>

              <defs>
                <radialGradient id="goldGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#d4af37" />
                  <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-end mt-3 md:mt-4 pt-3 border-t border-dashed border-stone-850/70 gap-2">
        <div className="flex flex-col space-y-0.5">
          <span className="font-sans text-[10px] uppercase text-stone-500 tracking-wider">
            AN INTUITIVE CHRONICLE
          </span>
          <span className="font-typewriter text-xs text-stone-400">
            PASQUINELLI GENEALOGY STUDY
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="h-px w-6 bg-stone-700 hidden sm:block" />
          <span className="font-sans text-[11px] tracking-widest text-[#ef7a76] font-semibold uppercase">
            AI · LABOUR · POWER
          </span>
        </div>
      </div>

      {/* Grid overlay lines to emphasize corporate-blueprint style */}
      <div className="absolute inset-0 border border-stone-800 pointer-events-none m-4 flex flex-col justify-start">
        <div className="h-px bg-stone-900 border-dashed border-b border-stone-800 m-8" />
        {/* The bottom grid dashed line is safely placed above as a static flow-border on the Bottom Section to avoid text collisions */}
      </div>
    </div>
  );
}
