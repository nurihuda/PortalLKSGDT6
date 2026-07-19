const { useState, useEffect, useMemo } = React;

// 1. LOGO BARU
const LogoGdtSkills = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 270.61 71.33" width="100%" height="100%">
        <defs><style>{`.cls-1 { fill: #00a931; } .cls-2 { fill: #602c05; }`}</style></defs>
        <g>
            <g id="t"><path className="cls-2" d="M167.66,49.88c-5.88,0-8.73-2.7-8.73-8.25v-6.9c0-.99-.81-1.77-1.8-1.78-.57,0-1.03-.47-1.03-1.04v-3.55c0-.63.42-1.16,1.02-1.35,1.8-.58,1.81-2.68,1.81-2.68v-3.01c0-.78.63-1.41,1.41-1.41h6.47c.78,0,1.41.63,1.41,1.41v4.65h4.16c.78,0,1.41.63,1.41,1.41v4.17c0,.78-.63,1.41-1.41,1.41h-4.16v6.47c0,1.92.92,2.85,2.8,2.85.44,0,.92-.06,1.41-.17.08-.02.16-.03.23-.03.57,0,1.04.47,1.04,1.04v4.86c0,.43-.27.82-.68.98-1.51.59-3.47.93-5.36.93h0Z"/></g>
            <g id="d-2"><path className="cls-2" d="M137.14,49.93c-5.8,0-10.02-5.09-10.02-12.09v-.09c0-7.16,4.18-12.36,9.93-12.36,3.62,0,5.56,1.61,6.97,3.19l.65.72v-10.06c0-.78.63-1.41,1.41-1.41h6.47c.78,0,1.41.63,1.41,1.41v28.7c0,.78-.63,1.41-1.41,1.41h-6.47c-.78,0-1.41-.63-1.41-1.41v-2.13l-.64.69c-1.67,1.8-3.45,3.42-6.89,3.42h0ZM140.5,32.91c-2.46,0-4.39,2.07-4.39,4.7v.09c0,2.64,1.93,4.7,4.39,4.7s4.39-2.07,4.39-4.7v-.09c0-2.64-1.93-4.7-4.39-4.7Z"/></g>
            <g id="g"><path className="cls-2" d="M111.29,59.82c-4.34,0-8-.69-11.53-2.18-.36-.15-.63-.44-.76-.8s-.11-.78.07-1.13l1.46-2.86c.24-.47.71-.75,1.24-.75.2,0,.4.04.58.13,2.45,1.09,4.79,1.59,7.34,1.59,3.25,0,5.36-1.45,5.94-4.07.07-.35.11-.7gamma.13-1.08.01-.33-.1-.63-.32-.86-.23-.23-.54-.37-.87-.37-.29,0-.58.11-.8.31-1.12,1.02-2.78,2.19-5.68,2.19-5.8,0-10.02-5.09-10.02-12.09v-.09c0-7.16,4.18-12.36,9.93-12.36,3.62,0,5.56,1.61,6.97,3.19l.65.72v-1.93c0-.78.63-1.41,1.41-1.41h6.47c.78,0,1.41.63,1.41,1.41v19.56c0,4.45-.94,7.37-3.03,9.46-2.31,2.31-5.78,3.43-10.61,3.43h0ZM111.47,32.91c-2.46,0-4.39,2.07-4.39,4.7v.09c0,2.64,1.93,4.7,4.39,4.7s4.39-2.07,4.39-4.7v-.09c0-2.64-1.93-4.7-4.39-4.7Z"/></g>
            <g><path className="cls-1" d="M177.67,45.95l1.15-2.61c.43-.97,1.56-1.44,2.53-1.02,2.19.95,4.86,1.51,7.32,1.51,3.06,0,4.06-.67,4.06-1.77,0-3.48-15.28.48-15.28-9.88,0-4.87,4.49-8.59,12.6-8.59,2.83,0,5.89.47,8.33,1.35,1.06.38,1.56,1.6,1.1,2.63l-1.14,2.59c-.42.96-1.53,1.37-2.51.97-1.99-.8-3.95-1.09-5.73-1.09-3.06,0-4.15.86-4.15,1.82,0,3.58,15.23-.29,15.23,9.98,0,4.77-4.39,8.5-12.79,8.5-3.51,0-7.11-.7-9.71-1.79-1-.42-1.44-1.59-1.01-2.58Z"/><path className="cls-1" d="M215.43,40.82l-2.67,2.72v4.4c0,1.08-.88,1.95-1.95,1.95h-5.16c-1.08,0-1.95-.88-1.95-1.95v-31.41c0-1.14.92-2.06,2.06-2.06h5.05c1.08,0,1.95.88,1.95,1.95v16.62l8.69-8.47c.37-.36.85-.55,1.36-.55h5.33c1.73,0,2.61,2.08,1.4,3.32l-7.53,7.76,9.16,11.64c1.01,1.28.1,3.16-1.54,3.16h-6.01c-.59,0-1.16-.27-1.53-.73l-6.67-8.34Z"/><path className="cls-1" d="M233,16.33c0-2.72,2.2-4.82,5.54-4.82s5.54,1.96,5.54,4.68c0,2.86-2.2,4.97-5.54,4.97s-5.54-2.1-5.54-4.82ZM235.95,24.02h5.16c1.08,0,1.95.88,1.95,1.95v21.97c0,1.08-.88,1.95-1.95,1.95h-5.16c-1.08,0-1.95-.88-1.95-1.95v-21.97c0-1.08.88-1.95,1.95-1.95Z"/><path className="cls-1" d="M249.49,14.47h5.16c1.08,0,1.95.88,1.95,1.95v31.51c0,1.08-.88,1.95-1.95,1.95h-5.16c-1.08,0-1.95-.88-1.95-1.95v-31.51c0-1.08.88-1.95,1.95-1.95Z"/><path className="cls-1" d="M263.49,14.47h5.16c1.08,0,1.95.88,1.95,1.95v31.51c0,1.08-.88,1.95-1.95,1.95h-5.16c-1.08,0-1.95-.88-1.95-1.95v-31.51c0-1.08.88-1.95,1.95-1.95Z"/></g></g>
            <g><path className="cls-2" d="M35.67,71.33c-2.06,0-3.72-1.67-3.72-3.72v-10.65c0-2.06,1.67-3.72,3.72-3.72s3.72,1.67,3.72,3.72v10.65c0,2.06-1.67,3.72-3.72,3.72Z"/><path className="cls-2" d="M58.25,61.97c-.95,0-1.9-.36-2.63-1.09l-7.53-7.53c-1.45-1.45-1.45-3.81,0-5.26s3.81-1.45,5.26,0l7.53,7.53c1.45,1.45,1.45,3.81,0,5.26-.73.73-1.68,1.09-2.63,1.09Z"/><path className="cls-2" d="M67.61,39.39h-10.65c-2.06,0-3.72-1.67-3.72-3.72s1.67-3.72,3.72-3.72h10.65c2.06,0,3.72,1.67,3.72,3.72s-1.67,3.72-3.72,3.72h0Z"/><path className="cls-2" d="M50.72,24.33c-.95,0-1.9-.36-2.63-1.09-1.45-1.45-1.45-3.81,0-5.26l7.53-7.53c1.45-1.45,3.81-1.45,5.26,0,1.45,1.45,1.45,3.81,0,5.26l-7.53,7.53c-.73.73-1.68,1.09-2.63,1.09h0Z"/><path className="cls-2" d="M35.67,18.09c-2.06,0-3.72-1.67-3.72-3.72V3.72c0-2.06,1.67-3.72,3.72-3.72s3.72,1.67,3.72,3.72v10.65c0,2.06-1.67,3.72-3.72,3.72Z"/><path className="cls-2" d="M20.61,24.33c-.95,0-1.9-.36-2.63-1.09l-7.53-7.53c-1.45-1.45-1.45-3.81,0-5.26,1.45-1.45,3.81-1.45,5.26,0l7.53,7.53c1.45,1.45,1.45,3.81,0,5.26-.73.73-1.68,1.09-2.63,1.09h0Z"/><path className="cls-2" d="M14.37,39.39H3.72c-2.06,0-3.72-1.67-3.72-3.72s1.67-3.72,3.72-3.72h10.65c2.06,0,3.72,1.67,3.72,3.72s-1.67,3.72-3.72,3.72h0Z"/><path className="cls-2" d="M13.08,61.97c-.95,0-1.9-.36-2.63-1.09-1.45-1.45-1.45-3.81,0-5.26l22.59-22.59c1.45-1.45,3.81-1.45,5.26,0,1.45,1.45,1.45,3.81,0,5.26l-22.59,22.59c-.73.73-1.68,1.09-2.63,1.09Z"/></g>
    </svg>
);

function App() {
    const [view, setView] = useState('dashboard');
    const [currentTime, setCurrentTime] = useState(new Date());
    const [db, setDb] = useState({ config: {}, modules: [], schedule: [], importantLinks: [] });
    const [pesertaList] = useState(window.DATA_PESERTA || []);

    useEffect(() => {
        fetch('data.json').then(res => res.json()).then(data => setDb(data));
    }, []);

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const { activeAgenda, nextAgenda } = useMemo(() => {
        let active = null, next = null;
        const now = currentTime.getTime();
        db.schedule.forEach(s => {
            const start = new Date(s.start).getTime(), end = new Date(s.end).getTime();
            if (now >= start && now <= end) active = s;
            else if (now < start && !next) next = s;
        });
        return { activeAgenda: active, nextAgenda: next };
    }, [currentTime, db.schedule]);

    const targetTime = activeAgenda ? new Date(activeAgenda.end).getTime() : (nextAgenda ? new Date(nextAgenda.start).getTime() : null);
    const sisa = targetTime ? Math.max(0, Math.floor((targetTime - currentTime.getTime()) / 1000)) : 0;

    return (
        <div className="flex flex-col h-screen w-screen overflow-hidden bg-white font-karla">
            <header className="h-[16.6vh] w-full flex items-center justify-between px-24 lg:px-32 bg-white">
                <button onClick={() => setView('dashboard')} className="h-16 w-64"><LogoGdtSkills /></button>
                <button onClick={() => setView('dashboard')} className="px-8 py-3"><h1 className="text-3xl font-black text-pink-400">LKSN GDT 2026</h1></button>
            </header>

            <main className="h-[66.8vh] w-full px-24 lg:px-32 py-6 bg-slate-50 overflow-y-auto">
                {view === 'dashboard' && (
                    <div className="flex h-full gap-8">
                        <div className="w-3/4 bg-white flex flex-col items-center justify-center">
                            <h2 className="text-2xl font-bold text-pink-400">&lt;&lt; {activeAgenda?.title || "Menunggu Jadwal"} &gt;&gt;</h2>
                            <div className="text-[150pt] font-black text-blue-500">{String(Math.floor(sisa/3600)).padStart(2,'0')}:{String(Math.floor((sisa%3600)/60)).padStart(2,'0')}:{String(sisa%60).padStart(2,'0')}</div>
                        </div>
                        <div className="w-1/4 flex flex-col gap-4">
                            <div className="bg-green-600 text-white p-6 h-1/2 flex flex-col justify-center">
                                <p className="text-sm">Waktu Sistem:</p>
                                <p className="text-4xl font-black font-mono">{currentTime.toLocaleTimeString('id-ID')}</p>
                            </div>
                            <div className="bg-green-600 text-white p-6 h-1/2 flex flex-col justify-center">
                                <p className="text-sm">Agenda Selanjutnya:</p>
                                <p className="text-xl font-bold">{nextAgenda?.title || "-"}</p>
                            </div>
                        </div>
                    </div>
                )}
                
                {view === 'peserta' && (
                    <div className="bg-white p-6 h-full flex flex-col">
                        <h3 className="text-2xl font-black text-blue-500 mb-6">Folder Pengumpulan</h3>
                        <div className="grid grid-cols-2 gap-4 overflow-y-auto">
                            {pesertaList.map((p, i) => (
                                <div key={i} className="p-4 bg-slate-100 flex justify-between items-center">
                                    <span className="font-bold">{p.no}. {p.nama}</span>
                                    <a href={p.link} target="_blank" className="bg-blue-500 text-white px-8 py-4 font-bold">Buka Folder</a>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </main>

            <footer className="h-[16.6vh] w-full px-24 lg:px-32 flex gap-6 py-4 bg-white">
                {['Modules', 'Peserta', 'Schedule', 'Links'].map((item, i) => (
                    <button key={i} onClick={() => setView(item.toLowerCase() === 'peserta' ? 'peserta' : 'dashboard')} className="flex-1 bg-white border border-blue-500 text-blue-500 font-bold text-xl hover:bg-blue-500 hover:text-white transition">
                        {item}
                    </button>
                ))}
            </footer>
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
