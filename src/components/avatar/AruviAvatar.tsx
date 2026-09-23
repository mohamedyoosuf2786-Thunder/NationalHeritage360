import React, { useState, useRef, useEffect } from 'react';
import { useHeritage } from '../../context/HeritageContext';
import { initialAruviMessages, generateAruviResponse } from '../../data/aruviKnowledgeBase';
import { AruviMessage } from '../../types';
import { VerifiedBadge } from '../common/VerifiedBadge';
import { 
  Bot, 
  Send, 
  Mic, 
  MicOff, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  ShieldCheck, 
  HelpCircle, 
  RotateCcw,
  ArrowRight
} from 'lucide-react';

export const AruviAvatar: React.FC = () => {
  const { playChime, playSuccessChime, addXP } = useHeritage();
  
  const [messages, setMessages] = useState<AruviMessage[]>(initialAruviMessages);
  const [inputQuery, setInputQuery] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [isListening, setIsListening] = useState<boolean>(false);
  const [activeSpeechId, setActiveSpeechId] = useState<string | null>(null);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Handle Speech-to-Text Microphone
  const toggleListening = () => {
    playChime();
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      // Browser does not support speech recognition, simulate speech prompt
      setIsListening(true);
      setTimeout(() => {
        setInputQuery('Explain the sacred mathematics behind Kolam patterns');
        setIsListening(false);
      }, 1800);
      return;
    }

    if (isListening) {
      setIsListening(false);
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.lang = 'en-IN';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInputQuery(transcript);
        setIsListening(false);
      };

      recognition.onerror = () => {
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    } catch {
      setIsListening(false);
    }
  };

  // Handle Text-to-Speech Playback
  const handleSpeak = (msg: AruviMessage) => {
    if (!('speechSynthesis' in window)) return;

    if (activeSpeechId === msg.id) {
      window.speechSynthesis.cancel();
      setActiveSpeechId(null);
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(msg.text);
    utterance.rate = 0.95;
    utterance.pitch = 1.05;
    
    // Pick an Indian English voice if available
    const voices = window.speechSynthesis.getVoices();
    const inVoice = voices.find(v => v.lang.includes('en-IN') || v.name.includes('India'));
    if (inVoice) {
      utterance.voice = inVoice;
    }

    setActiveSpeechId(msg.id);
    utterance.onend = () => setActiveSpeechId(null);
    utterance.onerror = () => setActiveSpeechId(null);

    window.speechSynthesis.speak(utterance);
  };

  const handleSendMessage = (textToSend?: string) => {
    const query = (textToSend || inputQuery).trim();
    if (!query) return;

    playChime();

    // Append user message
    const userMsg: AruviMessage = {
      id: 'user-' + Date.now(),
      sender: 'user',
      text: query,
      timestamp: 'Just now'
    };

    setMessages(prev => [...prev, userMsg]);
    setInputQuery('');
    setIsTyping(true);

    // Simulate AI synthesis with RAG lookup
    setTimeout(() => {
      const aruviReply = generateAruviResponse(query);
      setIsTyping(false);
      setMessages(prev => [...prev, aruviReply]);
      playSuccessChime();
      addXP(15, 'Engaged in cultural inquiry with Aruvi AI');

      // Automatically speak greeting if first response
      if (messages.length <= 2) {
        handleSpeak(aruviReply);
      }
    }, 900);
  };

  const samplePrompts = [
    'Why does Thanjavur Brihadisvara Temple cast no shadow?',
    'How is natural indigo dye prepared in Ajrakh printing?',
    'Explain the sacred mathematics behind Kolam patterns',
    'What is the legend and ecological significance of Hornbill Festival?',
    'What is the cosmic parallel between Nataraja and quantum physics at CERN?',
    'Explain the origin and martial principles of Kalaripayattu'
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              AI Culture Avatar • Conversational Guide
            </span>
            <VerifiedBadge sourceName="IGNCA & ASI Knowledge Base" />
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-black text-stone-900">
            Aruvi — Your Living Cultural Companion
          </h1>
          <p className="text-stone-600 text-sm mt-1">
            Trained on classical texts, architectural canons, living folklore, and verified by national cultural institutions.
          </p>
        </div>

        {/* Quick Reset */}
        <button
          onClick={() => {
            playChime();
            setMessages(initialAruviMessages);
            window.speechSynthesis?.cancel();
            setActiveSpeechId(null);
          }}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-stone-200 text-stone-700 hover:bg-stone-50 text-xs font-bold shadow-sm transition-all"
        >
          <RotateCcw className="w-3.5 h-3.5 text-stone-500" />
          <span>Reset Dialogue</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Aruvi Avatar Visual Card & Audio Waves */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-gradient-to-b from-stone-900 via-stone-900 to-terracotta-950 text-white rounded-3xl p-6 sm:p-8 border border-amber-500/40 shadow-xl flex flex-col items-center text-center relative overflow-hidden">
            
            {/* Background halo */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-terracotta-500/10 rounded-full blur-2xl pointer-events-none" />

            {/* Avatar Visual with Mandala Frame */}
            <div className="relative mb-4">
              <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-amber-500 via-terracotta-600 to-amber-300 p-1 shadow-2xl flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-stone-900 flex flex-col items-center justify-center relative overflow-hidden border-2 border-amber-300/40">
                  {/* Subtle traditional motif */}
                  <span className="font-serif text-3xl font-black text-amber-400">अ</span>
                  <span className="text-[10px] text-amber-200 uppercase tracking-widest font-bold">Aruvi</span>
                </div>
              </div>

              {/* Pulsing indicator when speaking */}
              {activeSpeechId && (
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-amber-500 text-stone-950 text-[10px] font-black uppercase tracking-wider flex items-center gap-1 shadow-lg animate-pulse">
                  <Volume2 className="w-3 h-3" />
                  <span>Speaking</span>
                </div>
              )}
            </div>

            <h3 className="font-serif text-2xl font-bold text-stone-100">
              Aruvi (அருவி)
            </h3>
            <p className="text-xs text-amber-300/90 font-medium mt-1">
              AI Cultural Scholar & Living Lore Guardian
            </p>

            {/* Audio Wave Visualizer Simulation */}
            <div className="flex items-center justify-center gap-1.5 h-8 my-4">
              {[40, 75, 55, 95, 60, 80, 45, 90, 65, 50, 70, 40].map((height, i) => (
                <span
                  key={i}
                  style={{ 
                    height: (activeSpeechId || isListening || isTyping) ? `${height}%` : '20%' 
                  }}
                  className={`w-1 rounded-full transition-all duration-300 ${
                    activeSpeechId 
                      ? 'bg-amber-400 animate-pulse' 
                      : isListening 
                      ? 'bg-rose-500 animate-bounce' 
                      : isTyping 
                      ? 'bg-terracotta-400 animate-pulse' 
                      : 'bg-stone-700'
                  }`}
                />
              ))}
            </div>

            <p className="text-xs text-stone-300 leading-relaxed mb-4">
              "Every temple carved in stone, every rhythm struck on clay, and every drop of natural indigo holds the empirical wisdom of fifty centuries."
            </p>

            {/* Verified Sources Pill */}
            <div className="w-full pt-4 border-t border-stone-800 text-[11px] text-stone-400 flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>RAG Verified against IGNCA & ASI Texts</span>
            </div>

          </div>

          {/* Quick Cultural Prompt Chips */}
          <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-stone-500 uppercase tracking-wider">
              <HelpCircle className="w-4 h-4 text-amber-600" />
              <span>Recommended Inquiries</span>
            </div>

            <div className="space-y-2">
              {samplePrompts.slice(0, 4).map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(prompt)}
                  className="w-full text-left p-3 rounded-2xl bg-[#FAF7F2] hover:bg-amber-50/80 border border-stone-200/80 text-xs font-semibold text-stone-800 transition-all flex items-center justify-between group"
                >
                  <span className="line-clamp-2 pr-2">{prompt}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-amber-600 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Conversational Chat Interface */}
        <div className="lg:col-span-8 bg-white rounded-3xl border border-stone-200 shadow-lg flex flex-col h-[650px] overflow-hidden">
          
          {/* Chat Header Bar */}
          <div className="px-6 py-4 border-b border-stone-200 bg-[#FAF7F2] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
              <div>
                <div className="font-serif font-bold text-sm text-stone-900">
                  Cultural Dialogue Session
                </div>
                <div className="text-[11px] text-stone-500">
                  Multilingual AI with Voice Playback & Source Citations
                </div>
              </div>
            </div>

            <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
              Interactive Prototype
            </span>
          </div>

          {/* Chat Messages Scrolling Pane */}
          <div className="flex-1 p-6 overflow-y-auto space-y-5 bg-gradient-to-b from-white to-[#FAF7F2]/50">
            {messages.map(msg => {
              const isUser = msg.sender === 'user';
              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} space-y-1.5`}
                >
                  <div
                    className={`max-w-[85%] rounded-3xl p-5 shadow-sm leading-relaxed text-sm ${
                      isUser
                        ? 'bg-gradient-to-r from-terracotta-600 to-terracotta-700 text-white rounded-tr-none'
                        : 'bg-white border border-stone-200 text-stone-800 rounded-tl-none shadow-md'
                    }`}
                  >
                    {!isUser && (
                      <div className="flex items-center justify-between gap-3 mb-2.5 pb-2 border-b border-stone-100">
                        <div className="flex items-center gap-2">
                          <span className="font-serif font-bold text-xs text-amber-700">Aruvi AI</span>
                          {msg.verifiedSource && (
                            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1">
                              <ShieldCheck className="w-3 h-3 text-emerald-600" />
                              {msg.verifiedSource.category}
                            </span>
                          )}
                        </div>

                        {/* Audio Playback button */}
                        <button
                          onClick={() => handleSpeak(msg)}
                          className={`p-1.5 rounded-lg border transition-colors ${
                            activeSpeechId === msg.id 
                              ? 'bg-amber-500 text-stone-950 border-amber-500' 
                              : 'bg-stone-50 text-stone-500 border-stone-200 hover:bg-stone-100'
                          }`}
                          title="Listen with voice narration"
                        >
                          {activeSpeechId === msg.id ? (
                            <VolumeX className="w-3.5 h-3.5" />
                          ) : (
                            <Volume2 className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    )}

                    <p className="whitespace-pre-line">{msg.text}</p>

                    {/* Scholarly Citation Box */}
                    {msg.verifiedSource && (
                      <div className="mt-3 pt-2 border-t border-stone-100 text-[11px] text-stone-500 space-y-0.5">
                        <div className="font-bold text-stone-700">Verified Reference:</div>
                        <div>{msg.verifiedSource.org} — <em>{msg.verifiedSource.citation}</em></div>
                      </div>
                    )}
                  </div>

                  {/* Follow-up suggestions */}
                  {msg.suggestedFollowUps && msg.suggestedFollowUps.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2 max-w-[85%]">
                      {msg.suggestedFollowUps.map((fu, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSendMessage(fu)}
                          className="px-3 py-1 rounded-full bg-white hover:bg-amber-50 border border-amber-200 text-[11px] font-semibold text-amber-900 transition-colors shadow-sm flex items-center gap-1"
                        >
                          <Sparkles className="w-3 h-3 text-amber-500" />
                          <span>{fu}</span>
                        </button>
                      ))}
                    </div>
                  )}

                  <span className="text-[10px] text-stone-400 px-2">{msg.timestamp}</span>
                </div>
              );
            })}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-2 p-4 rounded-2xl bg-white border border-stone-200 shadow-sm w-44">
                <Bot className="w-4 h-4 text-amber-600 animate-spin-slow" />
                <span className="text-xs text-stone-500 font-medium">Aruvi is thinking...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input Section */}
          <div className="p-4 border-t border-stone-200 bg-white">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              {/* Mic Button */}
              <button
                type="button"
                onClick={toggleListening}
                className={`p-3 rounded-2xl border transition-all ${
                  isListening
                    ? 'bg-rose-500 text-white border-rose-500 shadow-md animate-pulse'
                    : 'bg-stone-100 text-stone-700 border-stone-200 hover:bg-stone-200'
                }`}
                title={isListening ? 'Listening to voice...' : 'Speak your question (Web Speech API)'}
              >
                {isListening ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5 text-stone-500" />}
              </button>

              {/* Text Input */}
              <input
                type="text"
                placeholder={isListening ? 'Listening to your voice...' : 'Ask about temples, crafts, festivals, philosophies...'}
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
                className="flex-1 px-4 py-3 rounded-2xl border border-stone-200 bg-[#FAF7F2] text-sm focus:outline-none focus:ring-2 focus:ring-terracotta-500 shadow-inner"
              />

              {/* Send Button */}
              <button
                type="submit"
                disabled={!inputQuery.trim()}
                className={`p-3 rounded-2xl transition-all ${
                  inputQuery.trim()
                    ? 'bg-terracotta-600 hover:bg-terracotta-700 text-white shadow-md'
                    : 'bg-stone-200 text-stone-400 cursor-not-allowed'
                }`}
                title="Send inquiry"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>

            <div className="mt-2 text-center text-[11px] text-stone-400">
              Simulated neural RAG agent with Speech Recognition & Synthesis for SIH 2026.
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
