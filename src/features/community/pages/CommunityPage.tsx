import { useState } from "react";
import { PostCard } from "../components/PostCard";
import { CommunityFilters } from "../components/CommunityFilters";
import { cn } from "../../../lib/utils";
import { TopBar } from "../../../components/Header";

const Tab = ({ label, active }: { label: string; active?: boolean }) => (
  <a
    href="#"
    className={cn(
      "pb-4 px-1 text-sm transition-all",
      active
        ? "border-b-2 border-primary text-secondary font-semibold"
        : "text-slate-500 hover:text-secondary",
    )}
  >
    {label}
  </a>
);

export const CommunityPage = () => {
  const [isModerator, setIsModerator] = useState(false);
  const [posts, setPosts] = useState([
    {
      type: "Interschool",
      title: "Registration Open: Regional STEM Olympiad 2024",
      author: {
        name: "Sunita Reddy",
        img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
        role: "Program Coordinator",
      },
      content:
        "The annual Regional STEM Olympiad is now accepting registrations for Grade 10-12 students. This year's competition focuses on 'Sustainable Urban Engineering'.",
      category: "STEM Program",
      time: "2 hours ago",
      isNew: true,
      icon: "layers",
    },
    {
      type: "Our School",
      title: "School Gardening Project - Volunteer Update",
      author: {
        name: "Dr. Ananya Iyer",
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
        role: "Lead Teacher",
      },
      content:
        "Weekly maintenance schedule for the South Garden has been updated. Thanks to Grade 9 for their exceptional work during the Friday session.",
      category: "Sustainability",
      time: "5 hours ago",
      status: "Ongoing",
      icon: "eco",
    },
    {
      type: "Interschool",
      title: "District Sports League: Quarter-Final Results",
      author: {
        name: "Coach Rathore",
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
        role: "Head Coach",
      },
      content:
        "Northridge Academy has successfully qualified for the Basketball Quarter-Finals. The match against St. Jude's is scheduled for next Tuesday.",
      category: "Athletics",
      time: "Yesterday",
      status: "Alert",
      icon: "sports_basketball",
    },
  ]);

  const handleAddPost = () => {
    const newPost = {
      type: "Our School",
      title: "New Community Update",
      author: {
        name: "School Administration",
        img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
        role: "Admin",
      },
      content:
        "This is a new update posted to the community network. Stay tuned for more information regarding upcoming events.",
      category: "Announcement",
      time: "Just now",
      isNew: true,
      icon: "campaign",
    };
    setPosts((prev) => [newPost, ...prev]);
  };

  return (
    <div className="flex-1 flex flex-col h-screen overflow-hidden">
      <TopBar
        title="Community Network"
        subtitle="Official program updates and interschool network feed."
        actions={
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsModerator(!isModerator)}
              className={cn(
                "px-4 py-2 rounded-xl text-[13px] font-semibold flex items-center gap-2 transition-all border",
                isModerator
                  ? "bg-secondary/5 text-secondary border border-secondary/20"
                  : "bg-white text-slate-400 border-slate-100 hover:bg-slate-50",
              )}
            >
              <span className="material-symbols-outlined text-sm">
                {isModerator ? "shield_person" : "shield"}
              </span>
              Moderation {isModerator ? "ON" : "OFF"}
            </button>
            <button
              onClick={handleAddPost}
              className="bg-primary text-secondary px-4 py-2 rounded-xl text-[13px] font-semibold flex items-center gap-2 hover:opacity-90 transition-all shadow-sm shadow-slate-100/30 active:scale-95"
            >
              <span className="material-symbols-outlined text-sm">add_box</span>
              New Update
            </button>
          </div>
        }
      />
      <header className="bg-white border-b border-slate-100 px-8 pt-6 shrink-0 flex justify-between items-center">
        <div className="flex gap-8">
          <Tab label="All" active />
          <Tab label="Our School" />
          <Tab label="Interschool" />
          <Tab label="From Us" />
        </div>
        {isModerator && (
          <div className="flex items-center gap-2 text-red-500 animate-pulse pb-4">
            <span className="material-symbols-outlined text-sm">warning</span>
            <span className="text-[10px] font-black uppercase tracking-widest">
              Admin Moderation Active
            </span>
          </div>
        )}
      </header>

      <div className="flex-1 flex overflow-hidden">
        <div className="flex-1 overflow-y-auto mx-auto px-6 lg:px-10 py-6 space-y-6">
          {posts.map((post, i) => (
            <PostCard
              key={i}
              type={post.type}
              title={post.title}
              author={post.author}
              content={post.content}
              category={post.category}
              time={post.time}
              isNew={post.isNew}
              status={post.status}
              icon={post.icon}
              isModerator={isModerator}
            />
          ))}
        </div>
        <CommunityFilters />
      </div>
    </div>
  );
};
