export const ParticipationOverview = () => {
  return (
    <section className="bg-white rounded-xl border border-dark-blue-grey/10 mb-8 p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-dark-blue-grey text-lg font-bold tracking-tight flex items-center gap-2">
          <span className="material-symbols-outlined text-dark-blue-grey">
            query_stats
          </span>
          Participation Overview
        </h2>
        <div className="flex items-center gap-4">
          <span className="text-xs font-medium text-dark-blue-grey/50">
            Target: 90%
          </span>
          <span className="text-xs font-bold text-dark-blue-grey px-2 py-0.5 rounded-full bg-pale-lime">
            Current: 84%
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between text-xs font-bold text-dark-blue-grey/50 uppercase tracking-widest">
            <span>Engagement Distribution</span>
            <span>84% Total Reach</span>
          </div>
          <div className="h-4 w-full bg-dark-blue-grey/5 rounded-full overflow-hidden flex">
            <div className="h-full bg-pale-lime" style={{ width: "84%" }}></div>
            <div
              className="h-full bg-dark-blue-grey/10"
              style={{ width: "16%" }}
            ></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-dark-blue-grey/5">
          <div>
            <p className="text-xs text-dark-blue-grey/50 mb-1">
              Interschool Events
            </p>
            <p className="text-lg font-bold text-dark-blue-grey">
              92%{" "}
              <span className="text-[10px] bg-pale-lime px-1.5 py-0.5 rounded text-dark-blue-grey">
                High
              </span>
            </p>
          </div>
          <div>
            <p className="text-xs text-dark-blue-grey/50 mb-1">
              Internal Programs
            </p>
            <p className="text-lg font-bold text-dark-blue-grey">
              76%{" "}
              <span className="text-[10px] bg-dark-blue-grey/5 px-1.5 py-0.5 rounded text-dark-blue-grey/60">
                Steady
              </span>
            </p>
          </div>
          <div>
            <p className="text-xs text-dark-blue-grey/50 mb-1">
              Student Volunteering
            </p>
            <p className="text-lg font-bold text-dark-blue-grey">
              64%{" "}
              <span className="text-[10px] bg-dark-blue-grey px-1.5 py-0.5 rounded text-white">
                Low
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
