import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronLeft,
  ChevronRight,
  Book,
  Maximize2,
  Volume2,
  VolumeX,
  Info,
  Menu,
  X,
  RefreshCw,
  Compass,
  FileText,
  HelpCircle
} from "lucide-react";

import Page1Cover from "./Page1Cover";
import Page2Ad from "./Page2Ad";
import Page3Interactive from "./Page3Interactive";
import Page4Data from "./Page4Data";
import Page5Timeline from "./Page5Timeline";
import Page6Political from "./Page6Political";
import Page7Empowerment from "./Page7Empowerment";
import Page8BackCover from "./Page8BackCover";

interface ZineStamp {
  id: string;
  pageIndex: number;
  xPct: number;
  yPct: number;
  rotation: number;
  text: string;
  color: string;
  type: string;
}

const STAMP_PRESETS: Record<string, { label: string; color: string; type: string; desc: string }> = {
  EXPOSED: { 
    label: "EXPOSED", 
    color: "#ef7a76", 
    type: "stencil", 
    desc: "Unveils hidden human labor operating behind opaque systems." 
  },
  CLASSIFIED: { 
    label: "CLASSIFIED", 
    color: "#d4af37", 
    type: "capsule", 
    desc: "Marks state or corporate data locked away from public awareness." 
  },
  DECLASSIFIED: { 
    label: "DECLASSIFIED", 
    color: "#38bdf8", 
    type: "capsule", 
    desc: "Demands immediate algorithmic transparency & free knowledge access." 
  },
  "PROTEST!": { 
    label: "PROTEST!", 
    color: "#f43f5e", 
    type: "stencil", 
    desc: "Refuses the standard automation flow; a direct call to action." 
  },
  ORGANIZE: { 
    label: "ORGANIZE", 
    color: "#10b981", 
    type: "star", 
    desc: "Advocates for collective solidarity among atomized micro-workers." 
  },
  "LABOUR COG": { 
    label: "LABOUR COG", 
    color: "#a8a29e", 
    type: "stencil", 
    desc: "Reclaims agency from mechanical subjugation within the tech machine." 
  }
};

export default function ZineLayout() {
  const [currentPage, setCurrentPage] = useState(0); // 0 to 7
  const [isSpreadView, setIsSpreadView] = useState(false); // Mobile defaults to single, desktop can toggle
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notesOpen, setNotesOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Immersive Desk Environmental States
  const [stamps, setStamps] = useState<ZineStamp[]>([]);
  const [activeStamp, setActiveStamp] = useState<string | null>(null);
  const [xeroxFilter, setXeroxFilter] = useState(false);

  // Operational Onboarding Tutorial
  const [showTutorial, setShowTutorial] = useState(true);
  const [tutorialStep, setTutorialStep] = useState(1);

  // Audio elements for the elegant cinematic ambient background score
  const audioCtxRef = useRef<AudioContext | null>(null);
  const activeVoicesRef = useRef<{ osc: OscillatorNode; gain: GainNode }[]>([]);
  const currentChordIndexRef = useRef<number>(0);
  const nextChordTimerRef = useRef<any>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const biquadFilterRef = useRef<BiquadFilterNode | null>(null);
  const requestRef = useRef<number | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const glitchTimerRef = useRef<any>(null);
  const glitchIntensityRef = useRef<number>(0);
  const analyserRef = useRef<AnalyserNode | null>(null);

  // Background MP3 Music references and status
  const [usingBgMusic, setUsingBgMusic] = useState(false);
  const usingBgMusicRef = useRef(false);
  const bgMusicRef = useRef<HTMLAudioElement | null>(null);
  const bgMusicSourceRef = useRef<MediaElementAudioSourceNode | null>(null);

  const setBgMusicActive = (active: boolean) => {
    setUsingBgMusic(active);
    usingBgMusicRef.current = active;
  };

  const CHORD_PROGRESSION = [
    [65.41, 98.00, 164.81, 246.94, 293.66], // C Major 9 (C2, G2, E3, B3, D4)
    [55.00, 82.41, 130.81, 196.00, 246.94], // A Minor 9 (A1, E2, C3, G3, B3)
    [43.65, 65.41, 110.00, 164.81, 196.00], // F Major 9 (F1, C2, A2, E3, G3)
    [49.00, 73.42, 123.47, 164.81, 220.00]  // G6/9 (G1, D2, B2, E3, A3)
  ];

  const BELL_SCALE = [
    261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 587.33, 659.25, 783.99, 880.00
  ];

  const totalPages = 8;

  // Web Audio mechanical stamp thud
  const playStampSound = () => {
    if (isMuted) return;
    try {
      const audioCtx = audioCtxRef.current || new (window.AudioContext || (window as any).webkitAudioContext)();
      if (!audioCtxRef.current) audioCtxRef.current = audioCtx;
      if (audioCtx.state === "suspended") {
        audioCtx.resume();
      }
      
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      const filter = audioCtx.createBiquadFilter();
      
      osc.type = "sine";
      osc.frequency.setValueAtTime(110, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(30, audioCtx.currentTime + 0.16);
      
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(180, audioCtx.currentTime);
      
      gain.gain.setValueAtTime(0.25, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.18);
      
      osc.connect(filter);
      filter.connect(gain);
      gain.connect(audioCtx.destination);
      
      osc.start();
      osc.stop(audioCtx.currentTime + 0.2);
    } catch (e) {
      console.error("Audio error: ", e);
    }
  };

  // Web Audio mechanical page rustle
  const playPageTurnSound = () => {
    if (isMuted) return;
    try {
      const audioCtx = audioCtxRef.current || new (window.AudioContext || (window as any).webkitAudioContext)();
      if (!audioCtxRef.current) audioCtxRef.current = audioCtx;
      if (audioCtx.state === "suspended") {
        audioCtx.resume();
      }
      
      const bufferSize = audioCtx.sampleRate * 0.22;
      const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      const noiseNode = audioCtx.createBufferSource();
      noiseNode.buffer = buffer;
      
      const filter = audioCtx.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.setValueAtTime(800, audioCtx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(320, audioCtx.currentTime + 0.18);
      filter.Q.setValueAtTime(1.2, audioCtx.currentTime);
      
      const gainNode = audioCtx.createGain();
      gainNode.gain.setValueAtTime(0.04, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.2);
      
      noiseNode.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      
      noiseNode.start();
    } catch (e) {
      console.error("Audio error: ", e);
    }
  };

  // Handles page changes
  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
      playPageTurnSound();
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
      playPageTurnSound();
    }
  };

  const handlePageSelect = (index: number) => {
    setCurrentPage(index);
    setSidebarOpen(false);
    playPageTurnSound();
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentPage]);

  // Procedural Generative Cinematic Chords and Melodies
  const playAndFadeChord = () => {
    if (isMuted || !audioCtxRef.current || usingBgMusicRef.current) return;
    try {
      const ctx = audioCtxRef.current;
      const now = ctx.currentTime;
      
      // Smoothly fade out existing chord pad notes
      activeVoicesRef.current.forEach(({ osc, gain }) => {
        try {
          gain.gain.setValueAtTime(gain.gain.value, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 2.5);
          osc.stop(now + 2.6);
        } catch (err) {}
      });
      
      // Select next chord
      const freqs = CHORD_PROGRESSION[currentChordIndexRef.current];
      currentChordIndexRef.current = (currentChordIndexRef.current + 1) % CHORD_PROGRESSION.length;
      
      // Spawn pristine warm synth pad voices for the new chord
      const nextVoices: { osc: OscillatorNode; gain: GainNode }[] = [];
      freqs.forEach((freq, index) => {
        const osc = ctx.createOscillator();
        const voiceGain = ctx.createGain();
        
        // Alternate wave types for warm synth pad composite texture
        osc.type = freq < 100 ? "sine" : "triangle";
        osc.frequency.setValueAtTime(freq, now);
        
        // Detune slightly to create thick, gorgeous organic chorusing
        if (freq > 100) {
          osc.detune.setValueAtTime((index % 2 === 0 ? 6 : -6), now);
        }
        
        voiceGain.gain.setValueAtTime(0.0001, now);
        // Soft linear fade-in (increased for great presence)
        const targetVolume = freq < 100 ? 0.16 : 0.08;
        voiceGain.gain.linearRampToValueAtTime(targetVolume, now + 2.5);
        
        osc.connect(voiceGain);
        if (biquadFilterRef.current) {
          voiceGain.connect(biquadFilterRef.current);
        } else {
          voiceGain.connect(ctx.destination);
        }
        
        osc.start(now);
        nextVoices.push({ osc, gain: voiceGain });
      });
      
      activeVoicesRef.current = nextVoices;
    } catch (e) {
      console.warn("Fading chord sequencer warning:", e);
    }
    
    // Schedule the next chord shift
    nextChordTimerRef.current = setTimeout(playAndFadeChord, 6000);
  };

  const triggerGlitchElectronica = () => {
    if (isMuted || !audioCtxRef.current || usingBgMusicRef.current) return;
    try {
      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      const now = ctx.currentTime;
      // Select randomized beautiful melodic note from our safe bell scale
      const randomNote = BELL_SCALE[Math.floor(Math.random() * BELL_SCALE.length)];

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const chimeFilter = ctx.createBiquadFilter();

      // Soft triangle or pure sine wave for bell resonance
      osc.type = Math.random() > 0.4 ? "sine" : "triangle";
      osc.frequency.setValueAtTime(randomNote, now);

      chimeFilter.type = "lowpass";
      chimeFilter.frequency.setValueAtTime(1400, now);
      chimeFilter.Q.setValueAtTime(1.2, now);

      // Delicate rapid-decay chime envelope (optimized volume)
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.linearRampToValueAtTime(0.062, now + 0.025); // elegant trigger
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.2); // long decaying ring

      osc.connect(chimeFilter);
      chimeFilter.connect(gain);
      
      if (gainNodeRef.current) {
        gain.connect(gainNodeRef.current);
      } else {
        gain.connect(ctx.destination);
      }

      osc.start(now);
      osc.stop(now + 2.4);

      // Set the visual canvas waveform movement in sync with the chime note!
      glitchIntensityRef.current = 2.2;

    } catch (e) {
      console.warn("Melodic music sequence warning:", e);
    }

    // Schedule next melody note with syncopated timing (organic)
    const nextTime = Math.random() * 1200 + 1000;
    glitchTimerRef.current = setTimeout(triggerGlitchElectronica, nextTime);
  };

  // Web Audio Music Setup
  useEffect(() => {
    return () => {
      // Clean up audio on unmount
      if (bgMusicRef.current) {
        try {
          bgMusicRef.current.pause();
          bgMusicRef.current.src = "";
        } catch (e) {}
      }
      if (activeVoicesRef.current) {
        activeVoicesRef.current.forEach(({ osc }) => {
          try {
            osc.stop();
            osc.disconnect();
          } catch (e) {}
        });
      }
      activeVoicesRef.current = [];
      if (glitchTimerRef.current) {
        clearTimeout(glitchTimerRef.current);
      }
      if (nextChordTimerRef.current) {
        clearTimeout(nextChordTimerRef.current);
      }
      if (audioCtxRef.current) {
        try { audioCtxRef.current.close(); } catch (e) {}
      }
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  const handleToggleAudio = () => {
    if (isMuted) {
      try {
        if (!audioCtxRef.current) {
          const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
          const ctx = new AudioContextClass();
          audioCtxRef.current = ctx;

          // Main master volume slider (optimized from 0.38 to 0.58 for rich audibility)
          const masterGain = ctx.createGain();
          masterGain.gain.setValueAtTime(0.58, ctx.currentTime);

          // Configure AnalyserNode for real-time waveform calculations
          const analyser = ctx.createAnalyser();
          analyser.fftSize = 64; // tight layout frequency bin size for beautiful canvas oscillations
          masterGain.connect(analyser);
          analyser.connect(ctx.destination);

          analyserRef.current = analyser;
          gainNodeRef.current = masterGain;

          // Resonant lowpass filter to warm up the pads
          const filter = ctx.createBiquadFilter();
          filter.type = "lowpass";
          filter.frequency.setValueAtTime(450, ctx.currentTime);
          filter.Q.setValueAtTime(1.2, ctx.currentTime);
          filter.connect(masterGain);
          biquadFilterRef.current = filter;

          // Proactively force resume on click
          if (ctx.state === "suspended") {
            ctx.resume();
          }
        } else {
          // Resume context if suspended
          if (audioCtxRef.current.state === "suspended") {
            audioCtxRef.current.resume();
          }
          // Restore the lush audible volume level smoothly
          gainNodeRef.current?.gain.setValueAtTime(0.58, audioCtxRef.current.currentTime);
        }

        const ctx = audioCtxRef.current;

        // Create or configure the background audio element
        if (!bgMusicRef.current) {
          const audio = new Audio("/assets/background.mp3");
          audio.loop = true;
          audio.crossOrigin = "anonymous"; // Safe cross-origin fetch

          audio.addEventListener("error", (e) => {
            console.warn("background.mp3 could not be loaded or played, falling back to procedural pads:", e);
            setBgMusicActive(false);
            
            // Re-trigger procedural fallback chord progression
            if (audioCtxRef.current && audioCtxRef.current.state !== "suspended") {
              if (!nextChordTimerRef.current) {
                currentChordIndexRef.current = 0;
                playAndFadeChord();
              }
              if (!glitchTimerRef.current) {
                glitchTimerRef.current = setTimeout(triggerGlitchElectronica, 300);
              }
            }
          });

          bgMusicRef.current = audio;
        }

        // Try to connect HTML5 Audio to the Web Audio Context so volume, filter and canvas visualizer react to it
        if (bgMusicRef.current && !bgMusicSourceRef.current && ctx) {
          try {
            const source = ctx.createMediaElementSource(bgMusicRef.current);
            if (biquadFilterRef.current) {
              source.connect(biquadFilterRef.current);
            } else if (gainNodeRef.current) {
              source.connect(gainNodeRef.current);
            } else {
              source.connect(ctx.destination);
            }
            bgMusicSourceRef.current = source;
          } catch (e) {
            console.warn("Audio Context media capture restriction, playing directly:", e);
          }
        }

        setIsMuted(false);

        if (bgMusicRef.current) {
          // Play the MP3 from assets!
          bgMusicRef.current.play()
            .then(() => {
              console.log("Successfully streaming background.mp3 from assets folder.");
              setBgMusicActive(true);
              
              // Skip the procedural chord pads so they don't overlap or clash
              if (nextChordTimerRef.current) {
                clearTimeout(nextChordTimerRef.current);
                nextChordTimerRef.current = null;
              }
              if (glitchTimerRef.current) {
                clearTimeout(glitchTimerRef.current);
                glitchTimerRef.current = null;
              }
            })
            .catch((err) => {
              console.warn("Asset audio load error, triggering procedural synthesizer fallback:", err);
              setBgMusicActive(false);

              // Play first chord immediately
              currentChordIndexRef.current = 0;
              playAndFadeChord();

              // Boot up chime melody sequencer
              if (glitchTimerRef.current) clearTimeout(glitchTimerRef.current);
              glitchTimerRef.current = setTimeout(triggerGlitchElectronica, 300);
            });
        } else {
          // If no Audio element, fall straight back to synth
          setBgMusicActive(false);
          currentChordIndexRef.current = 0;
          playAndFadeChord();

          if (glitchTimerRef.current) clearTimeout(glitchTimerRef.current);
          glitchTimerRef.current = setTimeout(triggerGlitchElectronica, 300);
        }

        drawWaveform();
      } catch (err) {
        console.error("Audio Web API not supported or blocked: ", err);
      }
    } else {
      // Pause background MP3
      if (bgMusicRef.current) {
        try {
          bgMusicRef.current.pause();
        } catch (e) {}
      }

      if (gainNodeRef.current && audioCtxRef.current) {
        gainNodeRef.current.gain.setValueAtTime(0, audioCtxRef.current.currentTime);
      }
      if (activeVoicesRef.current) {
        activeVoicesRef.current.forEach(({ osc }) => {
          try { osc.stop(); } catch (e) {}
        });
      }
      activeVoicesRef.current = [];

      if (nextChordTimerRef.current) {
        clearTimeout(nextChordTimerRef.current);
        nextChordTimerRef.current = null;
      }
      if (glitchTimerRef.current) {
        clearTimeout(glitchTimerRef.current);
        glitchTimerRef.current = null;
      }
      setIsMuted(true);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    }
  };

  // Real-time canvas waveform visualizer reading from actual AnalyserNode frequency bins
  const drawWaveform = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.width;
    let height = canvas.height;
    ctx.clearRect(0, 0, width, height);

    // Fetch real-time data if active
    let hasSignal = false;
    let dataArray: Uint8Array | null = null;
    let bufferLength = 0;
    
    if (!isMuted && analyserRef.current) {
      const analyser = analyserRef.current;
      bufferLength = analyser.frequencyBinCount;
      dataArray = new Uint8Array(bufferLength);
      analyser.getByteTimeDomainData(dataArray);
      hasSignal = true;
    }

    const drawLine = (color: string, lineWidth: number, yOffset: number, phaseShift: number, ampMultiplier: number, blurAmount = 0) => {
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = lineWidth;
      
      if (blurAmount > 0) {
        ctx.shadowBlur = blurAmount;
        ctx.shadowColor = color;
      } else {
        ctx.shadowBlur = 0;
      }

      for (let x = 0; x < width; x++) {
        let y = height / 2;

        if (hasSignal) {
          // 1. Organic baseline modulation (keeps the line looking gorgeous, alive and breathing)
          const time = Date.now() * 0.0035;
          const organicWave = Math.sin(x * 0.09 + time + phaseShift) * 2.4 * ampMultiplier 
                              + Math.cos(x * 0.16 - time * 0.6) * 1.1 * ampMultiplier;
          
          // 2. Real-time audio signal (if present)
          let audioSignal = 0;
          if (dataArray && bufferLength > 0) {
            const dataIndex = Math.floor((x / width) * bufferLength);
            // deviation from 128
            const rawDev = (dataArray[dataIndex] - 128) / 128.0;
            // Scale deviation for beautiful canvas visibility
            audioSignal = rawDev * height * 1.8;
          }

          // 3. Glitch spike injection (triggered during synthesizer strikes or interactive key hits)
          let glitchSpike = 0;
          if (glitchIntensityRef.current > 0.01) {
            glitchSpike = (Math.random() - 0.5) * glitchIntensityRef.current * 4.2;
          }

          y += (organicWave + audioSignal + glitchSpike) + yOffset;
        } else {
          // Muted state - a flat, silent, elegant line with an extremely subtle, low frequency static hum
          const staticTime = Date.now() * 0.0008;
          y += Math.sin(x * 0.06 + staticTime) * 0.25 + yOffset;
        }

        // Clamp inside canvas bounds slightly to prevent clipping under high spikes
        y = Math.max(1.5, Math.min(height - 1.5, y));

        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();
    };

    // Style: Draw high-end dual trace oscilloscope lines
    if (!isMuted) {
      // 1. Subtle background trace (out of phase, lower opacity, thinner) for phosphorescent depth
      drawLine("rgba(239, 122, 118, 0.22)", 0.8, -0.4, Math.PI / 2.5, 0.7);
      // 2. Main glowing trace (very clean, slightly thicker, centered, neon glow)
      drawLine("#ef7a76", 1.6, 0, 0, 1.0, 5);
    } else {
      // Offline / muted style: crisp, classy, low-opacity charcoal line indicating carrier state is offline
      drawLine("#52525b", 1.0, 0, 0, 0);
    }

    // Decay the glitch impulse exponentially
    if (glitchIntensityRef.current > 0) {
      glitchIntensityRef.current *= 0.94;
    }

    requestRef.current = requestAnimationFrame(drawWaveform);
  };

  useEffect(() => {
    drawWaveform();
  }, [isMuted]);

  // Page title mapper
  const pageTitles = [
    "01. Zine Cover: Invisible Hands",
    "02. Corporate Promise",
    "03. Key Interactive View",
    "04. Statistical Evidence",
    "05. Chronological Timeline",
    "06. Political Paradox",
    "07. Actionable Empowerment",
    "08. Back Cover: Open Palms"
  ];

  // Component page mapper
  const renderPage = (index: number) => {
    const layouts = [
      <Page1Cover key="p1" id="page-1" isActive={currentPage === 0} />,
      <Page2Ad key="p2" id="page-2" isActive={currentPage === 1} />,
      <Page3Interactive key="p3" id="page-3" isActive={currentPage === 2} />,
      <Page4Data key="p4" id="page-4" isActive={currentPage === 3} />,
      <Page5Timeline key="p5" id="page-5" isActive={currentPage === 4} />,
      <Page6Political key="p6" id="page-6" isActive={currentPage === 5} />,
      <Page7Empowerment key="p7" id="page-7" isActive={currentPage === 6} />,
      <Page8BackCover key="p8" id="page-8" isActive={currentPage === 7} />
    ];
    return layouts[index] || null;
  };

  return (
    <div className="min-h-screen w-full bg-[#111113] flex flex-col justify-between overflow-hidden relative select-none font-sans text-stone-300">
      
      {/* DECORATIVE INDUSTRIAL DESK ELEMENTS (FOR IMMERSIVE ZINE ENVIRONMENT) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.06] z-0 select-none">
        {/* Spilled Coffee/Tea Ring Stain in the corner */}
        <svg viewBox="0 0 200 200" className="absolute -bottom-10 -right-10 w-[320px] h-[320px] text-amber-500 fill-none stroke-current" strokeWidth="1">
          <circle cx="100" cy="100" r="80" strokeDasharray="3,3" />
          <circle cx="102" cy="98" r="78" />
          <circle cx="98" cy="102" r="79" opacity="0.4" />
          <path d="M 40,40 Q 80,15 120,40 T 160,110" />
        </svg>
        {/* Desk Scribbled Blueprint annotations */}
        <div className="absolute bottom-8 left-8 font-hand text-xs text-white rotate-[-1deg] tracking-widest font-bold">
          PASQUINELLI WORKSHOP STUDY // BOOKLET PROOF 01-A
        </div>
        <div className="absolute top-16 right-16 font-mono text-[9px] text-white/80 tracking-widest leading-relaxed">
          CONTAINER STATE: ACTIVE<br />
          GRID LAYOUT: 16:9 RATIO<br />
          SYS_AUDIO: CINEMATIC AMBIENT SCORE
        </div>
      </div>
      
      {/* HEADER BAR */}
      <header className="relative z-40 bg-zinc-950/80 border-b border-zinc-900 px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 flex items-center justify-between backdrop-blur-md">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            id="sidebar-toggle"
            className="p-1.5 sm:p-2 text-stone-400 hover:text-white hover:bg-zinc-900 rounded transition-colors"
            title="Table of Contents"
          >
            <Menu className="w-5 h-5" />
          </button>
          
          <div className="flex flex-col">
            <h1 className="font-serif text-xs sm:text-sm md:text-base font-black tracking-tight text-white flex items-center space-x-1.5 sm:space-x-2">
              <span className="text-stone-400">INVISIBLE</span>
              <span className="text-white">HANDS</span>
            </h1>
            <p className="hidden sm:block font-typewriter text-[9px] text-[#ef7a76] tracking-wider uppercase">
              Who Really Runs the Machine?
            </p>
          </div>
        </div>

        {/* Current reading location indicator */}
        <div className="hidden lg:flex items-center space-x-4 bg-zinc-900/60 px-3 py-1 border border-zinc-850/60 rounded text-xs select-none">
          <Book className="w-3.5 h-3.5 text-amber-500" />
          <span className="font-mono text-stone-300 font-semibold uppercase tracking-wider text-[11px]">
            {pageTitles[currentPage]}
          </span>
        </div>

        {/* Action triggers */}
        <div className="flex items-center space-x-1.5 sm:space-x-2">
          {/* Audio Web Drone toggle and canvas visualizer */}
          <div className="flex items-center space-x-1.5 sm:space-x-2 bg-zinc-900 px-2.5 py-1 border border-zinc-800 rounded">
            <canvas ref={canvasRef} width="56" height="18" className="opacity-85 block transition-all hover:opacity-100 cursor-help" />
            <button
              onClick={handleToggleAudio}
              id="volume-toggle"
              className="p-1 focus:outline-none hover:bg-zinc-800/80 rounded transition-colors text-stone-400 hover:text-white"
              title={isMuted ? "Activate Ambient Server Hum" : "Mute Ambient Hum"}
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-[#ef7a76]" />}
            </button>
          </div>

          <button
            onClick={() => {
              setTutorialStep(1);
              setShowTutorial(true);
            }}
            id="guide-toggle"
            className="flex items-center space-x-1 p-1.5 sm:p-2 bg-[#ef7a76]/10 text-[#ef7a76] hover:text-white hover:bg-[#ef7a76]/25 rounded transition-all text-xs font-mono border border-[#ef7a76]/30 animate-pulse hover:animate-none"
            title="Open Interactive Guide & Tutorial"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">GUIDE</span>
          </button>

          <button
            onClick={() => setXeroxFilter(!xeroxFilter)}
            id="xerox-toggle"
            className={`flex items-center space-x-1 p-1.5 sm:p-2 rounded transition-all text-xs font-mono border ${
              xeroxFilter 
                ? "bg-[#ef7a76]/25 text-[#ef7a76] border-[#ef7a76]/45 scale-102" 
                : "text-stone-400 hover:text-white hover:bg-zinc-900 border-zinc-900"
            }`}
            title="Toggle Xerox Brutalist Photocopy Grain Filter"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${xeroxFilter ? 'animate-spin' : ''}`} />
            <span className="hidden md:inline">XEROX</span>
          </button>

          <button
            onClick={() => setNotesOpen(true)}
            id="notes-toggle"
            className="flex items-center space-x-1 p-1.5 sm:p-2 text-stone-400 hover:text-white hover:bg-zinc-900 rounded transition-colors text-xs font-mono border border-zinc-900"
            title="Pasquinelli Historical Notes"
          >
            <Info className="w-4 h-4" />
            <span className="hidden md:inline">NOTES</span>
          </button>
        </div>
      </header>

      {/* CORE FRAME LAYOUT */}
      <main className="flex-1 flex max-w-7xl mx-auto w-full items-center justify-between p-3 md:p-6 select-none relative">
        
        {/* Navigation Sidebar Drawer */}
        <AnimatePresence>
          {sidebarOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                onClick={() => setSidebarOpen(false)}
                className="fixed inset-0 bg-black z-40 cursor-pointer"
              />
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 180 }}
                className="fixed left-0 top-0 bottom-0 w-80 bg-[#121214] border-r border-[#27272a]/60 z-50 p-6 flex flex-col justify-between text-left zine-paper-stack-right shadow-2xl"
              >
                <div>
                  <div className="flex justify-between items-center pb-4 border-b border-zinc-800">
                    <div className="flex flex-col">
                      <h3 className="font-serif text-sm font-extrabold text-stone-200 tracking-wider">
                        TABLE OF CONTENTS
                      </h3>
                      <p className="font-hand text-xs text-[#ef7a76] font-bold">
                        issue 01 / index record
                      </p>
                    </div>
                    <button
                      onClick={() => setSidebarOpen(false)}
                      className="p-1.5 text-stone-400 hover:text-white hover:bg-zinc-900 rounded-full transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="mt-6 space-y-2">
                    {pageTitles.map((title, id) => (
                      <button
                        key={id}
                        id={`btn-page-${id}`}
                        onClick={() => handlePageSelect(id)}
                        className={`w-full text-left p-3 rounded font-mono text-xs flex justify-between items-center transition-all border ${
                          currentPage === id
                            ? "bg-[#ef7a76]/15 text-[#ef7a76] border-[#ef7a76]/35 font-bold"
                            : "hover:bg-zinc-900/60 text-stone-400 hover:text-stone-350 border-transparent hover:border-zinc-850"
                        }`}
                      >
                        <div className="flex items-center space-x-2 truncate">
                          <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${currentPage === id ? "bg-[#ef7a76] animate-pulse" : "bg-zinc-850"}`} />
                          <span className="truncate">{title}</span>
                        </div>
                        <span className="text-[9px] text-[#d4af37] font-sans font-bold shrink-0">P.0{id + 1}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-zinc-900/40 p-4 border border-zinc-800 rounded">
                  <p className="font-typewriter text-[9px] leading-relaxed text-stone-500">
                    INVISIBLE HANDS issues are interactive, multi-state booklets exploring cybernetics and
                    the physics of manual micro-tasks.
                  </p>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* LEFT TRIGGER CHEVRON inside the stage margin */}
        <div className="hidden md:block">
          <button
            onClick={handlePrev}
            id="nav-btn-prev"
            disabled={currentPage === 0}
            className={`mr-4 p-3.5 rounded-full border bg-zinc-950/80 transition-all ${
              currentPage === 0
                ? "opacity-20 cursor-not-allowed border-zinc-900 text-stone-700"
                : "border-zinc-800 text-stone-400 hover:text-white hover:bg-[#ef7a76]/10 hover:border-[#ef7a76]/40 cursor-pointer"
            }`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        </div>

        {/* THE FLOATING VIRTUAL BOOKLET SCREEN */}
        <div
          onClick={(e) => {
            if (!activeStamp) return;
            const target = e.target as HTMLElement;
            if (
              target.tagName === "BUTTON" ||
              target.tagName === "INPUT" ||
              target.tagName === "A" ||
              target.closest("button") ||
              target.closest("input") ||
              target.closest("a")
            ) {
              return;
            }
            const rect = e.currentTarget.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            const preset = STAMP_PRESETS[activeStamp];
            const newStamp = {
              id: Math.random().toString(36).substring(2, 9),
              pageIndex: currentPage,
              xPct: x,
              yPct: y,
              rotation: Math.floor(Math.random() * 26) - 13,
              text: activeStamp,
              color: preset.color,
              type: preset.type,
            };
            setStamps((prev) => [...prev, newStamp]);
            playStampSound();
          }}
          className={`flex-1 flex justify-center items-center w-full max-w-[1024px] aspect-[3/4] sm:aspect-[4/3] md:aspect-[16/9] min-h-[480px] sm:min-h-0 bg-[#0c0c0e] rounded-2xl shadow-[0_30px_70px_rgba(0,0,0,0.9)] border transition-all duration-300 zine-paper-stack-right zine-right-shadow overflow-hidden relative group z-10 ${
            activeStamp 
              ? "cursor-crosshair border-amber-600/60 shadow-[0_0_30px_rgba(212,175,55,0.12)]" 
              : "border-zinc-900/60"
          }`}
        >
          
          {/* PHYSICAL STAPLE BINDER SPINE */}
          <div className="absolute inset-y-0 left-0 w-7 bg-gradient-to-r from-zinc-950 via-zinc-800 to-zinc-900 border-r border-[#1a1a1c]/80 z-30 flex flex-col justify-around items-center py-16 shadow-[2px_0_10px_rgba(0,0,0,0.7)] select-none">
            {/* Soft vertical split line inside spine */}
            <div className="absolute inset-y-0 right-0.5 w-0.5 bg-black/40" />
            
            {/* Top Staple */}
            <div className="w-1 h-7 bg-gradient-to-r from-stone-500 via-stone-300 to-stone-600 rounded-sm shadow-[0_1px_4px_rgba(0,0,0,0.6)] border-t border-white/20 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-5 bg-black/40" />
            </div>
            
            {/* Very tiny spine text rotated */}
            <div className="rotate-270 text-[6.5px] text-zinc-500 font-mono tracking-[0.25em] select-none whitespace-nowrap uppercase font-bold opacity-35">
              MICRO-LABOUR CHRONICLE
            </div>
            
            {/* Bottom Staple */}
            <div className="w-1 h-7 bg-gradient-to-r from-stone-500 via-stone-300 to-stone-600 rounded-sm shadow-[0_1px_4px_rgba(0,0,0,0.6)] border-t border-white/20 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-5 bg-black/40" />
            </div>
          </div>

          {/* Active Stamp floating layout overlay help banner */}
          {activeStamp && (
            <div className="hidden md:block absolute top-3 left-12 bg-amber-500/95 text-stone-950 font-mono text-[8px] font-black tracking-widest px-2.5 py-0.5 rounded shadow-md animate-bounce z-40 select-none uppercase">
              ⚡ STAMP ACTIVE: CLICK PAGE TO STAMP [ {activeStamp} ]
            </div>
          )}

          {/* Interactive Dog-Ear Page Fold on hover (Top-Right Corner) */}
          <div className="absolute top-0 right-0 w-10 h-10 pointer-events-none z-30 overflow-hidden">
            <div className="absolute top-0 right-0 w-14 h-14 bg-gradient-to-bl from-zinc-800 via-zinc-900 to-zinc-950 border-b border-l border-zinc-800 origin-top-right rotate-45 transform translate-x-7 -translate-y-7 shadow-[0_5px_15px_rgba(0,0,0,0.5)] group-hover:translate-x-5.5 group-hover:-translate-y-5.5 transition-transform duration-300 ease-out" />
          </div>

          {/* Interactive Dog-Ear Page Fold on hover (Bottom-Right Corner) */}
          <div className="absolute bottom-0 right-0 w-10 h-10 pointer-events-none z-30 overflow-hidden">
            <div className="absolute bottom-0 right-0 w-14 h-14 bg-gradient-to-tl from-zinc-800 via-zinc-900 to-zinc-950 border-t border-l border-zinc-800 origin-bottom-right -rotate-45 transform translate-x-7 translate-y-7 shadow-[-5px_-5px_15px_rgba(0,0,0,0.5)] group-hover:translate-x-5.5 group-hover:translate-y-5.5 transition-transform duration-300 ease-out" />
          </div>

          {/* Absolute sliding animation viewport - offset to account for left binding spine */}
          <div className={`w-full h-full relative pl-7 pr-1 transition-all duration-300 ${xeroxFilter ? "xerox-effect" : ""}`}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.45 }}
                className="w-full h-full"
              >
                {renderPage(currentPage)}
              </motion.div>
            </AnimatePresence>

            {/* Render dynamically placed ink stamps */}
            {stamps
              .filter((st) => st.pageIndex === currentPage)
              .map((st) => (
                <div
                  key={st.id}
                  style={{
                    left: `${st.xPct}%`,
                    top: `${st.yPct}%`,
                    transform: `translate(-50%, -50%) rotate(${st.rotation}deg)`,
                    color: st.color,
                  }}
                  className="absolute pointer-events-auto z-40 select-none cursor-default font-mono font-black text-center"
                >
                  <button
                    onClick={(ev) => {
                      ev.stopPropagation();
                      setStamps((prev) => prev.filter((s) => s.id !== st.id));
                      playStampSound();
                    }}
                    title="Click annotation stamp to erase"
                    className="transition-transform active:scale-90 hover:scale-105 active:opacity-50"
                  >
                    {st.type === "capsule" && (
                      <span
                        style={{ borderColor: st.color, textShadow: `0 0 1px ${st.color}40` }}
                        className="px-2.5 py-0.5 border-2 text-[9px] md:text-[11px] font-extrabold leading-none uppercase tracking-widest inline-block bg-zinc-950/20 backdrop-blur-[0.5px]"
                      >
                        {st.text}
                      </span>
                    )}
                    {st.type === "stencil" && (
                      <span
                        style={{ borderColor: st.color, textShadow: `0 0 1px ${st.color}40` }}
                        className="px-3 py-1 border-3 border-dashed text-[10px] md:text-[12px] font-black leading-none tracking-widest inline-block uppercase bg-zinc-950/10"
                      >
                        {st.text}
                      </span>
                    )}
                    {st.type === "star" && (
                      <div
                        style={{ borderColor: st.color, color: st.color }}
                        className="w-10 h-10 md:w-12 md:h-12 border-2 border-double rounded-full flex items-center justify-center text-[7px] md:text-[8px] font-black uppercase tracking-tight bg-zinc-950/20 leading-none"
                      >
                        <div className="rotate-[-6deg]">{st.text}</div>
                      </div>
                    )}
                  </button>
                </div>
              ))}
          </div>

          {/* Quick Swipe overlays for touch interface on mobile */}
          <div className="absolute inset-y-0 left-0 w-8 cursor-w-resize md:hidden" onClick={handlePrev} />
          <div className="absolute inset-y-0 right-0 w-8 cursor-e-resize md:hidden" onClick={handleNext} />
        </div>

        {/* RIGHT TRIGGER CHEVRON */}
        <div className="hidden md:block">
          <button
            onClick={handleNext}
            id="nav-btn-next"
            disabled={currentPage === totalPages - 1}
            className={`ml-4 p-3.5 rounded-full border bg-zinc-950/80 transition-all ${
              currentPage === totalPages - 1
                ? "opacity-20 cursor-not-allowed border-zinc-900 text-stone-700"
                : "border-zinc-800 text-stone-400 hover:text-white hover:bg-[#ef7a76]/10 hover:border-[#ef7a76]/40 cursor-pointer"
            }`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </main>

      {/* DASHBOARD BOTTOM CONTROL HUB */}
      <footer className="relative z-30 bg-zinc-950/95 border-t border-zinc-900 px-4 py-3 shrink-0">
        <div className="max-w-7xl mx-auto flex flex-col gap-3">
          
          {/* Mobile Arrows & page indicator */}
          <div className="flex md:hidden justify-between items-center w-full mb-1">
            <button
              onClick={handlePrev}
              disabled={currentPage === 0}
              className="p-2 border border-zinc-800 text-stone-400 disabled:opacity-30 rounded bg-zinc-950 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="font-mono text-xs font-semibold text-[#ef7a76]">
              PAGE 0{currentPage + 1} OF 08
            </span>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages - 1}
              className="p-2 border border-zinc-800 text-stone-400 disabled:opacity-30 rounded bg-zinc-950 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* ROW 1: ZINE NAVIGATION CONSOLE */}
          <div className="hidden md:flex flex-col md:flex-row items-center justify-between gap-4 border-b border-zinc-900/60 pb-2.5">
            {/* Desktop pagination slide dots */}
            <div className="flex items-center space-x-2.5 shrink-0">
              <span className="font-mono text-[9px] text-[#ef7a76] uppercase font-black tracking-widest mr-1 select-none">
                JUMP TO PAGE:
              </span>
              <div className="flex items-center space-x-1.5">
                {Array.from({ length: totalPages }).map((_, id) => (
                  <button
                    key={id}
                    id={`pagination-dot-${id}`}
                    onClick={() => handlePageSelect(id)}
                    className={`w-7 h-7 flex items-center justify-center rounded font-mono text-[10px] font-black transition-all border select-none cursor-pointer ${
                      currentPage === id
                        ? "bg-[#ef7a76] text-white border-[#ef7a76] scale-105 shadow-[0_0_8px_rgba(239,122,118,0.25)]"
                        : "bg-zinc-900 hover:bg-zinc-800 text-stone-400 hover:text-white border-zinc-850"
                    }`}
                  >
                    0{id + 1}
                  </button>
                ))}
              </div>
            </div>

            {/* Slider Scrub Bar */}
            <div className="flex items-center space-x-3 bg-zinc-950 px-4 py-1.5 rounded-md border border-zinc-850 w-full max-w-sm md:max-w-md">
              <span className="font-mono text-[9px] text-stone-500 uppercase font-extrabold tracking-widest select-none">COVER</span>
              <input
                type="range"
                min="0"
                max={totalPages - 1}
                value={currentPage}
                id="page-indicator-slider"
                onChange={(e) => setCurrentPage(parseInt(e.target.value))}
                className="flex-1 h-1 bg-zinc-800 rounded-full appearance-none cursor-pointer accent-[#ef7a76]"
              />
              <span className="font-mono text-[9px] text-stone-500 uppercase font-extrabold tracking-widest select-none">BACK</span>
            </div>
          </div>

          {/* ROW 2: PROTEST STAMP TOOLBOX & SHORTCUT DETAILS */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-0.5">
            {/* STAMP WORKBENCH TOOLBOX */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 bg-zinc-900/40 p-2 sm:px-3 sm:py-1.5 border border-zinc-850 rounded-lg w-full md:w-auto">
              <span className="font-mono text-[9px] text-[#ef7a76] font-black uppercase tracking-widest border-b sm:border-b-0 sm:border-r border-zinc-800 pb-1.5 sm:pb-0 sm:pr-4 select-none text-center sm:text-left shrink-0">
                PROTEST STAMP KIT
              </span>
              <div className="flex flex-wrap items-center gap-2 select-none justify-center">
                {Object.keys(STAMP_PRESETS).map((presetKey) => {
                  const isSelected = activeStamp === presetKey;
                  const preset = STAMP_PRESETS[presetKey];
                  return (
                    <div key={presetKey} className="relative group/stamp">
                      <button
                        onClick={() => {
                          if (activeStamp === presetKey) {
                            setActiveStamp(null);
                          } else {
                            setActiveStamp(presetKey);
                          }
                          playStampSound();
                        }}
                        className={`px-2.5 py-1 text-[8px] md:text-[8.5px] font-mono font-black uppercase tracking-widest rounded border transition-all cursor-pointer ${
                          isSelected
                            ? "bg-amber-500 text-stone-950 border-amber-500 scale-105 shadow-md"
                            : "hover:bg-zinc-800/80 text-stone-300 border-zinc-800"
                        }`}
                        style={isSelected ? {} : { color: preset.color, borderColor: `${preset.color}35` }}
                        title={`Pick Stamp Block: ${presetKey}`}
                      >
                        {presetKey}
                      </button>
                      {/* Interactive short description tooltip */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 w-48 bg-[#09090b] text-stone-300 border border-zinc-800 text-[9px] p-2 rounded-md shadow-2xl opacity-0 pointer-events-none group-hover/stamp:opacity-100 transition-opacity z-50 font-sans tracking-wide leading-normal text-center select-none">
                        <span className="font-bold tracking-widest block uppercase text-[8.5px] border-b border-zinc-900 pb-1 mb-1" style={{ color: preset.color }}>{presetKey}</span>
                        <p className="text-stone-400 font-medium leading-relaxed">{preset.desc}</p>
                      </div>
                    </div>
                  );
                })}
                
                {stamps.length > 0 && (
                  <button
                    onClick={() => {
                      setStamps([]);
                      playStampSound();
                    }}
                    className="px-2.5 py-1 text-[8px] font-mono font-black bg-red-950/40 text-[#ef7a76] border border-[#ef7a76]/30 rounded hover:bg-red-950/70 cursor-pointer shrink-0"
                    title="Clear all stamps placed"
                  >
                    CLEAR [ {stamps.length} ]
                  </button>
                )}
              </div>
            </div>

            {/* Quick reading key shortcuts */}
            <div className="hidden md:flex items-center space-x-1.5 text-stone-500 text-[8px] sm:text-[9.5px] font-mono select-none px-3 py-1.5 border border-zinc-900/60 bg-zinc-950/40 rounded shrink-0">
              <span className="text-[#ef7a76] font-bold">INFO:</span>
              <span>USE LEFT / RIGHT ARROWS TO TURN PAGES</span>
            </div>
          </div>

        </div>
      </footer>

      {/* HISTORICAL NOTES DRAWER (Matteo Pasquinelli Concept) */}
      <AnimatePresence>
        {notesOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setNotesOpen(false)}
              className="fixed inset-0 bg-black z-50 cursor-pointer"
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 max-h-[85vh] bg-stone-900 border-t border-amber-900/30 text-amber-50 rounded-t-2xl z-50 p-6 overflow-y-auto select-none"
            >
              <div className="max-w-3xl mx-auto text-left">
                <div className="flex justify-between items-center pb-4 border-b border-stone-850">
                  <div className="flex items-center space-x-2">
                    <FileText className="w-5 h-5 text-[#ef7a76]" />
                    <h3 className="font-serif text-lg font-black text-stone-100">
                      Zine References: Matteo Pasquinelli & Hidden AI Labor
                    </h3>
                  </div>
                  <button
                    onClick={() => setNotesOpen(false)}
                    className="p-1 text-stone-400 hover:text-white hover:bg-stone-800 rounded"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="mt-6 space-y-6 font-sans text-xs sm:text-sm leading-relaxed text-stone-300">
                  <div>
                    <h4 className="font-serif text-sm font-semibold text-amber-500 mb-1">
                      Who is Matteo Pasquinelli?
                    </h4>
                    <p>
                      Matteo Pasquinelli is an Italian philosopher and professor of media theory. His work
                      focuses on the conceptual history of artificial intelligence, cybernetics, and the
                      relationship between intellectual automation and human labor. His highly acclaimed
                      book, <strong>"The Eye of the Master: A Social History of Artificial Intelligence"</strong>,
                      is the cornerstone reference behind this zine.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-serif text-sm font-semibold text-amber-500 mb-1">
                      Concept: The Reverse Prosthesis
                    </h4>
                    <p>
                      In typical industrial history, tools are seen as "prosthetic" extensions of the human arm (e.g.,
                      a hammer). In cybernetic networks, however, Pasquinelli argues that the physical human becomes the
                      prosthesis of the machinery itself. When clicking captcha images to "train autonomous driving networks"
                      or reviewing millions of chat outputs to correct spelling/formatting, the human isn't using AI — the
                      system is absorbing human cognitive gestures to automate them tomorrow.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-serif text-sm font-semibold text-amber-500 mb-1">
                      Global North vs. Global South Disparities
                    </h4>
                    <p>
                      While tech companies in San Francisco and London enjoy multi-billion dollar valuations for their "automatic"
                      generative AI tools, their model training relies heavily on crowd workers spanning India, Kenya, the Philippines,
                      and parts of South America. These workers are hired via micro-task platforms (e.g., Amazon Mechanical Turk, Remotetasks)
                      under piece-rate contracts. They label hours of audio, draw bounding boxes around cars, or moderate traumatic content
                      for a fraction of minimum wage, without mental health support.
                    </p>
                  </div>

                  <div className="border-t border-stone-800 pt-4 text-stone-400 text-xs">
                    <p>
                      <strong>Designed For:</strong> Zine 01, "INVISIBLE HANDS".
                    </p>
                    <p className="mt-0.5">
                      This interactive zine is designed to build critical awareness surrounding algorithmic extraction, making unseen human labor visible.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* IMMERSIVE TUTORIAL DOSSIER OVERLAY */}
      <AnimatePresence>
        {showTutorial && (
          <div className="fixed inset-0 bg-[#070708]/92 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-[#121214] border-2 border-stone-800 text-stone-200 rounded-2xl w-full max-w-lg shadow-[0_25px_60px_rgba(0,0,0,0.85)] overflow-hidden relative zine-paper-stack-right"
            >
              {/* Top folder file tab annotation */}
              <div className="bg-[#171719] px-5 py-3 border-b border-stone-850 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-[#ef7a76] animate-pulse" />
                  <span className="font-mono text-[10px] text-[#ef7a76] font-black uppercase tracking-widest">
                    SYSTEM GUIDE: EXPERIMENTAL UTILITIES // OPERATIONAL DOSSIER
                  </span>
                </div>
                <div className="text-[9px] font-mono text-amber-500 font-bold bg-amber-950/40 px-2 py-0.5 rounded border border-amber-900/30">
                  STEP {tutorialStep} OF 3
                </div>
              </div>

              {/* dossier contents body */}
              <div className="p-5 md:p-7 space-y-4 text-left min-h-[280px] flex flex-col justify-between">
                
                <AnimatePresence mode="wait">
                  {tutorialStep === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -8 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-3.5"
                    >
                      <div className="flex items-center space-x-2.5 text-white">
                        <div className="p-1.5 bg-stone-900 border border-stone-800 rounded">
                          <Volume2 className="w-4 h-4 text-[#ef7a76]" />
                        </div>
                        <h4 className="font-serif text-base font-black tracking-tight">
                          01. Cinematic Ambient & Melodic Synthesizer
                        </h4>
                      </div>

                      <p className="font-sans text-xs leading-relaxed text-stone-400">
                        We have designed a beautiful, real-time generative background score. It fuses a deep, warm cinematic chord progression with a procedurally drifting pentatonic glass-chime melody system.
                      </p>
                      
                      <div className="bg-[#0b0c0d] p-3 border border-stone-850 rounded-lg flex items-center space-x-3.5">
                        <button
                          onClick={() => {
                            if (isMuted) handleToggleAudio();
                          }}
                          className={`px-3 py-1.5 rounded font-mono text-[10px] flex items-center space-x-1.5 transition-all text-white shrink-0 ${
                            !isMuted 
                              ? "bg-[#ef7a76]/20 border border-[#ef7a76]/50 text-[#ef7a76]"
                              : "bg-zinc-900 hover:bg-zinc-800 border border-zinc-805"
                          }`}
                        >
                          <Volume2 className="w-3 h-3" />
                          <span>{isMuted ? "ACTIVATE AUDIO" : "AUDIO ACTIVE"}</span>
                        </button>
                        <span className="font-mono text-[9px] text-[#ef7a76] leading-normal animate-pulse">
                          {!isMuted 
                            ? (usingBgMusic 
                                ? "Streaming background.mp3 from assets with real-time waveform visualization." 
                                : "Cinematic ambient sequencer active. Watch the header wave graph sway to the melody in real-time.") 
                            : "Fuses rich multi-voice synthesizer pads with drifting pentatonic bell-chime generators."}
                        </span>
                      </div>
                    </motion.div>
                  )}

                  {tutorialStep === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -8 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-3.5"
                    >
                      <div className="flex items-center space-x-2.5 text-white">
                        <div className="p-1.5 bg-stone-900 border border-stone-800 rounded">
                          <RefreshCw className="w-4 h-4 text-[#ef7a76]" />
                        </div>
                        <h4 className="font-serif text-base font-black tracking-tight">
                          02. Brutalist Ink (Xerox Photocopy Filter)
                        </h4>
                      </div>

                      <p className="font-sans text-xs leading-relaxed text-stone-400">
                        Toggle the <strong>XEROX FILTER</strong> in the top-right header at any time. This overlays high-contrast ink debris, drum scratches, and cheap photocopy noise onto the digital surface.
                      </p>
                      
                      <div className="bg-[#0b0c0d] p-3 border border-stone-850 rounded-lg flex items-center space-x-3.5">
                        <button
                          onClick={() => {
                            setXeroxFilter(!xeroxFilter);
                          }}
                          className={`px-3 py-1.5 rounded font-mono text-[10px] flex items-center space-x-1.5 transition-all text-white border shrink-0 ${
                            xeroxFilter 
                              ? "bg-[#ef7a76]/25 border-[#ef7a76]/45 text-[#ef7a76]" 
                              : "bg-zinc-900 hover:bg-zinc-800 border-zinc-850"
                          }`}
                        >
                          <RefreshCw className="w-3 h-3" />
                          <span>{xeroxFilter ? "FILTER ENABLED" : "TRY TOGGLING"}</span>
                        </button>
                        <span className="font-mono text-[9px] text-zinc-500 leading-normal">
                          Evokes the analog resistance of underground self-publishing (Samizdat), disrupting the glossy, pristine flow of corporate interfaces.
                        </span>
                      </div>
                    </motion.div>
                  )}

                  {tutorialStep === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -8 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-3.5"
                    >
                      <div className="flex items-center space-x-2.5 text-white">
                        <div className="p-1.5 bg-stone-900 border border-stone-800 rounded">
                          <span className="font-mono text-xs text-amber-500 font-extrabold px-0.5">STMP</span>
                        </div>
                        <h4 className="font-serif text-base font-black tracking-tight">
                          03. Editorial Stencils (Protest Stamp Kit)
                        </h4>
                      </div>

                      <p className="font-sans text-xs leading-relaxed text-stone-400">
                        The <strong>PROTEST STAMP KIT</strong> below allows you to make your voice heard. Select any active stamp block (e.g., <strong>EXPOSED</strong>, <strong>CLASSIFIED</strong>, or <strong>PROTEST!</strong>), then <strong>click anywhere directly on the page layouts</strong> to print it.
                      </p>
                      
                      <div className="bg-[#0b0c0d] p-3 border border-stone-850 rounded-lg space-y-2">
                        <div className="flex flex-wrap gap-1.5 justify-center">
                          <span className="px-2 py-0.5 border border-[#ef7a76]/35 text-[#ef7a76] text-[8px] font-mono rounded font-bold">EXPOSED</span>
                          <span className="px-2 py-0.5 border border-[#d4af37]/35 text-[#d4af37] text-[8px] font-mono rounded font-bold">CLASSIFIED</span>
                          <span className="px-2 py-0.5 border border-[#f43f5e]/35 text-[#f43f5e] text-[8px] font-mono rounded font-bold">PROTEST!</span>
                        </div>
                        <p className="font-mono text-[9px] text-zinc-500 text-center leading-normal">
                          Stamps dynamically adapt with rotational variance. Hover or click placed stamps to inspect or remove them.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Footer progress triggers */}
                <div className="flex items-center justify-between border-t border-stone-900 pt-4 mt-3">
                  <button
                    onClick={() => {
                      if (tutorialStep > 1) {
                        setTutorialStep((prev) => prev - 1);
                      }
                    }}
                    disabled={tutorialStep === 1}
                    className="font-mono text-[10px] text-stone-500 hover:text-stone-300 disabled:opacity-20 uppercase tracking-wider px-2 py-1 transition-colors"
                  >
                    PREV // BACK
                  </button>

                  <div className="flex items-center space-x-1">
                    {[1, 2, 3].map((step) => (
                      <div
                        key={step}
                        className={`w-1 h-1 rounded-full transition-all duration-300 ${
                          tutorialStep === step ? "bg-[#ef7a76] w-2.5" : "bg-stone-800"
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={() => {
                      if (tutorialStep < 3) {
                        setTutorialStep((prev) => prev + 1);
                      } else {
                        setShowTutorial(false);
                        sessionStorage.setItem("zine-tutorial-completed-session", "true");
                      }
                    }}
                    className="font-mono text-[10px] text-[#ef7a76] hover:text-white font-extrabold uppercase tracking-wide bg-[#ef7a76]/10 hover:bg-[#ef7a76]/25 border border-[#ef7a76]/40 px-3 py-1.5 rounded transition-all active:scale-95 cursor-pointer"
                  >
                    {tutorialStep === 3 ? "BEGIN READING // ENTER" : "NEXT // FORWARD"}
                  </button>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
