const { useState, useEffect, useMemo } = React;

// 1. INJEKSI BACKGROUND PATTERN & LOGO SVG
const BackgroundPattern = ({ className }) => (
    <svg className={className} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920.05 206.77" preserveAspectRatio="none">
        <defs>
            <style>{`.cls-1{fill:#e38ebc;}.cls-2{fill:#fff;}.cls-3,.cls-4{fill:#2982c5;}.cls-3,.cls-5{stroke:#03a550;stroke-width:.1px;}.cls-6{fill:#ffc836;}.cls-5{fill:#03a550;}`}</style>
        </defs>
        <path className="cls-1" d="M377.6,174.71V.38H32v174.34h377.6s-32-.01-32-.01ZM220.8,32.05h-32s32-.01,32-.01h0Z"/>
        <rect className="cls-1" x="1542.4" y=".38" width="156.8" height="174.33"/>
        <rect className="cls-4" x="787.2" y="32.05" width="534.4" height="142.66"/>
        <rect className="cls-6" x="1353.6" y="32.05" width="156.8" height="142.66"/>
        <rect className="cls-1" x="1731.2" y=".38" width="156.8" height="174.33"/>
        <polygon className="cls-5" points="598.4 174.71 598.4 174.72 409.6 174.72 409.6 .38 566.4 .38 566.4 174.71 598.4 174.71"/>
        <rect className="cls-2" x="377.6" y="32.05" width="32" height="142.66"/>
        <rect className="cls-1" x="598.4" y="32.05" width="156.8" height="142.67"/>
        <rect className="cls-2" x="566.4" y="32.05" width="32" height="142.66"/>
        <rect className="cls-3" x="1888" y=".05" width="32" height="32"/>
        <rect className="cls-3" x="1888" y="174.71" width="32" height="32"/>
        <rect className="cls-5" x="1888" y="32.05" width="32" height="142.66"/>
        <rect className="cls-3" x="1699.2" y=".05" width="32" height="32"/>
        <rect className="cls-3" x="1132.8" y=".05" width="32" height="32"/>
        <rect className="cls-3" x="377.6" y=".05" width="32" height="32"/>
        <rect className="cls-6" x="188.8" y="32.04" width="32" height=".01"/>
        <rect className="cls-6" y=".05" width="32" height="32"/>
        <rect className="cls-6" x="0" y="174.71" width="32" height="32"/>
        <rect className="cls-4" y="32.05" width="32" height="142.66"/>
        <rect className="cls-5" x="1699.2" y="32.05" width="32" height="142.66"/>
        <rect className="cls-3" x="1699.2" y="174.71" width="32" height="32"/>
        <rect className="cls-5" x="1542.4" y="174.71" width="156.8" height="32"/>
        <rect className="cls-6" x="1510.4" y="174.71" width="32" height="32"/>
        <rect className="cls-6" x="1321.6" y="174.71" width="32" height="32"/>
        <rect className="cls-3" x="1132.8" y="174.71" width="32" height="32"/>
        <rect className="cls-3" x="944" y="174.71" width="32" height="32"/>
        <rect className="cls-3" x="755.2" y="174.71" width="32" height="32"/>
        <rect className="cls-5" x="1353.6" y="174.71" width="156.8" height="32"/>
        <rect className="cls-5" x="976" y="174.71" width="156.8" height="32"/>
        <rect className="cls-5" x="787.2" y="174.71" width="156.8" height="32"/>
        <rect className="cls-5" x="1164.8" y="174.71" width="156.8" height="32"/>
        <rect className="cls-5" x="1731.2" y="174.71" width="156.8" height="32"/>
        <rect className="cls-3" x="566.4" y=".05" width="32" height="32"/>
        <rect className="cls-5" x="755.2" y="32.05" width="32" height="142.66"/>
        <rect className="cls-3" x="755.2" y=".05" width="32" height="32"/>
        <rect className="cls-3" x="944" y=".05" width="32" height="32"/>
        <rect className="cls-5" x="1321.6" y="32.05" width="32" height="142.66"/>
        <rect className="cls-6" x="1321.6" y=".05" width="32" height="32"/>
        <rect className="cls-5" x="1510.4" y="32.05" width="32" height="142.66"/>
        <rect className="cls-6" x="1510.4" y=".05" width="32" height="32"/>
        <rect className="cls-5" x="598.4" y=".05" width="156.8" height="32"/>
        <rect className="cls-5" x="976" y=".05" width="156.8" height="32"/>
        <rect className="cls-5" x="1353.6" y=".05" width="156.8" height="32"/>
        <rect className="cls-5" x="1164.8" y=".05" width="156.8" height="32"/>
        <rect className="cls-5" x="787.2" y=".05" width="156.8" height="32"/>
        <rect className="cls-1" x="377.6" y="174.72" width="32" height="32"/>
        <rect className="cls-6" x="188.8" y="174.72" width="32" height="32"/>
        <rect className="cls-1" x="566.4" y="174.72" width="32" height="32"/>
        <rect className="cls-3" x="755.2" y="174.71" width="32" height="32"/>
        <rect className="cls-4" x="220.8" y="174.72" width="156.8" height="32"/>
        <rect className="cls-5" x="598.4" y="174.72" width="156.8" height="32"/>
        <rect className="cls-4" x="409.6" y="174.72" width="156.8" height="32"/>
        <rect className="cls-4" x="32" y="174.72" width="156.8" height="32"/>
        <rect className="cls-6" x="377.6" y="32.04" width="32" height="142.67"/>
        <rect className="cls-1" x="188.8" y="32.04" width="32" height=".01"/>
        <rect className="cls-6" x="566.4" y="32.04" width="32" height="142.67"/>
        <rect className="cls-2" x="0" y=".05" width="32" height=".33"/>
        <rect className="cls-2" x="377.6" y=".05" width="32" height=".33"/>
        <rect className="cls-2" x="566.4" y=".05" width="976" height=".33"/>
        <rect className="cls-2" x="1699.2" y=".05" width="32" height=".33"/>
        <rect className="cls-2" x="1888" y=".05" width="32" height=".33"/>
        <rect className="cls-4" x="1731.2" y=".05" width="156.8" height="32"/>
    </svg>
);

const LogoGdtSkills = ({ className }) => (
    <svg className={className} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 270.61 71.33" width="100%" height="100%">
        <defs>
            <style>{`.cls-g1{fill:#14a94b;}.cls-g2{fill:#5f2f11;}`}</style>
        </defs>
        <g>
            <g id="t"><path className="cls-g2" d="M167.66,49.88c-5.88,0-8.73-2.7-8.73-8.25v-6.9c0-.99-.81-1.77-1.8-1.78-.57,0-1.03-.47-1.03-1.04v-3.55c0-.63.42-1.16,1.02-1.35,1.8-.58,1.81-2.68,1.81-2.68v-3.01c0-.78.63-1.41,1.41-1.41h6.47c.78,0,1.41.63,1.41,1.41v4.65h4.16c.78,0,1.41.63,1.41,1.41v4.17c0,.78-.63,1.41-1.41,1.41h-4.16v6.47c0,1.92.92,2.85,2.8,2.85.44,0,.92-.06,1.41-.17.08-.02.16-.03.23-.03.57,0,1.04.47,1.04,1.04v4.86c0,.43-.27.82-.68.98-1.51.59-3.47.93-5.36.93h0Z"/></g>
            <g id="d-2"><path className="cls-g2" d="M137.14,49.93c-5.8,0-10.02-5.09-10.02-12.09v-.09c0-7.16,4.18-12.36,9.93-12.36,3.62,0,5.56,1.61,6.97,3.19l.65.72v-10.06c0-.78.63-1.41,1.41-1.41h6.47c.78,0,1.41.63,1.41,1.41v28.7c0,.78-.63,1.41-1.41,1.41h-6.47c-.78,0-1.41-.63-1.41-1.41v-2.13l-.64.69c-1.67,1.8-3.45,3.42-6.89,3.42h0ZM140.5,32.91c-2.46,0-4.39,2.07-4.39,4.7v.09c0,2.64,1.93,4.7,4.39,4.7s4.39-2.07,4.39-4.7v-.09c0-2.64-1.93-4.7-4.39-4.7Z"/></g>
            <g id="g"><path className="cls-g2" d="M111.29,59.82c-4.34,0-8-.69-11.53-2.18-.36-.15-.63-.44-.76-.8s-.11-.78.07-1.13l1.46-2.86c.24-.47.71-.75,1.24-.75.2,0,.4.04.58.13,2.45,1.09,4.79,1.59,7.34,1.59,3.25,0,5.36-1.45,5.94-4.07.07-.35.11-.7gamma.13-1.08.01-.33-.1-.63-.32-.86-.23-.23-.54-.37-.87-.37-.29,0-.58.11-.8.31-1.12,1.02-2.78,2.19-5.68,2.19-5.8,0-10.02-5.09-10.02-12.09v-.09c0-7.16,4.18-12.36,9.93-12.36,3.62,0,5.56,1.61,6.97,3.19l.65.72v-1.93c0-.78.63-1.41,1.41-1.41h6.47c.78,0,1.41.63,1.41,1.41v19.56c0,4.45-.94,7.37-3.03,9.46-2.31,2.31-5.78,3.43-10.61,3.43h0ZM111.47,32.91c-2.46,0-4.39,2.07-4.39,4.7v.09c0,2.64,1.93,4.7,4.39,4.7s4.39-2.07,4.39-4.7v-.09c0-2.64-1.93-4.7-4.39-4.7Z"/></g>
            <g>
                <path className="cls-g1" d="M177.67,45.95l1.15-2.61c.43-.97,1.56-1.44,2.53-1.02,2.19.95,4.86,1.51,7.32,1.51,3.06,0,4.06-.67,4.06-1.77,0-3.48-15.28.48-15.28-9.88,0-4.87,4.49-8.59,12.6-8.59,2.83,0,5.89.47,8.33,1.35,1.06.38,1.56,1.6,1.1,2.63l-1.14,2.59c-.42.96-1.53,1.37-2.51.97-1.99-.8-3.95-1.09-5.73-1.09-3.06,0-4.15.86-4.15,1.82,0,3.58,15.23-.29,15.23,9.98,0,4.77-4.39,8.5-12.79,8.5-3.51,0-7.11-.7-9.71-1.79-1-.42-1.44-1.59-1.01-2.58Z"/>
                <path className="cls-g1" d="M215.43,40.82l-2.67,2.72v4.4c0,1.08-.88,1.95-1.95,1.95h-5.16c-1.08,0-1.95-.88-1.95-1.95v-31.41c0-1.14.92-2.06,2.06-2.06h5.05c1.08,0,1.95.88,1.95,1.95v16.62l8.69-8.47c.37-.36.85-.55,1.36-.55h5.33c1.73,0,2.61,2.08,1.4,3.32l-7.53,7.76,9.16,11.64c1.01,1.28.1,3.16-1.54,3.16h-6.01c-.59,0-1.16-.27-1.53-.73l-6.67-8.34Z"/>
                <path className="cls-g1" d="M233,16.33c0-2.72,2.2-4.82,5.54-4.82s5.54,1.96,5.54,4.68c0,2.86-2.2,4.97-5.54,4.97s-5.54-2.1-5.54-4.82ZM235.95,24.02h5.16c1.08,0,1.95.88,1.95,1.95v21.97c0,1.08-.88,1.95-1.95,1.95h-5.16c-1.08,0-1.95-.88-1.95-1.95v-21.97c0-1.08.88-1.95,1.95-1.95Z"/>
                <path className="cls-g1" d="M249.49,14.47h5.16c1.08,0,1.95.88,1.95,1.95v31.51c0,1.08-.88,1.95-1.95,1.95h-5.16c-1.08,0-1.95-.88-1.95-1.95v-31.51c0-1.08.88-1.95,1.95-1.95Z"/>
                <path className="cls-g1" d="M263.49,14.47h5.16c1.08,0,1.95.88,1.95,1.95v31.51c0,1.08-.88,1.95-1.95,1.95h-5.16c-1.08,0-1.95-.88-1.95-1.95v-31.51c0-1.08.88-1.95,1.95-1.95Z"/>
            </g>
        </g>
        <g>
            <g id="_7"><path className="cls-g2" d="M35.67,71.33c-2.06,0-3.72-1.67-3.72-3.72v-10.65c0-2.06,1.67-3.72,3.72-3.72s3.72,1.67,3.72,3.72v10.65c0,2.06-1.67,3.72-3.72,3.72Z"/></g>
            <g id="_6"><path className="cls-g2" d="M58.25,61.97c-.95,0-1.9-.36-2.63-1.09l-7.53-7.53c-1.45-1.45-1.45-3.81,0-5.26s3.81-1.45,5.26,0l7.53,7.53c1.45,1.45,1.45,3.81,0,5.26-.73.73-1.68,1.09-2.63,1.09Z"/></g>
            <g id="_5"><path className="cls-g2" d="M67.61,39.39h-10.65c-2.06,0-3.72-1.67-3.72-3.72s1.67-3.72,3.72-3.72h10.65c2.06,0,3.72,1.67,3.72,3.72s-1.67,3.72-3.72,3.72h0Z"/></g>
            <g id="_4"><path className="cls-g2" d="M50.72,24.33c-.95,0-1.9-.36-2.63-1.09-1.45-1.45-1.45-3.81,0-5.26l7.53-7.53c1.45-1.45,3.81-1.45,5.26,0,1.45,1.45,1.45,3.81,0,5.26l-7.53,7.53c-.73.73-1.68,1.09-2.63,1.09h0Z"/></g>
            <g id="_3"><path className="cls-g2" d="M35.67,18.09c-2.06,0-3.72-1.67-3.72-3.72V3.72c0-2.06,1.67-3.72,3.72-3.72s3.72,1.67,3.72,3.72v10.65c0,2.06-1.67,3.72-3.72,3.72Z"/></g>
            <g id="_2"><path className="cls-g2" d="M20.61,24.33c-.95,0-1.9-.36-2.63-1.09l-7.53-7.53c-1.45-1.45-1.45-3.81,0-5.26,1.45-1.45,3.81-1.45,5.26,0l7.53,7.53c1.45,1.45,1.45,3.81,0,5.26-.73.73-1.68,1.09-2.63,1.09h0Z"/></g>
            <g id="_1"><path className="cls-g2" d="M14.37,39.39H3.72c-2.06,0-3.72-1.67-3.72-3.72s1.67-3.72,3.72-3.72h10.65c2.06,0,3.72,1.67,3.72,3.72s-1.67,3.72-3.72,3.72h0Z"/></g>
            <g id="tongkat"><path className="cls-g2" d="M13.08,61.97c-.95,0-1.9-.36-2.63-1.09-1.45-1.45-1.45-3.81,0-5.26l22.59-22.59c1.45-1.45,3.81-1.45,5.26,0,1.45,1.45,1.45,3.81,0,5.26l-22.59,22.59c-.73.73-1.68,1.09-2.63,1.09Z"/></g>
        </g>
    </svg>
);

// Helper Fungsi Waktu WIB (Memaksa jam browser untuk patuh pada WIB / UTC+7)
const getWIBTime = () => {
    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    return new Date(utc + (3600000 * 7));
};

function App() {
    const [view, setView] = useState('dashboard');
    const [currentTime, setCurrentTime] = useState(getWIBTime());
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('no-asc');
    
    const [db, setDb] = useState({ config: {}, modules: [], schedule: [], importantLinks: [] });
    const [pesertaList] = useState(window.DATA_PESERTA || []);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setDb(data))
            .catch(err => console.error(err));
    }, []);

    // Engine Jam Real-time WIB
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(getWIBTime());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (searchQuery.toLowerCase() === 'admin123') {
            setView('admin');
            setSearchQuery('');
        }
    }, [searchQuery]);

    // Logika Sinkronisasi Agenda Aktual Berdasarkan Waktu Sistem WIB
    const { activeAgenda, nextAgenda } = useMemo(() => {
        let active = null;
        let next = null;
        const now = currentTime.getTime();
        
        for (let i = 0; i < db.schedule.length; i++) {
            const s = db.schedule[i];
            const start = new Date(s.start).getTime();
            const end = new Date(s.end).getTime();
            
            if (now >= start && now <= end) {
                active = s;
            } else if (now < start && !next) {
                next = s;
            }
        }
        return { activeAgenda: active, nextAgenda: next };
    }, [currentTime, db.schedule]);

    // Kalkulasi Sisa Detik (Countdown menuju batas akhir agenda aktif, ATAU hitung mundur menuju agenda selanjutnya)
    const targetTime = activeAgenda ? new Date(activeAgenda.end).getTime() : (nextAgenda ? new Date(nextAgenda.start).getTime() : null);
    const sisaDetik = targetTime ? Math.max(0, Math.floor((targetTime - currentTime.getTime()) / 1000)) : 0;

    const formatDuaDigit = (num) => String(num).padStart(2, '0');
    const hours = formatDuaDigit(Math.floor(sisaDetik / 3600));
    const minutes = formatDuaDigit(Math.floor((sisaDetik % 3600) / 60));
    const seconds = formatDuaDigit(sisaDetik % 60);

    const processedPeserta = useMemo(() => {
        let filtered = pesertaList.filter(p => 
            p.nama.toLowerCase().includes(searchQuery.toLowerCase()) || p.no.includes(searchQuery)
        );
        return filtered.sort((a, b) => {
            if (sortBy === 'no-asc') return parseInt(a.no) - parseInt(b.no);
            if (sortBy === 'no-desc') return parseInt(b.no) - parseInt(a.no);
            if (sortBy === 'name-asc') return a.nama.localeCompare(b.nama);
            return 0;
        });
    }, [pesertaList, searchQuery, sortBy]);

    return (
        <div className="flex flex-col h-screen w-screen overflow-hidden bg-white font-karla">
            
            {/* --- BARIS 1: HEADER (1/6 TINGGI) HAPUS GRAFIS PATTERN, MARGIN PX-16 --- */}
            <header className="h-[16.6vh] w-full border-b-4 border-lks-blue shrink-0 flex items-center justify-between px-16 bg-white">
                <button onClick={() => setView('dashboard')} className="p-2 max-h-[85%] w-72 flex items-center justify-center transition hover:opacity-95 focus:outline-none cursor-pointer">
                    <LogoGdtSkills className="w-full h-auto object-contain" />
                </button>
                <button onClick={() => setView('dashboard')} className="px-8 py-3 text-center transition hover:opacity-95 focus:outline-none cursor-pointer">
                    <h1 className="text-xl md:text-3xl font-extrabold tracking-tight text-lks-pink">
                        {db.config.headline || "LKSN GDT 2026"}
                    </h1>
                </button>
            </header>

            {/* --- BARIS 2, 3, 4: MAIN AREA (4/6 TINGGI) MARGIN PX-16 --- */}
            <main className="h-[66.8vh] w-full px-16 py-6 bg-slate-50/40 shrink-0 overflow-y-auto">
                
                {view === 'dashboard' && (
                    <div className="w-full h-full flex flex-col md:flex-row gap-8">
                        {/* COUNTDOWN BOX -> FONT 130pt AGAR PROPORSIONAL */}
                        <div className="w-full md:w-3/4 bg-white flex flex-col items-center justify-center relative">
                            <h2 className="text-xl md:text-2xl font-extrabold text-lks-pink mb-0 tracking-wide select-none">
                                &lt;&lt; {activeAgenda ? activeAgenda.title : "Menunggu Sesi Dimulai"} &gt;&gt;
                            </h2>
                            <div className="text-[130pt] font-bold text-lks-blue leading-none tracking-tight select-none">
                                {hours}:{minutes}:{seconds}
                            </div>
                            <p className="text-xs md:text-sm font-bold text-lks-pink tracking-widest mt-2 select-none">Jam : Menit : Detik</p>
                        </div>

                        {/* GREEN BOX WIDGETS */}
                        <div className="w-full md:w-1/4 flex flex-col justify-between gap-4">
                            <div className="bg-lks-green text-white p-6 font-bold flex flex-col justify-center h-1/2">
                                <span className="text-xs font-bold text-emerald-100 block mb-2">Waktu Sistem (WIB):</span>
                                <div className="text-3xl lg:text-4xl font-black font-mono leading-none tracking-tight">{currentTime.toLocaleTimeString('id-ID')}</div>
                                <div className="text-xs text-emerald-100/90 mt-2">{currentTime.toLocaleDateString('id-ID', {day: 'numeric', month: 'long', year: 'numeric'})}</div>
                            </div>
                            <div className="bg-lks-green text-white p-6 font-bold flex flex-col justify-center h-1/2">
                                <span className="text-xs font-bold text-emerald-100 block mb-2">Agenda Selanjutnya:</span>
                                <p className="text-lg lg:text-xl leading-snug font-extrabold">
                                    {nextAgenda ? nextAgenda.title : "Seluruh Rangkaian Agenda Selesai"}
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* VIEW 1: AKSES MODUL */}
                {view === 'modules' && (
                    <div className="bg-white p-6 max-h-full overflow-y-auto">
                        <div className="border-b pb-3 mb-4"><h3 className="text-xl font-extrabold text-lks-blue">Modul Soal LKSN</h3></div>
                        <div className="space-y-3">
                            {db.modules.map((m) => {
                                const isReleased = currentTime >= new Date(m.releaseTime);
                                return (
                                    <div key={m.id} className="p-4 bg-slate-50 flex items-center justify-between">
                                        <div>
                                            <h4 className="font-bold text-slate-800">{m.title}</h4>
                                            <p className="text-xs text-slate-400 mt-1">PIC: {m.pic} • Rilis: {new Date(m.releaseTime).toLocaleTimeString('id-ID')} WIB</p>
                                        </div>
                                        {isReleased ? (
                                            <a href={m.link} target="_blank" rel="noreferrer" className="bg-lks-blue text-white px-4 py-2 text-xs font-bold transition hover:bg-sky-600">Buka Drive Modul</a>
                                        ) : (
                                            <button disabled className="bg-slate-300 text-slate-500 px-4 py-2 text-xs font-bold cursor-not-allowed">Terkunci</button>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* VIEW 2: FOLDER PENGUMPULAN */}
                {view === 'peserta' && (
                    <div className="bg-white p-6 max-h-full flex flex-col h-full">
                        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 border-b pb-3 mb-4 shrink-0">
                            <h3 className="text-xl font-extrabold text-lks-blue">Folder Pengumpulan Tugas</h3>
                            <div className="flex items-center gap-2">
                                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="text-xs font-bold px-3 py-2 border border-slate-200 bg-white focus:outline-none">
                                    <option value="no-asc">No. Terkecil</option>
                                    <option value="no-desc">No. Terbesar</option>
                                    <option value="name-asc">Nama (A-Z)</option>
                                </select>
                                <input type="text" placeholder="Cari No / Nama..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="text-xs px-3 py-2 border border-slate-200 bg-white focus:outline-none w-40"/>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 overflow-y-auto flex-1">
                            {processedPeserta.map((p, idx) => (
                                <div key={idx} className="p-3 bg-slate-50 flex items-center justify-between text-sm hover:bg-slate-100 transition">
                                    <div>
                                        <span className="font-mono bg-lks-blue/10 text-lks-blue px-2 py-0.5 font-bold mr-2">{p.no}</span>
                                        <span className="font-bold text-slate-700">{p.nama}</span>
                                    </div>
                                    <a href={p.link} target="_blank" rel="noreferrer" className="bg-lks-blue hover:bg-sky-600 transition text-white px-3 py-1.5 text-xs font-bold">Buka Folder</a>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* VIEW 3: JADWAL KOMPETISI */}
                {view === 'schedule' && (
                    <div className="bg-white p-6 max-h-full overflow-y-auto">
                        <div className="border-b pb-3 mb-4"><h3 className="text-xl font-extrabold text-lks-blue">Jadwal Kompetisi Terstruktur</h3></div>
                        <div className="space-y-4">
                            {Object.entries(
                                db.schedule.reduce((acc, curr) => {
                                    if (!acc[curr.dayLabel]) acc[curr.dayLabel] = [];
                                    acc[curr.dayLabel].push(curr);
                                    return acc;
                                }, {})
                            ).map(([dayGroup, items], idx) => (
                                <div key={idx} className="border-l-4 border-lks-blue pl-4 py-1">
                                    <h4 className="font-extrabold text-lks-pink text-sm mb-2 uppercase">{dayGroup}</h4>
                                    <div className="space-y-1.5">
                                        {items.map((s) => {
                                            const isNow = currentTime.getTime() >= new Date(s.start).getTime() && currentTime.getTime() <= new Date(s.end).getTime();
                                            return (
                                                <div key={s.id} className={`p-3 transition-colors flex justify-between items-center text-xs ${isNow ? 'bg-sky-100 border border-sky-200' : 'bg-slate-50'}`}>
                                                    <div>
                                                        <span className={`font-bold block ${isNow ? 'text-lks-blue' : 'text-slate-800'}`}>{s.title} {isNow && "(Berlangsung)"}</span>
                                                        <span className="text-slate-400 block mt-0.5">Durasi: {s.duration} | PIC: {s.pic}</span>
                                                    </div>
                                                    <span className={`font-mono font-bold px-2 py-1 ${isNow ? 'text-white bg-lks-blue' : 'text-lks-blue bg-white border border-slate-200'}`}>
                                                        {new Date(s.start).toLocaleTimeString('id-ID',{hour:'2-digit',minute:'2-digit'})} - {new Date(s.end).toLocaleTimeString('id-ID',{hour:'2-digit',minute:'2-digit'})} WIB
                                                    </span>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* VIEW 4: LINK PENTING */}
                {view === 'links' && (
                    <div className="bg-white p-6 max-h-full overflow-y-auto">
                        <div className="border-b pb-3 mb-4"><h3 className="text-xl font-extrabold text-lks-blue">Link-Link Penting Kompetisi</h3></div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {db.importantLinks?.map((l, idx) => (
                                <a key={idx} href={l.url} target="_blank" rel="noreferrer" className="p-4 bg-slate-50 hover:bg-lks-blue hover:text-white border-l-4 border-lks-blue flex items-center justify-between group transition-colors">
                                    <span className="font-bold text-slate-700 group-hover:text-white transition-colors">{l.label}</span>
                                    <span className="text-xs text-lks-blue group-hover:text-white font-bold transition-colors">Kunjungi Tautan →</span>
                                </a>
                            ))}
                        </div>
                    </div>
                )}

                {/* VIEW RAHASIA: ADMIN */}
                {view === 'admin' && (
                    <div className="bg-white border border-lks-pink p-6 max-w-xl mx-auto">
                        <div className="flex justify-between items-center border-b pb-2 mb-4">
                            <h2 className="font-black text-lks-pink text-sm uppercase">Admin Panel LKSN</h2>
                            <button onClick={() => setView('dashboard')} className="text-xs font-bold bg-slate-100 px-2 py-1 hover:bg-slate-200 transition">Tutup</button>
                        </div>
                        <div className="text-xs text-slate-500">
                            Fungsi Waktu sekarang berjalan otomatis mengikuti waktu WIB berdasarkan jadwal data.json.
                        </div>
                    </div>
                )}
            </main>

            {/* --- BARIS 5: FOOTER (1/6 TINGGI) PATTERN DENGAN TOMBOL PUTIH BERJARAK (GAP-6) & HOVER/ACTIVE HIGHLIGHT --- */}
            <footer className="h-[16.6vh] relative w-full border-t-4 border-lks-blue shrink-0">
                <BackgroundPattern className="absolute inset-0 w-full h-full object-cover rotate-180" />
                <div className="absolute inset-0 flex items-center justify-center gap-6 px-16 z-10 w-full h-full py-4">
                    
                    <button onClick={() => setView('modules')} className={`bg-white text-lks-blue font-semibold h-full w-1/4 flex items-center justify-center text-[24pt] transition-all cursor-pointer border-2 hover:-translate-y-1 hover:shadow-lg ${view === 'modules' ? 'border-sky-400 bg-sky-50 transform scale-[0.98]' : 'border-transparent'}`}>
                        Akses Modul
                    </button>

                    <button onClick={() => setView('peserta')} className={`bg-white text-lks-blue font-semibold h-full w-1/4 flex items-center justify-center text-[24pt] transition-all cursor-pointer border-2 hover:-translate-y-1 hover:shadow-lg ${view === 'peserta' ? 'border-sky-400 bg-sky-50 transform scale-[0.98]' : 'border-transparent'}`}>
                        Folder Pengumpulan
                    </button>

                    <button onClick={() => setView('schedule')} className={`bg-white text-lks-blue font-semibold h-full w-1/4 flex items-center justify-center text-[24pt] transition-all cursor-pointer border-2 hover:-translate-y-1 hover:shadow-lg ${view === 'schedule' ? 'border-sky-400 bg-sky-50 transform scale-[0.98]' : 'border-transparent'}`}>
                        Jadwal Kompetisi
                    </button>

                    <button onClick={() => setView('links')} className={`bg-white text-lks-blue font-semibold h-full w-1/4 flex items-center justify-center text-[24pt] transition-all cursor-pointer border-2 hover:-translate-y-1 hover:shadow-lg ${view === 'links' ? 'border-sky-400 bg-sky-50 transform scale-[0.98]' : 'border-transparent'}`}>
                        Link Link Penting
                    </button>

                </div>
            </footer>

        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
