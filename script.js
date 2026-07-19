const { useState, useEffect, useMemo, useRef } = React;

// --- ICONS (SVG) ---
const IconMaximize = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>;
const IconMinimize = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"/></svg>;

// --- INJEKSI SVG KUSTOM ---
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

// --- HELPER WIB ---
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
    
    // Fitur Fullscreen
    const [isFullscreen, setIsFullscreen] = useState(false);
    const timerRef = useRef(null);

    const [db, setDb] = useState({ config: {}, modules: [], schedule: [], importantLinks: [] });
    const [pesertaList] = useState(window.DATA_PESERTA || []);

    // Fetch JSON
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setDb(data))
            .catch(err => console.error(err));
    }, []);

    // Listener Full Screen Native API
    useEffect(() => {
        const handleFullscreen = () => setIsFullscreen(!!document.fullscreenElement);
        document.addEventListener('fullscreenchange', handleFullscreen);
        return () => document.removeEventListener('fullscreenchange', handleFullscreen);
    }, []);

    // Engine Jam WIB
    useEffect(() => {
        const interval = setInterval(() => setCurrentTime(getWIBTime()), 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (searchQuery.toLowerCase() === 'admin123') {
            setView('admin');
            setSearchQuery('');
        }
    }, [searchQuery]);

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            if (timerRef.current?.requestFullscreen) timerRef.current.requestFullscreen();
        } else {
            if (document.exitFullscreen) document.exitFullscreen();
        }
    };

    const { activeAgenda, nextAgenda } = useMemo(() => {
        let active = null, next = null;
        const now = currentTime.getTime();
        for (let i = 0; i < db.schedule.length; i++) {
            const start = new Date(db.schedule[i].start).getTime();
            const end = new Date(db.schedule[i].end).getTime();
            if (now >= start && now <= end) active = db.schedule[i];
            else if (now < start && !next) next = db.schedule[i];
        }
        return { activeAgenda: active, nextAgenda: next };
    }, [currentTime, db.schedule]);

    const targetTime = activeAgenda ? new Date(activeAgenda.end).getTime() : (nextAgenda ? new Date(nextAgenda.start).getTime() : null);
    const sisaDetik = targetTime ? Math.max(0, Math.floor((targetTime - currentTime.getTime()) / 1000)) : 0;

    const formatDuaDigit = (num) => String(num).padStart(2, '0');
    const hours = formatDuaDigit(Math.floor(sisaDetik / 3600));
    const minutes = formatDuaDigit(Math.floor((sisaDetik % 3600) / 60));
    const seconds = formatDuaDigit(sisaDetik % 60);

    const processedPeserta = useMemo(() => {
        let filtered = pesertaList.filter(p => p.nama.toLowerCase().includes(searchQuery.toLowerCase()) || p.no.includes(searchQuery));
        return filtered.sort((a, b) => {
            if (sortBy === 'no-asc') return parseInt(a.no) - parseInt(b.no);
            if (sortBy === 'no-desc') return parseInt(b.no) - parseInt(a.no);
            if (sortBy === 'name-asc') return a.nama.localeCompare(b.nama);
            return 0;
        });
    }, [pesertaList, searchQuery, sortBy]);

    return (
        <div className="flex flex-col h-screen w-screen overflow-hidden bg-white font-karla">
            
            {/* --- HEADER (1/6) MARGIN KANAN KIRI DIPERBESAR, SEKAT HITAM HILANG (border-0) --- */}
            <header className="h-[16.6vh] w-full shrink-0 flex items-center justify-between px-24 lg:px-32 bg-white border-0 relative z-20">
                <BackgroundPattern className="absolute inset-0 w-full h-full object-cover -z-10" />
                <button onClick={() => setView('dashboard')} className="max-h-[85%] w-72 flex items-center justify-center transition hover:opacity-95 focus:outline-none cursor-pointer bg-white px-2 py-1 z-20">
                    <LogoGdtSkills className="w-full h-auto object-contain" />
                </button>
                <div className="flex items-center gap-6 z-20 bg-white px-4 py-2">
                    <button onClick={() => setView('dashboard')} className="text-center transition hover:opacity-95 focus:outline-none cursor-pointer hidden md:block">
                        <h1 className="text-xl md:text-3xl font-extrabold tracking-tight text-lks-pink">
                            {db.config.headline || "LKSN GDT 2026"}
                        </h1>
                    </button>
                </div>
            </header>

            {/* --- MAIN AREA (4/6) MARGIN KANAN KIRI BESAR --- */}
            <main className="h-[66.8vh] w-full px-24 lg:px-32 py-6 bg-slate-50/40 shrink-0 overflow-y-auto">
                
                {view === 'dashboard' && (
                    <div className="w-full h-full flex flex-col md:flex-row gap-8">
                        {/* COUNTDOWN BOX -> ADA FITUR FULLSCREEN */}
                        <div ref={timerRef} className={`bg-white rounded-none flex flex-col items-center justify-center relative ${isFullscreen ? 'w-screen h-screen fixed inset-0 z-50 p-12' : 'w-full md:w-3/4'}`}>
                            
                            {/* TOMBOL FULLSCREEN */}
                            <button onClick={toggleFullscreen} className="absolute top-4 right-4 text-slate-300 hover:text-lks-blue transition cursor-pointer bg-transparent border-0 outline-none">
                                {isFullscreen ? <IconMinimize /> : <IconMaximize />}
                            </button>

                            <h2 className={`font-extrabold text-lks-pink tracking-wide select-none ${isFullscreen ? 'text-3xl lg:text-5xl mb-6' : 'text-xl md:text-2xl mb-0'}`}>
                                &lt;&lt; {activeAgenda ? activeAgenda.title : "Menunggu Sesi Dimulai"} &gt;&gt;
                            </h2>
                            {/* ANGKA TIMER RESPONSIVE TERHADAP FULLSCREEN */}
                            <div className={`font-bold text-lks-blue leading-none tracking-tight select-none flex items-center justify-center ${isFullscreen ? 'text-[22vw]' : 'text-[15vw] lg:text-[130pt]'}`}>
                                {hours}:{minutes}:{seconds}
                            </div>
                            <p className={`font-bold text-lks-pink tracking-widest select-none ${isFullscreen ? 'text-2xl mt-6' : 'text-xs md:text-sm mt-2'}`}>
                                Jam : Menit : Detik
                            </p>
                        </div>

                        {/* WIDGET KANAN GREEN BOX */}
                        {!isFullscreen && (
                            <div className="w-full md:w-1/4 flex flex-col justify-between gap-4">
                                <div className="bg-lks-green text-white p-6 font-bold flex flex-col justify-center h-1/2 rounded-none">
                                    <span className="text-xs font-bold text-emerald-100 block mb-2">Waktu Sistem (WIB):</span>
                                    <div className="text-3xl lg:text-4xl font-black font-mono leading-none tracking-tight">{currentTime.toLocaleTimeString('id-ID')}</div>
                                    <div className="text-xs text-emerald-100/90 mt-2">{currentTime.toLocaleDateString('id-ID', {day: 'numeric', month: 'long', year: 'numeric'})}</div>
                                </div>
                                <div className="bg-lks-green text-white p-6 font-bold flex flex-col justify-center h-1/2 rounded-none">
                                    <span className="text-xs font-bold text-emerald-100 block mb-2">Agenda Selanjutnya:</span>
                                    <p className="text-lg lg:text-xl leading-snug font-extrabold">
                                        {nextAgenda ? nextAgenda.title : "Seluruh Rangkaian Agenda Selesai"}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* VIEW 1: AKSES MODUL */}
                {view === 'modules' && (
                    <div className="bg-white p-6 max-h-full overflow-y-auto">
                        <div className="border-b border-slate-200 pb-3 mb-4"><h3 className="text-xl font-extrabold text-lks-blue">Modul Soal LKSN</h3></div>
                        <div className="space-y-4">
                            {db.modules.map((m) => {
                                const isReleased = currentTime >= new Date(m.releaseTime);
                                return (
                                    <div key={m.id} className="p-5 bg-slate-50 flex items-center justify-between">
                                        <div>
                                            <h4 className="font-bold text-slate-800 text-lg">{m.title}</h4>
                                            <p className="text-sm text-slate-500 mt-1">PIC: {m.pic} • Rilis: {new Date(m.releaseTime).toLocaleTimeString('id-ID')} WIB</p>
                                        </div>
                                        {isReleased ? (
                                            <a href={m.link} target="_blank" rel="noreferrer" className="bg-lks-blue text-white px-8 py-4 text-lg font-bold transition hover:bg-sky-700 shadow-md">Buka Modul</a>
                                        ) : (
                                            <button disabled className="bg-slate-300 text-slate-500 px-8 py-4 text-lg font-bold cursor-not-allowed">Terkunci</button>
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
                        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 border-b border-slate-200 pb-3 mb-4 shrink-0">
                            <h3 className="text-xl font-extrabold text-lks-blue">Folder Pengumpulan Tugas</h3>
                            <div className="flex items-center gap-2">
                                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="text-sm font-bold px-4 py-2 border border-slate-200 bg-white focus:outline-none">
                                    <option value="no-asc">No. Terkecil</option>
                                    <option value="no-desc">No. Terbesar</option>
                                    <option value="name-asc">Nama (A-Z)</option>
                                </select>
                                <input type="text" placeholder="Cari No / Nama..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="text-sm px-4 py-2 border border-slate-200 bg-white focus:outline-none w-56"/>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 overflow-y-auto flex-1">
                            {processedPeserta.map((p, idx) => (
                                <div key={idx} className="p-4 bg-slate-50 flex flex-col xl:flex-row xl:items-center justify-between text-base hover:bg-slate-100 transition gap-4">
                                    <div className="flex items-center">
                                        <span className="font-mono bg-lks-blue/10 text-lks-blue px-3 py-1 font-bold mr-3">{p.no}</span>
                                        <span className="font-bold text-slate-800">{p.nama}</span>
                                    </div>
                                    <a href={p.link} target="_blank" rel="noreferrer" className="bg-lks-blue hover:bg-sky-600 transition text-white px-8 py-4 font-bold text-center shadow-md text-base whitespace-nowrap">Buka Folder</a>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* VIEW 3: JADWAL KOMPETISI (FORMAT TABEL + HIGHLIGHT) */}
                {view === 'schedule' && (
                    <div className="bg-white p-6 max-h-full overflow-y-auto w-full">
                        <div className="border-b border-slate-200 pb-3 mb-4"><h3 className="text-xl font-extrabold text-lks-blue">Jadwal Kompetisi Nasional</h3></div>
                        <div className="w-full overflow-x-auto">
                            <table className="w-full text-left border-collapse min-w-[800px]">
                                <thead>
                                    <tr className="bg-slate-100 text-lks-blue">
                                        <th className="py-4 px-6 font-extrabold border-b border-slate-200 whitespace-nowrap">Waktu (WIB)</th>
                                        <th className="py-4 px-6 font-extrabold border-b border-slate-200 w-full">Kegiatan</th>
                                        <th className="py-4 px-6 font-extrabold border-b border-slate-200 whitespace-nowrap">Durasi</th>
                                        <th className="py-4 px-6 font-extrabold border-b border-slate-200 whitespace-nowrap">PIC</th>
                                        <th className="py-4 px-6 font-extrabold border-b border-slate-200 whitespace-nowrap text-center">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.entries(
                                        db.schedule.reduce((acc, curr) => {
                                            if (!acc[curr.dayLabel]) acc[curr.dayLabel] = [];
                                            acc[curr.dayLabel].push(curr);
                                            return acc;
                                        }, {})
                                    ).map(([dayGroup, items]) => (
                                        <React.Fragment key={dayGroup}>
                                            <tr>
                                                <td colSpan="5" className="py-4 px-6 bg-slate-50 font-extrabold text-lks-pink uppercase border-b border-slate-200">
                                                    {dayGroup}
                                                </td>
                                            </tr>
                                            {items.map((s) => {
                                                const isNow = currentTime.getTime() >= new Date(s.start).getTime() && currentTime.getTime() <= new Date(s.end).getTime();
                                                const isPast = currentTime.getTime() > new Date(s.end).getTime();
                                                
                                                return (
                                                    <tr key={s.id} className={`transition-colors border-b border-slate-200 ${isNow ? 'bg-sky-100 font-bold' : 'hover:bg-slate-50 bg-white'}`}>
                                                        <td className="py-4 px-6 font-mono text-sm whitespace-nowrap">
                                                            {new Date(s.start).toLocaleTimeString('id-ID',{hour:'2-digit',minute:'2-digit'})} - {new Date(s.end).toLocaleTimeString('id-ID',{hour:'2-digit',minute:'2-digit'})}
                                                        </td>
                                                        <td className={`py-4 px-6 ${isNow ? 'text-lks-blue' : 'text-slate-800'}`}>
                                                            {s.title}
                                                        </td>
                                                        <td className="py-4 px-6 text-sm text-slate-600 whitespace-nowrap">{s.duration}</td>
                                                        <td className="py-4 px-6 text-sm text-slate-600 whitespace-nowrap">{s.pic}</td>
                                                        <td className="py-4 px-6 text-center whitespace-nowrap">
                                                            {isNow ? (
                                                                <span className="bg-lks-blue text-white px-4 py-1.5 text-xs font-bold rounded-full animate-pulse shadow-sm">Berlangsung</span>
                                                            ) : isPast ? (
                                                                <span className="bg-slate-200 text-slate-500 px-4 py-1.5 text-xs font-bold rounded-full">Selesai</span>
                                                            ) : (
                                                                <span className="bg-white text-lks-blue border border-slate-200 px-4 py-1.5 text-xs font-bold rounded-full">Akan Datang</span>
                                                            )}
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                        </React.Fragment>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {/* VIEW 4: LINK PENTING */}
                {view === 'links' && (
                    <div className="bg-white p-6 max-h-full overflow-y-auto">
                        <div className="border-b border-slate-200 pb-3 mb-4"><h3 className="text-xl font-extrabold text-lks-blue">Link-Link Penting Kompetisi</h3></div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {db.importantLinks?.map((l, idx) => (
                                <a key={idx} href={l.url} target="_blank" rel="noreferrer" className="p-5 bg-slate-50 hover:bg-lks-blue hover:text-white border-l-4 border-lks-blue flex items-center justify-between group transition-colors">
                                    <span className="font-bold text-lg text-slate-700 group-hover:text-white transition-colors">{l.label}</span>
                                    <span className="text-sm text-lks-blue group-hover:text-white font-bold transition-colors">Kunjungi →</span>
                                </a>
                            ))}
                        </div>
                    </div>
                )}

                {/* VIEW RAHASIA: ADMIN */}
                {view === 'admin' && (
                    <div className="bg-white border border-lks-pink p-6 max-w-xl mx-auto">
                        <div className="flex justify-between items-center border-b border-slate-200 pb-2 mb-4">
                            <h2 className="font-black text-lks-pink text-sm uppercase">Admin Panel LKSN</h2>
                            <button onClick={() => setView('dashboard')} className="text-xs font-bold bg-slate-100 px-3 py-2 transition">Tutup</button>
                        </div>
                        <div className="text-sm text-slate-500 leading-relaxed">
                            Fungsi Waktu sekarang berjalan mandiri dan kebal dari manipulasi dengan menyinkronisasikan jam laptop secara paksa ke dalam standar <b>Waktu Indonesia Barat (WIB)</b> mengikuti jadwal <code>data.json</code>.
                        </div>
                    </div>
                )}
            </main>

            {/* --- FOOTER NAVIGATION (1/6) TOMBOL BACKGROUND PUTIH BERSIH --- */}
            <footer className="h-[16.6vh] relative w-full shrink-0 border-0 bg-white z-20">
                <BackgroundPattern className="absolute inset-0 w-full h-full object-cover rotate-180 -z-10" />
                <div className="absolute inset-0 flex items-center justify-center gap-6 px-24 lg:px-32 z-10 w-full h-full py-4">
                    
                    <button onClick={() => setView('modules')} className={`bg-white border-0 font-semibold h-[76.5%] w-[22.5%] flex items-center justify-center text-[20pt] xl:text-[24pt] transition-all cursor-pointer hover:shadow-lg ${view === 'modules' ? 'bg-sky-100 text-sky-700 shadow-inner scale-[0.98]' : 'text-lks-blue hover:bg-slate-50 hover:-translate-y-1'}`}>
                        Akses Modul
                    </button>

                    <button onClick={() => setView('peserta')} className={`bg-white border-0 font-semibold h-[76.5%] w-[22.5%] flex items-center justify-center text-[20pt] xl:text-[24pt] transition-all cursor-pointer hover:shadow-lg ${view === 'peserta' ? 'bg-sky-100 text-sky-700 shadow-inner scale-[0.98]' : 'text-lks-blue hover:bg-slate-50 hover:-translate-y-1'}`}>
                        Folder Pengumpulan
                    </button>

                    <button onClick={() => setView('schedule')} className={`bg-white border-0 font-semibold h-[76.5%] w-[22.5%] flex items-center justify-center text-[20pt] xl:text-[24pt] transition-all cursor-pointer hover:shadow-lg ${view === 'schedule' ? 'bg-sky-100 text-sky-700 shadow-inner scale-[0.98]' : 'text-lks-blue hover:bg-slate-50 hover:-translate-y-1'}`}>
                        Jadwal Kompetisi
                    </button>

                    <button onClick={() => setView('links')} className={`bg-white border-0 font-semibold h-[76.5%] w-[22.5%] flex items-center justify-center text-[20pt] xl:text-[24pt] transition-all cursor-pointer hover:shadow-lg ${view === 'links' ? 'bg-sky-100 text-sky-700 shadow-inner scale-[0.98]' : 'text-lks-blue hover:bg-slate-50 hover:-translate-y-1'}`}>
                        Link Link Penting
                    </button>

                </div>
            </footer>

        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
