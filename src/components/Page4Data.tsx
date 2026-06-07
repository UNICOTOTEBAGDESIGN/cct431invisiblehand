import { motion } from "motion/react";
import { PageProps } from "../types";

export default function Page4Data({ isActive }: PageProps) {
  return (
    <div className="relative w-full h-full min-h-0 paper-dark text-white p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-between overflow-y-auto zine-scrollbar">
      {/* Background Ghost Figures & Subtle brushstrokes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Coral brushstroke top-left */}
        <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-[#ef7a76]/10 blur-2xl" />
        {/* Amber brushstroke bottom-right */}
        <div className="absolute -bottom-12 -right-12 w-64 h-64 rounded-full bg-[#d4af37]/8 blur-2xl animate-pulse" />

        {/* Faint ghostly lines showing row after row of silent crowd workers */}
        <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full opacity-[0.038] stroke-white fill-none" strokeWidth="1">
          {/* Row of ghost desks 1 */}
          <path d="M40 100 L60 80 H90 L110 100 M60 80 V90 M90 80 V90" />
          <circle cx="75" cy="65" r="7" />
          <path d="M60 95 H90" />

          <path d="M160 100 L180 80 H210 L230 100 M180 80 V90 M210 80 V90" />
          <circle cx="195" cy="65" r="7" />
          <path d="M180 95 H210" />

          <path d="M280 100 L300 80 H330 L350 100 M300 80 V90 M330 80 V90" />
          <circle cx="315" cy="65" r="7" />
          <path d="M300 95 H330" />

          {/* Row of ghost desks 2 */}
          <path d="M70 220 L90 200 H120 L140 220 M90 200 V210 M120 200 V210" />
          <circle cx="105" cy="185" r="7" />
          <path d="M90 215 H120" />

          <path d="M220 220 L240 200 H270 L290 220 M240 200 V210 M270 200 V210" />
          <circle cx="255" cy="185" r="7" />
          <path d="M240 215 H270" />

          {/* Row of ghost desks 3 */}
          <path d="M120 340 L140 320 H170 L190 340" />
          <circle cx="155" cy="305" r="7" />
          <path d="M250 340 L270 320 H300 L320 340" />
          <circle cx="285" cy="305" r="7" />
        </svg>
      </div>

      {/* Top Margin label */}
      <div className="relative z-10 flex justify-between items-center border-b border-stone-900 pb-2">
        <span className="font-sans text-[9px] tracking-widest text-[#ef7a76] font-bold uppercase">
          DIAGNOSTIC EVIDENCE
        </span>
        <span className="font-mono text-[9px] text-stone-500">
          PAGE 04 // STATISTICS
        </span>
      </div>

      {/* Main Typographical Area */}
      <div className="relative z-10 flex-1 flex flex-col justify-around my-4 max-w-2xl mx-auto w-full">
        {/* Section 1 */}
        <div className="text-center space-y-1">
          <p className="font-typewriter text-[10px] sm:text-xs text-stone-400 tracking-wide">
            Behind every AI response:
          </p>

          <div className="flex flex-col items-center">
            <motion.h2
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isActive ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="font-serif text-5xl sm:text-6xl md:text-7xl font-extrabold text-stone-100 tracking-tight leading-none"
            >
              $1–2
            </motion.h2>
            <p className="font-sans text-xs sm:text-sm text-stone-400 max-w-sm mt-1 leading-snug">
              average hourly wage for data labelers in the Global South
            </p>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isActive ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-sans text-xs font-bold text-[#ef7a76]/90 tracking-wide mt-2"
          >
            vs. $30+ for equivalent work in North America
          </motion.p>
        </div>

        {/* Divider 1 - Wobbly hand drawn Divider */}
        <div className="w-full h-8 flex justify-center items-center overflow-hidden opacity-40">
          <svg viewBox="0 0 500 20" className="w-full max-w-md stroke-[#d4af37] fill-none" strokeWidth="1.2">
            <path d="M10 8 Q80 12 150 7 T290 10 T410 6 T490 9" />
          </svg>
        </div>

        {/* Section 2 */}
        <div className="text-center space-y-1.5">
          <div className="flex flex-col items-center">
            <motion.h2
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isActive ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-widest leading-none"
            >
              15,000+
            </motion.h2>
            <p className="font-sans text-xs sm:text-sm text-stone-400 max-w-sm mt-1 leading-snug">
              pieces of content reviewed daily by a single content moderator
            </p>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isActive ? { opacity: 0.8 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="font-typewriter text-[9px] sm:text-[10px] text-stone-500 italic max-w-md mx-auto px-4"
          >
            Content that includes: graphic violence, child abuse material, and hate speech
          </motion.p>
        </div>

        {/* Divider 2 */}
        <div className="w-full h-8 flex justify-center items-center overflow-hidden opacity-40">
          <svg viewBox="0 0 500 20" className="w-full max-w-md stroke-[#d4af37] fill-none" strokeWidth="1.2">
            <path d="M10 11 Q110 5 210 13 T360 8 T490 10" />
          </svg>
        </div>

        {/* Section 3 */}
        <div className="text-center space-y-1">
          <motion.p
            initial={{ opacity: 0, y: 5 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-sans text-sm sm:text-base md:text-lg font-bold text-stone-100 max-w-lg mx-auto leading-relaxed"
          >
            No mental health support provided <br />
            <span className="text-stone-300 py-0.5 px-1.5 border border-dashed border-stone-800 rounded bg-stone-950/80">
              to 80%
            </span>{" "}
            of overseas moderators
          </motion.p>
        </div>
      </div>

      {/* Bottom alignment line & Right-aligned Scribble */}
      <div className="relative z-10 flex flex-col items-end border-t border-stone-900 pt-3">
        <motion.p
          initial={{ opacity: 0, scale: 0.98 }}
          animate={isActive ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="font-hand text-[#ef7a76] text-xl sm:text-2xl font-black text-right max-w-sm bg-stone-950/60 p-1 rounded-sm border border-stone-900/30 rotate-[-1deg]"
        >
          "The machine does not get tired. <br />
          The person behind it does."
        </motion.p>
      </div>
    </div>
  );
}
