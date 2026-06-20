import { useState, useEffect, useRef } from "react";
// import { io } from "socket.io-client";
import {
  Bell,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  FileSpreadsheet,
  Sparkles,
} from "lucide-react";

// FAQs Data
const faqs = [
  {
    question: "What is CourtLiveStream?",
    answer: "CourtLiveStream is a premium mobile and desktop dashboard platform providing real-time high-court data synchronization, live-stream directory listings, case status updates, and custom instant push notifications for active court cases.",
  },
  {
    question: "Can I track my cases for free?",
    answer: "Yes! CourtLiveStream allows you to track and monitor your first case completely free of charge. If you need to monitor additional cases or unlock advanced features like Advocate or Judge search, you can subscribe to one of our flexible plans.",
  },
  {
    question: "How does the Real-Time Display Board work?",
    answer: "Our system is directly linked to the live courtroom boards. The moment a judge calls a new case number, it updates on your screen instantly without you needing to refresh the page.",
  },
  {
    question: "Can I receive alerts on my mobile phone when a case is called?",
    answer: "Yes! Using our premium plan, you can watch specific case numbers. The app will immediately trigger a high-priority sound and push notification on your device when your watched case is next in line or called.",
  },
  {
    question: "How does the import of multiple cases work?",
    answer: "Our Pro plan supports CSV/JSON case list uploads. If you have 50 or 100 cases to track daily, you can drag and drop your sheet, and our systems will extract case numbers and automatically subscribe you to all updates in one click.",
  },
  {
    question: "How secure is my billing and data?",
    answer: "All subscriptions and payments are securely handled through the official App Store and Google Play Store billing systems. Your licenses and renewals are managed with standard encryption, ensuring complete data security.",
  },
];


// interface DisplayBoardRow {
//   id: string;
//   eventType: "new" | "update" | "delete";
//   caseNumber: string;
//   benchName: string;
//   courtHallNumber: string;
//   serialNumber: string;
//   date: string;
//   time: string;
//   stage: string;
//   listNumber: string;
//   timestamp: number;
// }

export default function LandingPage() {
  // const [updates, setUpdates] = useState<DisplayBoardRow[]>([]);
  // const [status, setStatus] = useState<"connecting" | "connected" | "disconnected">("connecting");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [showDownloadOptions, setShowDownloadOptions] = useState(false);
  const showcaseRef = useRef<HTMLDivElement>(null);

  const scrollShowcase = (direction: "left" | "right") => {
    if (showcaseRef.current) {
      const scrollAmount = direction === "left" ? -320 : 320;
      showcaseRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Auto-rotate mobile screen slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 4);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Real Socket.IO Connection to court livestream api
  // useEffect(() => {
  //   const socket = io("https://api.courtlivestream.com", {
  //     path: "/socket.io/",
  //     transports: ["polling", "websocket"],
  //     reconnection: true,
  //     reconnectionDelay: 1000,
  //     reconnectionAttempts: 5,
  //     timeout: 20000,
  //   });
  // 
  //   setStatus("connecting");
  // 
  //   socket.on("connect", () => {
  //     setStatus("connected");
  //     // Join public display board room
  //     socket.emit("join-display-board");
  //   });
  // 
  //   socket.on("disconnect", () => {
  //     setStatus("disconnected");
  //   });
  // 
  //   socket.on("connect_error", () => {
  //     setStatus("disconnected");
  //   });
  // 
  //   const addEvent = (event: "new" | "update" | "delete", rawData: any) => {
  //     const data = rawData?.data || rawData || {};
  //     const newRow: DisplayBoardRow = {
  //       id: data.id || rawData.id || `${event}-${Date.now()}-${Math.random()}`,
  //       eventType: event,
  //       caseNumber: data.caseNumber || "N/A",
  //       benchName: data.bench?.benchName || data.bench?.courtName || "N/A",
  //       courtHallNumber: data.courtHall?.courtHallNumber || "N/A",
  //       serialNumber: data.serialNumber !== undefined ? String(data.serialNumber) : "N/A",
  //       date: data.date ? new Date(data.date).toLocaleDateString() : "N/A",
  //       time: data.time || "N/A",
  //       stage: data.stage || "N/A",
  //       listNumber: data.listNumber !== undefined ? String(data.listNumber) : "N/A",
  //       timestamp: Date.now(),
  //     };
  // 
  //     setUpdates((prev) => [newRow, ...prev].slice(0, 20));
  //   };
  // 
  //   socket.on("new-display-board", (data) => {
  //     addEvent("new", data);
  //   });
  // 
  //   socket.on("update-display-board", (data) => {
  //     addEvent("update", data);
  //   });
  // 
  //   socket.on("delete-display-board", (data) => {
  //     addEvent("delete", data);
  //   });
  // 
  //   return () => {
  //     socket.disconnect();
  //   };
  // }, []);

  return (
    <div className="min-h-screen bg-[#FAFAFB] text-zinc-900 font-sans selection:bg-indigo-200 selection:text-indigo-900 overflow-x-hidden relative">
      {/* Light Blueprint Grid Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000004_1px,transparent_1px),linear-gradient(to_bottom,#00000004_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Subtle Pastel Ambient Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[45vw] h-[45vw] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[5%] left-[10%] w-[55vw] h-[55vw] bg-indigo-500/4 rounded-full blur-[160px] pointer-events-none" />

      {/* Floating Header */}
      <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-blue-800/40 bg-[#1E3A8A]/95 backdrop-blur-md transition-all">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img
              src="/CourtLiveLogo.jpeg"
              alt="CourtLiveStream Logo"
              className="w-11 h-11 rounded-xl object-cover shadow-[0_0_12px_rgba(255,255,255,0.2)] transition-transform hover:scale-105 duration-300"
            />
            <span className="font-mono font-extrabold tracking-widest text-white text-lg sm:text-xl">
              COURT<span className="text-cyan-300">LIVE</span>STREAM
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-blue-100">
            <a href="#features" className="hover:text-white transition-colors duration-200">Features</a>
            {/* <a href="#live-display" className="hover:text-white transition-colors duration-200">Live Display Board</a> */}
            <a href="#pricing" className="hover:text-white transition-colors duration-200">Pricing</a>
            <a href="#faqs" className="hover:text-white transition-colors duration-200">FAQs</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-16 pt-20 pb-12 lg:pt-24 lg:pb-16 grid lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="lg:col-span-7 space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start">

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-zinc-950 leading-[1.1]">
            Real-Time Court Live Streaming Notifications
          </h1>

          <div className="space-y-4 max-w-xl text-left">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5 text-indigo-600" />
              </div>
              <p className="text-zinc-600 text-sm leading-relaxed">
                <strong className="text-zinc-800">Ultimate Time Saver:</strong> The best tool for Senior Counsels, Law Firms, Company Employees and Active Litigants to monitor proceedings.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5 text-indigo-600" />
              </div>
              <p className="text-zinc-600 text-sm leading-relaxed">
                <strong className="text-zinc-800">All-in-One App:</strong> Track display boards live across High Court benches, monitor live streams across all High Courts & Supreme Court in India.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5 text-indigo-600" />
              </div>
              <p className="text-zinc-600 text-sm leading-relaxed">
                <strong className="text-zinc-800">Real-time Alerts:</strong> Get notified instantly when your case gets called based on today's listings, directly on your mobile device.
              </p>
            </div>
          </div>

          <ol className="text-zinc-800 text-sm max-w-xl leading-relaxed list-decimal list-inside space-y-2 p-5 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl shadow-sm text-left w-full">
            <li className="font-bold text-green-800">Track your first case for free. No subscription required!</li>
            <li className="font-semibold text-green-700">To monitor additional cases and unlock premium features, simply subscribe inside the mobile app.</li>
          </ol>

          {/* App download CTA badges */}
          <div id="hero-download" className="flex flex-wrap items-center justify-center gap-4 pt-2 w-full">
            <a
              href="https://apps.apple.com/us/app/courtlive-stream/id6764580795"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-5 py-3 rounded-lg border border-zinc-200 bg-white hover:bg-zinc-50 hover:border-zinc-300 transition-all duration-300 shadow-sm"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 fill-current text-zinc-950">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.21.67-2.93 1.49-.62.69-1.16 1.84-1.01 2.96 1.12.09 2.27-.57 2.95-1.39z" />
              </svg>
              <div className="text-left font-mono">
                <p className="text-[9px] text-zinc-500 uppercase tracking-widest leading-none">Download on the</p>
                <p className="text-sm font-bold text-zinc-800 mt-0.5 leading-none">App Store</p>
              </div>
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.courtlivestream.app&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-5 py-3 rounded-lg border border-zinc-200 bg-white hover:bg-zinc-50 hover:border-zinc-300 transition-all duration-300 shadow-sm"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0">
                <path d="M3.25 2.5a1.73 1.73 0 0 0-.47 1.22v16.56a1.73 1.73 0 0 0 .47 1.22L3.32 21.6 13 11.9 3.32 2.22l-.07.28z" fill="#00E5FF" />
                <path d="M16.2 8.7L13 11.9l3.2 3.2 3.8-2.2c1.1-.6 1.1-1.6 0-2.2l-3.8-2z" fill="#FFC107" />
                <path d="M13 11.9L3.3 21.6a1.4 1.4 0 0 0 1.9 0l11-6.5L13 11.9z" fill="#FF3D00" />
                <path d="M3.3 2.2a1.4 1.4 0 0 1 1.9 0l11 6.5-3.2 3.2L3.3 2.2z" fill="#4CAF50" />
              </svg>
              <div className="text-left font-mono">
                <p className="text-[9px] text-zinc-500 uppercase tracking-widest leading-none">GET IT ON</p>
                <p className="text-sm font-bold text-zinc-800 mt-0.5 leading-none">Google Play</p>
              </div>
            </a>
          </div>
        </div>

        {/* Space Gray Premium Phone Mockup */}
        <div className="lg:col-span-5 flex justify-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-500/10 rounded-full blur-[70px] pointer-events-none" />

          {/* Phone Shell */}
          <div className="w-[300px] h-[610px] rounded-[48px] border-4 border-zinc-800 bg-[#0c0c0e] p-2.5 shadow-[0_30px_60px_rgba(0,0,0,0.15)] relative overflow-hidden transition-transform duration-500 hover:scale-[1.02] border-t-zinc-700 border-b-zinc-800 border-x-zinc-750">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-5.5 bg-zinc-800 rounded-b-2xl z-40 flex items-center justify-center">
              <div className="w-12 h-1 bg-zinc-950 rounded-full" />
            </div>

            {/* Inner Phone Screen Content (App view) */}
            <div className="w-full h-full bg-[#1e293b] rounded-[38px] overflow-hidden relative border border-zinc-900">

              {/* Slider View container */}
              <div className="w-full h-full relative flex flex-col justify-between">

                {/* Slides content */}
                <div className="w-full h-full relative overflow-hidden flex-1">

                  {/* Slide 0: Video demo */}
                  <div
                    className={`absolute inset-0 w-full h-full transition-opacity duration-1000 bg-black flex items-center justify-center ${activeSlide === 0 ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                      }`}
                  >
                    <video
                      src="/courtlive.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-8 left-4 right-4 bg-black/60 backdrop-blur-sm p-2 rounded-lg text-center border border-white/10">
                      <p className="text-[10px] font-mono text-indigo-400 font-bold uppercase tracking-wider">⚡ Live Video Demo</p>
                      <p className="text-[8px] text-zinc-300 font-mono">Real-time courtroom proceedings stream</p>
                    </div>
                  </div>

                  {/* Slide 1: Screenshot 1 */}
                  <div
                    className={`absolute inset-0 w-full h-full transition-opacity duration-1000 bg-zinc-900 ${activeSlide === 1 ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                      }`}
                  >
                    <img
                      src="/courtlive01.jpeg"
                      alt="CourtLiveStream Dashboard"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  {/* Slide 2: Screenshot 2 */}
                  <div
                    className={`absolute inset-0 w-full h-full transition-opacity duration-1000 bg-zinc-900 ${activeSlide === 2 ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                      }`}
                  >
                    <img
                      src="/courtlive02.jpeg"
                      alt="CourtLiveStream Display Board"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  {/* Slide 3: Screenshot 3 */}
                  <div
                    className={`absolute inset-0 w-full h-full transition-opacity duration-1000 bg-zinc-900 ${activeSlide === 3 ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                      }`}
                  >
                    <img
                      src="/courtlive03.jpeg"
                      alt="CourtLiveStream Search"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={() => setActiveSlide((prev) => (prev === 0 ? 3 : prev - 1))}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-30 w-8 h-8 flex items-center justify-center bg-black/40 hover:bg-black/70 text-white rounded-full backdrop-blur-md transition-all shadow-lg border border-white/10"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5 pr-0.5" />
                </button>
                <button
                  onClick={() => setActiveSlide((prev) => (prev === 3 ? 0 : prev + 1))}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-30 w-8 h-8 flex items-center justify-center bg-black/40 hover:bg-black/70 text-white rounded-full backdrop-blur-md transition-all shadow-lg border border-white/10"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5 pl-0.5" />
                </button>

                {/* Indicators overlay */}
                <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-1.5 bg-black/40 py-2 backdrop-blur-[2px]">
                  {[0, 1, 2, 3].map((idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveSlide(idx)}
                      className={`w-7 h-1.5 rounded-full transition-all duration-300 ${activeSlide === idx ? "bg-indigo-500 scale-105" : "bg-white/40 hover:bg-white/60"
                        }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Features Section */}
      <section id="features" className="max-w-[1440px] mx-auto px-6 lg:px-16 py-14 border-t border-zinc-200 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Card 1: Smart Case Alerts */}
          <div className="p-8 rounded-2xl border border-zinc-200 bg-white hover:bg-zinc-50 transition-all duration-300 relative group flex flex-col justify-between h-[300px] shadow-sm hover:shadow-md">
            <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors" />
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-zinc-50 border border-zinc-200 flex items-center justify-center text-cyan-600">
                <Bell className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-zinc-900 group-hover:text-cyan-600 transition-colors">Smart Notifications</h3>
              <div className="text-zinc-500 text-xs leading-relaxed">
                <ul className="list-disc pl-4 space-y-1">
                  <li>Stay updated step-by-step.</li>
                  <li>Get a simple one day before your case is scheduled for hearing. On the hearing date, receive notifications when your case is exactly 10, 5, 4, 3, and 1 case away, plus a direct link to watch the live trial stream, where ever live stream available.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 2: Case Import Engine */}
          <div className="p-8 rounded-2xl border border-zinc-200 bg-white hover:bg-zinc-50 transition-all duration-300 relative group flex flex-col justify-between h-[300px] shadow-sm hover:shadow-md">
            <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors" />
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-zinc-50 border border-zinc-200 flex items-center justify-center text-cyan-600">
                <FileSpreadsheet className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-zinc-900 group-hover:text-cyan-600 transition-colors">Case Import Engine</h3>
              <div className="text-zinc-500 text-xs leading-relaxed">
                <ul className="list-disc pl-4 space-y-1"><li>Directly import all your High Court & Supreme Court cases from e-court service mobile application to this efficient and time saving application.</li></ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Display Board Section
      <section id="live-display" className="max-w-[1440px] mx-auto px-6 lg:px-16 py-24 border-t border-zinc-200 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 border border-indigo-100 text-indigo-700 rounded-full text-xs font-mono font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-ping inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 inline-block -ml-4" />
              REAL SOCKET.IO BOARD
            </div>
            <h2 className="text-3xl font-extrabold text-zinc-950 tracking-tight sm:text-4xl">
              Live Display Board
            </h2>
            <p className="text-zinc-600 text-sm leading-relaxed">
              This feed shows real-time changes broadcast from active court display boards via WebSocket updates. Connected public clients receive courtroom notifications instantly without requiring authentication.
            </p>
            <div className="p-4 rounded-xl border border-zinc-200 bg-white space-y-3 font-mono text-xs shadow-sm">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-zinc-400">Connection Status:</span>
                {status === "connected" ? (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold font-mono bg-indigo-50 text-indigo-700 border border-indigo-250">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                    CONNECTED
                  </span>
                ) : status === "connecting" ? (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold font-mono bg-amber-50 text-amber-700 border border-amber-250">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                    CONNECTING
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold font-mono bg-rose-50 text-rose-700 border border-rose-250">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                    DISCONNECTED
                  </span>
                )}
              </div>
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-zinc-400">Buffered Updates:</span>
                <span className="text-zinc-700 font-semibold">{updates?.length || 0} / 20 max</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-xl border border-zinc-200 bg-white overflow-hidden font-mono text-xs shadow-lg relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none" />

              <div className="px-4 py-3 bg-zinc-50 border-b border-zinc-200 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-250" />
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-350" />
                  <span className="text-[10px] text-zinc-400 ml-2">courtlive_display_feed.sh</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-ping" />
                  <span className="text-[9px] text-indigo-600 font-bold uppercase tracking-wider">LIVE DATA</span>
                </div>
              </div>

              <div className="overflow-x-auto max-h-[480px] overflow-y-auto">
                <table className="w-full text-left border-collapse">
                  <thead className="sticky top-0 bg-zinc-50 z-10 border-b border-zinc-200">
                    <tr className="text-[10px] text-zinc-400 uppercase">
                      <th className="px-4 py-3 bg-zinc-50">Event</th>
                      <th className="px-4 py-3 bg-zinc-50">Case Number</th>
                      <th className="px-4 py-3 bg-zinc-50">Bench</th>
                      <th className="px-4 py-3 bg-zinc-50">Hall</th>
                      <th className="px-4 py-3 text-center bg-zinc-50">Sr. No.</th>
                      <th className="px-4 py-3 bg-zinc-50">Stage / List</th>
                      <th className="px-4 py-3 text-right bg-zinc-50">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {updates?.length === 0 ? (
                      <tr>
                        <td colSpan={7} className="px-4 py-12 text-center text-zinc-400 font-mono text-xs">
                          Waiting for live updates from display board...
                        </td>
                      </tr>
                    ) : (
                      updates?.map((item: any, index: number) => {
                        const isNewOrUpdate = item.eventType === "new" || item.eventType === "update";
                        return (
                          <tr
                            key={item.id}
                            className={`border-b border-zinc-100 text-xs font-mono transition-all duration-500 ${index === 0 ? "bg-indigo-50/50 font-bold" : ""
                              }`}
                          >
                            <td className="px-4 py-3 whitespace-nowrap">
                              <span className="flex items-center gap-1.5">
                                {isNewOrUpdate ? (
                                  <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                                  </span>
                                ) : (
                                  <span className="relative flex h-2 w-2">
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-450"></span>
                                  </span>
                                )}
                                <span className={`text-[10px] font-bold ${item.eventType === "new"
                                  ? "text-indigo-600"
                                  : item.eventType === "update"
                                    ? "text-cyan-600"
                                    : "text-zinc-400"
                                  }`}>
                                  {item.eventType.toUpperCase()}
                                </span>
                              </span>
                            </td>
                            <td className="px-4 py-3 text-zinc-850 font-bold whitespace-nowrap">{item.caseNumber}</td>
                            <td className="px-4 py-3 text-zinc-500 max-w-[140px] truncate" title={item.benchName}>{item.benchName}</td>
                            <td className="px-4 py-3 text-zinc-600 whitespace-nowrap">{item.courtHallNumber}</td>
                            <td className="px-4 py-3 text-center font-bold text-indigo-600 font-mono text-sm whitespace-nowrap">{item.serialNumber}</td>
                            <td className="px-4 py-3 text-zinc-500 whitespace-nowrap">
                              <div className="text-[10px]">{item.stage}</div>
                              <div className="text-[9px] text-zinc-400">List: {item.listNumber}</div>
                            </td>
                            <td className="px-4 py-3 text-right text-zinc-500 whitespace-nowrap font-mono text-[10px]">
                              <div>{item.time}</div>
                              <div className="text-[9px] text-zinc-400">{item.date}</div>
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* App Screenshot Showcase Section */}
      <section id="app-showcase" className="max-w-[1440px] mx-auto px-6 lg:px-16 py-14 border-t border-zinc-200 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <p className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
            Designed for Speed
          </p>
          <p className="text-zinc-600 text-sm">
            Browse actual mobile screens showing the real-time display board and case tracking interface.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative group">
          {/* Navigation Arrows */}
          <button
            onClick={() => scrollShowcase("left")}
            className="absolute -left-5 md:-left-12 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-white hover:bg-zinc-50 text-zinc-700 rounded-full shadow-md border border-zinc-200 transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 pr-0.5" />
          </button>
          
          <button
            onClick={() => scrollShowcase("right")}
            className="absolute -right-5 md:-right-12 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-white hover:bg-zinc-50 text-zinc-700 rounded-full shadow-md border border-zinc-200 transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 pl-0.5" />
          </button>

          <div 
            ref={showcaseRef}
            className="flex overflow-x-auto gap-8 snap-x snap-mandatory pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {[
              { src: "/courtlive01.jpeg", label: "Home Panel" },
              { src: "/courtlive03.jpeg", label: "Case Search" },
              { src: "/courtlive02.jpeg", label: "Case History" }
            ].map((item, index) => (
              <div key={index} className="flex-none w-full sm:w-[calc(33.333%-1.33rem)] snap-center group/card relative rounded-2xl overflow-hidden border border-zinc-200 bg-white p-2.5 shadow-md hover:shadow-lg hover:border-zinc-350 transition-all duration-300">
                <div className="aspect-[9/19] rounded-xl overflow-hidden bg-zinc-100 relative">
                  <img
                    src={item.src}
                    alt={item.label}
                    className="w-full h-full object-cover group-hover/card:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#102A6B]/90 via-[#102A6B]/45 to-transparent p-3 text-center">
                    <p className="text-xs font-bold text-white uppercase tracking-wider font-mono">{item.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscriptions Pricing Cards (Read-only cards with Download App link) */}
      <section id="pricing" className="max-w-[1440px] mx-auto px-6 lg:px-16 py-14 border-t border-zinc-200 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1100px] mx-auto">

          {/* Card 2: Normal Tier */}
          <div className="p-6 rounded-2xl border border-zinc-200 bg-white flex flex-col justify-between text-left group hover:border-zinc-350 transition-all duration-300 shadow-sm hover:shadow-md relative">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-base font-bold text-zinc-800">Normal</h3>
                <span className="text-[8px] font-mono bg-zinc-150 text-zinc-700 px-2 py-0.5 rounded font-bold uppercase tracking-wider">365 Days</span>
              </div>
              <div className="space-y-0.5">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl font-black text-zinc-900 font-mono">₹99</span>
                  <span className="text-zinc-400 text-xs font-mono line-through">₹299</span>
                </div>
                <div className="text-[10px] text-zinc-400 font-mono">Validity: 365 Days</div>
              </div>
              <p className="text-zinc-500 text-[11px] leading-relaxed min-h-[52px]">
                Get Live Stream and Notifications for up to 20 HC Cases.
              </p>

              <ul className="space-y-2.5 text-[10px] text-zinc-500 border-t border-zinc-100 pt-4 font-mono uppercase tracking-wide">
                <li className="flex items-center gap-2 text-zinc-700">
                  <Check className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                  Upto 20 HC Cases
                </li>
                <li className="flex items-center gap-2 text-zinc-700">
                  <Check className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                  Live Stream Access
                </li>
                <li className="flex items-center gap-2 text-zinc-300">
                  <span>✗ NO Case History</span>
                </li>
              </ul>
            </div>

            <div className="pt-6">
              <a
                href="#hero-download"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("hero-download")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="block text-center w-full py-2.5 px-3 rounded border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 text-zinc-800 font-mono text-[10px] font-bold tracking-wider transition-all uppercase"
              >
                Subscribe In App
              </a>
            </div>
          </div>

          {/* Card 3: Student Tier */}
          <div className="p-6 rounded-2xl border border-zinc-200 bg-white flex flex-col justify-between text-left group hover:border-zinc-350 transition-all duration-300 shadow-sm hover:shadow-md relative">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-base font-bold text-zinc-800">Student</h3>
                <span className="text-[8px] font-mono bg-indigo-50 text-indigo-750 px-2 py-0.5 rounded font-bold uppercase tracking-wider">365 Days</span>
              </div>
              <div className="space-y-0.5">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl font-black text-zinc-900 font-mono">₹500</span>
                  <span className="text-zinc-400 text-xs font-mono line-through">₹1500</span>
                </div>
                <div className="text-[10px] text-zinc-400 font-mono">Validity: 365 Days</div>
              </div>
              <p className="text-zinc-500 text-[11px] leading-relaxed min-h-[52px]">
                Unlimited access to Live Stream, Notifications and Case History.
                Ideal for students seeking value for money.
              </p>

              <ul className="space-y-2.5 text-[10px] text-zinc-500 border-t border-zinc-100 pt-4 font-mono uppercase tracking-wide">
                <li className="flex items-center gap-2 text-zinc-700">
                  <Check className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                  Unlimited HC Cases
                </li>
                <li className="flex items-center gap-2 text-zinc-700">
                  <Check className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                  Live Stream Access
                </li>
                <li className="flex items-center gap-2 text-zinc-700">
                  <Check className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                  Case History Access
                </li>
              </ul>
            </div>

            <div className="pt-6">
              <a
                href="#hero-download"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("hero-download")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="block text-center w-full py-2.5 px-3 rounded border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 text-zinc-800 font-mono text-[10px] font-bold tracking-wider transition-all uppercase"
              >
                Subscribe In App
              </a>
            </div>
          </div>

          {/* Card 4: Premium Tier */}
          <div className="p-6 rounded-2xl border-2 border-indigo-500 bg-white flex flex-col justify-between text-left relative shadow-lg hover:shadow-xl transition-all duration-300">
            <span className="absolute -top-3 left-6 px-2 py-0.5 rounded bg-indigo-500 text-white text-[8px] font-mono tracking-widest font-bold uppercase shadow-sm">
              Most Popular
            </span>

            <div className="space-y-4 pt-1">
              <div className="flex justify-between items-center">
                <h3 className="text-base font-bold text-zinc-900 flex items-center gap-1">
                  Premium
                  <Sparkles className="w-3.5 h-3.5 text-indigo-500 fill-indigo-500/20" />
                </h3>
                <span className="text-[8px] font-mono bg-indigo-50 text-indigo-700 border border-indigo-150 px-2 py-0.5 rounded font-bold uppercase tracking-wider">365 Days</span>
              </div>
              <div className="space-y-0.5">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl font-black text-zinc-900 font-mono">₹999</span>
                  <span className="text-zinc-400 text-xs font-mono line-through">₹1999</span>
                </div>
                <div className="text-[10px] text-zinc-400 font-mono">Validity: 365 Days</div>
              </div>
              <p className="text-zinc-500 text-[11px] leading-relaxed min-h-[52px]">
                Access all features: Live Stream, Notifications and Case History for Professional Advocates.
              </p>

              <ul className="space-y-2.5 text-[10px] text-zinc-650 border-t border-zinc-100 pt-4 font-mono uppercase tracking-wide">
                <li className="flex items-center gap-2 text-zinc-800">
                  <Check className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                  Unlimited HC Cases
                </li>
                <li className="flex items-center gap-2 text-zinc-800">
                  <Check className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                  Live Stream & Alerts
                </li>
                <li className="flex items-center gap-2 text-zinc-800">
                  <Check className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                  Full Case History
                </li>
              </ul>
            </div>

            <div className="pt-6">
              <a
                href="#hero-download"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("hero-download")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="block text-center w-full py-2.5 px-3 rounded bg-indigo-600 text-white font-mono text-[10px] font-bold tracking-wider hover:bg-indigo-500 transition-all duration-300 uppercase shadow-md"
              >
                Subscribe In App _
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Accordion FAQ Section */}
      <section id="faqs" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 border-t border-zinc-200 relative z-10">
        <div className="text-center mb-10 space-y-4">
          <h2 className="text-3xl font-extrabold text-zinc-950 tracking-tight">Frequently Asked Questions</h2>
          <p className="text-zinc-500 text-sm">
            Everything you need to know about Setup, Billing, and Support.
          </p>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="border border-zinc-200 rounded-xl bg-white overflow-hidden transition-colors shadow-sm"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-sm text-zinc-800 hover:text-indigo-600 transition-colors focus:outline-none"
                >
                  <span className="pr-4">{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-indigo-600 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-zinc-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 text-xs text-zinc-500 leading-relaxed border-t border-zinc-150 pt-4 bg-zinc-50/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>


      {/* Footer */}
      <footer className="w-full border-t border-blue-800/40 py-8 relative z-10 bg-gradient-to-br from-[#1E3A8A] via-[#102A6B] to-[#1E3A8A] text-white">
        <div className="max-w-[1440px] mx-auto px-9 lg:px-16 space-y-6">
          {/* Company Details (Industrial Design) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-6 border-b border-blue-800/40">


            {/* Corporate Address */}
            <div className="md:col-span-6 space-y-2 text-center md:text-left">
              <span className="text-[9px] font-mono tracking-widest text-blue-200 uppercase">CORPORATE OFFICE</span>
              <p className="text-blue-100 text-xs font-mono leading-relaxed font-semibold">
                Sanstrojan Solutions Pvt. Ltd. <br />
                Jubilee Hills, Hyderabad - 500033, Telangana, India.
              </p>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-6 space-y-2 text-center md:text-right">
              <span className="text-[9px] font-mono tracking-widest text-blue-200 uppercase">CONTACT US</span>
              <div className="space-y-1.5 font-mono text-xs md:flex md:flex-col md:items-end">
                <p className="flex items-center justify-center md:justify-end gap-2">
                  <span className="text-blue-200">MAIL:</span>
                  <a href="mailto:info@courtlivestream.com" className="text-cyan-300 font-semibold hover:underline">
                    info@courtlivestream.com
                  </a>
                </p>
                <p className="flex items-center justify-center md:justify-end gap-2">
                  <span className="text-blue-200">Phone:</span>
                  <a href="tel:+919985673774" className="text-blue-100 font-semibold hover:underline">
                    (+91) 9985673774
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Lower Footer */}
          <div className="flex flex-col items-center justify-center gap-6 pt-4">
            <p className="text-blue-200 text-[10px] font-mono uppercase tracking-widest text-center">
              © {new Date().getFullYear()} CourtLiveStream • Developed by Sanstrojan • All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-[11px] font-mono font-medium text-blue-200">
              <a href="terms-conditions.html" className="hover:text-white border-b border-blue-400 hover:border-white pb-0.5 transition-colors">
                Terms of Service
              </a>
              <a href="cancellation-refund.html" className="hover:text-white border-b border-blue-400 hover:border-white pb-0.5 transition-colors">
                Return Policy
              </a>
              <a href="privacy-policy.html" className="hover:text-white border-b border-blue-400 hover:border-white pb-0.5 transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

