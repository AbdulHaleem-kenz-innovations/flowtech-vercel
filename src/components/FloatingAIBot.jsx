import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { motion as Motion, AnimatePresence } from "motion/react";
import {
  X,
  Send,
  Mic,
  MicOff,
  MessageCircle,
  Phone,
  PhoneOff,
  VolumeX,
  Volume2,
  Download,
  PhoneCall,
  CheckCircle,
} from "lucide-react";
function BotIcon({ size = 28, bodyColor = "white", featureColor = "#0052FF" }) {
  const [blinking, setBlinking] = useState(false);

  useEffect(() => {
    const blink = () => {
      setBlinking(true);
      setTimeout(() => setBlinking(false), 180);
    };
    const interval = setInterval(blink, 3200);
    const timeout = setTimeout(blink, 800);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  const eyeHeight = blinking ? 1.5 : 5;
  const eyeRy = blinking ? 0.75 : 2.5;
  const eyeY = blinking ? 17 : 16;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Antenna */}
      <Motion.line
        x1="20"
        y1="4"
        x2="20"
        y2="10"
        stroke={bodyColor}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <Motion.circle cx="20" cy="3" r="2" fill={bodyColor} />

      {/* Head */}
      <rect
        x="8"
        y="10"
        width="24"
        height="20"
        rx="6"
        fill={bodyColor}
        stroke={bodyColor}
        strokeWidth="1.5"
      />

      {/* Left eye */}
      <Motion.ellipse
        cx="14.5"
        cy={eyeY}
        rx="3"
        ry={eyeRy}
        fill={featureColor}
        animate={{ ry: eyeRy, cy: eyeY }}
        transition={{ duration: 0.1 }}
      />

      {/* Right eye */}
      <Motion.ellipse
        cx="25.5"
        cy={eyeY}
        rx="3"
        ry={eyeRy}
        fill={featureColor}
        animate={{ ry: eyeRy, cy: eyeY }}
        transition={{ duration: 0.1 }}
      />

      {/* Mouth / smile */}
      <path
        d="M15 24 Q20 28 25 24"
        stroke={featureColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Ears */}
      <rect
        x="4"
        y="16"
        width="4"
        height="8"
        rx="2"
        fill={bodyColor}
        opacity={0.7}
      />
      <rect
        x="32"
        y="16"
        width="4"
        height="8"
        rx="2"
        fill={bodyColor}
        opacity={0.7}
      />
    </svg>
  );
}

/* ─── Voice Waveform Visualizer ─── */
function VoiceWaveform({ active }) {
  const barCount = 16;

  const barConfigs = useMemo(
    () =>
      Array.from({ length: barCount }, (_, i) => ({
        heights: [
          4 + Math.random() * 4,
          12 + Math.random() * 20,
          6 + Math.random() * 6,
          14 + Math.random() * 18,
          4 + Math.random() * 4,
        ],
        duration: 0.9 + Math.random() * 0.6,
        delay: i * 0.05,
      })),
    [],
  );

  return (
    <div className="flex items-center justify-center gap-[3px] h-10">
      {barConfigs.map((config, i) => (
        <Motion.div
          key={i}
          className="w-[3px] rounded-full bg-gradient-to-t from-[#1856FF] to-[#00D4FF]"
          animate={active ? { height: config.heights } : { height: 4 }}
          transition={
            active
              ? {
                  duration: config.duration,
                  repeat: Infinity,
                  repeatType: "mirror",
                  delay: config.delay,
                  ease: "easeInOut",
                }
              : { duration: 0.4, ease: "easeOut" }
          }
        />
      ))}
    </div>
  );
}

export function FloatingAIBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [activeTab, setActiveTab] = useState("chat");
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [voiceActive, setVoiceActive] = useState(false);
  const [voiceStatus, setVoiceStatus] = useState("idle");
  const [voiceTranscript, setVoiceTranscript] = useState([]);
  const [callDuration, setCallDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [sessionId, setSessionId] = useState(null);

  // Call Assistant & OTP States
  const [showCallForm, setShowCallForm] = useState(false);
  const [callFormData, setCallFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [otpSuccess, setOtpSuccess] = useState(false);

  const messagesEndRef = useRef(null);
  const voiceTranscriptEndRef = useRef(null);
  const inputRef = useRef(null);
  const socketRef = useRef(null);
  const audioContextRef = useRef(null);
  const streamRef = useRef(null);
  const processorRef = useRef(null);
  const otpRefs = useRef([]);

  const AGENT_ID = "e88abb4e9858bb8e";

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setCallFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!callFormData.name.trim()) errors.name = "Name is required";
    if (!callFormData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(callFormData.email)) {
      errors.email = "Please enter a valid email";
    }
    if (!callFormData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^\+?[0-9\s-]{8,20}$/.test(callFormData.phone)) {
      errors.phone = "Please enter a valid phone number";
    }
    if (!callFormData.message.trim()) errors.message = "Message is required";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsOtpSent(true);
  };

  const handleOtpChange = (value, index) => {
    if (value && isNaN(Number(value))) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (value && index < 5) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (!otp[index] && index > 0) {
        const newOtp = [...otp];
        newOtp[index - 1] = "";
        setOtp(newOtp);
        otpRefs.current[index - 1]?.focus();
      } else {
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      }
    }
  };

  const handleOtpVerify = () => {
    const otpCode = otp.join("");
    if (otpCode.length < 6) return;

    setOtpSuccess(true);
    setTimeout(() => {
      setShowCallForm(false);
      setIsOtpSent(false);
      setOtp(["", "", "", "", "", ""]);
      setOtpSuccess(false);
      setCallFormData({ name: "", email: "", phone: "", message: "" });
    }, 2000);
  };

  // Detect dark mode
  useEffect(() => {
    const check = () =>
      setIsDark(document.documentElement.classList.contains("dark"));
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  // WebSocket Connection Logic
  useEffect(() => {
    const socket = new WebSocket("wss://chatbot.kenvoice.ai/ws");
    socketRef.current = socket;

    socket.onopen = () => {
      console.log("✅ Connected:", activeTab);
      socket.send(
        JSON.stringify({
          username: "Ibrahim",
          agent_uid: AGENT_ID,
          mode: activeTab,
        }),
      );
    };

    socket.onmessage = async (event) => {
      try {
        const data = JSON.parse(event.data);

        if (data.type === "session_init") {
          setSessionId(data.session_id);
          return;
        }

        const botMsg = data.message || data.response;
        if (botMsg && activeTab === "chat") {
          setIsTyping(false);
          setMessages((prev) => [
            ...prev,
            {
              id: Date.now().toString(),
              sender: "ai",
              text: botMsg,
              time: new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              }),
            },
          ]);
        }

        if (data.type === "audio_response" && data.audio) {
          const pcmBytes = Uint8Array.from(atob(data.audio), (c) =>
            c.charCodeAt(0),
          );
          playPCM(pcmBytes);
        }

        if (data.type === "pdf") {
          setMessages((prev) => [
            ...prev,
            {
              id: Date.now().toString(),
              sender: "ai",
              type: "pdf",
              url: data.url,
              fileName: data.fileName,
              time: new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              }),
            },
          ]);
        }
      } catch (err) {
        console.error("Socket parse error:", err);
      }
    };

    return () => socket.close();
  }, [activeTab]);

  const nextStartTimeRef = useRef(0);

  const playPCM = (pcmBytes) => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (
        window.AudioContext || window.webkitAudioContext
      )({
        sampleRate: 24000,
      });
      nextStartTimeRef.current = audioContextRef.current.currentTime;
    }

    const ctx = audioContextRef.current;

    if (ctx.state === "suspended") {
      ctx.resume();
    }

    const samples = pcmBytes.length / 2;
    const float32 = new Float32Array(samples);
    const view = new DataView(pcmBytes.buffer);

    for (let i = 0; i < samples; i++) {
      float32[i] = view.getInt16(i * 2, true) / 32768;
    }

    const buffer = ctx.createBuffer(1, samples, 24000);
    buffer.copyToChannel(float32, 0);

    const source = ctx.createBufferSource();
    source.buffer = buffer;
    source.connect(ctx.destination);

    const startTime = Math.max(ctx.currentTime, nextStartTimeRef.current);
    source.start(startTime);

    nextStartTimeRef.current = startTime + buffer.duration;

    setVoiceStatus("speaking");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const sendMessage = () => {
    if (!inputValue.trim() || !socketRef.current) return;

    const userMsg = {
      id: Date.now().toString(),
      sender: "user",
      text: inputValue.trim(),
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    socketRef.current.send(
      JSON.stringify({
        message: inputValue.trim(),
        agent_uid: AGENT_ID,
      }),
    );

    setInputValue("");
  };

  const startVoice = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const ctx = new AudioContext({ sampleRate: 16000 });
      const source = ctx.createMediaStreamSource(stream);
      const processor = ctx.createScriptProcessor(4096, 1, 1);

      socketRef.current.send(
        JSON.stringify({
          type: "voice_start",
          agent_uid: AGENT_ID,
          session_id: sessionId,
        }),
      );

      processor.onaudioprocess = (e) => {
        if (isMuted) return;
        const float32 = e.inputBuffer.getChannelData(0);
        const pcm16 = new Int16Array(float32.length);
        for (let i = 0; i < float32.length; i++) {
          pcm16[i] = Math.max(-32768, Math.min(32767, float32[i] * 32768));
        }
        const base64 = btoa(
          String.fromCharCode(...new Uint8Array(pcm16.buffer)),
        );
        socketRef.current.send(
          JSON.stringify({ type: "audio_chunk", audio: base64 }),
        );
      };

      source.connect(processor);
      processor.connect(ctx.destination);

      streamRef.current = stream;
      audioContextRef.current = ctx;
      processorRef.current = processor;
      setVoiceActive(true);
      setVoiceStatus("listening");
    } catch (err) {
      console.error("Mic error:", err);
    }
  };

  const endConversation = () => {
    if (socketRef.current)
      socketRef.current.send(JSON.stringify({ type: "voice_end" }));
    if (streamRef.current)
      streamRef.current.getTracks().forEach((t) => t.stop());
    if (audioContextRef.current) audioContextRef.current.close();
    setVoiceActive(false);
    setVoiceStatus("idle");
  };

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleDownload = (url, filename) => {
    const a = document.createElement("a");
    a.href = url;
    a.download = filename || "document.pdf";
    a.target = "_blank";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <>
      {/* Backdrop matching your image's dark vignette */}
      <AnimatePresence>
        {(isOpen || showOptions) && (
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[998] md:bg-transparent md:backdrop-blur-none md:pointer-events-none"
            onClick={() => {
              setIsOpen(false);
              setShowOptions(false);
            }}
          />
        )}
      </AnimatePresence>

      {/* Main Bot Card Window */}
      <AnimatePresence>
        {isOpen && (
          <Motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 30 }}
            transition={{
              type: "spring",
              stiffness: 350,
              damping: 30,
            }}
            className="fixed bottom-24 right-4 sm:right-6 z-[999] w-[calc(100vw-2rem)] sm:w-[400px] h-[540px] rounded-2xl shadow-2xl overflow-hidden border border-[#1856FF]/30 flex flex-col bg-[#0A1128] dark:bg-[#040814]"
          >
            {/* Header: Matches Flowtech Navy-to-Blue Linear Gradient */}
            <div className="relative flex items-center px-4 py-4 bg-gradient-to-r from-[#030F26] via-[#1035AC] to-[#1856FF]">
              <div className="relative flex items-center gap-3 flex-1">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/20">
                  <BotIcon size={24} bodyColor="white" featureColor="#1856FF" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold tracking-wide">
                    Sophia Assistant
                  </p>
                  <p className="text-white/60 text-xs flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00FF66] inline-block animate-pulse" />
                    Always here to help
                  </p>
                </div>
              </div>
            </div>


            <div className="flex-1 overflow-hidden flex flex-col bg-[#0A1128] dark:bg-[#050B1A]">
              <AnimatePresence mode="wait">
                {activeTab === "chat" ? (
                  <Motion.div
                    key="chat"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                    className="flex-1 flex flex-col overflow-hidden"
                  >
                    {/* Message Area */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10">
                      {messages.map((msg) => (
                        <Motion.div
                          key={msg.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                        >
                          <div
                            className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm shadow-md ${
                              msg.sender === "user"
                                ? "bg-gradient-to-r from-[#1856FF] to-[#3A7BFF] text-white rounded-tr-none"
                                : "bg-white/10 backdrop-blur-md border border-white/10 text-white rounded-tl-none"
                            }`}
                          >
                            {msg.type === "pdf" ? (
                              <div className="flex items-center gap-3 bg-black/20 p-3 rounded-lg border border-white/10 max-w-[260px]">
                                <div className="w-10 h-10 flex items-center justify-center bg-[#1856FF]/20 rounded border border-[#1856FF]/40">
                                  <span className="text-xs font-bold text-[#3A7BFF]">
                                    PDF
                                  </span>
                                </div>
                                <div className="flex-1 overflow-hidden">
                                  <p className="text-sm font-medium text-white truncate">
                                    {msg.fileName || "Document.pdf"}
                                  </p>
                                  <p className="text-xs text-white/40">
                                    PDF Report
                                  </p>
                                </div>
                                <button
                                  onClick={() =>
                                    handleDownload(msg.url, msg.fileName)
                                  }
                                  className="text-[#1856FF] hover:text-[#56A0FF] transition-colors"
                                >
                                  <Download size={16} />
                                </button>
                              </div>
                            ) : (
                              <p className="leading-relaxed">{msg.text}</p>
                            )}
                            <p
                              className={`text-[10px] mt-1 text-right ${msg.sender === "user" ? "text-white/60" : "text-white/40"}`}
                            >
                              {msg.time}
                            </p>
                          </div>
                        </Motion.div>
                      ))}

                      {isTyping && (
                        <Motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="flex justify-start"
                        >
                          <div className="bg-white/10 border border-white/5 rounded-2xl rounded-tl-none px-4 py-3 flex items-center gap-1.5">
                            {[0, 1, 2].map((i) => (
                              <Motion.div
                                key={i}
                                className="w-2 h-2 rounded-full bg-[#1856FF]"
                                animate={{ y: [0, -5, 0] }}
                                transition={{
                                  duration: 0.6,
                                  repeat: Infinity,
                                  repeatDelay: 0.1,
                                  delay: i * 0.15,
                                }}
                              />
                            ))}
                          </div>
                        </Motion.div>
                      )}
                      <div ref={messagesEndRef} />
                    </div>

                    {/* Chat Inputs Component styling matches white input block fields */}
                    <div className="p-3 border-t border-white/10 bg-[#060D21]">
                      <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 focus-within:border-[#1856FF] focus-within:ring-1 focus-within:ring-[#1856FF]/30 transition-all">
                        <input
                          ref={inputRef}
                          type="text"
                          value={inputValue}
                          onChange={(e) => setInputValue(e.target.value)}
                          onKeyDown={handleKeyDown}
                          placeholder="Type your message..."
                          className="flex-1 bg-transparent text-sm text-white placeholder:text-white/30 outline-none"
                        />
                        <button
                          onClick={sendMessage}
                          disabled={!inputValue.trim()}
                          className="w-8 h-8 rounded-lg bg-[#1856FF] hover:bg-[#1245DD] disabled:opacity-30 flex items-center justify-center text-white transition-colors cursor-pointer"
                        >
                          <Send size={14} />
                        </button>
                      </div>
                    </div>
                  </Motion.div>
                ) : (
                  <Motion.div
                    key="voice"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.2 }}
                    className="flex-1 flex flex-col overflow-hidden"
                  >
                    {/* Voice Display Bar */}
                    <div className="shrink-0 px-4 pt-4 pb-4 border-b border-white/10 bg-[#060D21]">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          {voiceActive && !isMuted && (
                            <>
                              <Motion.div
                                className="absolute inset-[-6px] rounded-full border-2 border-[#1856FF]/30"
                                animate={{
                                  scale: [1, 1.4, 1],
                                  opacity: [0.4, 0, 0.4],
                                }}
                                transition={{ duration: 1.8, repeat: Infinity }}
                              />
                              <Motion.div
                                className="absolute inset-[-3px] rounded-full border border-[#00D4FF]/30"
                                animate={{
                                  scale: [1, 1.25, 1],
                                  opacity: [0.5, 0.1, 0.5],
                                }}
                                transition={{
                                  duration: 1.8,
                                  repeat: Infinity,
                                  delay: 0.2,
                                }}
                              />
                            </>
                          )}
                          <Motion.button
                            onClick={!voiceActive ? startVoice : undefined}
                            whileTap={
                              !voiceActive ? { scale: 0.92 } : undefined
                            }
                            className={`relative w-14 h-14 rounded-full flex items-center justify-center transition-all ${
                              voiceActive
                                ? isMuted
                                  ? "bg-amber-500/20 text-amber-400 border border-amber-500/40"
                                  : "bg-gradient-to-r from-[#1856FF] to-[#3A7BFF] text-white shadow-[0_0_20px_rgba(24,86,255,0.5)]"
                                : "bg-white/10 border border-white/10 text-white hover:bg-white/20 cursor-pointer"
                            }`}
                          >
                            {voiceActive && isMuted ? (
                              <MicOff size={22} />
                            ) : (
                              <Mic size={22} />
                            )}
                          </Motion.button>
                        </div>

                        <div className="flex-1 min-w-0">
                          <AnimatePresence mode="wait">
                            <Motion.p
                              key={voiceStatus}
                              initial={{ opacity: 0, y: 4 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -4 }}
                              transition={{ duration: 0.15 }}
                              className={`text-xs mb-1.5 font-semibold ${
                                voiceStatus === "listening"
                                  ? isMuted
                                    ? "text-amber-400"
                                    : "text-[#00D4FF]"
                                  : voiceStatus === "speaking"
                                    ? "text-[#00FF66]"
                                    : "text-white/50"
                              }`}
                            >
                              {voiceStatus === "idle" && "Tap mic to start"}
                              {voiceStatus === "listening" &&
                                (isMuted ? "Muted" : "Listening...")}
                              {voiceStatus === "speaking" &&
                                "Ken is speaking..."}
                            </Motion.p>
                          </AnimatePresence>
                          <VoiceWaveform active={voiceActive} />
                        </div>

                        {voiceActive && (
                          <Motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="shrink-0 flex items-center gap-1.5 bg-black/30 px-2.5 py-1 rounded-full border border-white/10"
                          >
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                            <span className="text-xs text-white/80 font-mono">
                              {String(Math.floor(callDuration / 60)).padStart(
                                2,
                                "0",
                              )}
                              :{String(callDuration % 60).padStart(2, "0")}
                            </span>
                          </Motion.div>
                        )}
                      </div>
                    </div>

                    {/* Transcripts Window Area */}
                    <div className="flex-1 overflow-y-auto">
                      {!voiceActive && voiceTranscript.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full px-6 text-center">
                          <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                            <Mic size={24} className="text-white/40" />
                          </div>
                          <p className="text-sm text-white font-medium mb-1">
                            Start a Voice Conversation
                          </p>
                          <p className="text-xs text-white/40 mb-5 max-w-[240px]">
                            Talk to Ken AI seamlessly like a live video call
                            session.
                          </p>
                          <div className="flex flex-wrap gap-2 justify-center">
                            {["Product Info", "Pricing", "Book a Demo"].map(
                              (label) => (
                                <button
                                  key={label}
                                  onClick={startVoice}
                                  className="px-3 py-1.5 text-xs rounded-full border border-white/10 text-white/60 hover:border-[#1856FF] hover:text-[#1856FF] bg-white/5 transition-all cursor-pointer"
                                >
                                  {label}
                                </button>
                              ),
                            )}
                          </div>
                        </div>
                      ) : (
                        <div className="p-4 space-y-3">
                          {voiceTranscript.map((entry) => (
                            <Motion.div
                              key={entry.id}
                              initial={{ opacity: 0, y: 12 }}
                              animate={{ opacity: 1, y: 0 }}
                              className={`flex ${entry.sender === "user" ? "justify-end" : "justify-start"}`}
                            >
                              <div
                                className={`max-w-[82%] rounded-2xl px-4 py-2.5 text-sm ${
                                  entry.sender === "user"
                                    ? "bg-[#1856FF] text-white rounded-br-none"
                                    : "bg-white/10 border border-white/10 text-white rounded-bl-none"
                                }`}
                              >
                                <div className="text-[10px] opacity-50 mb-0.5">
                                  {entry.sender === "bot" ? "Ken AI" : "You"}
                                </div>
                                <p className="leading-relaxed">{entry.text}</p>
                              </div>
                            </Motion.div>
                          ))}
                          <div ref={voiceTranscriptEndRef} />
                        </div>
                      )}
                    </div>

                    {/* Live Voice Tab Footer Utility Controllers */}
                    <div className="shrink-0 px-4 py-3 border-t border-white/10 bg-[#060D21]">
                      <AnimatePresence mode="wait">
                        {voiceActive ? (
                          <Motion.div
                            key="voice-controls"
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            className="flex items-center gap-3"
                          >
                            <button
                              onClick={toggleMute}
                              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer border ${
                                isMuted
                                  ? "bg-amber-500/20 text-amber-400 border-amber-500/30"
                                  : "bg-white/5 border-white/10 text-white hover:bg-white/10"
                              }`}
                            >
                              {isMuted ? (
                                <VolumeX size={16} />
                              ) : (
                                <Volume2 size={16} />
                              )}
                              {isMuted ? "Unmute" : "Mute"}
                            </button>

                            <button
                              onClick={endConversation}
                              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30 transition-all cursor-pointer"
                            >
                              <PhoneOff size={16} />
                              End Call
                            </button>
                          </Motion.div>
                        ) : (
                          <p className="text-[10px] text-white/30 text-center py-1">
                            Powered by KenVoice AI
                          </p>
                        )}
                      </AnimatePresence>
                    </div>
                  </Motion.div>
                )}
              </AnimatePresence>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Trigger Button (FAB) */}
      <div className="fixed bottom-6 right-4 sm:right-6 z-[999] flex flex-col items-end gap-3">
        <AnimatePresence>
          {showOptions && !isOpen && (
            <div className="flex flex-col items-end gap-3 mb-1 pointer-events-auto">
              {/* Call Assistant Option Button */}
              <Motion.div
                initial={{ opacity: 0, y: 15, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 15, scale: 0.8 }}
                transition={{ type: "spring", stiffness: 400, damping: 25, delay: 0.1 }}
                className="flex items-center gap-3 group cursor-pointer"
                onClick={() => {
                  setShowCallForm(true);
                  setShowOptions(false);
                }}
              >
                <span className="text-xs bg-[#0A1128]/95 backdrop-blur-md border border-[#1856FF]/30 text-white/90 font-medium px-3 py-1.5 rounded-lg shadow-lg select-none whitespace-nowrap group-hover:border-[#1856FF]/60 group-hover:text-white transition-all">
                  Call Assistant
                </span>
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center border border-[#1856FF]/30 bg-[#0A1128]/90 backdrop-blur-md text-white group-hover:bg-[#1856FF] group-hover:border-transparent group-hover:shadow-[0_0_15px_rgba(24,86,255,0.4)] transition-all shadow-lg"
                >
                  <PhoneCall size={20} />
                </div>
              </Motion.div>

              {/* Chat Option Button */}
              <Motion.div
                initial={{ opacity: 0, y: 15, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 15, scale: 0.8 }}
                transition={{ type: "spring", stiffness: 400, damping: 25, delay: 0.05 }}
                className="flex items-center gap-3 group cursor-pointer"
                onClick={() => {
                  setActiveTab("chat");
                  setIsOpen(true);
                  setShowOptions(false);
                }}
              >
                <span className="text-xs bg-[#0A1128]/95 backdrop-blur-md border border-[#1856FF]/30 text-white/90 font-medium px-3 py-1.5 rounded-lg shadow-lg select-none whitespace-nowrap group-hover:border-[#1856FF]/60 group-hover:text-white transition-all">
                  Chat Assistant
                </span>
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center border border-[#1856FF]/30 bg-[#0A1128]/90 backdrop-blur-md text-white group-hover:bg-[#1856FF] group-hover:border-transparent group-hover:shadow-[0_0_15px_rgba(24,86,255,0.4)] transition-all shadow-lg"
                >
                  <MessageCircle size={20} />
                </div>
              </Motion.div>

              {/* Voice Option Button */}
              <Motion.div
                initial={{ opacity: 0, y: 15, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 15, scale: 0.8 }}
                transition={{ type: "spring", stiffness: 400, damping: 25, delay: 0 }}
                className="flex items-center gap-3 group cursor-pointer"
                onClick={() => {
                  setActiveTab("voice");
                  setIsOpen(true);
                  setShowOptions(false);
                }}
              >
                <span className="text-xs bg-[#0A1128]/95 backdrop-blur-md border border-[#1856FF]/30 text-white/90 font-medium px-3 py-1.5 rounded-lg shadow-lg select-none whitespace-nowrap group-hover:border-[#1856FF]/60 group-hover:text-white transition-all">
                  Voice Assistant
                </span>
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center border border-[#1856FF]/30 bg-[#0A1128]/90 backdrop-blur-md text-white group-hover:bg-[#1856FF] group-hover:border-transparent group-hover:shadow-[0_0_15px_rgba(24,86,255,0.4)] transition-all shadow-lg"
                >
                  <Phone size={20} />
                </div>
              </Motion.div>
            </div>
          )}
        </AnimatePresence>

        <Motion.button
          onClick={() => {
            if (isOpen) {
              setIsOpen(false);
              setShowOptions(false);
            } else {
              setShowOptions(!showOptions);
            }
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-[60px] h-[60px] rounded-full flex items-center justify-center shadow-2xl cursor-pointer overflow-hidden border border-white/20 bg-gradient-to-br from-[#1856FF] to-[#0A1128]"
        >
          {/* Animated glass shine effect line sweep */}
          <Motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{ x: ["-100%", "200%"] }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut",
            }}
            style={{ width: "50%" }}
          />

          <AnimatePresence mode="wait">
            {isOpen || showOptions ? (
              <Motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="text-white"
              >
                <X size={24} />
              </Motion.div>
            ) : (
              <Motion.div
                key="bot"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <BotIcon size={32} bodyColor="white" featureColor="#0A1128" />
              </Motion.div>
            )}
          </AnimatePresence>
        </Motion.button>
      </div>

      {/* Call Assistant Pop-up Form Modal */}
      <AnimatePresence>
        {showCallForm && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 overflow-y-auto">
            {/* Blurry Backdrop overlay */}
            <Motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-md"
              onClick={() => {
                setShowCallForm(false);
                setIsOtpSent(false);
                setOtp(["", "", "", "", "", ""]);
                setOtpSuccess(false);
                setCallFormData({ name: "", email: "", phone: "", message: "" });
              }}
            />

            {/* Modal Card */}
            <Motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              className="relative w-full max-w-md rounded-2xl border border-[#1856FF]/30 bg-[#0A1128]/95 p-6 sm:p-8 shadow-2xl overflow-hidden z-10"
            >
              {/* Decorative radial glows */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#1856FF]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#00D4FF]/5 rounded-full blur-3xl pointer-events-none" />

              {/* Close Button */}
              <button
                onClick={() => {
                  setShowCallForm(false);
                  setIsOtpSent(false);
                  setOtp(["", "", "", "", "", ""]);
                  setOtpSuccess(false);
                  setCallFormData({ name: "", email: "", phone: "", message: "" });
                }}
                className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>

              {!isOtpSent ? (
                /* Form screen */
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="text-center mb-6">
                    <div className="mx-auto w-12 h-12 rounded-full bg-[#1856FF]/20 border border-[#1856FF]/40 flex items-center justify-center text-[#1856FF] mb-3">
                      <PhoneCall size={22} />
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-wide">
                      Request Call Assistant
                    </h3>
                    <p className="text-xs text-white/60 mt-1">
                      Fill out the details below and we will connect with you.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold text-white/70 mb-1.5 uppercase tracking-wider">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={callFormData.name}
                        onChange={handleFormChange}
                        placeholder="John Doe"
                        className={`w-full bg-white/5 border ${
                          formErrors.name ? "border-red-500/50 focus:border-red-500" : "border-white/10 focus:border-[#1856FF]"
                        } rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 outline-none focus:ring-2 ${
                          formErrors.name ? "focus:ring-red-500/20" : "focus:ring-[#1856FF]/20"
                        } transition-all`}
                      />
                      {formErrors.name && (
                        <p className="text-red-400 text-xs mt-1 font-medium">{formErrors.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-white/70 mb-1.5 uppercase tracking-wider">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={callFormData.email}
                        onChange={handleFormChange}
                        placeholder="john@example.com"
                        className={`w-full bg-white/5 border ${
                          formErrors.email ? "border-red-500/50 focus:border-red-500" : "border-white/10 focus:border-[#1856FF]"
                        } rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 outline-none focus:ring-2 ${
                          formErrors.email ? "focus:ring-red-500/20" : "focus:ring-[#1856FF]/20"
                        } transition-all`}
                      />
                      {formErrors.email && (
                        <p className="text-red-400 text-xs mt-1 font-medium">{formErrors.email}</p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-semibold text-white/70 mb-1.5 uppercase tracking-wider">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={callFormData.phone}
                        onChange={handleFormChange}
                        placeholder="+1 (555) 000-0000"
                        className={`w-full bg-white/5 border ${
                          formErrors.phone ? "border-red-500/50 focus:border-red-500" : "border-white/10 focus:border-[#1856FF]"
                        } rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 outline-none focus:ring-2 ${
                          formErrors.phone ? "focus:ring-red-500/20" : "focus:ring-[#1856FF]/20"
                        } transition-all`}
                      />
                      {formErrors.phone && (
                        <p className="text-red-400 text-xs mt-1 font-medium">{formErrors.phone}</p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-semibold text-white/70 mb-1.5 uppercase tracking-wider">
                        Message / Query
                      </label>
                      <textarea
                        name="message"
                        value={callFormData.message}
                        onChange={handleFormChange}
                        placeholder="How can we assist you?"
                        rows={3}
                        className={`w-full bg-white/5 border ${
                          formErrors.message ? "border-red-500/50 focus:border-red-500" : "border-white/10 focus:border-[#1856FF]"
                        } rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 outline-none resize-none focus:ring-2 ${
                          formErrors.message ? "focus:ring-red-500/20" : "focus:ring-[#1856FF]/20"
                        } transition-all`}
                      />
                      {formErrors.message && (
                        <p className="text-red-400 text-xs mt-1 font-medium">{formErrors.message}</p>
                      )}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#1856FF] to-[#3A7BFF] hover:from-[#1245DD] hover:to-[#2F65DF] text-white py-3.5 rounded-xl font-semibold tracking-wide shadow-lg hover:shadow-[#1856FF]/30 transition-all cursor-pointer flex items-center justify-center gap-2 mt-2"
                  >
                    Request Callback
                  </button>
                </form>
              ) : (
                /* OTP Screen */
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="mx-auto w-12 h-12 rounded-full bg-[#00FF66]/10 border border-[#00FF66]/30 flex items-center justify-center text-[#00FF66] mb-3">
                      {otpSuccess ? (
                        <CheckCircle size={22} className="animate-bounce" />
                      ) : (
                        <span className="text-lg font-bold">123</span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-wide">
                      {otpSuccess ? "Verification Successful" : "Enter Verification Code"}
                    </h3>
                    <p className="text-xs text-white/60 mt-1 max-w-[280px] mx-auto leading-relaxed">
                      {otpSuccess
                        ? "Thank you! Our assistant will call you shortly."
                        : `We have sent a 6-digit confirmation code to ${callFormData.phone}`}
                    </p>
                  </div>

                  {!otpSuccess && (
                    <>
                      {/* OTP Inputs Grid */}
                      <div className="flex justify-between gap-2 max-w-[320px] mx-auto my-6">
                        {otp.map((digit, idx) => (
                          <input
                            key={idx}
                            ref={(el) => (otpRefs.current[idx] = el)}
                            type="text"
                            maxLength={2}
                            value={digit}
                            onChange={(e) => handleOtpChange(e.target.value, idx)}
                            onKeyDown={(e) => handleOtpKeyDown(e, idx)}
                            className="w-11 h-12 sm:w-12 sm:h-12 bg-white/5 border border-white/10 rounded-xl text-center text-lg sm:text-xl font-bold text-white focus:border-[#1856FF] focus:ring-2 focus:ring-[#1856FF]/20 outline-none transition-all"
                          />
                        ))}
                      </div>

                      <button
                        onClick={handleOtpVerify}
                        disabled={otp.join("").length < 6}
                        className="w-full bg-gradient-to-r from-[#1856FF] to-[#3A7BFF] hover:from-[#1245DD] hover:to-[#2F65DF] text-white py-3.5 rounded-xl font-semibold tracking-wide shadow-lg hover:shadow-[#1856FF]/30 disabled:opacity-40 disabled:hover:from-[#1856FF] disabled:hover:to-[#3A7BFF] transition-all cursor-pointer flex items-center justify-center gap-2"
                      >
                        Verify & Submit
                      </button>

                      <div className="text-center">
                        <button
                          onClick={() => {
                            alert("Dummy OTP Resent successfully!");
                          }}
                          className="text-xs text-[#3A7BFF] hover:text-[#1856FF] font-medium transition-colors cursor-pointer"
                        >
                          Resend verification code
                        </button>
                      </div>
                    </>
                  )}

                  {otpSuccess && (
                    <div className="py-8 text-center text-[#00FF66] font-semibold text-sm flex flex-col items-center justify-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#00FF66] animate-ping" />
                      Connecting with Flowtech Assistant...
                    </div>
                  )}
                </div>
              )}
            </Motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
