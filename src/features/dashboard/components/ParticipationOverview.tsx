export const ParticipationOverview = () => {
    return (
        <section className="bg-white rounded-[24px] border border-slate-200 p-6 h-full flex flex-col shadow-sm shadow-slate-100/50">
            <div className="flex flex-wrap justify-between items-start mb-8 gap-4">
                <div className="flex flex-col gap-1">
                    <h2 className="text-secondary text-xl font-semibold tracking-tight flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-[24px]">
                            monitoring
                        </span>
                        Participation Insights
                    </h2>
                    <p className="text-slate-400 text-xs font-medium pl-8">School-wide engagement tracking</p>
                </div>
                <div className="flex items-center gap-2 bg-slate-50 p-1.5 rounded-xl border border-slate-100">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest pl-2">
                        Target: <span className="text-secondary">90%</span>
                    </span>
                    <span className="text-[11px] font-bold text-emerald-600 px-2 py-1 rounded-lg bg-emerald-50 border border-emerald-100/50">
                        Current: 84%
                    </span>
                </div>
            </div>

            <div className="flex flex-col gap-8 flex-1">
                <div className="space-y-4">
                    <div className="flex justify-between items-end">
                        <div className="flex flex-col gap-1">
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest transition-colors group-hover:text-secondary">Engagement distribution</span>
                            <span className="text-2xl font-bold text-secondary tracking-tight">84% Reach</span>
                        </div>
                        <div className="text-right">
                            <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest bg-emerald-50 px-2 py-1 rounded-md border border-emerald-100/50">+5.4%</span>
                        </div>
                    </div>
                    <div className="h-4 w-full bg-slate-100 rounded-full overflow-hidden p-1 border border-slate-200/50">
                        <div className="h-full bg-primary rounded-full shadow-sm" style={{ width: "84%" }}></div>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-3 mt-auto">
                    {[
                        { label: 'Events', value: '92%', tag: 'High', color: 'emerald' },
                        { label: 'Internal', value: '76%', tag: 'Stable', color: 'blue' },
                        { label: 'Volunteer', value: '64%', tag: 'Low', color: 'amber' }
                    ].map((item) => (
                        <div key={item.label} className="bg-slate-50/50 border border-slate-100 rounded-2xl p-4 flex flex-col gap-1 hover:bg-white hover:shadow-md transition-all cursor-default">
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                {item.label}
                            </p>
                            <p className="text-xl font-bold text-secondary">
                                {item.value}
                            </p>
                            <span className={`text-[9px] w-fit font-bold px-1.5 py-0.5 rounded-md border mt-1 uppercase tracking-tighter
                ${item.color === 'emerald' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' :
                                    item.color === 'blue' ? 'bg-blue-50 text-blue-600 border-blue-100' :
                                        'bg-amber-50 text-amber-600 border-amber-100'}`}>
                                {item.tag}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
