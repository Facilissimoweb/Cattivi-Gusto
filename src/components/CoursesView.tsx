import React, { useState } from 'react';
import { GraduationCap, Sparkles, CheckCircle2, AlertTriangle, ArrowLeft, Trophy, FileText, UserCheck, Flame, BookOpen, Clock, Award, HelpCircle } from 'lucide-react';

interface CoursesViewProps {
  onBackHome: () => void;
  initialCourseId?: string | null;
  onOpenGroqChat?: () => void;
}

export const CoursesView: React.FC<CoursesViewProps> = ({
  onBackHome,
  initialCourseId,
  onOpenGroqChat
}) => {
  const [activeCourseTab, setActiveCourseTab] = useState<'all' | 'marcus' | 'teresa'>(
    initialCourseId === 'marcus' ? 'marcus' : initialCourseId === 'teresa' ? 'teresa' : 'all'
  );

  const [enrolledCourse, setEnrolledCourse] = useState<{
    id: 'marcus' | 'teresa';
    studentName: string;
    date: string;
  } | null>(null);

  const [studentInput, setStudentInput] = useState('');
  const [selectedCourseForModal, setSelectedCourseForModal] = useState<'marcus' | 'teresa' | null>(null);

  const handleEnrollClick = (courseId: 'marcus' | 'teresa') => {
    setSelectedCourseForModal(courseId);
  };

  const handleConfirmEnrollment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCourseForModal) return;
    const name = studentInput.trim() || 'Studente del Caos';
    const now = new Date().toLocaleDateString('it-IT', { day: '2-digit', month: '2-digit', year: 'numeric' });
    setEnrolledCourse({
      id: selectedCourseForModal,
      studentName: name,
      date: now,
    });
    setSelectedCourseForModal(null);
    setStudentInput('');
  };

  return (
    <div className="max-w-6xl mx-auto px-3 sm:px-6 py-6 sm:py-10 pb-24 font-grotesk">
      
      {/* Top Header Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b-4 border-black pb-4 mb-6 sm:mb-8">
        <button
          onClick={onBackHome}
          className="bg-black text-[#A0FF00] border-2 border-black px-3 py-1.5 font-anton text-xs sm:text-sm uppercase flex items-center gap-2 hover:bg-[#A0FF00] hover:text-black transition shadow-[3px_3px_0px_#000] cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>TORNA IN EDICOLA</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="bg-[#A0FF00] text-black border-2 border-black font-anton text-xs px-2.5 py-1 uppercase font-bold tracking-wider shadow-[2px_2px_0px_#000]">
            🎓 ACADEMY DI CATTIVO GUSTO
          </span>
        </div>
      </div>

      {/* Main Banner */}
      <div className="bg-[#FAF8F5] border-4 border-black p-5 sm:p-8 shadow-[8px_8px_0px_#000] mb-8 relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 bg-[#A0FF00] w-40 h-40 rounded-full border-4 border-black opacity-20 pointer-events-none" />
        
        <div className="max-w-3xl relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 bg-black text-[#A0FF00] px-3 py-1 font-mono text-xs font-bold uppercase border border-black">
            <GraduationCap className="w-4 h-4 text-[#A0FF00]" />
            CORSI AD ALTO RENDIMENTO NEL NULLA E NELLA CARTOMANZIA
          </div>
          
          <h1 className="font-anton text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-black leading-none drop-shadow-[2px_2px_0px_#A0FF00]">
            I NOSTRI CORSI
          </h1>
          
          <p className="font-typewriter text-xs sm:text-sm text-neutral-800 leading-relaxed font-bold">
            Benvenuti nell'Accademia Formativa Ufficiale della rivista "Cattivo Gusto". Qui inseguiamo l'inutilità con rigore accademico, ciabatte ortopediche e tarocchi cubisti unte di maionese. Seleziona il tuo percorso formativo per collassare con dignità.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center gap-2 mt-6 pt-4 border-t-2 border-black">
          <button
            onClick={() => setActiveCourseTab('all')}
            className={`px-4 py-2 border-2 border-black font-anton text-xs sm:text-sm uppercase tracking-wider transition shadow-[3px_3px_0px_#000] cursor-pointer ${
              activeCourseTab === 'all'
                ? 'bg-black text-[#A0FF00] font-bold'
                : 'bg-white text-black hover:bg-[#A0FF00]'
            }`}
          >
            📚 TUTTI I CORSI (2)
          </button>

          <button
            onClick={() => setActiveCourseTab('marcus')}
            className={`px-4 py-2 border-2 border-black font-anton text-xs sm:text-sm uppercase tracking-wider transition shadow-[3px_3px_0px_#000] cursor-pointer ${
              activeCourseTab === 'marcus'
                ? 'bg-black text-[#A0FF00] font-bold'
                : 'bg-white text-black hover:bg-[#A0FF00]'
            }`}
          >
            💪 1) COACH MARCUS
          </button>

          <button
            onClick={() => setActiveCourseTab('teresa')}
            className={`px-4 py-2 border-2 border-black font-anton text-xs sm:text-sm uppercase tracking-wider transition shadow-[3px_3px_0px_#000] cursor-pointer ${
              activeCourseTab === 'teresa'
                ? 'bg-black text-[#A0FF00] font-bold'
                : 'bg-white text-black hover:bg-[#A0FF00]'
            }`}
          >
            🔮 2) TAROCCHI CUBISTI (TERESA)
          </button>
        </div>
      </div>

      {/* Diploma Confirmation Alert Banner if Enrolled */}
      {enrolledCourse && (
        <div className="bg-[#A0FF00] border-4 border-black p-6 shadow-[8px_8px_0px_#000] mb-10 text-black animate-in fade-in duration-300">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-anton text-xl uppercase">
                <Trophy className="w-6 h-6 text-black" />
                <span>ISCRIZIONE CONFERMATA CON SUCCESSO!</span>
              </div>
              <p className="font-typewriter text-xs sm:text-sm font-bold">
                Congratulazioni, <span className="underline uppercase">{enrolledCourse.studentName}</span>! La tua iscrizione al <span className="font-bold uppercase">{enrolledCourse.id === 'marcus' ? 'Corso di Logorrea Tattica e Sfinimento dei Sogni con Coach Marcus' : 'Corso di Tarocchi Cubisti con Teresa'}</span> è stata registrata in data {enrolledCourse.date}.
              </p>
              <div className="bg-black text-white p-3 font-mono text-xs border-2 border-black space-y-1">
                <p className="text-[#A0FF00] font-bold">📄 ATTESTATO PRE-FORMATIVO GENERATO:</p>
                <p>Studente: {enrolledCourse.studentName}</p>
                <p>Stato: Idoneo all'Apatia Formativa • Crediti Assegnati: 0</p>
                <p>Note Docente: "Indossa le ciabatte ortopediche prima di iniziare."</p>
              </div>
            </div>
            <button
              onClick={() => setEnrolledCourse(null)}
              className="bg-black text-[#A0FF00] p-1.5 border-2 border-black font-bold hover:bg-white hover:text-black transition cursor-pointer"
              title="Chiudi avviso"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Courses List */}
      <div className="space-y-12">
        
        {/* =================================================== */}
        {/* COURSE 1: COACH MARCUS */}
        {/* =================================================== */}
        {(activeCourseTab === 'all' || activeCourseTab === 'marcus') && (
          <article className="bg-white border-4 border-black shadow-[10px_10px_0px_#000] overflow-hidden flex flex-col lg:flex-row">
            
            {/* Left Image & Speaker Badge */}
            <div className="lg:w-5/12 bg-black border-b-4 lg:border-b-0 lg:border-r-4 border-black relative p-6 flex flex-col justify-between min-h-[320px]">
              <div className="absolute top-3 left-3 bg-[#A0FF00] text-black border-2 border-black font-anton text-xs px-2.5 py-1 uppercase font-bold tracking-wider z-10 shadow-[2px_2px_0px_#000]">
                CORSO N. 1
              </div>

              <div className="relative my-auto py-6 flex flex-col items-center text-center">
                <img
                  src="/MARCUS.png"
                  alt="Coach Marcus in canottiera"
                  className="w-48 h-48 sm:w-56 sm:h-56 object-cover border-4 border-[#A0FF00] shadow-[6px_6px_0px_#A0FF00] mb-4"
                  onError={(e) => {
                    // Fallback image if needed
                    e.currentTarget.src = "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=800";
                  }}
                />
                <h3 className="font-anton text-3xl uppercase text-[#A0FF00] tracking-tight">
                  COACH MARCUS
                </h3>
                <p className="font-typewriter text-xs text-neutral-300 font-bold uppercase mt-1">
                  Docente di Logorrea Tattica & Motivazione allo Sfinimento
                </p>
              </div>

              <div className="bg-neutral-900 border-2 border-[#A0FF00] p-3 text-neutral-200 font-typewriter text-[11px] italic">
                "Non inseguire i tuoi sogni: sfiniscili finché non si arrendono e ti chiedono pietà."
              </div>
            </div>

            {/* Right Course Info & Syllabus */}
            <div className="lg:w-7/12 p-6 sm:p-8 flex flex-col justify-between bg-[#FAF8F5]">
              <div className="space-y-5">
                
                {/* Header */}
                <div>
                  <div className="text-xs font-mono text-neutral-600 font-bold uppercase mb-1 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-black" />
                    CORSO TEORICO-PRATICO #01
                  </div>
                  <h2 className="font-anton text-3xl sm:text-4xl uppercase text-black leading-tight border-b-2 border-black pb-3">
                    1) CORSO CON COACH MARCUS: "LOGORREA TATTICA & SFINIMENTO DEI SOGNI"
                  </h2>
                </div>

                {/* Subtitle / Objective */}
                <p className="font-typewriter text-xs sm:text-sm text-neutral-800 leading-relaxed font-semibold">
                  Il corso definitivo per apprendere le tecniche avanzate di logorrea tattica, seduzione al contrario e gestione strategica del rifiuto romantico. Imparerai a spiegare la meccanica della Fiat Duna fino a paralizzare l'interlocutore.
                </p>

                {/* Key Course Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-xs">
                  <div className="bg-white border-2 border-black p-2.5 shadow-[2px_2px_0px_#000]">
                    <div className="text-neutral-500 text-[10px] uppercase font-bold flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-black" /> DURATA
                    </div>
                    <div className="font-anton text-base text-black mt-0.5">128 ORE</div>
                    <div className="text-[10px] text-neutral-600">Monologo ininterrotto</div>
                  </div>

                  <div className="bg-white border-2 border-black p-2.5 shadow-[2px_2px_0px_#000]">
                    <div className="text-neutral-500 text-[10px] uppercase font-bold flex items-center gap-1">
                      <Award className="w-3.5 h-3.5 text-black" /> CREDITI (CFU)
                    </div>
                    <div className="font-anton text-base text-[#FF2A00] mt-0.5">0 CFU</div>
                    <div className="text-[10px] text-neutral-600">(-5 CFU Morali)</div>
                  </div>

                  <div className="bg-white border-2 border-black p-2.5 col-span-2 sm:col-span-1 shadow-[2px_2px_0px_#000]">
                    <div className="text-neutral-500 text-[10px] uppercase font-bold flex items-center gap-1">
                      <UserCheck className="w-3.5 h-3.5 text-black" /> DRESS CODE
                    </div>
                    <div className="font-anton text-base text-black mt-0.5">CANOTTIERA</div>
                    <div className="text-[10px] text-neutral-600">+ Ciabatta Sanitaria</div>
                  </div>
                </div>

                {/* Modules Accordion / List */}
                <div className="space-y-2 pt-2">
                  <h4 className="font-anton text-lg uppercase tracking-wide border-b-2 border-black pb-1 flex items-center justify-between">
                    <span>PROGRAMMA DIDATTICO UFFICIALE</span>
                    <span className="text-xs font-mono bg-black text-[#A0FF00] px-2 py-0.5">4 MODULI</span>
                  </h4>

                  <div className="space-y-2 font-mono text-xs">
                    <div className="bg-white border-2 border-black p-3 shadow-[2px_2px_0px_#000]">
                      <div className="font-bold text-black flex items-center justify-between border-b border-black/20 pb-1 mb-1">
                        <span>MODULO 1: TEORIA DELLA LOGORREA TATTICA</span>
                        <span className="bg-[#A0FF00] text-black px-1.5 py-0.5 text-[10px] font-bold">30 ORE</span>
                      </div>
                      <p className="text-neutral-700 text-[11px] leading-relaxed">
                        Spiegazione dettagliata del monoblocco motore della Fiat Duna del 1987. Come parlare ininterrottamente per 4 ore durante un primo appuntamento impedendo ogni replica.
                      </p>
                    </div>

                    <div className="bg-white border-2 border-black p-3 shadow-[2px_2px_0px_#000]">
                      <div className="font-bold text-black flex items-center justify-between border-b border-black/20 pb-1 mb-1">
                        <span>MODULO 2: L'ARTE DELL'ANDARE IN BIANCO CON DIGNITÀ</span>
                        <span className="bg-[#A0FF00] text-black px-1.5 py-0.5 text-[10px] font-bold">45 ORE</span>
                      </div>
                      <p className="text-neutral-700 text-[11px] leading-relaxed">
                        Strategie psicologiche per riconvertire un rifiuto romantico in una tesi di laurea sull'autonomia del radiatore e sulla solitudine stoica.
                      </p>
                    </div>

                    <div className="bg-white border-2 border-black p-3 shadow-[2px_2px_0px_#000]">
                      <div className="font-bold text-black flex items-center justify-between border-b border-black/20 pb-1 mb-1">
                        <span>MODULO 3: SFINIMENTO MOTIVAZIONALE DEI SOGNI</span>
                        <span className="bg-[#A0FF00] text-black px-1.5 py-0.5 text-[10px] font-bold">50 ORE</span>
                      </div>
                      <p className="text-neutral-700 text-[11px] leading-relaxed">
                        Esercizi pratici di urla motivazionali allo specchio alle 4:30 del mattino indossando ciabatte ortopediche.
                      </p>
                    </div>

                    <div className="bg-white border-2 border-black p-3 shadow-[2px_2px_0px_#000]">
                      <div className="font-bold text-black flex items-center justify-between border-b border-black/20 pb-1 mb-1">
                        <span>MODULO 4: IGIENE POSTURALE NELLO SCONFORTO</span>
                        <span className="bg-[#A0FF00] text-black px-1.5 py-0.5 text-[10px] font-bold">3 ORE</span>
                      </div>
                      <p className="text-neutral-700 text-[11px] leading-relaxed">
                        Mantenimento della dignità fisica mentre si viene accompagnati alla porta dal personale del ristorante.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Action enrollment */}
              <div className="mt-8 pt-4 border-t-2 border-black flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div className="text-xs font-mono">
                  <span className="text-neutral-500 block">COSTO ISCRIZIONE:</span>
                  <span className="font-anton text-2xl text-black uppercase">€0,00</span>
                  <span className="text-[10px] text-neutral-600 block">+ 1 Bolletta Inutile scaduta</span>
                </div>

                <button
                  onClick={() => handleEnrollClick('marcus')}
                  className="bg-[#A0FF00] text-black border-2 border-black px-6 py-3 font-anton text-base uppercase hover:bg-black hover:text-[#A0FF00] transition shadow-[4px_4px_0px_#000] cursor-pointer flex items-center justify-center gap-2"
                >
                  <GraduationCap className="w-5 h-5" />
                  <span>ISCRIVITI AL CORSO DI MARCUS</span>
                </button>
              </div>

            </div>
          </article>
        )}

        {/* =================================================== */}
        {/* COURSE 2: TAROCCHI CUBISTI CON TERESA */}
        {/* =================================================== */}
        {(activeCourseTab === 'all' || activeCourseTab === 'teresa') && (
          <article className="bg-white border-4 border-black shadow-[10px_10px_0px_#000] overflow-hidden flex flex-col lg:flex-row">
            
            {/* Left Image & Speaker Badge */}
            <div className="lg:w-5/12 bg-black border-b-4 lg:border-b-0 lg:border-r-4 border-black relative p-6 flex flex-col justify-between min-h-[320px]">
              <div className="absolute top-3 left-3 bg-[#A0FF00] text-black border-2 border-black font-anton text-xs px-2.5 py-1 uppercase font-bold tracking-wider z-10 shadow-[2px_2px_0px_#000]">
                CORSO N. 2
              </div>

              <div className="relative my-auto py-6 flex flex-col items-center text-center">
                <img
                  src="/TERESA.png"
                  alt="Teresa Cartomante Cubista"
                  className="w-48 h-48 sm:w-56 sm:h-56 object-cover border-4 border-[#A0FF00] shadow-[6px_6px_0px_#A0FF00] mb-4"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1512290900676-26c2a0d0e5b0?auto=format&fit=crop&q=80&w=800";
                  }}
                />
                <h3 className="font-anton text-3xl uppercase text-[#A0FF00] tracking-tight">
                  TERESA TAROCCHI
                </h3>
                <p className="font-typewriter text-xs text-neutral-300 font-bold uppercase mt-1">
                  Docente di Cartomanzia Cubista & Lettura Errata
                </p>
              </div>

              <div className="bg-neutral-900 border-2 border-[#A0FF00] p-3 text-neutral-200 font-typewriter text-[11px] italic">
                "I tarocchi tradizionali hanno quattro lati. I miei ne hanno ventisei e sono uniti dalla maionese."
              </div>
            </div>

            {/* Right Course Info & Syllabus */}
            <div className="lg:w-7/12 p-6 sm:p-8 flex flex-col justify-between bg-[#FAF8F5]">
              <div className="space-y-5">
                
                {/* Header */}
                <div>
                  <div className="text-xs font-mono text-neutral-600 font-bold uppercase mb-1 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-black" />
                    CORSO ESOTERICO-CUBISTA #02
                  </div>
                  <h2 className="font-anton text-3xl sm:text-4xl uppercase text-black leading-tight border-b-2 border-black pb-3">
                    2) CORSO DI TAROCCHI CUBISTI CON TERESA: "LETTURA ERRATA & PANICO ESOTERICO"
                  </h2>
                </div>

                {/* Subtitle / Objective */}
                <p className="font-typewriter text-xs sm:text-sm text-neutral-800 leading-relaxed font-semibold">
                  Guida teorico-pratica alla decostruzione geometrica degli arcani maggiori, interpretazione degli scontrini fiscali unti di maionese e tecniche per infondere dubbi esistenziali ai propri parenti durante le festività.
                </p>

                {/* Key Course Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-xs">
                  <div className="bg-white border-2 border-black p-2.5 shadow-[2px_2px_0px_#000]">
                    <div className="text-neutral-500 text-[10px] uppercase font-bold flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-black" /> DURATA
                    </div>
                    <div className="font-anton text-base text-black mt-0.5">FINO ALLA MAIONESE</div>
                    <div className="text-[10px] text-neutral-600">Esaurimento tubetto</div>
                  </div>

                  <div className="bg-white border-2 border-black p-2.5 shadow-[2px_2px_0px_#000]">
                    <div className="text-neutral-500 text-[10px] uppercase font-bold flex items-center gap-1">
                      <Award className="w-3.5 h-3.5 text-black" /> KIT INCLUSO
                    </div>
                    <div className="font-anton text-base text-[#A0FF00] bg-black px-1 mt-0.5 inline-block">TAROCCHI CUBISTI</div>
                    <div className="text-[10px] text-neutral-600">Mazzo stropicciato</div>
                  </div>

                  <div className="bg-white border-2 border-black p-2.5 col-span-2 sm:col-span-1 shadow-[2px_2px_0px_#000]">
                    <div className="text-neutral-500 text-[10px] uppercase font-bold flex items-center gap-1">
                      <UserCheck className="w-3.5 h-3.5 text-black" /> REQUISITI
                    </div>
                    <div className="font-anton text-base text-black mt-0.5">CIABATTE & MAIO</div>
                    <div className="text-[10px] text-neutral-600">+ zero risposte</div>
                  </div>
                </div>

                {/* Modules Accordion / List */}
                <div className="space-y-2 pt-2">
                  <h4 className="font-anton text-lg uppercase tracking-wide border-b-2 border-black pb-1 flex items-center justify-between">
                    <span>PROGRAMMA DIDATTICO ESOTERICO</span>
                    <span className="text-xs font-mono bg-black text-[#A0FF00] px-2 py-0.5">4 MODULI</span>
                  </h4>

                  <div className="space-y-2 font-mono text-xs">
                    <div className="bg-white border-2 border-black p-3 shadow-[2px_2px_0px_#000]">
                      <div className="font-bold text-black flex items-center justify-between border-b border-black/20 pb-1 mb-1">
                        <span>MODULO 1: DECOSTRUZIONE CUBISTA DELL'ARCANO ZERO ("IL MATTO")</span>
                        <span className="bg-[#A0FF00] text-black px-1.5 py-0.5 text-[10px] font-bold">25 ORE</span>
                      </div>
                      <p className="text-neutral-700 text-[11px] leading-relaxed">
                        Analisi prospettica del Matto che si avvia verso il burrone in ciabatte, imbracciando un fascicolo di tasse e maionese.
                      </p>
                    </div>

                    <div className="bg-white border-2 border-black p-3 shadow-[2px_2px_0px_#000]">
                      <div className="font-bold text-black flex items-center justify-between border-b border-black/20 pb-1 mb-1">
                        <span>MODULO 2: CARTOMANZIA SU SCONTRINI E CARTE UNTE</span>
                        <span className="bg-[#A0FF00] text-black px-1.5 py-0.5 text-[10px] font-bold">40 ORE</span>
                      </div>
                      <p className="text-neutral-700 text-[11px] leading-relaxed">
                        Lettura del futuro professionale sugli scontrini del discount del 2018 macchiati di salsa rosa.
                      </p>
                    </div>

                    <div className="bg-white border-2 border-black p-3 shadow-[2px_2px_0px_#000]">
                      <div className="font-bold text-black flex items-center justify-between border-b border-black/20 pb-1 mb-1">
                        <span>MODULO 3: SEMINARE IL PANICO ESOTERICO CON ELEGANZA</span>
                        <span className="bg-[#A0FF00] text-black px-1.5 py-0.5 text-[10px] font-bold">35 ORE</span>
                      </div>
                      <p className="text-neutral-700 text-[11px] leading-relaxed">
                        Dire frasi come "Vedo una figura romboidale nella tua fattura" con sguardo pietrificato e convinto.
                      </p>
                    </div>

                    <div className="bg-white border-2 border-black p-3 shadow-[2px_2px_0px_#000]">
                      <div className="font-bold text-black flex items-center justify-between border-b border-black/20 pb-1 mb-1">
                        <span>MODULO 4: PROPAGANDA DELLA SFIGA IN CIABATTE</span>
                        <span className="bg-[#A0FF00] text-black px-1.5 py-0.5 text-[10px] font-bold">20 ORE</span>
                      </div>
                      <p className="text-neutral-700 text-[11px] leading-relaxed">
                        Come declinare gli inviti alle feste di compleanno inventando presagi sfavorevoli legati al tostapane.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Action enrollment */}
              <div className="mt-8 pt-4 border-t-2 border-black flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div className="text-xs font-mono">
                  <span className="text-neutral-500 block">COSTO ISCRIZIONE:</span>
                  <span className="font-anton text-2xl text-black uppercase">€0,00</span>
                  <span className="text-[10px] text-neutral-600 block">+ 1 Macchia di Maionese</span>
                </div>

                <button
                  onClick={() => handleEnrollClick('teresa')}
                  className="bg-[#A0FF00] text-black border-2 border-black px-6 py-3 font-anton text-base uppercase hover:bg-black hover:text-[#A0FF00] transition shadow-[4px_4px_0px_#000] cursor-pointer flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-5 h-5" />
                  <span>ISCRIVITI AI TAROCCHI CUBISTI</span>
                </button>
              </div>

            </div>
          </article>
        )}

      </div>

      {/* Interactive Enrollment Modal */}
      {selectedCourseForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs">
          <div className="bg-[#F4F1EA] border-4 border-black p-6 max-w-lg w-full shadow-[10px_10px_0px_#A0FF00] animate-in zoom-in-95 duration-200">
            
            <div className="flex justify-between items-start border-b-2 border-black pb-3 mb-4">
              <div>
                <span className="bg-[#A0FF00] text-black text-[10px] font-mono font-bold px-2 py-0.5 border border-black uppercase">
                  MODULO DI ISCRITTURA ACADEMICA
                </span>
                <h3 className="font-anton text-2xl uppercase mt-1">
                  {selectedCourseForModal === 'marcus' ? 'CORSO CON COACH MARCUS' : 'TAROCCHI CUBISTI CON TERESA'}
                </h3>
              </div>
              <button
                onClick={() => setSelectedCourseForModal(null)}
                className="bg-black text-white p-1 hover:bg-[#A0FF00] hover:text-black border-2 border-black transition"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleConfirmEnrollment} className="space-y-4 font-mono text-xs">
              <p className="text-neutral-800 leading-relaxed font-semibold">
                Inserisci il tuo nome per generare l'attestato ufficiale di iscrizione al corso di Cattivo Gusto.
              </p>

              <div>
                <label className="block text-black font-bold uppercase mb-1">
                  NOME STUDENTE / CORRISPONDENTE:
                </label>
                <input
                  type="text"
                  required
                  placeholder="Es. Mario Rossi (o Nome D'Arte Assurdo)"
                  value={studentInput}
                  onChange={(e) => setStudentInput(e.target.value)}
                  className="w-full bg-white border-2 border-black p-2.5 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-[#A0FF00] shadow-[2px_2px_0px_#000]"
                />
              </div>

              <div className="bg-white border-2 border-black p-3 space-y-1 text-[11px] text-neutral-700">
                <p className="font-bold text-black flex items-center gap-1">
                  <AlertTriangle className="w-3.5 h-3.5 text-yellow-500" /> CLAUSOLA DI NON SENSABILITÀ:
                </p>
                <p>
                  Iscrivendoti, accetti di non ricevere alcuna competenza utile nel mondo del lavoro reale. L'attestato ha valore puramente filosofico e decorativo.
                </p>
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedCourseForModal(null)}
                  className="bg-neutral-200 text-black border-2 border-black px-4 py-2 font-anton text-xs uppercase hover:bg-black hover:text-white transition cursor-pointer"
                >
                  ANNULLA
                </button>
                <button
                  type="submit"
                  className="bg-[#A0FF00] text-black border-2 border-black px-5 py-2 font-anton text-sm uppercase hover:bg-black hover:text-[#A0FF00] transition shadow-[3px_3px_0px_#000] cursor-pointer flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>CONFERMA ISCRIZIONE</span>
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

      {/* Ask Groq Assistant Box */}
      {onOpenGroqChat && (
        <div className="mt-12 bg-black text-white border-4 border-black p-6 shadow-[8px_8px_0px_#A0FF00] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono">
          <div className="space-y-1">
            <h4 className="font-anton text-2xl uppercase text-[#A0FF00]">
              DUBBI SUI CORSI? CHIEDI ALL'ALTER EGO AI (GROQ)
            </h4>
            <p className="text-xs text-neutral-300">
              Chiedi consiglio alla nostra IA sul corso più adatto al tuo livello di apatia o disperazione.
            </p>
          </div>
          <button
            onClick={onOpenGroqChat}
            className="bg-[#A0FF00] text-black border-2 border-black px-5 py-2.5 font-anton text-sm uppercase hover:bg-white transition shrink-0 shadow-[3px_3px_0px_#fff] cursor-pointer"
          >
            💬 CHAT CON L'ALTER EGO
          </button>
        </div>
      )}

    </div>
  );
};
