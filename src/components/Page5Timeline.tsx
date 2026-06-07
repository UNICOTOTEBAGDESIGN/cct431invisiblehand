import { motion } from "motion/react";
import { PageProps } from "../types";

export default function Page5Timeline({ isActive }: PageProps) {
  const nodes = [
    {
      year: "1880s",
      title: "Craniometry",
      caption: "Scientists claimed skull size determined intelligence. The ranking always placed white Europeans at the top.",
      illustration: (
        <svg viewBox="0 0 100 80" className="w-14 h-11 stroke-stone-800 fill-none" strokeWidth="1.2" strokeLinecap="round">
          {/* Calipers sketch */}
          <path d="M12 45 Q35 15 50 15 Q65 15 88 45" />
          <path d="M22 45 Q35 25 50 25 Q65 25 78 45" />
          {/* Simple skull shape */}
          <path d="M40 40 C35 30, 65 30, 60 40 C60 45, 55 45, 55 52 L45 52 L45 45 Z" fill="#fafaf9" />
          <line x1="42" y1="46" x2="46" y2="46" />
          <line x1="54" y1="46" x2="58" y2="46" />
          {/* Teeth ticks */}
          <line x1="47" y1="52" x2="47" y2="50" />
          <line x1="50" y1="52" x2="50" y2="50" />
          <line x1="53" y1="52" x2="53" y2="50" />
        </svg>
      ),
    },
    {
      year: "1900s–1950s",
      title: "The IQ Test",
      caption: "Psychometrics promised to measure the human mind. It mostly measured who was considered fully human.",
      illustration: (
        <svg viewBox="0 0 100 80" className="w-14 h-11 stroke-stone-800 fill-none" strokeWidth="1.2" strokeLinecap="round">
          {/* Paper and Desk */}
          <rect x="25" y="15" width="50" height="42" rx="2" strokeWidth="1.5" fill="#fafaf9" />
          <line x1="33" y1="25" x2="67" y2="25" />
          <line x1="33" y1="32" x2="58" y2="32" />
          <line x1="33" y1="39" x2="62" y2="39" />
          {/* Pencil */}
          <path d="M68 44 L77 34 L73 30 L64 40 Z" fill="#fafaf9" />
          <path d="M64 40 L61 43 L65 41 Z" fill="#000" />
          {/* Big red marker circle and check */}
          <circle cx="58" cy="33" r="10" stroke="#ef7a76" strokeWidth="1" strokeDasharray="2,2" />
          <path d="M52 32 L56 36 L65 26" stroke="#ef7a76" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      year: "1957",
      title: "The Perceptron",
      caption: "Frank Rosenblatt applied psychometric techniques to machine image recognition. The bias did not disappear. It was automated.",
      illustration: (
        <svg viewBox="0 0 100 80" className="w-14 h-11 stroke-stone-800 fill-none" strokeWidth="1.2" strokeLinecap="round">
          {/* Clunky vintage cabinet */}
          <rect x="20" y="10" width="60" height="55" rx="3" fill="#f5f5f4" strokeWidth="1.5" />
          <circle cx="35" cy="22" r="5" fill="#b45309" stroke="none" />
          <circle cx="50" cy="22" r="3" fill="#047857" stroke="none" />
          <circle cx="65" cy="22" r="4" fill="#1d4ed8" stroke="none" />
          {/* Oscilloscope Grid */}
          <rect x="30" y="35" width="40" height="20" fill="#292524" />
          <path d="M30 45 L40 40 L45 50 L52 38 L60 48 L70 45" stroke="#22c55e" strokeWidth="1" />
          {/* Stray wires leaking outside */}
          <path d="M50 65 Q40 75 25 72" stroke="#b45309" strokeWidth="1" />
          <path d="M64 65 Q74 76 80 71" stroke="#ef7a76" strokeWidth="1" />
        </svg>
      ),
    },
    {
      year: "2012",
      title: "Deep Learning Revolution",
      caption: "The same statistical logic, now at planetary scale.",
      illustration: (
        <svg viewBox="0 0 100 80" className="w-14 h-11 stroke-stone-800 fill-none" strokeWidth="1.2">
          {/* Neural Network Nodes */}
          {/* Input Layer */}
          <circle cx="20" cy="20" r="3.5" fill="#fafaf9" />
          <circle cx="20" cy="40" r="3.5" fill="#fafaf9" />
          <circle cx="20" cy="60" r="3.5" fill="#fafaf9" />
          {/* Hidden layer */}
          <circle cx="50" cy="15" r="3.5" fill="#ef7a76" />
          <circle cx="50" cy="30" r="3.5" fill="#fafaf9" />
          <circle cx="50" cy="50" r="3.5" fill="#fafaf9" />
          <circle cx="50" cy="65" r="3.5" fill="#d4af37" />
          {/* Output layer */}
          <circle cx="80" cy="30" r="3.5" fill="#fafaf9" />
          <circle cx="80" cy="50" r="3.5" fill="#fafaf9" />
          {/* Connection Lines (Pencil-scribble look) */}
          <path d="M23.5 20 L46.5 15 M23.5 20 L46.5 30" />
          <path d="M23.5 40 L46.5 30 M23.5 40 L46.5 50" />
          <path d="M23.5 60 L46.5 50 M23.5 60 L46.5 65" />
          <path d="M53.5 15 L76.5 30 M53.5 30 L76.5 30 M53.5 50 L76.5 50 M53.5 65 L76.5 50" />
        </svg>
      ),
    },
    {
      year: "Today",
      title: "Large Language Models",
      caption: "You are talking to a system built on a 150-year-old hierarchy. It has never been neutral.",
      illustration: (
        <svg viewBox="0 0 100 80" className="w-14 h-11 stroke-stone-800 fill-none" strokeWidth="1.2" strokeLinecap="round">
          {/* Smartphone outlines */}
          <rect x="30" y="8" width="40" height="64" rx="5" fill="#fafaf9" strokeWidth="1.5" />
          {/* Screen boundary */}
          <rect x="33" y="14" width="34" height="46" />
          {/* Chat bubbles */}
          <path d="M36 21 H56 V27 H39 L36 30 Z" fill="#93d7be" opacity="0.4" />
          <path d="M64 35 H44 V41 H61 L64 44 Z" fill="#ef7a76" opacity="0.4" />
          <path d="M36 49 H52 V55 H39 L36 58 Z" fill="#d4af37" opacity="0.4" />
        </svg>
      ),
    },
  ];

  return (
    <div className="relative w-full h-full min-h-0 p-4 sm:p-6 md:p-8 lg:p-10 paper-texture text-stone-900 flex flex-col justify-between overflow-y-auto zine-scrollbar">
      {/* Background large mint-green brushstroke running diagonally */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-35">
        <svg viewBox="0 0 500 500" className="w-full h-full">
          <path
            d="M50 450 C120 400, 380 150, 450 50"
            stroke="#93d7be"
            strokeWidth="38"
            strokeLinecap="round"
            fill="none"
            opacity="0.35"
            className="filter blur-[6px]"
          />
        </svg>
      </div>

      {/* Top Banner Info */}
      <div className="relative z-10 flex justify-between items-center border-b border-stone-200 pb-2">
        <span className="font-sans text-[9px] tracking-widest text-[#d4af37] font-bold uppercase">
          CHRONOLOGICAL GENEALOGY STUDY
        </span>
        <span className="font-typewriter text-[9px] text-stone-500">
          PAGE 05 // TIMELINE
        </span>
      </div>

      {/* Main Timeline Section */}
      <div className="relative z-10 flex-1 my-6 max-w-2xl mx-auto w-full flex flex-col justify-between relative">
        {/* The wobbly, wapping timeline line right in the middle-left */}
        <div className="absolute left-[30px] md:left-1/2 top-4 bottom-4 w-1 pointer-events-none transform -translate-x-1/2 opacity-60">
          <svg className="h-full w-4 overflow-visible stroke-stone-900 fill-none" strokeWidth="1.5">
            <path
              d="M2 0 Q10 100 0 200 T4 400 T-4 600 T6 800"
              style={{ strokeDasharray: "4,4" }}
            />
          </svg>
        </div>

        {/* Nodes Container */}
        <div className="space-y-6 md:space-y-8 relative">
          {nodes.map((node, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -15 : 15 }}
              animate={isActive ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              className={`flex flex-row md:items-center relative ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Left/Right Text Card */}
              <div className="w-4/5 md:w-[45%] pl-12 md:pl-0 md:px-6 relative">
                {/* Year Label */}
                <div className="flex items-center space-x-2">
                  <span className="font-typewriter text-[10px] text-[#ef7a76] font-bold">
                    {node.year}
                  </span>
                  <div className="h-px w-3 bg-stone-300" />
                  <span className="font-sans text-xs font-bold uppercase tracking-wider text-[#d4af37]">
                    {node.title}
                  </span>
                </div>

                {/* Caption */}
                <p className="mt-1 font-typewriter text-[11px] leading-relaxed text-stone-600">
                  {node.caption}
                </p>
              </div>

              {/* The Timeline Node Dot */}
              <div className="absolute left-[30px] md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-20">
                <div className="w-[10px] h-[10px] rounded-full bg-stone-900 border-2 border-amber-100 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ef7a76]" />
                </div>
              </div>

              {/* Graphical illustration bubble */}
              <div className="hidden md:flex w-[45%] px-6 justify-center">
                <div className="p-1 px-3 bg-white/75 border border-stone-200/50 rounded-lg shadow-sm hover:shadow-md hover:scale-103 transition-all duration-300">
                  {node.illustration}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom section line */}
      <div className="relative z-10 border-t border-stone-200 pt-3 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : {}}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="font-sans text-xs md:text-sm font-black tracking-tight text-stone-950 uppercase"
        >
          AI did not inherit our best thinking. It inherited our oldest biases.
        </motion.p>
      </div>
    </div>
  );
}
