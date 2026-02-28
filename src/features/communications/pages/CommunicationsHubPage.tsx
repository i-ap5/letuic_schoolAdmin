import { useState } from "react";
import { TopBar } from "../../../components/Header";
import { cn } from "../../../lib/utils";
import { CommunicationsPage } from "./CommunicationsPage";
import { AnnouncementsPage } from "./AnnouncementsPage";

export const CommunicationsHubPage = () => {
  const [activeTab, setActiveTab] = useState<"messages" | "announcements">(
    "messages",
  );

  return (
    <div className="flex-1 flex flex-col h-screen overflow-hidden bg-white">
      <div className="shrink-0">
        <TopBar
          title="Communication Hub"
          subtitle="Manage secure internal messaging and institution-wide announcements."
          actions={
            <div className="flex gap-3">
              <button className="bg-pale-lime text-dark-blue-grey px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:opacity-90 transition-all shadow-sm">
                <span className="material-symbols-outlined text-sm">
                  edit_square
                </span>
                Compose
              </button>
            </div>
          }
        />

        <div className="px-8 border-b border-dark-blue-grey/10 bg-white">
          <div className="flex gap-8">
            {[
              { id: "messages", label: "Direct Messages", icon: "chat_bubble" },
              {
                id: "announcements",
                label: "Official Announcements",
                icon: "campaign",
              },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={cn(
                  "flex items-center gap-2 pb-4 text-sm font-bold tracking-tight transition-all relative mt-4",
                  activeTab === tab.id
                    ? "text-dark-blue-grey"
                    : "text-dark-blue-grey/40 hover:text-dark-blue-grey",
                )}
              >
                <span className="material-symbols-outlined text-lg">
                  {tab.icon}
                </span>
                {tab.label}
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-pale-lime rounded-t-full" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-hidden flex flex-col">
        {activeTab === "messages" ? (
          <div className="flex-1 overflow-hidden">
            <CommunicationsPage isHubChild />
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto no-scrollbar">
            <AnnouncementsPage isHubChild />
          </div>
        )}
      </div>
    </div>
  );
};
