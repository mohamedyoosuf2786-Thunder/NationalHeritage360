import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { useHeritage } from '../../context/HeritageContext';
import { heritageQuizQuestions, craftMatchItems } from '../../data/quizData';
import { VerifiedBadge } from '../common/VerifiedBadge';
import { 
  GraduationCap, 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  Award, 
  RotateCcw, 
  ArrowRight, 
  Trophy, 
  Layers, 
  Check, 
  Zap,
  HelpCircle
} from 'lucide-react';

export const LearnByDoing: React.FC = () => {
  const { playChime, playSuccessChime, addXP, unlockBadge, userXP, userLevel } = useHeritage();

  type ActiveTab = 'quiz' | 'craft-matcher';
  const [activeTab, setActiveTab] = useState<ActiveTab>('quiz');

  // ==========================================
  // QUIZ STATE
  // ==========================================
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [quizScore, setQuizScore] = useState<number>(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState<boolean>(false);

  const question = heritageQuizQuestions[currentQuestionIndex];

  const handleSelectOption = (index: number) => {
    if (isAnswerSubmitted) return;
    playChime();
    setSelectedOption(index);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null) return;
    setIsAnswerSubmitted(true);

    const isCorrect = selectedOption === question.correctAnswer;
    if (isCorrect) {
      playSuccessChime();
      setQuizScore(prev => prev + 1);
      addXP(question.xpReward, `Correctly answered: ${question.category}`);
      
      // Fire confetti burst!
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 }
      });
    } else {
      playChime();
    }
  };

  const handleNextQuestion = () => {
    playChime();
    if (currentQuestionIndex + 1 < heritageQuizQuestions.length) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    } else {
      setIsQuizCompleted(true);
      unlockBadge('guru-shishya');
      addXP(100, 'Completed the Dharohar Heritage Quiz Quest!');
      
      confetti({
        particleCount: 120,
        spread: 100,
        origin: { y: 0.5 }
      });
    }
  };

  const handleResetQuiz = () => {
    playChime();
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setQuizScore(0);
    setIsQuizCompleted(false);
  };

  // ==========================================
  // CRAFT-TO-STATE MATCHER STATE
  // ==========================================
  const [selectedCraftId, setSelectedCraftId] = useState<string | null>(null);
  const [selectedStateName, setSelectedStateName] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
  const [matcherMessage, setMatcherMessage] = useState<string | null>(null);

  const statesList = [
    'Karnataka', 
    'Jammu & Kashmir', 
    'Bihar', 
    'Chhattisgarh & Odisha', 
    'Tamil Nadu'
  ];

  const handleCraftClick = (id: string) => {
    if (matchedPairs.includes(id)) return;
    playChime();
    setSelectedCraftId(id);
    checkMatch(id, selectedStateName);
  };

  const handleStateClick = (stateName: string) => {
    playChime();
    setSelectedStateName(stateName);
    checkMatch(selectedCraftId, stateName);
  };

  const checkMatch = (craftId: string | null, stateName: string | null) => {
    if (!craftId || !stateName) return;

    const craftItem = craftMatchItems.find(c => c.id === craftId);
    if (!craftItem) return;

    if (craftItem.state.includes(stateName) || stateName.includes(craftItem.state)) {
      playSuccessChime();
      setMatchedPairs(prev => [...prev, craftId]);
      setMatcherMessage(`Correct! ${craftItem.craftName} originates from ${craftItem.state}. ${craftItem.funFact}`);
      addXP(30, `Matched ${craftItem.craftName} to ${craftItem.state}`);
      setSelectedCraftId(null);
      setSelectedStateName(null);

      confetti({ particleCount: 40, spread: 50 });
    } else {
      playChime();
      setMatcherMessage(`Not quite! Try another state for ${craftItem.craftName}.`);
      setSelectedStateName(null);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-3 py-1 rounded-full bg-rose-100 text-rose-900 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-rose-600" />
              Learn by Doing • Gamified Knowledge Quest
            </span>
            <VerifiedBadge sourceName="ASI & National Sahitya Akademi" />
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-black text-stone-900">
            Heritage Quest & Mini-Games
          </h1>
          <p className="text-stone-600 text-sm mt-1">
            Test your knowledge of sacred architecture, classical lore, and artisan traditions to climb the ranks of Indian Heritage.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1.5 bg-stone-100 p-1.5 rounded-2xl border border-stone-200">
          <button
            onClick={() => { playChime(); setActiveTab('quiz'); }}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'quiz' ? 'bg-white text-stone-900 shadow-sm' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Dharohar Trivia Quest
          </button>
          <button
            onClick={() => { playChime(); setActiveTab('craft-matcher'); }}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'craft-matcher' ? 'bg-white text-stone-900 shadow-sm' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Craft-to-State Matcher
          </button>
        </div>
      </div>

      {/* User Progress Ribbon */}
      <div className="bg-gradient-to-r from-amber-500 via-terracotta-600 to-terracotta-800 text-white rounded-3xl p-6 shadow-md mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 shadow-inner">
            <Trophy className="w-7 h-7 text-amber-200" />
          </div>
          <div>
            <div className="text-xs uppercase font-bold text-amber-200 tracking-wider">
              Current Rank & Level
            </div>
            <div className="font-serif text-2xl font-black">
              {userLevel.name} <span className="text-sm font-sans font-normal opacity-90">(Level {userLevel.level})</span>
            </div>
            <div className="text-xs text-stone-200">{userLevel.title}</div>
          </div>
        </div>

        {/* XP Progress Bar */}
        <div className="w-full md:w-72 space-y-1.5">
          <div className="flex justify-between text-xs font-bold">
            <span>{userXP} Total XP</span>
            <span>Next Level: {userLevel.nextLevelXP} XP</span>
          </div>
          <div className="w-full h-3 bg-black/30 rounded-full overflow-hidden p-0.5 border border-white/20">
            <div 
              style={{ width: `${Math.min(100, (userXP / userLevel.nextLevelXP) * 100)}%` }}
              className="h-full bg-gradient-to-r from-amber-300 to-yellow-200 rounded-full transition-all duration-500"
            />
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 1. DHAROHAR TRIVIA QUIZ QUEST */}
      {/* ======================================================== */}
      {activeTab === 'quiz' && (
        <div className="max-w-3xl mx-auto">
          {!isQuizCompleted ? (
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-xl space-y-6">
              
              {/* Question Index & Category Header */}
              <div className="flex items-center justify-between pb-4 border-b border-stone-100">
                <span className="text-xs font-bold uppercase tracking-wider text-terracotta-600 bg-terracotta-50 px-3 py-1 rounded-full border border-terracotta-200">
                  Question {currentQuestionIndex + 1} of {heritageQuizQuestions.length} • {question.category}
                </span>

                <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200 flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-amber-500" />
                  +{question.xpReward} XP
                </span>
              </div>

              {/* Question Text */}
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                {question.question}
              </h3>

              {/* Options */}
              <div className="space-y-3">
                {question.options.map((option, idx) => {
                  const isSelected = selectedOption === idx;
                  const isCorrect = isAnswerSubmitted && idx === question.correctAnswer;
                  const isWrong = isAnswerSubmitted && isSelected && idx !== question.correctAnswer;

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      disabled={isAnswerSubmitted}
                      className={`w-full p-4 rounded-2xl text-left text-sm font-semibold transition-all border flex items-center justify-between ${
                        isCorrect
                          ? 'bg-emerald-50 border-emerald-500 text-emerald-950 shadow-sm'
                          : isWrong
                          ? 'bg-rose-50 border-rose-500 text-rose-950 shadow-sm'
                          : isSelected
                          ? 'bg-amber-50 border-amber-500 text-stone-900 shadow-sm'
                          : 'bg-[#FAF7F2] hover:bg-stone-100 border-stone-200 text-stone-800'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-black ${
                          isSelected ? 'bg-amber-500 text-white' : 'bg-white text-stone-600 border border-stone-200'
                        }`}>
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span>{option}</span>
                      </div>

                      {isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />}
                      {isWrong && <XCircle className="w-5 h-5 text-rose-600 flex-shrink-0" />}
                    </button>
                  );
                })}
              </div>

              {/* Explanation Reveal */}
              {isAnswerSubmitted && (
                <div className="bg-amber-50/80 rounded-2xl p-5 border border-amber-200 space-y-2 animate-fade-in">
                  <div className="text-xs font-bold text-amber-900 uppercase tracking-wider">
                    {selectedOption === question.correctAnswer ? '✓ Verified Accurate' : 'Historical Insight:'}
                  </div>
                  <p className="text-xs sm:text-sm text-stone-800 leading-relaxed">
                    {question.explanation}
                  </p>
                  <div className="text-[11px] text-stone-500 pt-1">
                    <strong>Reference:</strong> {question.verifiedSource}
                  </div>
                </div>
              )}

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                {!isAnswerSubmitted ? (
                  <button
                    onClick={handleSubmitAnswer}
                    disabled={selectedOption === null}
                    className={`px-7 py-3.5 rounded-xl font-bold text-sm shadow-md transition-all ${
                      selectedOption !== null
                        ? 'bg-terracotta-600 hover:bg-terracotta-700 text-white'
                        : 'bg-stone-200 text-stone-400 cursor-not-allowed'
                    }`}
                  >
                    Confirm Answer
                  </button>
                ) : (
                  <button
                    onClick={handleNextQuestion}
                    className="px-7 py-3.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-amber-300 font-bold text-sm shadow-md transition-all flex items-center gap-2"
                  >
                    <span>Next Inquiry</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}

                <div className="text-xs text-stone-500 font-semibold">
                  Score: {quizScore} / {heritageQuizQuestions.length}
                </div>
              </div>

            </div>
          ) : (
            /* Quiz Completed Screen */
            <div className="bg-white rounded-3xl p-10 border border-stone-200 shadow-xl text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-amber-100 text-amber-600 mx-auto flex items-center justify-center border-2 border-amber-300 shadow-inner">
                <Award className="w-10 h-10" />
              </div>

              <div>
                <h3 className="font-serif text-3xl font-black text-stone-900">
                  Dharohar Quest Completed!
                </h3>
                <p className="text-stone-600 text-sm mt-1">
                  You scored <strong className="text-stone-900">{quizScore} out of {heritageQuizQuestions.length}</strong>! You have been awarded the <strong className="text-amber-700">"Parampara Scholar"</strong> badge.
                </p>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 text-amber-900 border border-amber-300 font-bold text-sm">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>+100 Bonus XP Awarded to Profile</span>
              </div>

              <div className="pt-4 flex justify-center gap-4">
                <button
                  onClick={handleResetQuiz}
                  className="px-6 py-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-sm transition-all flex items-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Retry Quest</span>
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ======================================================== */}
      {/* 2. CRAFT-TO-STATE MATCHER MINI-GAME */}
      {/* ======================================================== */}
      {activeTab === 'craft-matcher' && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-3">
            <h3 className="font-serif text-2xl font-bold text-stone-900">
              Match the Generational Craft to its Geographical Home
            </h3>
            <p className="text-sm text-stone-600">
              Select a craft on the left, then select its authentic State of origin on the right.
            </p>

            {matcherMessage && (
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-300 text-xs sm:text-sm text-amber-950 font-semibold animate-fade-in">
                {matcherMessage}
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            
            {/* Left: Crafts */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase font-bold text-stone-500 tracking-wider">
                Select Indigenous Craft:
              </h4>

              {craftMatchItems.slice(0, 5).map(item => {
                const isMatched = matchedPairs.includes(item.id);
                const isSelected = selectedCraftId === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => handleCraftClick(item.id)}
                    disabled={isMatched}
                    className={`w-full p-4 rounded-2xl text-left transition-all border ${
                      isMatched
                        ? 'bg-emerald-50 border-emerald-300 text-emerald-900 opacity-80 cursor-default'
                        : isSelected
                        ? 'bg-amber-50 border-amber-500 text-stone-900 shadow-md ring-2 ring-amber-400'
                        : 'bg-white hover:bg-stone-50 border-stone-200 text-stone-800'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-serif font-bold text-base">{item.craftName}</span>
                      {isMatched && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-200 text-emerald-900">
                          Matched ✓
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-stone-500 mt-1 line-clamp-2">{item.clue}</div>
                  </button>
                );
              })}
            </div>

            {/* Right: States */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase font-bold text-stone-500 tracking-wider">
                Select State of Origin:
              </h4>

              {statesList.map(st => {
                const isSelected = selectedStateName === st;

                return (
                  <button
                    key={st}
                    onClick={() => handleStateClick(st)}
                    className={`w-full p-4 rounded-2xl text-left font-serif font-bold text-base transition-all border ${
                      isSelected
                        ? 'bg-terracotta-600 text-white border-terracotta-600 shadow-md'
                        : 'bg-white hover:bg-stone-50 border-stone-200 text-stone-800'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{st}</span>
                      <ArrowRight className="w-4 h-4 text-stone-400" />
                    </div>
                  </button>
                );
              })}
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
