import { useState } from "react";
import { TopBar } from "../../../components/Header";
import { cn } from "../../../lib/utils";

export const CommunityPage = ({ isHubChild }: { isHubChild?: boolean }) => {
  const [activeTab, setActiveTab] = useState<"feed" | "discussion" | "moderation">("feed");
  const [activeCategory, setActiveCategory] = useState<"all" | "school" | "admin" | "faculty" | "students">("all");

  const posts = [
    {
      id: 1,
      author: "Dr. Rahana",
      role: "Principal",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
      content: "It is a moment of immense pride for Adarsha Vidya Bhavan as we announce a 100% result for our Class 10 batch of 2026! 🎓 Our students have displayed exceptional dedication, and I congratulate them, their families, and our hardworking faculty for this stellar achievement. Let us celebrate our top scorers who have set a new benchmark for excellence. #Class10Results #100PercentSuccess #AcademicExcellence #ProudMoment",
      image: "/banner.jpg",
      time: "Just now",
      reactions: 342,
      comments: 56,
      isAcknowledged: true,
    },
    {
      id: 2,
      author: "Rohan P.",
      role: "Grade 10 Student",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
      content: "Does anyone have the reference materials for the upcoming Calculus midterm? Specifically looking for the derivatives worksheet. Thanks!",
      time: "5h ago",
      reactions: 8,
      comments: 24,
      isAcknowledged: false,
    }
  ];

  return (
    <div className="flex-1 flex flex-col h-screen overflow-hidden bg-slate-50/50">
      {!isHubChild && (
        <TopBar 
          title="Community Hub" 
          subtitle="Engage with the school ecosystem through updates and discussions."
          actions={
              <button className="bg-secondary text-white px-5 py-2.5 rounded-2xl text-[13px] font-bold flex items-center gap-2 hover:shadow-xl hover:shadow-secondary/20 transition-all active:scale-95">
                  <span className="material-symbols-outlined text-[18px]">add_circle</span>
                  New Post
              </button>
          }
        />
      )}

      <div className="flex-1 overflow-y-auto no-scrollbar pb-20">
        <div className="max-w-5xl mx-auto px-8 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Sidebar - Navigation/Filters */}
            <div className="lg:col-span-3 space-y-6">
                <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
                    <h3 className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-4">Channels</h3>
                    <div className="space-y-1">
                        {[
                            { id: "feed", label: "Timeline", icon: "dashboard" },
                            { id: "discussion", label: "Q&A Boards", icon: "forum" },
                            { id: "moderation", label: "Moderation", icon: "verified_user", badge: 3 },
                        ].map(t => (
                            <button 
                                key={t.id}
                                onClick={() => setActiveTab(t.id as any)}
                                className={cn(
                                    "w-full flex items-center gap-3 p-3 rounded-2xl transition-all font-bold text-[13px]",
                                    activeTab === t.id ? "bg-primary/10 text-primary" : "text-slate-400 hover:bg-slate-50"
                                )}
                            >
                                <span className="material-symbols-outlined text-[20px]">{t.icon}</span>
                                <span className="flex-1 text-left">{t.label}</span>
                                {t.badge && <span className="size-5 bg-rose-500 text-white rounded-full text-[10px] flex items-center justify-center font-black">{t.badge}</span>}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="bg-secondary rounded-3xl p-6 text-white shadow-xl shadow-secondary/10 relative overflow-hidden">
                    <div className="relative z-10">
                        <h4 className="text-lg font-black mb-1">Aura Leaderboard</h4>
                        <p className="text-[11px] text-white/60 font-medium mb-4">Top contributors this week</p>
                        <div className="space-y-4">
                             {[
                                { name: "Meera V.", points: 2450, img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" },
                                { name: "Arjun T.", points: 2120, img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100" },
                             ].map((u, i) => (
                                <div key={u.name} className="flex items-center gap-3">
                                    <div className="relative">
                                        <img src={u.img} className="size-8 rounded-full border-2 border-white/20" />
                                        <div className="absolute -bottom-1 -right-1 size-4 bg-primary rounded-full text-[8px] flex items-center justify-center text-secondary font-black">{i+1}</div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-[12px] font-black">{u.name}</p>
                                        <p className="text-[10px] text-white/50">{u.points} pts</p>
                                    </div>
                                </div>
                             ))}
                        </div>
                    </div>
                    <div className="absolute -right-4 -bottom-4 size-24 bg-white/5 rounded-full blur-2xl" />
                </div>
            </div>

            {/* Main Feed */}
            <div className="lg:col-span-6 space-y-6">
                <div className="bg-white rounded-3xl p-1.5 border border-slate-100 shadow-sm flex items-center gap-1 overflow-x-auto no-scrollbar">
                    {[
                        { id: "all", label: "All Posts" },
                        { id: "school", label: "Our School" },
                        { id: "admin", label: "Administrators" },
                        { id: "faculty", label: "Faculty" },
                        { id: "students", label: "Students" },
                    ].map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id as any)}
                            className={cn(
                                "whitespace-nowrap px-5 py-2.5 rounded-2xl text-[13px] font-bold transition-all",
                                activeCategory === cat.id 
                                    ? "bg-secondary text-white shadow-lg shadow-secondary/10 px-6" 
                                    : "text-slate-400 hover:text-secondary hover:bg-slate-50"
                            )}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {posts.map(post => (
                    <div key={post.id} className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden group hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500">
                        <div className="p-6">
                            <div className="flex items-center gap-4 mb-6">
                                <img src={post.avatar} className="size-12 rounded-2xl object-cover" />
                                <div className="flex-1">
                                    <h4 className="text-[15px] font-black text-secondary leading-tight">{post.author}</h4>
                                    <p className="text-[11px] text-slate-400 font-bold uppercase tracking-widest">{post.role} • {post.time}</p>
                                </div>
                                <button className="size-10 rounded-full hover:bg-slate-50 flex items-center justify-center text-slate-300">
                                    <span className="material-symbols-outlined">more_horiz</span>
                                </button>
                            </div>
                            
                            <p className="text-[14px] text-slate-600 font-medium leading-relaxed mb-6">
                                {post.content}
                            </p>

                            {post.image && (
                                <div className="rounded-2xl overflow-hidden mb-6 border border-slate-50">
                                    <img src={post.image} className="w-full h-auto object-cover" />
                                </div>
                            )}

                            <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                                <div className="flex gap-6">
                                    <button className={cn(
                                        "flex items-center gap-2 text-[13px] font-bold transition-all",
                                        post.isAcknowledged ? "text-primary" : "text-slate-400 hover:text-secondary"
                                    )}>
                                        <span className={cn("material-symbols-outlined text-[20px]", post.isAcknowledged ? "fill-1" : "")}>
                                            {post.isAcknowledged ? "verified" : "thumb_up"}
                                        </span>
                                        {post.reactions}
                                    </button>
                                    <button className="flex items-center gap-2 text-[13px] font-bold text-slate-400 hover:text-secondary transition-all">
                                        <span className="material-symbols-outlined text-[20px]">chat_bubble_outline</span>
                                        {post.comments}
                                    </button>
                                </div>
                                <button className="flex items-center gap-2 text-[13px] font-bold text-slate-400 hover:text-secondary transition-all">
                                    <span className="material-symbols-outlined text-[20px]">share</span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Right Sidebar - Trending/Activities */}
            <div className="lg:col-span-3 space-y-6">
                <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
                    <h3 className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-4">Trending Tags</h3>
                    <div className="flex flex-wrap gap-2">
                        {["#SportsDay", "#OlympiadResults", "#ProjectMosaic", "#PTAMeeting", "#CodingChallenge"].map(tag => (
                            <span key={tag} className="px-3 py-1.5 bg-slate-50 text-secondary text-[11px] font-bold rounded-xl border border-slate-100 hover:bg-primary/20 hover:border-primary/20 cursor-pointer transition-all">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
                    <h3 className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-4">Recent Q&A</h3>
                    <div className="space-y-4">
                        {[
                            { q: "How to register for the Science Fair?", answers: 4 },
                            { q: "Is the school bus delayed today?", answers: 12 },
                            { q: "When are the term results coming?", answers: 0 },
                        ].map(q => (
                            <div key={q.q} className="group cursor-pointer">
                                <p className="text-[13px] font-bold text-secondary group-hover:text-primary transition-all line-clamp-2 mb-1">{q.q}</p>
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{q.answers} Answers</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};
