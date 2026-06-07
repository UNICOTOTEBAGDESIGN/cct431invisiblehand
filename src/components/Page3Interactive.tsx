import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PageProps } from "../types";
import { Eye, Layers, ArrowRight, CornerDownRight } from "lucide-react";

export default function Page3Interactive({ isActive }: PageProps) {
  // State: false = "What You See" (Default State 1)
  //        true = "What Powers It" (State 2)
  const [revealed, setRevealed] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleViewportClick = (e: React.MouseEvent) => {
    if (!hasInteracted) {
      setHasInteracted(true);
      return; // Dismisss the overlay instruction, but stay on State 1 (unrevealed)
    }
    setRevealed(prev => !prev);
  };

  return (
    <div
      className={`relative w-full h-full min-h-0 p-2 xs:p-3 sm:p-4.5 md:p-5.5 lg:p-7 flex flex-col justify-between overflow-y-auto zine-scrollbar transition-colors duration-700 ${
        revealed ? "bg-stone-950 text-amber-100/90" : "bg-zinc-950 text-zinc-100"
      }`}
    >
      {/* Background grain & grids */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-4 border border-zinc-850" />
        <div className="absolute top-1/2 left-0 right-0 h-px border-t border-dashed border-zinc-800" />
      </div>

      {/* Top Section */}
      <div className="relative z-10 flex justify-between items-center bg-zinc-900/40 p-2 rounded-lg border border-zinc-800/50 backdrop-blur-sm shrink-0">
        <div className="flex items-center space-x-2">
          <span className="font-typewriter text-[9px] text-zinc-500 font-bold tracking-wider">
            PAGE 03 // ACTION
          </span>
          <span className="text-zinc-700">|</span>
          <span
            className={`font-sans text-[10px] tracking-wider transition-colors duration-300 font-semibold uppercase ${
              revealed ? "text-amber-500" : "text-sky-400"
            }`}
          >
            {revealed ? "Revealing: Hidden Infrastructure" : "Active: Client Surface"}
          </span>
        </div>

        {/* Master Peel/Reveal Toggle Switch */}
        <button
          onClick={() => {
            setRevealed(!revealed);
            setHasInteracted(true);
          }}
          id="toggle-state"
          className={`flex items-center space-x-1.5 px-3 py-1 rounded text-xs transition-all duration-300 transform active:scale-95 ${
            revealed
              ? "bg-amber-900/50 hover:bg-amber-900/70 text-amber-200 border border-amber-600/50"
              : "bg-sky-950/50 hover:bg-sky-950/70 text-sky-200 border border-sky-600/50"
          }`}
          title="Toggle view to peel back the surface"
        >
          {revealed ? (
            <>
              <Eye className="w-3.5 h-3.5" />
              <span className="font-typewriter text-[10px]">REVERT SURFACE</span>
            </>
          ) : (
            <>
              <Layers className="w-3.5 h-3.5" />
              <span className="font-typewriter text-[10px]">PEEL BACK THE SCREEN</span>
            </>
          )}
        </button>
      </div>

      {/* Main Interactive Screen Viewport */}
      <div className="relative z-10 my-1.5 xs:my-2 sm:my-3 lg:my-3.5 flex-1 flex flex-col justify-center items-center w-full max-w-[580px] mx-auto min-h-0">
        {/* State Label Indicator - flows naturally to prevent overflow overlap */}
        <div className="flex justify-center items-center space-x-1 font-sans text-[8px] xs:text-[9px] sm:text-[9.5px] tracking-widest font-black uppercase text-stone-500 mb-1.5 sm:mb-2.5 shrink-0">
          <span className={revealed ? "text-stone-600" : "text-sky-400"}>WHAT YOU SEE</span>
          <span className="text-zinc-600">/</span>
          <span className={revealed ? "text-amber-500 underline underline-offset-4" : "text-stone-600"}>
            WHAT POWERS IT
          </span>
        </div>

        {/* The Viewport Box */}
        <div
          onClick={handleViewportClick}
          className={`relative w-full h-[180px] xs:h-[200px] sm:h-[220px] md:h-[250px] lg:h-[285px] rounded-xl overflow-hidden border transition-all duration-700 cursor-pointer shadow-2xl group shrink-0 ${
            revealed
              ? "border-amber-900/60 bg-amber-950/15 shadow-amber-950/20"
              : "border-sky-900/60 bg-sky-950/10 shadow-sky-950/20 hover:border-sky-800"
          }`}
        >
          {/* Intense tutorial attention card overlay */}
          <AnimatePresence>
            {!hasInteracted && !revealed && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-zinc-950/90 z-40 flex flex-col justify-center items-center p-4 backdrop-blur-[2px]"
              >
                <motion.div 
                  className="bg-[#0e1726] border border-sky-500/50 p-4 sm:p-5 rounded-lg max-w-[340px] text-center shadow-2xl"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                  <div className="inline-block bg-sky-500/10 text-sky-400 border border-sky-450/40 text-[9px] font-mono tracking-widest px-2 py-0.5 rounded mb-2 uppercase font-black">
                    ACTION REQUIRED
                  </div>
                  <h4 className="font-serif text-sm font-bold text-white mb-1.5">
                    Deconstruct the AI Interface
                  </h4>
                  <p className="font-sans text-[11px] text-zinc-350 leading-relaxed mb-3">
                    Click anywhere inside this viewport panel to peel back the pristine interface and expose the physical human labor working behind the black box.
                  </p>
                  <div className="inline-flex items-center space-x-1.5 font-sans text-[10px] font-black text-sky-400 animate-pulse tracking-wider">
                    <span>CLICK SCREEN TO DECONSTRUCT</span>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence mode="wait">
            {!revealed ? (
              /* STATE 1: WHAT YOU SEE */
              <motion.div
                key="state1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 p-2.5 xs:p-3 sm:p-4 flex flex-col justify-between h-full"
              >
                {/* Float Status Info */}
                <div className="flex justify-between items-center bg-zinc-950/25 p-1 rounded">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-sans text-[8px] xs:text-[9px] sm:text-[10px] text-zinc-400 font-bold uppercase tracking-wider">
                      PROGNOSIS-API (v4.1.2)
                    </span>
                  </div>
                  <span className="font-mono text-[7.5px] xs:text-[8.5px] sm:text-[9px] text-sky-400/80 bg-sky-950/40 px-1.5 py-0.5 rounded">
                    LATENCY: 12ms
                  </span>
                </div>

                {/* Center: Glowing AI Chat Interface with cursor */}
                <div className="w-full max-w-[360px] mx-auto p-2 sm:p-3 rounded-lg bg-zinc-900/70 border border-zinc-900/50 backdrop-blur-sm shadow-md flex flex-col space-y-1 xs:space-y-1.5 sm:space-y-2">
                  {/* Minimized window top bar */}
                  <div className="flex justify-between items-center pb-1 border-b border-zinc-800">
                    <div className="flex space-x-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
                    </div>
                    <span className="font-mono text-[8.5px] text-zinc-500 font-semibold flex items-center space-x-1">
                      <span>SECURE CHAT</span>
                      {!hasInteracted ? (
                        <span className="text-sky-400 tracking-wider text-[7px] animate-pulse">(UNPEELED)</span>
                      ) : (
                        <span className="text-[#ef7a76] tracking-wider text-[7px] animate-pulse">(CLICK TO PEEL)</span>
                      )}
                    </span>
                  </div>

                  {/* Chat flow */}
                  <div className="space-y-1 xs:space-y-1.5 text-left">
                    <div className="bg-zinc-800/80 p-1.5 xs:p-2 rounded-lg text-[9px] xs:text-[10px] sm:text-xs font-sans max-w-[85%] self-start text-zinc-300">
                      "Help me synthesize a policy brief on micro-tasking algorithms."
                    </div>

                    <div className="p-1.5 xs:p-2 rounded-lg text-[9px] xs:text-[10px] sm:text-xs font-sans max-w-[90%] self-end bg-sky-950/50 border border-sky-900/50 text-sky-200">
                      <span className="font-bold underline text-sky-300 text-[8px] xs:text-[8.5px] sm:text-[9px]">SYSTEM RESPONSE:</span>
                      <p className="mt-0.5 leading-relaxed">
                        Policy structures coordinate hyper-scalable worker queues to achieve seamless
                        analytical processing...
                        <span className="inline-block w-1 h-2.5 bg-sky-400 ml-1 animate-pulse" />
                      </p>
                    </div>
                  </div>

                  {/* Progress completion bar */}
                  <div className="w-full bg-zinc-800 h-0.5 sm:h-1 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                      className="bg-sky-400 h-full"
                    />
                  </div>
                </div>

                {/* Floating words and checklist circles (Corporate Perfection) */}
                <div className="flex justify-around items-center text-[7px] xs:text-[8px] sm:text-[9.5px] text-zinc-400 font-sans tracking-wide px-1 space-x-1">
                  <span className="flex items-center space-x-0.5">
                    <span className="text-sky-400">✓</span>
                    <span>100% SECURE</span>
                  </span>
                  <span className="flex items-center space-x-0.5">
                    <span className="text-sky-400">✓</span>
                    <span>EFFICIENT DELIVERY</span>
                  </span>
                  <span className="flex items-center space-x-0.5">
                    <span className="text-sky-400">✓</span>
                    <span>INSTANT RESPONSE</span>
                  </span>
                </div>
              </motion.div>
            ) : (
              /* STATE 2: WHAT POWERS IT (Peeled Screen / Human Labor Reveal) */
              <motion.div
                key="state2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 p-2 xs:p-2.5 sm:p-3.5 flex flex-col justify-between paper-texture opacity-95 text-stone-900 h-full"
              >
                {/* Background sketch of global south map faintly glowing */}
                <div className="absolute inset-0 opacity-15 pointer-events-none flex justify-center items-center">
                  <svg
                    viewBox="0 0 500 240"
                    className="w-4/5 h-4/5"
                    fill="none"
                    stroke="#b45309"
                    strokeWidth="1"
                    strokeDasharray="3,3"
                  >
                    {/* Outline representing simplified Indian Subcontinent, SE Asia, East Africa */}
                    <path d="M50 120 C100 120, 150 140, 170 170 C190 190, 220 180, 240 160 C260 140, 300 200, 320 210 C340 220, 390 180, 420 190" />
                    <text x="140" y="195" className="font-sans text-[8px] fill-amber-700 font-semibold uppercase tracking-widest">
                      INDIA
                    </text>
                    <text x="310" y="215" className="font-sans text-[8px] fill-amber-700 font-semibold uppercase tracking-widest">
                      PHILIPPINES
                    </text>
                    <text x="60" y="150" className="font-sans text-[8px] fill-amber-700 font-semibold uppercase tracking-widest">
                      KENYA
                    </text>
                  </svg>
                </div>

                {/* Peel-away info top banner */}
                <div className="flex justify-between items-center border-b border-amber-900/20 pb-0.5 relative z-10">
                  <span className="font-typewriter text-[7px] xs:text-[7.5px] sm:text-[8px] text-[#ef7a76] font-bold">
                    [UNDERLYING RECORD: OUTSOURCED SERVICE QUEUES]
                  </span>
                  <span className="font-mono text-[7px] xs:text-[7.5px] sm:text-[8.5px] text-amber-750 font-bold">
                    REAL WAGE: $1.32/HR
                  </span>
                </div>

                {/* Center: Interrupted cracked chat container displaying people hunched in cubicles */}
                <div className="relative z-10 w-full max-w-[450px] mx-auto p-1.5 xs:p-2.5 sm:p-3.5 rounded-lg bg-orange-50/95 border border-amber-900/30 shadow-md flex flex-col space-y-1.5 sm:space-y-2">
                  {/* Cracked Screen Frame Outline */}
                  <div className="absolute -top-2.5 -left-1 sm:-left-3 text-[#ef7a76] font-mono text-[7px] xs:text-[8px] sm:text-[9px] font-bold px-1.5 py-0.5 bg-amber-100 rounded border border-amber-900/10 shadow-sm leading-none">
                    PEELED EXPOSURE
                  </div>

                  <div className="grid grid-cols-2 gap-2 sm:gap-4">
                    {/* Pencil drawing 1: worker crouching over a monitor tagging image pixels */}
                    <div className="flex flex-col space-y-0.5 xs:space-y-1 items-center border border-amber-900/10 p-1 rounded bg-stone-50/50">
                      <span className="font-typewriter text-[7px] xs:text-[8px] sm:text-[9px] text-[#ef7a76] font-bold italic text-center block leading-tight">
                        "Tagging car, pixel by pixel..."
                      </span>
                      <svg viewBox="0 -14 100 79" className="w-full h-8 xs:h-10 sm:h-12 md:h-14 opacity-85">
                        {/* Desk & Chair */}
                        <line x1="10" y1="58" x2="90" y2="58" stroke="#78350f" strokeWidth="1.5" />
                        {/* Hunched Worker */}
                        <path
                          d="M20 58 L25 45 L35 48 C30 35, 42 20, 50 18 C55 18, 56 22, 54 26 C50 35, 52 45, 60 48"
                          stroke="#1c1917"
                          strokeWidth="1.2"
                          fill="none"
                        />
                        {/* Rounded Head */}
                        <circle cx="53" cy="14" r="5" fill="#fafaf9" stroke="#1c1917" strokeWidth="1.2" />
                        {/* Arms pointing at display */}
                        <path d="M42 32 Q58 35 68 31" stroke="#1c1917" strokeWidth="1.2" />
                        <path d="M41 38 Q56 41 69 33" stroke="#1c1917" strokeWidth="1.2" />
                        {/* Display monitor displaying bounding boxes */}
                        <rect x="68" y="20" width="16" height="15" stroke="#78350f" strokeWidth="1" fill="#fff" />
                        <rect x="71" y="24" width="7" height="6" stroke="#ef7a76" strokeWidth="0.8" strokeDasharray="1,1" />
                        <line x1="76" y1="35" x2="76" y2="45" stroke="#78350f" strokeWidth="1" />
                      </svg>
                      <span className="font-typewriter text-[5.5px] xs:text-[6.5px] sm:text-[7.5px] text-stone-500 text-center uppercase tracking-tight">
                        PILOT LABELLER #832 // BANGALORE
                      </span>
                    </div>

                    {/* Pencil drawing 2: content moderator in headphones, tired posture */}
                    <div className="flex flex-col space-y-0.5 xs:space-y-1 items-center border border-amber-900/10 p-1 rounded bg-stone-50/50">
                      <span className="font-typewriter text-[7px] xs:text-[8px] sm:text-[9px] text-[#ef7a76] font-bold italic text-center block leading-tight">
                        "Flagging hate speech..."
                      </span>
                      <svg viewBox="0 -14 100 79" className="w-full h-8 xs:h-10 sm:h-12 md:h-14 opacity-85">
                        {/* Desk */}
                        <line x1="10" y1="58" x2="90" y2="58" stroke="#78350f" strokeWidth="1.5" />
                        {/* Headphone wearer hunched */}
                        <path
                          d="M25 58 L32 44 C28 35, 34 22, 45 20 C48 20, 52 24, 48 30 C45 35, 48 48, 55 52"
                          stroke="#1c1917"
                          strokeWidth="1.2"
                          fill="none"
                        />
                        {/* Head */}
                        <circle cx="46" cy="14" r="5.5" fill="#fafaf9" stroke="#1c1917" strokeWidth="1.2" />
                        {/* Headphones */}
                        <path d="M39 12 Q46 5 53 12" stroke="#1c1917" strokeWidth="1.8" />
                        <circle cx="39" cy="14" r="2" fill="#000" />
                        <circle cx="53" cy="14" r="2" fill="#000" />
                        {/* Hands in lap */}
                        <path d="M34 38 Q42 42 45 48" stroke="#1c1917" strokeWidth="1" />
                        {/* Display with red flagged icon */}
                        <rect x="68" y="20" width="18" height="15" stroke="#78350f" strokeWidth="1" fill="#fff" />
                        <path d="M77 24 L77 30 M77 32 L77 32" stroke="#ef7a76" strokeWidth="1.5" /> {/* Exclamation point */}
                        <line x1="77" y1="35" x2="77" y2="45" stroke="#78350f" strokeWidth="1" />
                      </svg>
                      <span className="font-typewriter text-[5.5px] xs:text-[6.5px] sm:text-[7.5px] text-stone-500 text-center uppercase tracking-tight">
                        MODERATOR #109 // MANDALUYONG
                      </span>
                    </div>
                  </div>
                </div>

                {/* Strikethrough terms - illustrating shift from pristine client UI words */}
                <div className="flex justify-around items-center text-[6.5px] xs:text-[7.5px] sm:text-[8px] md:text-[9px] font-sans font-bold relative z-10 w-full px-1 space-x-1">
                  <span className="flex items-center space-x-0.5">
                    <span className="line-through text-stone-400">EFFICIENT</span>
                    <ArrowRight className="w-1.5 h-1.5 xs:w-2 xs:h-2 text-[#ef7a76] shrink-0" />
                    <span className="text-[#ef7a76] font-typewriter underline">OUTSOURCED</span>
                  </span>
                  <span className="flex items-center space-x-0.5">
                    <span className="line-through text-stone-400">INSTANT</span>
                    <ArrowRight className="w-1.5 h-1.5 xs:w-2 xs:h-2 text-[#ef7a76] shrink-0" />
                    <span className="text-[#ef7a76] font-typewriter underline">OVERWORKED</span>
                  </span>
                  <span className="flex items-center space-x-0.5">
                    <span className="line-through text-stone-400">AUTOMATED</span>
                    <ArrowRight className="w-1.5 h-1.5 xs:w-2 xs:h-2 text-[#ef7a76] shrink-0" />
                    <span className="text-[#ef7a76] font-typewriter underline">MANUAL LABOR</span>
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Interactive annotations / Quote Section */}
      <div className="relative z-10 pt-1.5 border-t border-zinc-900 mt-1 sm:mt-1.5 shrink-0">
        <AnimatePresence mode="wait">
          {!revealed ? (
            /* STATE 1: CORPORATE EXPLANATION */
            <motion.div
              key="exp1"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-left w-full"
            >
              <div className="flex-1 max-w-[420px] sm:max-w-xl">
                <p className="font-sans text-[10px] xs:text-[11px] sm:text-xs text-zinc-400 leading-relaxed">
                  Behind the seamless AI interfaces we engage with daily lies a polished, black-box illusion.
                  Promises of pure self-learning computation keep the consumer decoupled from physical friction.
                </p>
              </div>
              <div className="flex justify-start sm:justify-end shrink-0 mt-0.5 sm:mt-0">
                <span className="inline-flex items-center space-x-1.5 text-stone-400 font-sans text-[7.5px] xs:text-[8.5px] sm:text-[9px] tracking-wider uppercase font-extrabold bg-zinc-900/60 sm:bg-transparent px-1.5 py-0.5 sm:px-0 sm:py-0 rounded">
                  <span>TAP PREVIEW CARD</span>
                  <CornerDownRight className="w-3 h-3 text-sky-400 animate-bounce" />
                </span>
              </div>
            </motion.div>
          ) : (
            /* STATE 2: REVEALED POLITICAL EXPLANATION */
            <motion.div
              key="exp2"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="flex flex-col items-center text-center space-y-1 sm:space-y-1.5"
            >
              <p className="font-typewriter text-[10px] xs:text-[11px] sm:text-xs text-[#ef7a76] font-bold max-w-2xl leading-relaxed">
                The frictionless cloud is a geographical illusion.
                Those chat bubbles are processed, categorized, and cleaned by human beings in the global
                periphery, working for cents a minute in repetitive shifts.
              </p>

              {/* Bold core typography line */}
              <motion.p
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="font-serif text-[10.5px] xs:text-[11px] sm:text-xs md:text-sm font-bold italic text-amber-500 border-t border-[#ef7a76]/20 pt-1 sm:pt-1.5 w-full text-center tracking-tight"
              >
                "Every prompt you send is built on labor you will never see."
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
