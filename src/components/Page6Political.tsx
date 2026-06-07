import { useState } from "react";
import { motion } from "motion/react";
import { PageProps } from "../types";

export default function Page6Political({ isActive }: PageProps) {
  const [hoveredStrings, setHoveredStrings] = useState(false);

  return (
    <div className="relative w-full h-full min-h-0 paper-dark text-stone-100 p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-between overflow-y-auto zine-scrollbar">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-[#ef7a76]/15 blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-[#d4af37]/10 blur-3xl" />
      </div>

      {/* Top Banner Info */}
      <div className="relative z-10 flex justify-between items-center border-b border-stone-900 pb-2">
        <span className="font-sans text-[9px] tracking-widest text-[#ef7a76] font-bold uppercase">
          POLITICAL CRITIQUE // PASQUINELLI REPORT
        </span>
        <span className="font-typewriter text-[9px] text-stone-500">
          PAGE 06 // CRITICAL COLUMN
        </span>
      </div>

      {/* Main Grid: Left Illustration, Right Text column */}
      <div className="relative z-10 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 my-auto items-center">
        {/* Left column: 60% span */}
        <div
          className="lg:col-span-7 flex justify-center relative bg-stone-950/40 p-4 rounded-xl border border-stone-900/50"
          onMouseEnter={() => setHoveredStrings(true)}
          onMouseLeave={() => setHoveredStrings(false)}
        >
          <div className="absolute top-2 left-2 font-sans text-[8px] text-stone-500 tracking-wider">
            [INTERACTIVE INTERFACE WEB LOGIC]
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={isActive ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1 }}
            className="w-full max-w-[380px] aspect-square relative"
          >
            <svg
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full animate-fadeIn"
            >
              <defs>
                <radialGradient id="glowAmber" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ef7a76" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#ef7a76" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="screenBeam" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ef7a76" stopOpacity="0.25" />
                  <stop offset="40%" stopColor="#d4af37" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Glowing ambiance inside the room */}
              <circle cx="200" cy="200" r="160" fill="url(#glowAmber)" opacity="0.6" />

              {/* Tech Perspective Grid Floor */}
              <g stroke="#22252a" strokeWidth="0.8">
                <path d="M 30 330 H 370" stroke="#333b47" strokeWidth="1.2" />
                <path d="M 60 330 L 30 380" />
                <path d="M 120 330 L 100 380" />
                <path d="M 180 330 L 170 380" />
                <path d="M 240 330 L 250 380" />
                <path d="M 300 330 L 320 380" />
                <path d="M 350 330 L 380 380" />
              </g>

              {/* Peripheral Crowdsourced Labor Nodes (Ghost Figures) */}
              {/* Top Left: Delivery Rider */}
              <g opacity="0.32" stroke="#ffffff" strokeWidth="1" className="hover:opacity-80 transition-opacity">
                <path d="M 40 85 L 56 85 L 62 105" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="48" cy="74" r="5" />
                <rect x="33" y="88" width="10" height="12" rx="1" fill="#18181b" />
                <line x1="38" y1="100" x2="38" y2="105" />
                <line x1="42" y1="100" x2="42" y2="105" />
                <text x="25" y="116" className="font-mono text-[7px] fill-stone-400 font-bold tracking-wider" stroke="none">
                  GIG RIDER #71
                </text>
              </g>

              {/* Top Right: Tagging/Labeler */}
              <g opacity="0.32" stroke="#ffffff" strokeWidth="1" className="hover:opacity-80 transition-opacity">
                <rect x="325" y="74" width="18" height="14" rx="2" fill="#18181b" strokeLinecap="round" />
                <circle cx="334" cy="100" r="5" />
                <path d="M 324 102 C 324 95, 344 95, 344 102" />
                <line x1="329" y1="81" x2="339" y2="81" strokeDasharray="1,1" />
                <text x="315" y="116" className="font-mono text-[7px] fill-stone-400 font-bold tracking-wider" stroke="none">
                  DATA TAGGER
                </text>
              </g>

              {/* Bottom Left: Warehouse Picker */}
              <g opacity="0.32" stroke="#ffffff" strokeWidth="1" className="hover:opacity-80 transition-opacity">
                <rect x="35" y="284" width="14" height="14" rx="1" fill="#18181b" />
                <rect x="39" y="278" width="14" height="14" rx="1" fill="#18181b" />
                <circle cx="68" cy="280" r="5" fill="#18181b" />
                <path d="M 60 286 L 76 286" />
                <text x="30" y="312" className="font-mono text-[7px] fill-stone-400 font-bold tracking-wider" stroke="none">
                  AMZN PICKER
                </text>
              </g>

              {/* Bottom Right: Video/Audio Transcriber */}
              <g opacity="0.32" stroke="#ffffff" strokeWidth="1" className="hover:opacity-80 transition-opacity">
                <circle cx="340" cy="275" r="5" />
                <path d="M 335 278 H 345 L 348 290 H 332 Z" fill="#18181b" />
                <path d="M 332 271 C 332 265, 348 265, 348 271" strokeLinecap="round" /> {/* Headset curve */}
                <path d="M 328 292 H 352" strokeDasharray="2,2" />
                <text x="320" y="312" className="font-mono text-[7px] fill-stone-400 font-bold tracking-wider" stroke="none">
                  TRANSCRIBER
                </text>
              </g>

              {/* Sub-network grid lines connecting outskirts to central control platform */}
              <g stroke="#3c3d42" strokeWidth="0.8" strokeDasharray="3,3" opacity="0.4">
                <path d="M 50 115 L 185 45" /> {/* Rider to rig */}
                <path d="M 334 115 L 185 45" /> {/* Tagger to rig */}
                <path d="M 55 275 L 210 275" /> {/* Picker to laptop */}
                <path d="M 330 292 L 210 275" /> {/* Transcriber to laptop */}
              </g>

              {/* THE WORKSTATION: Desk & Laptop Screen Beam */}
              {/* Screen Light Glow Beam onto User */}
              <polygon
                points="215,274 233,222 135,170 115,274"
                fill="url(#screenBeam)"
                opacity="0.35"
                stroke="none"
              />

              {/* Workstation Desk top */}
              <line x1="145" y1="274" x2="260" y2="274" stroke="#57534e" strokeWidth="2.5" strokeLinecap="round" />
              {/* Desk Legs */}
              <line x1="160" y1="274" x2="160" y2="330" stroke="#44403c" strokeWidth="1.5" />
              <line x1="245" y1="274" x2="245" y2="330" stroke="#44403c" strokeWidth="1.5" />

              {/* Keyboard Base and Laptop screen */}
              <rect x="175" y="271" width="34" height="3" rx="1" fill="#1c1917" stroke="#444" strokeWidth="0.8" />
              <line x1="208" y1="274" x2="228" y2="224" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" /> {/* Screen profile */}

              {/* SEATED WORKER (Hunched Silhouette Profile) */}
              {/* Office Chair Support config */}
              <line x1="90" y1="330" x2="115" y2="330" stroke="#444" strokeWidth="2" strokeLinecap="round" />
              <line x1="102" y1="284" x2="102" y2="330" stroke="#57534e" strokeWidth="2.5" />
              <line x1="88" y1="284" x2="116" y2="284" stroke="#ffffff" strokeWidth="2" /> {/* Seat plate cushion */}
              <line x1="90" y1="284" x2="90" y2="230" stroke="#444" strokeWidth="2" strokeLinecap="round" /> {/* Backsupport post */}
              <rect x="85" y="240" width="8" height="24" rx="2" fill="#292524" stroke="#444" strokeWidth="0.8" />

              {/* Human Limbs & Back Silhouette */}
              <g stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
                {/* Leg profile (Seated thighs to feet) */}
                <path d="M 102 284 H 138 V 330" stroke="#78716c" strokeWidth="2" />

                {/* Spine - Hunched Forward Curve */}
                <path d="M 102 284 C 105 255, 115 220, 132 210" stroke="#ffffff" strokeWidth="2.5" />

                {/* Shoulder and Neck assembly */}
                <path d="M 132 210 L 140 190" stroke="#ffffff" strokeWidth="2.5" />

                {/* Active Typing Arms */}
                {/* Upper arm from shoulder (132, 210) to low elbow (125, 244) to wrist resting over keys (173, 270) */}
                <path d="M 132 210 L 123 244 L 173 269" stroke="#ffffff" strokeWidth="2.5" />
              </g>

              {/* Human Head */}
              <circle cx="146" cy="177" r="11" fill="#18181b" stroke="#ffffff" strokeWidth="2" />
              {/* Hair/Eye visor detail */}
              <path d="M 136 177 C 136 166, 156 166, 156 177 Z" fill="#2d2a2e" />

              {/* Glowing Interactive Contacts (Fingertips / Joints / Brain) */}
              <circle cx="173" cy="269" r="3" fill="#ef7a76" className="animate-pulse" /> {/* Wrists */}
              <circle cx="123" cy="244" r="2.5" fill="#ef7a76" /> {/* Elbow */}
              <circle cx="146" cy="177" r="2.5" fill="#ef7a76" className="animate-pulse" /> {/* Center of Head (Cognitive) */}


              {/* PARADOXICAL SYSTEM CONTROLLER : Giant Mechanical Rig at the Ceiling */}
              <g stroke="#57534e" strokeWidth="1.2">
                {/* Main Suspended Rig Pole */}
                <line x1="185" y1="10" x2="185" y2="45" stroke="#333b47" strokeWidth="2" />
                {/* Control T-Bar */}
                <line x1="100" y1="45" x2="270" y2="45" stroke="#ef7a76" strokeWidth="2.2" strokeLinecap="round" />
                {/* T-Bar tick marks for design */}
                <line x1="100" y1="41" x2="100" y2="49" />
                <line x1="135" y1="42" x2="135" y2="48" />
                <line x1="170" y1="42" x2="170" y2="48" />
                <line x1="200" y1="42" x2="200" y2="48" />
                <line x1="235" y1="42" x2="235" y2="48" />
                <line x1="270" y1="41" x2="270" y2="49" />
              </g>

              {/* PULSING GLOWING PUPPET STRINGS (The corporate cords pulling human strings) */}
              <g className="transition-all duration-500">
                {/* Wire 1: Rig Left (122, 45) to Seated Worker Head (146, 177) */}
                <motion.path
                  d="M 122 45 C 122 90, 130 130, 146 166"
                  stroke="#ef7a76"
                  strokeWidth={hoveredStrings ? "2" : "1.2"}
                  strokeDasharray={hoveredStrings ? "none" : "3,1"}
                  className="transition-all"
                  strokeLinecap="round"
                />

                {/* Wire 2: Rig Middle-Left (150, 45) to Worker Elbow (123, 244) */}
                <motion.path
                  d="M 152 45 C 152 110, 115 170, 123 244"
                  stroke="#ef7a76"
                  strokeWidth={hoveredStrings ? "2" : "1.2"}
                  strokeDasharray={hoveredStrings ? "none" : "4,1"}
                  className="transition-all"
                  strokeLinecap="round"
                />

                {/* Wire 3: Rig Middle-Right (200, 45) to Worker hands/wrists (173, 269) */}
                <motion.path
                  d="M 200 45 C 200 120, 180 190, 173 269"
                  stroke="#ef7a76"
                  strokeWidth={hoveredStrings ? "2" : "1.2"}
                  strokeDasharray={hoveredStrings ? "none" : "2,1"}
                  className="transition-all"
                  strokeLinecap="round"
                />

                {/* Wire 4: Rig Far Right (248, 45) to Laptop Screen top edge (228, 224) */}
                <motion.path
                  d="M 248 45 C 248 90, 238 160, 228 224"
                  stroke="#ef7a76"
                  strokeWidth={hoveredStrings ? "2" : "1.2"}
                  className="transition-all"
                  strokeLinecap="round"
                />
              </g>

              {/* Cybernetic active sparkle dots at terminals */}
              <circle cx="146" cy="177" r="3.5" fill="#ef7a76" className="animate-ping" stroke="none" />
              <circle cx="173" cy="269" r="3.5" fill="#d4af37" className="animate-ping" stroke="none" />
              <circle cx="228" cy="224" r="3.2" fill="#ef7a76" className="animate-pulse" />
            </svg>
          </motion.div>
        </div>

        {/* Right column: 40% span */}
        <div className="lg:col-span-5 flex flex-col justify-center text-left space-y-5">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-100 tracking-tight leading-tight select-none">
            The Tool <br />
            Is Using You
          </h2>

          <div className="space-y-4 font-typewriter text-[11px] sm:text-xs text-stone-400 leading-relaxed pr-2">
            <p>
              Philosopher Matteo Pasquinelli puts it plainly: we are not using AI as a prosthetic
              tool. We are becoming prosthetics of a much larger system.
            </p>
            <p>
              Every search, every prompt, every correction you make to an AI output — this is labor. Use
              without reflection is a resource. It is unmeasured, uncompensated, and literally trains
              the next version of the model.
            </p>
            <p>
              The gig economy did not create this logic; it just made the structure visible. AI is now
              applying the same crowdsourced, piece-rate logic to intellectual, analytical, and professional
              endeavors.
            </p>
          </div>

          <div className="py-4 border-y border-stone-900 bg-stone-950/40 px-3 rounded-lg flex flex-col justify-center items-center">
            {/* Pull Quote */}
            <motion.p
              initial={{ scale: 0.95 }}
              animate={isActive ? { scale: 1 } : {}}
              className="font-serif text-[#ef7a76] text-xl sm:text-2xl font-black italic tracking-wide"
            >
              "The prosthesis is us."
            </motion.p>
            <span className="font-typewriter text-[10px] text-stone-500 mt-1 uppercase">
              — MATTEO PASQUINELLI
            </span>
          </div>
        </div>
      </div>

      {/* Bottom alignment line & Right-aligned Scribble */}
      <div className="relative z-10 flex justify-between items-center border-t border-stone-900 pt-3 mt-4">
        <span className="font-sans text-[8px] text-stone-500 uppercase tracking-widest">
          PARADOX OF INTELLECTUAL CAPTURE
        </span>
        <p className="font-typewriter text-[10px] text-stone-400 italic text-right max-w-sm">
          This does not mean AI is evil. It means ownership matters.
        </p>
      </div>
    </div>
  );
}
