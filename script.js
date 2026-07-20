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

// --- LOGO GDTSKILLS (WARNA BIRU LKSN #2982c5) ---
const LogoGdtSkills = ({ className }) => (
    <svg className={className} preserveAspectRatio="xMidYMid meet" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 270.61 71.33" width="100%" height="100%">
        <defs>
            <style>{`.cls-blue{fill:#2982c5;}`}</style>
        </defs>
        <path className="cls-blue" d="M177.67,45.95l1.15-2.61c.43-.97,1.56-1.44,2.53-1.02,2.19.95,4.86,1.51,7.32,1.51,3.06,0,4.06-.67,4.06-1.77,0-3.48-15.28.48-15.28-9.88,0-4.87,4.49-8.59,12.6-8.59,2.83,0,5.89.47,8.33,1.35,1.06.38,1.56,1.6,1.1,2.63l-1.14,2.59c-.42.96-1.53,1.37-2.51.97-1.99-.8-3.95-1.09-5.73-1.09-3.06,0-4.15.86-4.15,1.82,0,3.58,15.23-.29,15.23,9.98,0,4.77-4.39,8.5-12.79,8.5-3.51,0-7.11-.7-9.71-1.79-1-.42-1.44-1.59-1.01-2.58ZM215.43,40.82l-2.67,2.72v4.4c0,1.08-.88,1.95-1.95,1.95h-5.16c-1.08,0-1.95-.88-1.95-1.95v-31.41c0-1.14.92-2.06,2.06-2.06h5.05c1.08,0,1.95.88,1.95,1.95v16.62l8.69-8.47c.37-.36.85-.55,1.36-.55h5.33c1.73,0,2.61,2.08,1.4,3.32l-7.53,7.76,9.16,11.64c1.01,1.28.1,3.16-1.54,3.16h-6.01c-.59,0-1.16-.27-1.53-.73l-6.67-8.34ZM233,16.33c0-2.72,2.2-4.82,5.54-4.82s5.54,1.96,5.54,4.68c0,2.86-2.2,4.97-5.54,4.97s-5.54-2.1-5.54-4.82ZM235.95,24.02h5.16c1.08,0,1.95.88,1.95,1.95v21.97c0,1.08-.88,1.95-1.95,1.95h-5.16c-1.08,0-1.95-.88-1.95-1.95v-21.97c0-1.08.88-1.95,1.95-1.95ZM249.49,14.47h5.16c1.08,0,1.95.88,1.95,1.95v31.51c0,1.08-.88,1.95-1.95,1.95h-5.16c-1.08,0-1.95-.88-1.95-1.95v-31.51c0-1.08.88-1.95,1.95-1.95ZM263.49,14.47h5.16c1.08,0,1.95.88,1.95,1.95v31.51c0,1.08-.88,1.95-1.95,1.95h-5.16c-1.08,0-1.95-.88-1.95-1.95v-31.51c0-1.08.88-1.95,1.95-1.95Z"/>
        <path className="cls-blue" d="M167.66,49.88c-5.88,0-8.73-2.7-8.73-8.25v-6.9c0-.99-.81-1.77-1.8-1.78-.57,0-1.03-.47-1.03-1.04v-3.55c0-.63.42-1.16,1.02-1.35,1.8-.58,1.81-2.68,1.81-2.68v-3.01c0-.78.63-1.41,1.41-1.41h6.47c.78,0,1.41.63,1.41,1.41v4.65h4.16c.78,0,1.41.63,1.41,1.41v4.17c0,.78-.63,1.41-1.41,1.41h-4.16v6.47c0,1.92.92,2.85,2.8,2.85.44,0,.92-.06,1.41-.17.08-.02.16-.03.23-.03.57,0,1.04.47,1.04,1.04v4.86c0,.43-.27.82-.68.98-1.51.59-3.47.93-5.36.93h0ZM137.14,49.93c3.44,0,5.22-1.62,6.89-3.42l.64-.69v2.13c0,.78.63,1.41,1.41,1.41h6.47c.78,0,1.41-.63,1.41-1.41v-28.7c0-.78-.63-1.41-1.41-1.41h-6.47c-.78,0-1.41.63-1.41,1.41v10.06l-.65-.72c-1.41-1.58-3.35-3.19-6.97-3.19-5.75,0-9.93,5.2-9.93,12.36v.09c0,7.01,4.21,12.09,10.02,12.09h0ZM144.89,37.62v.09c0,2.64-1.93,4.7-4.39,4.7s-4.39-2.07-4.39-4.7v-.09c0-2.64,1.93-4.7,4.39-4.7s4.39,2.07,4.39,4.7ZM111.29,59.82c4.83,0,8.3-1.12,10.61-3.43,2.09-2.09,3.03-5.01,3.03-9.46v-19.56c0-.78-.63-1.41-1.41-1.41h-6.47c-.78,0-1.41.63-1.41,1.41v1.93l-.65-.72c-1.41-1.58-3.35-3.19-6.97-3.19-5.75,0-9.93,5.2-9.93,12.36v.09c0,7.01,4.21,12.09,10.02,12.09,2.89,0,4.55-1.17,5.68-2.19.22-.2.51-.31.8-.31.33,0,.64.13.87.37.22.23.33.54.32.86-.02.37-.06.73-.13,1.08-.58,2.63-2.7,4.07-5.94,4.07-2.55,0-4.88-.51-7.34-1.59-.18-.08-.38-.13-.58-.13-.53,0-1,.29-1.24.75l-1.46,2.86c-.18.35-.2.76-.07,1.13s.4.65.76.8c3.53,1.49,7.19,2.18,11.53,2.18h0ZM115.86,37.62v.09c0,2.64-1.93,4.7-4.39,4.7s-4.39-2.07-4.39-4.7v-.09c0-2.64,1.93-4.7,4.39-4.7s4.39,2.07,4.39,4.7ZM39.39,67.61v-10.65c0-2.06-1.67-3.72-3.72-3.72s-3.72,1.67-3.72,3.72v10.65c0,2.06,1.67,3.72,3.72,3.72s3.72-1.67,3.72-3.72ZM60.88,60.88c1.45-1.45,1.45-3.81,0-5.26l-7.53-7.53c-1.45-1.45-3.81-1.45-5.26,0s-1.45,3.81,0,5.26l7.53,7.53c.73.73,1.68,1.09,2.63,1.09s1.9-.36,2.63-1.09ZM67.61,39.39c2.06,0,3.72-1.67,3.72-3.72s-1.67-3.72-3.72-3.72h-10.65c-2.06,0-3.72,1.67-3.72,3.72s1.67,3.72,3.72,3.72h10.65ZM50.72,24.33c.95,0,1.9-.36,2.63-1.09l7.53-7.53c1.45-1.45,1.45-3.81,0-5.26-1.45-1.45-3.81-1.45-5.26,0l-7.53,7.53c-1.45,1.45-1.45,3.81,0,5.26.73.73,1.68,1.09,2.63,1.09h0ZM39.39,14.37V3.72c0-2.06-1.67-3.72-3.72-3.72s-3.72,1.67-3.72,3.72v10.65c0,2.06,1.67,3.72,3.72,3.72s3.72-1.67,3.72-3.72ZM20.61,24.33c.95,0,1.9-.36,2.63-1.09,1.45-1.45,3.81-1.45,5.26,0,1.45,1.45,1.45,3.81,0,5.26l7.53,7.53c.73.73,1.68,1.09,2.63,1.09h0ZM14.37,39.39c2.06,0,3.72-1.67,3.72-3.72s-1.67-3.72-3.72-3.72H3.72c-2.06,0-3.72,1.67-3.72,3.72s1.67,3.72,3.72,3.72h10.65ZM15.71,60.88l22.59-22.59c1.45-1.45,1.45-3.81,0-5.26-1.45-1.45-3.81-1.45-5.26,0l-22.59,22.59c-1.45,1.45-1.45,3.81,0,5.26.73.73,1.68,1.09,2.63,1.09s1.9-.36,2.63-1.09Z"/>
    </svg>
);

// --- HELPER PARSING WAKTU ABSOLUT ---
const getWibEpoch = (dateString) => {
    if (!dateString) return Date.now();
    const safeString = dateString.includes('+') || dateString.includes('Z') ? dateString : `${dateString}+07:00`;
    return new Date(safeString).getTime();
};

function App() {
    const [view, setView] = useState('dashboard');
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('no-asc');
    
    // Engine State Waktu Absolut (Epoch ms)
    const [currentEpoch, setCurrentEpoch] = useState(Date.now());
    const [serverOffset, setServerOffset] = useState(0);

    const [isFullscreen, setIsFullscreen] = useState(false);
    const timerRef = useRef(null);

    const [db, setDb] = useState({ config: {}, modules: [], schedule: [], importantLinks: [] });
    const [pesertaList] = useState(window.DATA_PESERTA || []);

    // 1. Fetch JSON Konfigurasi
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setDb(data))
            .catch(err => console.error(err));
    }, []);

    // 2. Ambil Waktu Asli dari Server Satelit Internet
    useEffect(() => {
        fetch('https://worldtimeapi.org/api/timezone/Asia/Jakarta')
            .then(res => res.json())
            .then(data => {
                const trueServerEpoch = data.unixtime * 1000;
                const localMachineEpoch = Date.now();
                setServerOffset(trueServerEpoch - localMachineEpoch);
            })
            .catch(err => {
                console.warn("API Waktu terblokir, mengandalkan jam lokal sebagai cadangan.", err);
            });
    }, []);

    // 3. Engine Timer Absolut
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentEpoch(Date.now() + serverOffset);
        }, 1000);
        return () => clearInterval(interval);
    }, [serverOffset]);

    // Listener Full Screen API
    useEffect(() => {
        const handleFullscreen = () => setIsFullscreen(!!document.fullscreenElement);
        document.addEventListener('fullscreenchange', handleFullscreen);
        return () => document.removeEventListener('fullscreenchange', handleFullscreen);
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

    // Logika Sinkronisasi Agenda
    const { activeAgenda, nextAgenda } = useMemo(() => {
        let active = null, next = null;
        for (let i = 0; i < db.schedule.length; i++) {
            const startEpoch = getWibEpoch(db.schedule[i].start);
            const endEpoch = getWibEpoch(db.schedule[i].end);
            
            if (currentEpoch >= startEpoch && currentEpoch <= endEpoch) {
                active = db.schedule[i];
            } else if (currentEpoch < startEpoch && !next) {
                next = db.schedule[i];
            }
        }
        return { activeAgenda: active, nextAgenda: next };
    }, [currentEpoch, db.schedule]);

    // Kalkulasi Sisa Waktu
    const targetEpoch = activeAgenda ? getWibEpoch(activeAgenda.end) : (nextAgenda ? getWibEpoch(nextAgenda.start) : null);
    const sisaDetik = targetEpoch ? Math.max(0, Math.floor((targetEpoch - currentEpoch) / 1000)) : 0;

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

    // Formatter Tampilan Jam Khusus Asia/Jakarta (WIB)
    const timeFormatter = new Intl.DateTimeFormat('id-ID', { timeZone: 'Asia/Jakarta', hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const dateFormatter = new Intl.DateTimeFormat('id-ID', { timeZone: 'Asia/Jakarta', day: 'numeric', month: 'long', year: 'numeric' });
    const dateObj = new Date(currentEpoch);

    return (
        <div className="flex flex-col h-screen w-screen overflow-hidden bg-white font-karla">
            
            {/* --- HEADER (1/6) MARGIN DIPERBESAR --- */}
            <header className="h-[16.6vh] w-full shrink-0 flex items-center justify-between px-12 lg:px-24 bg-white relative z-20">
                <button onClick={() => setView('dashboard')} className="max-h-[85%] w-72 flex items-center justify-center transition hover:opacity-95 focus:outline-none cursor-pointer bg-white px-2 py-1 z-20">
                    <LogoGdtSkills className="w-full h-auto object-contain" />
                </button>
                <div className="flex items-center gap-6 z-20 bg-white px-4 py-2">
                    <button onClick={() => setView('dashboard')} className="text-center transition hover:opacity-95 focus:outline-none cursor-pointer hidden md:block">
                        <h1 className="text-xl md:text-3xl font-extrabold tracking-tight text-lks-pink">
                            {db.config.headline || "Portal LKSN N 2026 Daring"}
                        </h1>
                    </button>
                </div>
            </header>

            {/* --- MAIN AREA (4/6) MARGIN DIPERBESAR --- */}
            <main className="h-[66.8vh] w-full px-12 lg:px-24 py-6 bg-slate-50/40 shrink-0 overflow-y-auto">
                
                {view === 'dashboard' && (
                    <div className="w-full h-full flex flex-col md:flex-row gap-8">
                        {/* COUNTDOWN BOX WITH FULLSCREEN TRIGGER */}
                        <div ref={timerRef} className={`bg-white rounded-none flex flex-col items-center justify-center relative shadow-sm ${isFullscreen ? 'w-screen h-screen fixed inset-0 z-50 p-12' : 'w-full md:w-3/4'}`}>
                            
                            <button onClick={toggleFullscreen} className="absolute top-4 right-4 text-slate-300 hover:text-lks-blue transition cursor-pointer bg-transparent border-0 outline-none">
                                {isFullscreen ? <IconMinimize /> : <IconMaximize />}
                            </button>

                            {/* JUDUL AGENDA SAAT INI (WARNA BIRU) */}
                            <h2 className={`font-extrabold text-lks-blue tracking-wide select-none ${isFullscreen ? 'text-3xl lg:text-5xl mb-6' : 'text-xl md:text-2xl mb-0'}`}>
                                {activeAgenda ? activeAgenda.title : "Menunggu Sesi Dimulai"}
                            </h2>
                            {/* TIMER COUNTDOWN WARNA BIRU LKSN */}
                            <div className={`font-bold text-lks-blue leading-none tracking-tight select-none flex items-center justify-center ${isFullscreen ? 'text-[22vw]' : 'text-[15vw] lg:text-[130pt]'}`}>
                                {hours}:{minutes}:{seconds}
                            </div>
                            <p className={`font-bold text-lks-pink tracking-widest select-none ${isFullscreen ? 'text-2xl mt-6' : 'text-xs md:text-sm mt-2'}`}>
                                Jam : Menit : Detik
                            </p>
                        </div>

                        {/* WIDGET KANAN (WAKTU SISTEM = HIJAU TEKS PUTIH, AGENDA SELANJUTNYA = BIRU TEKS PUTIH) */}
                        {!isFullscreen && (
                            <div className="w-full md:w-1/4 flex flex-col justify-between gap-4">
                                {/* KOTAK WAKTU SISTEM (HIJAU + TEKS PUTIH) */}
                                <div className="bg-lks-green text-white p-6 font-bold flex flex-col justify-center h-1/2 rounded-none shadow-sm">
                                    <span className="text-xs font-bold block mb-2 text-emerald-100 uppercase tracking-wider">Waktu Sistem (WIB):</span>
                                    <div className="text-3xl lg:text-4xl font-black font-mono leading-none tracking-tight text-white">
                                        {timeFormatter.format(dateObj).replace(/\./g, ':')}
                                    </div>
                                    <div className="text-xs mt-2 text-emerald-100">
                                        {dateFormatter.format(dateObj)}
                                    </div>
                                </div>
                                {/* KOTAK AGENDA SELANJUTNYA (BIRU + TEKS PUTIH) */}
                                <div className="bg-lks-blue text-white p-6 font-bold flex flex-col justify-center h-1/2 rounded-none shadow-sm">
                                    <span className="text-xs font-bold block mb-2 text-sky-100 uppercase tracking-wider">Agenda Selanjutnya:</span>
                                    <p className="text-lg lg:text-xl leading-snug font-extrabold text-white">
                                        {nextAgenda ? nextAgenda.title : "Seluruh Rangkaian Agenda Selesai"}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* VIEW 1: AKSES MODUL */}
                {view === 'modules' && (
                    <div className="bg-white p-6 max-h-full overflow-y-auto shadow-sm">
                        <div className="border-b border-slate-200 pb-3 mb-4"><h3 className="text-xl font-extrabold text-lks-blue">Modul Soal LKSN</h3></div>
                        <div className="space-y-4">
                            {db.modules.map((m) => {
                                const isReleased = currentEpoch >= getWibEpoch(m.releaseTime);
                                return (
                                    <div key={m.id} className="p-5 bg-slate-50 flex items-center justify-between">
                                        <div>
                                            <h4 className="font-bold text-slate-800 text-lg">{m.title}</h4>
                                            <p className="text-sm text-slate-500 mt-1">PIC: {m.pic} • Rilis: {timeFormatter.format(new Date(getWibEpoch(m.releaseTime))).replace(/\./g, ':')} WIB</p>
                                        </div>
                                        {isReleased ? (
                                            <a href={m.link} target="_blank" rel="noreferrer" className="bg-[#2982c5] text-white px-8 py-4 text-lg font-bold transition hover:bg-sky-600 shadow-md">Buka Modul</a>
                                        ) : (
                                            <button disabled className="bg-slate-300 text-slate-500 px-8 py-4 text-lg font-bold cursor-not-allowed">Terkunci</button>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* VIEW 2: FOLDER PENGUMPULAN & EDUKASI AKSES */}
                {view === 'peserta' && (
                    <div className="bg-white p-6 max-h-full flex flex-col h-full shadow-sm">
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

                        <div className="bg-sky-50 border-l-4 border-lks-blue p-4 mb-5 flex items-start gap-3 shrink-0">
                            <span className="text-lks-blue text-lg">ℹ️</span>
                            <div>
                                <h4 className="text-sm font-bold text-slate-800">Tidak bisa akses folder?</h4>
                                <p className="text-sm text-slate-600 mt-0.5">Sistem membatasi akses melalui <i>email whitelist</i>. Pastikan Anda <b>login dengan email Gmail baru</b> yang didaftarkan pada saat pendataan peserta.</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 overflow-y-auto flex-1">
                            {processedPeserta.map((p, idx) => (
                                <div key={idx} className="p-4 bg-slate-50 flex flex-col xl:flex-row xl:items-center justify-between text-base hover:bg-slate-100 transition gap-4">
                                    <div className="flex items-center">
                                        <span className="font-mono bg-sky-100 text-lks-blue px-3 py-1 font-bold mr-3">{p.no}</span>
                                        <span className="font-bold text-slate-800">{p.nama}</span>
                                    </div>
                                    <a href={p.link} target="_blank" rel="noreferrer" className="bg-[#2982c5] hover:bg-sky-600 transition text-white px-8 py-4 font-bold text-center shadow-md text-base whitespace-nowrap">Buka Folder</a>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* VIEW 3: JADWAL KOMPETISI */}
                {view === 'schedule' && (
                    <div className="bg-white p-6 max-h-full overflow-y-auto w-full shadow-sm">
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
                                                const startEpoch = getWibEpoch(s.start);
                                                const endEpoch = getWibEpoch(s.end);
                                                const isNow = currentEpoch >= startEpoch && currentEpoch <= endEpoch;
                                                const isPast = currentEpoch > endEpoch;
                                                
                                                return (
                                                    <tr key={s.id} className={`transition-colors border-b border-slate-200 ${isNow ? 'bg-sky-100 font-bold' : 'hover:bg-slate-50 bg-white'}`}>
                                                        <td className="py-4 px-6 font-mono text-sm whitespace-nowrap">
                                                            {timeFormatter.format(new Date(startEpoch)).replace(/\./g, ':')} - {timeFormatter.format(new Date(endEpoch)).replace(/\./g, ':')}
                                                        </td>
                                                        <td className={`py-4 px-6 ${isNow ? 'text-lks-blue' : 'text-slate-800'}`}>
                                                            {s.title}
                                                        </td>
                                                        <td className="py-4 px-6 text-sm text-slate-600 whitespace-nowrap">{s.duration}</td>
                                                        <td className="py-4 px-6 text-sm text-slate-600 whitespace-nowrap">{s.pic}</td>
                                                        <td className="py-4 px-6 text-center whitespace-nowrap">
                                                            {isNow ? (
                                                                <span className="bg-[#2982c5] text-white px-4 py-1.5 text-xs font-bold rounded-full animate-pulse shadow-sm">Berlangsung</span>
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
                    <div className="bg-white p-6 max-h-full overflow-y-auto shadow-sm">
                        <div className="border-b border-slate-200 pb-3 mb-4"><h3 className="text-xl font-extrabold text-lks-blue">Link-Link Penting Kompetisi</h3></div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {db.importantLinks?.map((l, idx) => (
                                <a key={idx} href={l.url} target="_blank" rel="noreferrer" className="p-5 bg-slate-50 hover:bg-[#2982c5] hover:text-white border-l-4 border-lks-blue flex items-center justify-between group transition-colors">
                                    <span className="font-bold text-lg text-slate-700 group-hover:text-white transition-colors">{l.label}</span>
                                    <span className="text-sm text-lks-blue group-hover:text-white font-bold transition-colors">Kunjungi →</span>
                                </a>
                            ))}
                        </div>
                    </div>
                )}

                {/* VIEW RAHASIA: ADMIN */}
                {view === 'admin' && (
                    <div className="bg-white border border-lks-pink p-6 max-w-xl mx-auto shadow-sm">
                        <div className="flex justify-between items-center border-b border-slate-200 pb-2 mb-4">
                            <h2 className="font-black text-lks-pink text-sm uppercase">Admin Panel LKSN</h2>
                            <button onClick={() => setView('dashboard')} className="text-xs font-bold bg-slate-100 px-3 py-2 transition hover:bg-slate-200">Tutup</button>
                        </div>
                        <div className="text-sm text-slate-500 leading-relaxed">
                            Fungsi Waktu berjalan mandiri dan kebal dari manipulasi dengan menyinkronisasikan jam laptop secara paksa ke dalam standar <b>Waktu Indonesia Barat (WIB)</b> melalui penarikan data satelit secara <i>Real-time</i>.
                        </div>
                    </div>
                )}
            </main>

            {/* --- FOOTER (1/6) TOMBOL PUTIH DENGAN TEKS ADAPTIVE RESPONSIVE --- */}
            <footer className="h-[16.6vh] relative w-full shrink-0 bg-white border-0 z-20">
                <BackgroundPattern className="absolute inset-0 w-full h-full object-cover rotate-180 -z-10" />
                <div className="absolute inset-0 flex items-center justify-center gap-4 lg:gap-6 px-12 lg:px-24 z-10 w-full h-full py-4">
                    
                    <button onClick={() => setView('modules')} className={`bg-white border-0 text-[#2982c5] font-semibold h-[76.5%] w-[22.5%] flex items-center justify-center text-[2.1vw] leading-tight px-2 text-center transition-all cursor-pointer hover:shadow-lg ${view === 'modules' ? 'bg-sky-50 shadow-inner scale-[0.98]' : 'hover:bg-slate-50 hover:-translate-y-1'}`}>
                        Akses Modul
                    </button>

                    <button onClick={() => setView('peserta')} className={`bg-white border-0 text-[#2982c5] font-semibold h-[76.5%] w-[22.5%] flex items-center justify-center text-[2.1vw] leading-tight px-2 text-center transition-all cursor-pointer hover:shadow-lg ${view === 'peserta' ? 'bg-sky-50 shadow-inner scale-[0.98]' : 'hover:bg-slate-50 hover:-translate-y-1'}`}>
                        Folder Pengumpulan
                    </button>

                    <button onClick={() => setView('schedule')} className={`bg-white border-0 text-[#2982c5] font-semibold h-[76.5%] w-[22.5%] flex items-center justify-center text-[2.1vw] leading-tight px-2 text-center transition-all cursor-pointer hover:shadow-lg ${view === 'schedule' ? 'bg-sky-50 shadow-inner scale-[0.98]' : 'hover:bg-slate-50 hover:-translate-y-1'}`}>
                        Jadwal Kompetisi
                    </button>

                    <button onClick={() => setView('links')} className={`bg-white border-0 text-[#2982c5] font-semibold h-[76.5%] w-[22.5%] flex items-center justify-center text-[2.1vw] leading-tight px-2 text-center transition-all cursor-pointer hover:shadow-lg ${view === 'links' ? 'bg-sky-50 shadow-inner scale-[0.98]' : 'hover:bg-slate-50 hover:-translate-y-1'}`}>
                        Link Link Penting
                    </button>

                </div>
            </footer>

        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
