import React, { useState, useEffect } from 'react';
import { BookOpen, Home, CheckCircle, ChevronRight, ArrowLeft, PlayCircle, Star, Award, FileText, Info, Search, Bell, Trophy, CheckCircle2, XCircle, RefreshCcw, Download } from 'lucide-react';

// Avtomatik darslarni shakllantirish funksiyasi (1 dan 144 gacha uzluksiz qilish uchun)
const generateLessonsForPart = (start, end, specificLessons) => {
  const lessons = [];
  for (let i = start; i <= end; i++) {
    const specific = specificLessons.find(l => l.id === i);
    if (specific) {
      lessons.push(specific);
    } else {
      lessons.push({ id: i, title: `${i}-mavzu: Matematik tushunchalar va mashqlar`, page: Math.floor(Math.random() * 20) + 10 }); 
    }
  }
  return lessons;
};

// MUNDARIJA: 1 dan 144 gacha to'liq qamrov
const syllabusData = {
  1: {
    id: 1, title: "1-qism: Asosiy tushunchalar", theme: "bg-gradient-to-br from-pink-400 to-pink-600 shadow-pink-200", textTheme: "text-pink-600", bgLight: "bg-pink-50", pdfUrl: "/1-qism.pdf",
    lessons: generateLessonsForPart(1, 41, [
      { id: 1, title: "Narsalarning xossalari: sanash va solishtirish", page: 4 },
      { id: 2, title: "Shakllar, ranglar va o'lchamlar", page: 6 },
      { id: 3, title: "Narsalarning joylashuvi", page: 8 },
      { id: 4, title: "1 va 2 sonlari", page: 10 },
      { id: 5, title: "3 va 4 sonlari", page: 12 },
      { id: 37, title: "Qo'shish va ayirish orasidagi o'zaro bog'liqlik", page: 76 },
      { id: 38, title: "Qo'shishning o'rin almashtirish xossasi", page: 78 },
      { id: 39, title: "Qo'shish jadvali", page: 80 },
      { id: 40, title: "Taqqoslash xossasi", page: 82 },
      { id: 41, title: "Ifodalar", page: 84 },
    ])
  },
  2: {
    id: 2, title: "2-qism: Ikki xonali sonlar", theme: "bg-gradient-to-br from-blue-400 to-blue-600 shadow-blue-200", textTheme: "text-blue-600", bgLight: "bg-blue-50", pdfUrl: "/2-qism.pdf",
    lessons: generateLessonsForPart(42, 74, [
      { id: 62, title: "Ikki xonali sonlarni taqqoslash", page: 44 },
      { id: 63, title: "Ikki xonali sonlarni qo'shish", page: 46 },
      { id: 64, title: "Ikki xonali sonlarni qo'shish", page: 48 },
      { id: 65, title: "Ikki xonali sonlarni qo'shish", page: 50 },
      { id: 66, title: "Ikki xonali sonlarni ayirish", page: 52 },
      { id: 67, title: "Ikki xonali sonlarni ayirish", page: 54 },
      { id: 68, title: "Ikki xonali sonlarni ayirish", page: 56 },
      { id: 69, title: "Qo'shish bilan ayirish orasidagi bog'lanish", page: 58 },
      { id: 70, title: "Ko'p komponentli qo'shish", page: 60 },
      { id: 71, title: "Qo'shishning guruhlash xossasi", page: 62 },
      { id: 72, title: "Tarkibli ifodalar", page: 64 },
      { id: 73, title: "Qavsli tarkibli ifodalar", page: 66 },
      { id: 74, title: "Misol va masalalar yechish", page: 68 },
    ])
  },
  3: {
    id: 3, title: "3-qism: Kattaliklar va o'lchovlar", theme: "bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-emerald-200", textTheme: "text-emerald-600", bgLight: "bg-emerald-50", pdfUrl: "/3-qism.pdf",
    lessons: generateLessonsForPart(75, 111, [
      { id: 99, title: "Uzunlik. Santimetr.", page: 52 },
      { id: 100, title: "Kesmalarni oʻlchash.", page: 54 },
      { id: 101, title: "Santimetr. Detsimetr.", page: 56 },
      { id: 102, title: "Detsimetr bilan santimetr orasidagi o'zaro bog'lanishi.", page: 58 },
      { id: 103, title: "Masalalar yechish.", page: 60 },
      { id: 104, title: "Massa va massa birliklari.", page: 62 },
      { id: 105, title: "Massa va massa birliklari.", page: 64 },
      { id: 106, title: "Hajm va hajm birliklari.", page: 66 },
      { id: 107, title: "Hajm va hajm birliklari.", page: 68 },
      { id: 108, title: "Kattaliklar: uzunlik, massa, hajm...", page: 70 },
      { id: 109, title: "Kattaliklar va ularning xossalari.", page: 72 },
      { id: 110, title: "Kattaliklar va ularning xossalari.", page: 74 },
      { id: 111, title: "Masalalar yechish.", page: 76 },
    ])
  },
  4: {
    id: 4, title: "4-qism: Tenglamalar va ifodalar", theme: "bg-gradient-to-br from-orange-400 to-orange-600 shadow-orange-200", textTheme: "text-orange-600", bgLight: "bg-orange-50", pdfUrl: "/4-qism.pdf",
    lessons: generateLessonsForPart(112, 144, [
      { id: 129, title: "Tenglik va tengsizliklar", page: 38 },
      { id: 130, title: "Sonli va harfiy ifodalar", page: 40 },
      { id: 131, title: "Ifoda", page: 42 },
      { id: 132, title: "Ifodalarning qiymatlarini taqqoslash", page: 44 },
      { id: 133, title: "Ifodaning qiymatini hisoblash", page: 46 },
      { id: 134, title: "Matematik amallarning xossalari", page: 48 },
      { id: 135, title: "Sonli va harfiy tengsizliklar", page: 50 },
      { id: 136, title: "Rim raqamlari", page: 52 },
      { id: 137, title: "Tenglamalar", page: 54 },
      { id: 138, title: "Tenglamalar", page: 56 },
      { id: 139, title: "Tenglamalar", page: 58 },
      { id: 140, title: "Masalalarni tenglamalar yordamida yechish", page: 60 },
      { id: 141, title: "Kesma va uning uzunligi", page: 62 },
      { id: 142, title: "Takrorlash", page: 64 },
      { id: 143, title: "Takrorlash", page: 66 },
      { id: 144, title: "Takrorlash", page: 68 },
    ])
  }
};

// BAZAVIY SAVOLLAR
const lessonQuestions = {
  1: [
    { question: "Rasmda nechta olma bor (Tasavvur qiling: 2 ta olma)?", options: [1, 2, 3], answer: 2 },
    { question: "Sanang: Bir, ikki, uch, ...", options: ["Besh", "To'rt", "Olti"], answer: "To'rt" },
    { question: "Qaysi biri ko'p: 5 ta qalam yoki 3 ta qalam?", options: ["5 ta qalam", "3 ta qalam", "Teng"], answer: "5 ta qalam" },
    { question: "Kitoblar nechta?", options: [1, 2, 3], answer: 1 },
    { question: "Qaysi son 1 dan keyin keladi?", options: [2, 3, 4], answer: 2 }
  ],
  37: [
    { question: "Qo'shish amalining natijasi nima deyiladi?", options: ["Yig'indi", "Ayirma", "Ko'paytma"], answer: "Yig'indi" },
    { question: "5 va 4 sonlarining yig'indisini toping.", options: [8, 9, 10], answer: 9 },
    { question: "Ayirish amalining natijasi nima deyiladi?", options: ["Yig'indi", "Ayirma", "Bo'linma"], answer: "Ayirma" },
    { question: "8 - 3 = ?", options: [4, 5, 6], answer: 5 },
    { question: "Yig'indidan bir qo'shiluvchini ayirsak nima hosil bo'ladi?", options: ["Ayirma", "Ikkinchi qo'shiluvchi", "Nol"], answer: "Ikkinchi qo'shiluvchi" }
  ],
  62: [
    { question: "15 va 12 sonlaridan qaysi biri katta?", options: ["15", "12", "Teng"], answer: "15" },
    { question: "Ikki xonali sonlar qanday raqamlardan yoziladi?", options: ["1 ta", "2 ta", "3 ta"], answer: "2 ta" },
    { question: "20 dan keyin qaysi son keladi?", options: [19, 21, 22], answer: 21 },
    { question: "18 sonida nechta o'nlik bor?", options: ["1 ta", "8 ta", "2 ta"], answer: "1 ta" },
    { question: "25 va 24 ni taqqoslang.", options: [">", "<", "="], answer: ">" }
  ],
  104: [
    { question: "Massa nima bilan o'lchanadi?", options: ["Chizg'ich", "Tarozi", "Soat"], answer: "Tarozi" },
    { question: "Massaning asosiy o'lchov birligi nima?", options: ["Santimetr", "Kilogramm", "Litr"], answer: "Kilogramm" },
    { question: "Kilogramm qanday qisqartirib yoziladi?", options: ["kg", "sm", "dm"], answer: "kg" },
    { question: "1 kg paxta og'irmi yoki 1 kg tosh?", options: ["Tosh", "Paxta", "Teng"], answer: "Teng" },
    { question: "Qovun 3 kg, tarvuz 5 kg. Jami necha kg?", options: ["7 kg", "8 kg", "9 kg"], answer: "8 kg" }
  ],
  129: [
    { question: "Qaysi belgi tenglikni bildiradi?", options: ["=", ">", "<"], answer: "=" },
    { question: "10 = 10 bu nima?", options: ["Tenglik", "Tengsizlik", "Ifoda"], answer: "Tenglik" },
    { question: "15 > 12 bu nima?", options: ["Tenglik", "Tengsizlik", "Javob"], answer: "Tengsizlik" },
    { question: "Qaysi yozuv noto'g'ri?", options: ["5 = 5", "7 > 8", "3 < 4"], answer: "7 > 8" },
    { question: "2 + 3 va 5 orasiga belgi qo'ying.", options: ["=", ">", "<"], answer: "=" }
  ]
};

const generateQuestions = (partId, lessonId) => {
  // Agar bazada shu darsning o'z savollari bo'lsa, shuni ko'rsatadi
  if (lessonQuestions[lessonId]) {
    return lessonQuestions[lessonId];
  }

  // QOLGAN BARCHA 144 MAVZU UCHUN AVTOMATIK SAVOLLAR
  const questions = [];
  for (let i = 0; i < 5; i++) {
    let a, b, answer, questionStr, options;
    if (partId === 1 || partId === 4) {
      a = Math.floor(Math.random() * 10) + 1;
      b = Math.floor(Math.random() * 10) + 1;
      const isAdd = Math.random() > 0.5;
      if (isAdd) {
        answer = a + b; questionStr = `${a} + ${b} = ?`;
      } else {
        if (a < b) [a, b] = [b, a];
        answer = a - b; questionStr = `${a} - ${b} = ?`;
      }
    } else {
      a = Math.floor(Math.random() * 40) + 10;
      b = Math.floor(Math.random() * 20) + 10;
      answer = a + b; questionStr = `${a} + ${b} = ?`;
    }
    options = [answer, answer + Math.floor(Math.random() * 3) + 1, answer - Math.floor(Math.random() * 3) - 1].sort(() => Math.random() - 0.5);
    questions.push({ question: questionStr, options: options, answer: answer });
  }
  return questions;
};

export default function App() {
  const [currentTab, setCurrentTab] = useState('home'); 
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [exerciseMode, setExerciseMode] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [totalStars, setTotalStars] = useState(120);
  const [isLoadingPdf, setIsLoadingPdf] = useState(false);

  const handleLessonSelect = (lesson, partId) => {
    setSelectedLesson({ ...lesson, partId });
    setExerciseMode(false); 
    setIsLoadingPdf(true);
    setTimeout(() => { setIsLoadingPdf(false); }, 1000);
  };

  const handleBack = () => {
    if (exerciseMode) { setExerciseMode(false); } 
    else if (selectedLesson) { setSelectedLesson(null); } 
    else { setCurrentTab('home'); }
  };

  const startExercise = () => {
    setQuizQuestions(generateQuestions(selectedLesson.partId, selectedLesson.id));
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizFinished(false);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setExerciseMode(true);
  };

  const handleAnswerSelect = (option) => {
    if (selectedAnswer !== null) return; 
    setSelectedAnswer(option);
    const correct = option === quizQuestions[currentQuestionIndex].answer;
    setIsCorrect(correct);
    if (correct) {
      setScore(prev => prev + 1);
      setTotalStars(prev => prev + 5); 
    }
    setTimeout(() => {
      if (currentQuestionIndex < quizQuestions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setSelectedAnswer(null);
        setIsCorrect(null);
      } else {
        setQuizFinished(true);
      }
    }, 1500); 
  };

  return (
    <div className="min-h-screen bg-[#F4F7FC] font-sans flex overflow-hidden text-slate-800">
      {/* SIDEBAR */}
      <aside className="w-20 md:w-24 lg:w-72 bg-white flex flex-col items-center lg:items-stretch py-8 transition-all duration-300 shadow-[4px_0_24px_rgba(0,0,0,0.02)] z-20 shrink-0">
        <div className="flex items-center justify-center lg:justify-start px-0 lg:px-8 mb-12 gap-4">
          <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-indigo-200">M1</div>
          <div className="hidden lg:block">
            <h1 className="font-extrabold text-slate-800 text-xl tracking-tight">Matematika</h1>
            <p className="text-sm text-indigo-500 font-bold uppercase tracking-wider mt-0.5">1-sinf platformasi</p>
          </div>
        </div>

        <nav className="flex-1 w-full px-2 md:px-4 lg:px-6 space-y-2">
          <button onClick={() => {setCurrentTab('home'); setSelectedLesson(null); setExerciseMode(false);}} className={`w-full flex items-center justify-center lg:justify-start p-4 rounded-2xl transition-all duration-300 ${currentTab === 'home' ? 'bg-indigo-50 text-indigo-700 font-bold shadow-sm' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800 font-medium'}`}>
            <Home size={24} className={currentTab === 'home' ? 'text-indigo-600' : ''} /><span className="hidden lg:block ml-4 text-base">Bosh sahifa</span>
          </button>
          <button onClick={() => {setCurrentTab('about'); setSelectedLesson(null); setExerciseMode(false);}} className={`w-full flex items-center justify-center lg:justify-start p-4 rounded-2xl transition-all duration-300 ${currentTab === 'about' ? 'bg-indigo-50 text-indigo-700 font-bold shadow-sm' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800 font-medium'}`}>
            <Info size={24} className={currentTab === 'about' ? 'text-indigo-600' : ''} /><span className="hidden lg:block ml-4 text-base">Platforma haqida</span>
          </button>
          
          <div className="pt-8 pb-4">
            <p className="hidden lg:block text-xs font-black text-slate-300 uppercase tracking-widest px-4 mb-4">Darslik qismlari</p>
            {[1, 2, 3, 4].map(part => (
              <button key={part} onClick={() => {setCurrentTab(part); setSelectedLesson(null); setExerciseMode(false);}} className={`w-full flex items-center justify-center lg:justify-start p-4 rounded-2xl mb-2 transition-all duration-300 ${currentTab === part ? 'bg-slate-800 text-white font-bold shadow-md shadow-slate-200' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800 font-medium'}`}>
                <BookOpen size={22} className={currentTab === part ? 'text-indigo-400' : ''} /><span className="hidden lg:block ml-4 text-base">{part}-qism</span>
              </button>
            ))}
          </div>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 overflow-y-auto relative w-full max-w-full">
        {/* Header */}
        <header className="bg-[#F4F7FC]/80 backdrop-blur-md sticky top-0 z-10 px-4 md:px-8 py-4 md:py-6 flex items-center justify-between">
          <div className="flex items-center gap-4 w-full md:w-auto overflow-hidden">
            {(currentTab !== 'home' || selectedLesson) && (<button onClick={handleBack} className="p-2 md:p-3 bg-white hover:bg-slate-50 rounded-xl md:rounded-2xl transition-all shadow-sm border border-slate-100 text-slate-600 shrink-0"><ArrowLeft size={20} /></button>)}
            <h2 className="font-extrabold text-slate-800 text-lg md:text-2xl tracking-tight truncate">
              {exerciseMode ? "Interaktiv Mashqlar" : selectedLesson ? `${selectedLesson.partId}-qism: Mavzu ${selectedLesson.id}` : currentTab === 'home' ? "Xush kelibsiz! 👋" : currentTab === 'about' ? "Biz haqimizda" : `${currentTab}-qism darslari`}
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <div className="flex items-center gap-2 bg-gradient-to-r from-amber-100 to-yellow-100 text-yellow-700 px-4 py-3 rounded-2xl font-bold text-sm shadow-sm border border-yellow-200 transition-all duration-300">
              <Star size={18} className="fill-yellow-500 text-yellow-500" /><span>{totalStars} ball</span>
            </div>
          </div>
        </header>

        <div className="p-4 md:p-8 max-w-7xl mx-auto w-full">
          {/* HOME */}
          {currentTab === 'home' && !selectedLesson && (
            <div className="space-y-8 md:space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="bg-slate-900 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-14 text-white shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between">
                <div className="relative z-10 lg:w-3/5 text-center lg:text-left">
                  <span className="bg-indigo-500/30 text-indigo-200 px-4 py-1.5 rounded-full text-xs md:text-sm font-bold tracking-wider mb-6 inline-block backdrop-blur-sm border border-indigo-500/30">YANGI PLATFORMA</span>
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 leading-tight tracking-tight">Matematikani <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300">Robo-ustoz</span> bilan o'rganing!</h2>
                  <p className="text-slate-400 text-base md:text-lg mb-8 leading-relaxed max-w-lg font-medium mx-auto lg:mx-0">1-sinf matematika darsligining barcha 4 ta qismi endi interaktiv shaklda. O'zingizga kerakli qismni tanlang va qiziqarli darslarni boshlang!</p>
                  <button onClick={() => setCurrentTab(1)} className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold px-6 md:px-8 py-3 md:py-4 rounded-2xl hover:scale-105 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] transition-all duration-300 flex items-center gap-3 mx-auto lg:mx-0"><PlayCircle size={22} />Hoziroq boshlash</button>
                </div>
                <div className="mt-10 lg:mt-0 relative z-10 flex-shrink-0 animate-bounce" style={{animationDuration: '3s'}}>
                  <div className="w-48 h-48 md:w-80 md:h-80 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-full absolute -top-4 -left-4 blur-3xl"></div>
                  <img src="/robo.png" alt="Robo-ustoz" className="w-48 h-48 md:w-72 md:h-72 object-contain drop-shadow-2xl relative z-20" onError={(e) => {e.target.style.display='none'}} />
                </div>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-black text-slate-800 tracking-tight mb-6 md:mb-8">Darslik qismlari</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                  {Object.values(syllabusData).map((part) => (
                    <div key={part.id} onClick={() => setCurrentTab(part.id)} className={`${part.theme} rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 cursor-pointer hover:-translate-y-2 shadow-lg transition-all duration-300 relative overflow-hidden group text-white`}>
                      <div className="bg-white/20 w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm"><BookOpen size={24} className="text-white" /></div>
                      <h4 className="font-black text-xl md:text-2xl mb-2 relative z-10">{part.id}-QISM</h4>
                      <p className="text-white/80 text-sm md:text-base font-medium relative z-10 mb-8 line-clamp-2">{part.title}</p>
                      <div className="flex justify-between items-center relative z-10 mt-auto">
                        <span className="text-xs md:text-sm font-bold bg-black/10 px-3 md:px-4 py-2 rounded-xl backdrop-blur-sm">{part.lessons.length} ta dars</span>
                        <div className="bg-white text-slate-800 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-xl shadow-sm group-hover:scale-110 transition-transform"><ChevronRight size={18} /></div>
                      </div>
                      <span className="absolute -bottom-6 -right-4 text-8xl md:text-9xl font-black opacity-10 leading-none">{part.id}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ABOUT */}
          {currentTab === 'about' && !selectedLesson && (
            <div className="space-y-8 md:space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-14 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8 md:gap-12 items-center relative overflow-hidden">
                <div className="relative group shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-[2.5rem] blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                  <div className="w-48 h-48 md:w-64 md:h-64 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-slate-900 relative z-10 p-4 flex items-center justify-center border-4 border-white shadow-2xl">
                    <img src="/robo.png" alt="Robo-ustoz" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"/>
                  </div>
                </div>
                <div className="text-center md:text-left z-10">
                  <span className="bg-indigo-100 text-indigo-600 px-4 py-1.5 rounded-full text-xs md:text-sm font-bold tracking-wider mb-4 inline-block">YORDAMCHI</span>
                  <h2 className="text-3xl md:text-5xl font-black text-slate-800 mb-4 md:mb-6 tracking-tight">Salom! Men Robo-ustozman! 🤖</h2>
                  <p className="text-base md:text-lg text-slate-600 mb-6 md:mb-8 leading-relaxed font-medium">Men ushbu platformadagi shaxsiy yordamchingiz va o'qituvchingizman. Mening vazifam — matematika darslarini sizga qiziqarli o'yinlar tarzida tushuntirib berish!</p>
                </div>
              </div>
            </div>
          )}

          {/* LESSONS LIST */}
          {currentTab !== 'home' && currentTab !== 'about' && !selectedLesson && syllabusData[currentTab] && (
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 w-full">
              <div className={`${syllabusData[currentTab].theme} rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-14 mb-8 md:mb-10 text-white shadow-xl flex items-center justify-between relative overflow-hidden`}>
                <div className="relative z-10 w-full">
                  <span className="bg-white/20 px-4 py-1.5 rounded-full text-xs md:text-sm font-bold tracking-wider mb-4 inline-block backdrop-blur-md">MAVZULAR ROYXATI</span>
                  <h2 className="text-3xl md:text-5xl font-black mb-2 tracking-tight break-words">Darslik, {currentTab}-qism</h2>
                  <p className="text-lg md:text-xl font-medium opacity-90">{syllabusData[currentTab].title}</p>
                </div>
                <BookOpen size={120} className="opacity-10 absolute -right-10 -bottom-10 rotate-12 hidden md:block" />
              </div>
              <div className="bg-white rounded-[1.5rem] md:rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden w-full">
                <div className="p-6 md:p-8 border-b border-slate-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-slate-50/50">
                  <h3 className="font-black text-slate-800 text-xl md:text-2xl flex items-center gap-3 tracking-tight"><FileText size={24} className={syllabusData[currentTab].textTheme} />Darslar mundarijasi</h3>
                </div>
                <div className="divide-y divide-slate-50 p-2 md:p-4">
                  {syllabusData[currentTab].lessons.map((lesson) => (
                    <div key={lesson.id} onClick={() => handleLessonSelect(lesson, currentTab)} className={`p-4 md:p-6 flex flex-col sm:flex-row sm:items-center rounded-2xl hover:${syllabusData[currentTab].bgLight} transition-all duration-300 cursor-pointer group gap-4`}>
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-slate-100 text-slate-500 font-black text-lg md:text-xl flex items-center justify-center shrink-0 group-hover:bg-white group-hover:shadow-md transition-all">M{lesson.id}</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-800 text-lg md:text-xl group-hover:text-slate-900 transition-colors mb-1 line-clamp-2">{lesson.title}</h4>
                        <p className="text-sm font-medium text-slate-400">Kitobdagi bet: <span className={`font-bold ${syllabusData[currentTab].textTheme}`}>{lesson.page}</span></p>
                      </div>
                      <button className={`flex items-center gap-2 font-bold text-sm bg-white border border-slate-200 shadow-sm px-4 md:px-6 py-2 md:py-3 rounded-xl sm:opacity-0 group-hover:opacity-100 transition-all ${syllabusData[currentTab].textTheme}`}>O'qish <ChevronRight size={18} /></button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* REAL PDF VIEWER */}
          {selectedLesson && !exerciseMode && (
            <div className="animate-in zoom-in-95 duration-500 w-full">
              <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-lg border border-slate-100 overflow-hidden h-[80vh] min-h-[600px] flex flex-col relative">
                <div className="bg-slate-900 text-white p-6 flex items-center justify-between gap-6 shrink-0">
                  <div>
                    <span className="bg-white/10 px-3 py-1 rounded-full text-xs font-bold mb-2 inline-block">MAVZU {selectedLesson.id}</span>
                    <h2 className="text-xl md:text-2xl font-black">{selectedLesson.title}</h2>
                  </div>
                  <a href={syllabusData[selectedLesson.partId].pdfUrl} download className="bg-white/10 hover:bg-white/20 p-3 rounded-xl transition-colors flex items-center gap-2 font-bold text-sm shrink-0">
                    <Download size={18}/> Yuklash
                  </a>
                </div>
                <div className="flex-1 bg-slate-100 flex flex-col relative overflow-hidden">
                  {isLoadingPdf ? (
                    <div className="flex-1 flex flex-col items-center justify-center text-slate-400">
                      <div className="w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mb-4"></div><p className="font-bold">Yuklanmoqda...</p>
                    </div>
                  ) : (
                    <div className="flex-1 w-full h-full relative">
                        <iframe 
                            src={`${syllabusData[selectedLesson.partId].pdfUrl}#page=${selectedLesson.page}`} 
                            className="w-full h-full absolute inset-0 border-none"
                            title="Matematika darsligi"
                        ></iframe>
                    </div>
                  )}
                  {!isLoadingPdf && (
                    <button onClick={startExercise} className="absolute bottom-6 right-6 md:bottom-10 md:right-10 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-black px-6 py-4 rounded-full hover:scale-110 shadow-xl flex items-center gap-3 z-20 group">
                        <PlayCircle size={24} className="group-hover:animate-pulse" /><span className="hidden sm:block">Testni boshlash</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* QUIZ SECTION */}
          {exerciseMode && (
            <div className="animate-in slide-in-from-right-8 duration-500 w-full max-w-4xl mx-auto">
              {!quizFinished ? (
                <div className="bg-white rounded-[2rem] md:rounded-[3rem] shadow-xl border border-slate-100 overflow-hidden">
                  <div className="bg-slate-900 p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-6">
                      <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center border-4 border-indigo-500/30 overflow-hidden shrink-0"><img src="/robo.png" alt="Robo" className="w-full h-full object-contain p-2" /></div>
                      <div className="text-white text-center md:text-left"><h3 className="text-xl md:text-2xl font-black mb-1">Robo-Ustoz savol beradi!</h3></div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl flex items-center gap-3 text-white border border-white/20"><Award size={24} className="text-yellow-400" /><div className="font-black text-xl">{currentQuestionIndex + 1} / {quizQuestions.length}</div></div>
                  </div>
                  <div className="w-full h-2 bg-slate-100"><div className="h-full bg-indigo-500 transition-all duration-500" style={{ width: `${(currentQuestionIndex / quizQuestions.length) * 100}%` }}></div></div>
                  <div className="p-6 md:p-12 lg:p-16 text-center">
                    <div className="mb-10 md:mb-14 relative inline-block w-full">
                      <div className="text-5xl md:text-7xl font-black text-slate-800 tracking-tighter">{quizQuestions[currentQuestionIndex]?.question}</div>
                      {selectedAnswer !== null && (
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 animate-in zoom-in duration-300">
                          {isCorrect ? <CheckCircle2 size={120} className="text-green-500 bg-white rounded-full shadow-2xl" /> : <XCircle size={120} className="text-red-500 bg-white rounded-full shadow-2xl" />}
                        </div>
                      )}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                      {quizQuestions[currentQuestionIndex]?.options.map((option, idx) => {
                        let btnClass = "bg-white border-2 border-slate-200 text-slate-700 hover:border-indigo-400 hover:bg-indigo-50";
                        if (selectedAnswer !== null) {
                          if (option === quizQuestions[currentQuestionIndex].answer) btnClass = "bg-green-500 border-green-500 text-white shadow-lg scale-105 z-10";
                          else if (option === selectedAnswer) btnClass = "bg-red-500 border-red-500 text-white opacity-90";
                          else btnClass = "bg-slate-50 border-slate-200 text-slate-400 opacity-50";
                        }
                        return (
                          <button key={idx} onClick={() => handleAnswerSelect(option)} disabled={selectedAnswer !== null} className={`rounded-2xl py-6 md:py-8 text-3xl md:text-4xl font-black transition-all duration-300 ${btnClass}`}>{option}</button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-[2rem] md:rounded-[3rem] shadow-2xl border border-slate-100 p-8 md:p-16 text-center relative overflow-hidden animate-in zoom-in-95 duration-500">
                  <div className="w-32 h-32 mx-auto mb-8 relative"><Trophy size={120} className="text-yellow-500 mx-auto drop-shadow-2xl relative z-10" /></div>
                  <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-4">O'yin tugadi! 🎉</h2>
                  <p className="text-lg text-slate-600 mb-8 font-medium">{quizQuestions.length} ta savoldan <span className="font-black text-indigo-600 text-2xl">{score}</span> tasiga to'g'ri javob berdingiz.</p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button onClick={startExercise} className="bg-indigo-50 text-indigo-600 font-bold px-8 py-4 rounded-2xl hover:bg-indigo-100 flex justify-center gap-2"><RefreshCcw size={20} />Qaytadan o'ynash</button>
                    <button onClick={() => setExerciseMode(false)} className="bg-slate-900 text-white font-bold px-8 py-4 rounded-2xl hover:bg-slate-800 flex justify-center gap-2"><BookOpen size={20} />Darslikka qaytish</button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}