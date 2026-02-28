export const ProgramsTable = () => {
  const programs = [
    {
      name: "Regional Science Fair",
      phase: "Competition Phase",
      teacher: "Dr. C.V. Raman",
      status: "Active",
      progress: 75,
    },
    {
      name: "District Athletics League",
      phase: "Qualifying Round",
      teacher: "Coach Rathore",
      status: "Warning",
      progress: 42,
    },
    {
      name: "Inter-High Arts Expo",
      phase: "Setup & Registration",
      teacher: "Ms. Amrita Sher-Gil",
      status: "Planning",
      progress: 15,
    },
  ];

  return (
    <div className="bg-white rounded-xl border border-dark-blue-grey/10 shadow-sm overflow-hidden">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-dark-blue-grey/[0.02] border-b border-dark-blue-grey/10">
            <th className="px-6 py-4 text-xs font-bold text-dark-blue-grey/50 uppercase">
              Program Name
            </th>
            <th className="px-6 py-4 text-xs font-bold text-dark-blue-grey/50 uppercase">
              Lead Teacher
            </th>
            <th className="px-6 py-4 text-xs font-bold text-dark-blue-grey/50 uppercase">
              Status
            </th>
            <th className="px-6 py-4 text-xs font-bold text-dark-blue-grey/50 uppercase text-right">
              Progress
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-dark-blue-grey/5">
          {programs.map((program, idx) => (
            <tr
              key={idx}
              className="hover:bg-dark-blue-grey/[0.02] transition-colors text-dark-blue-grey"
            >
              <td className="px-6 py-4">
                <div className="flex flex-col">
                  <span className="text-sm font-bold">{program.name}</span>
                  <span className="text-xs text-dark-blue-grey/50">
                    {program.phase}
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 text-sm opacity-70">
                {program.teacher}
              </td>
              <td className="px-6 py-4">
                <span
                  className={`inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider ${
                    program.status === "Active"
                      ? "bg-pale-lime text-dark-blue-grey"
                      : program.status === "Warning"
                        ? "bg-dark-blue-grey text-pale-lime"
                        : "bg-dark-blue-grey/5 text-dark-blue-grey/50"
                  }`}
                >
                  {program.status}
                </span>
              </td>
              <td className="px-6 py-4 text-right">
                <div className="flex items-center justify-end gap-2">
                  <div className="w-16 h-1.5 bg-dark-blue-grey/5 rounded-full">
                    <div
                      className="h-full bg-pale-lime rounded-full"
                      style={{ width: `${program.progress}%` }}
                    ></div>
                  </div>
                  <span className="text-xs font-bold">{program.progress}%</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
