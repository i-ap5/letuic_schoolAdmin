import { useNavigate } from "react-router-dom";
import { cn } from "../../../lib/utils";
import { TopBar } from "../../../components/Header";

const DriverRow = ({
  driver,
  onClick,
}: {
  driver: any;
  onClick: (d: any) => void;
}) => {
  return (
    <tr
      onClick={() => onClick(driver)}
      className="hover:bg-dark-blue-grey/[0.02] transition-colors group cursor-pointer"
    >
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div
            className="size-8 rounded-full bg-cover bg-center border border-dark-blue-grey/10"
            style={{ backgroundImage: `url("${driver.img}")` }}
          ></div>
          <span className="text-sm font-bold text-dark-blue-grey group-hover:underline decoration-pale-lime underline-offset-4">
            {driver.name}
          </span>
        </div>
      </td>
      <td className="px-6 py-4 text-sm text-dark-blue-grey/50 font-mono">
        {driver.id}
      </td>
      <td className="px-6 py-4 text-sm text-dark-blue-grey">{driver.bus}</td>
      <td className="px-6 py-4 text-sm text-dark-blue-grey/60">
        {driver.license}
      </td>
      <td className="px-6 py-4">
        <span
          className={cn(
            "inline-flex items-center px-2 py-1 rounded text-[10px] font-black uppercase tracking-widest border",
            driver.status === "Active"
              ? "bg-pale-lime text-dark-blue-grey border-dark-blue-grey/10"
              : "bg-dark-blue-grey text-pale-lime border-white/10",
          )}
        >
          {driver.status}
        </span>
      </td>
      <td className="px-6 py-4 text-right">
        <button className="text-dark-blue-grey/40 hover:text-dark-blue-grey transition-colors">
          <span className="material-symbols-outlined text-xl">more_vert</span>
        </button>
      </td>
    </tr>
  );
};

export const DriversPage = ({ isHubChild }: { isHubChild?: boolean }) => {
  const navigate = useNavigate();
  const drivers = [
    {
      name: "Rajesh Kumar",
      id: "DRV-102",
      bus: "BUS-001",
      license: "LIC-882190",
      status: "Active",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    {
      name: "Sanjay Verma",
      id: "DRV-105",
      bus: "BUS-002",
      license: "LIC-443211",
      status: "Active",
      img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&h=400&fit=crop",
    },
    {
      name: "Vikram Malhotra",
      id: "DRV-110",
      bus: "BUS-003",
      license: "LIC-110944",
      status: "On Leave",
      img: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop",
    },
    {
      name: "Dilip Singh",
      id: "DRV-115",
      bus: "BUS-004",
      license: "LIC-994022",
      status: "Active",
      img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop",
    },
  ];

  return (
    <div
      className={cn(
        "flex-1 flex flex-col overflow-hidden bg-white",
        !isHubChild && "h-screen",
      )}
    >
      {!isHubChild && (
        <TopBar
          title="Fleet Drivers Management"
          subtitle="Manage driver profiles, licenses, and bus assignments."
          actions={
            <div className="flex items-center gap-3">
              <button className="bg-white border border-dark-blue-grey/10 text-dark-blue-grey px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-dark-blue-grey/5 transition-all shadow-sm">
                <span className="material-symbols-outlined text-lg">
                  upload_file
                </span>
                Bulk CSV Import
              </button>
              <button className="bg-pale-lime text-dark-blue-grey px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:opacity-90 transition-all shadow-sm active:scale-95">
                <span className="material-symbols-outlined text-sm">
                  person_add
                </span>
                Add New Driver
              </button>
            </div>
          }
        />
      )}

      <div className="flex-1 overflow-y-auto p-8 space-y-6 bg-dark-blue-grey/[0.01]">
        <div className="bg-white rounded-2xl border border-dark-blue-grey/10 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-dark-blue-grey/[0.02] border-b border-dark-blue-grey/10">
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-dark-blue-grey/40">
                    Driver Name
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-dark-blue-grey/40">
                    ID
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-dark-blue-grey/40">
                    Bus Assignment
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-dark-blue-grey/40">
                    License No
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-dark-blue-grey/40">
                    Status
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-dark-blue-grey/40 text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-dark-blue-grey/5">
                {drivers.map((driver, i) => (
                  <DriverRow
                    key={i}
                    driver={driver}
                    onClick={(d) => navigate(`/drivers/${d.id}`)}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
