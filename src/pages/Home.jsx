import { useState } from "react";

function Home() {
  const [activeTab, setActiveTab] = useState("portraits");

  const sessions = [
    {
      id: 1,
      title: "Colosseum Couple",
      category: "portraits",
      location: "Rome, Italy",
      price: "$740",
      duration: "2 hours",
      featured: true,
      image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      title: "Canyon Portrait",
      category: "portraits",
      location: "Arizona, USA",
      price: "$240",
      duration: "1 hour",
      featured: false,
      image: "https://images.unsplash.com/photo-1615551043360-33de8b5f410c?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      title: "Amalfi Coast Bride",
      category: "weddings",
      location: "Amalfi, Italy",
      price: "$1,200",
      duration: "6 hours",
      featured: true,
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4,
      title: "Windmill Editorial",
      category: "fashion",
      location: "Mykonos, Greece",
      price: "$450",
      duration: "3 hours",
      featured: false,
      image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=80"
    }
  ];

  const collaborations = [
    {
      id: 1,
      title: "Arizona Desert Album",
      type: "Shared with Clients",
      badge: "+20",
      image: "https://images.unsplash.com/photo-1505245208761-ba872912fac0?auto=format&fit=crop&w=150&q=80",
      members: [
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
        "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=100&q=80"
      ]
    },
    {
      id: 2,
      title: "Fashion Campaign",
      type: "Collaboration Board",
      badge: "+15",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=150&q=80",
      members: [
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=100&q=80",
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80",
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
      ]
    },
    {
      id: 3,
      title: "Family Portrait Session",
      type: "Shared with Family",
      badge: "+5",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=150&q=80",
      members: [
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80",
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80"
      ]
    }
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const filteredSessions = activeTab === "all"
    ? sessions
    : sessions.filter(session => session.category === activeTab);

  return (
    <div className="w-full max-w-[425px] h-screen max-h-screen md:h-[844px] md:max-h-[844px] md:rounded-[40px] bg-[#FAFAFC] shadow-2xl mx-auto flex flex-col relative overflow-hidden border border-gray-100/50">

      {/* Scrollable Content Container */}
      <div className="flex-1 overflow-y-auto scrollbar-none">

        {/* Top Profile / Action Bar */}
        <header className="flex justify-between items-center px-6 pt-7 pb-3">
        <div className="flex items-center gap-3">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
            alt="Studio Profile"
            className="w-10 h-10 rounded-full object-cover border border-gray-200/60 shadow-sm"
          />
          <div>
            <p className="text-[9px] text-gray-400 font-bold tracking-wider uppercase">Photographer</p>
            <h4 className="text-xs font-bold text-gray-800">Aura Studio</h4>
          </div>
        </div>
        <button className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center shadow-card hover:shadow-card-hover border border-gray-100/50 text-gray-700 hover:scale-102 active:scale-98 transition-all cursor-pointer">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="6" height="6" rx="1.5" />
            <rect x="15" y="3" width="6" height="6" rx="1.5" />
            <rect x="3" y="15" width="6" height="6" rx="1.5" />
            <rect x="15" y="15" width="6" height="6" rx="1.5" />
          </svg>
        </button>
      </header>

      {/* Hero Welcome */}
      <section className="px-6 py-3">
        <h1 className="text-[28px] font-extrabold tracking-tight text-gray-900 leading-tight">
          Explore your<br />beautiful shoots!
        </h1>
      </section>

      {/* Search and Filter Row */}
      <section className="flex gap-3 px-6 pb-5">
        <div className="flex-1 relative flex items-center">
          <svg width="16" height="16" className="absolute left-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="Search shoots..."
            className="w-full bg-[#F2F2F6] text-xs text-gray-700 placeholder-gray-400 pl-11 pr-4 py-3.5 rounded-2xl outline-none focus:ring-2 focus:ring-brand-500/10 focus:bg-white border border-transparent focus:border-gray-200/50 transition-all font-medium"
          />
        </div>
        <button className="w-12 h-12 bg-gradient-to-br from-[#FFB84C] to-[#FF7A1A] rounded-2xl flex items-center justify-center text-white shadow-[0_8px_16px_-4px_rgba(255,122,26,0.35)] hover:brightness-102 active:scale-95 transition-all cursor-pointer">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" y1="21" x2="4" y2="14" />
            <line x1="4" y1="10" x2="4" y2="3" />
            <line x1="12" y1="21" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12" y2="3" />
            <line x1="20" y1="21" x2="20" y2="16" />
            <line x1="20" y1="12" x2="20" y2="3" />
            <line x1="2" y1="14" x2="6" y2="14" />
            <line x1="10" y1="8" x2="14" y2="8" />
            <line x1="18" y1="16" x2="22" y2="16" />
          </svg>
        </button>
      </section>

      {/* Travel Places / Sessions */}
      <section className="flex flex-col mb-4">
        <div className="flex justify-between items-center px-6 mb-3">
          <h2 className="text-base font-bold text-gray-800 tracking-tight">Shoot Sessions</h2>
          <button className="text-[10px] font-bold text-gray-400 hover:text-gray-600 transition-colors">
            Show more &gt;
          </button>
        </div>

        <div className="flex items-stretch px-6 gap-2 min-h-[295px]">
          {/* Vertical rotated text categories */}
          <div className="flex flex-col justify-around py-4 items-start w-10 shrink-0 text-gray-400 font-bold select-none text-[10px]">
            {/* Portraits Tab */}
            <div className="flex items-center gap-1.5 h-10 w-full">
              <div className={`w-[3px] h-4 rounded-full transition-all duration-300 ${activeTab === "portraits" ? "bg-[#FF7A1A]" : "bg-transparent"}`} />
              <button
                onClick={() => handleTabClick("portraits")}
                className={`vertical-text bg-transparent border-0 outline-none p-0 cursor-pointer transition-colors whitespace-nowrap font-bold ${activeTab === "portraits" ? "text-[#FF7A1A]" : "text-gray-400 hover:text-gray-600"
                  }`}
              >
                Portraits
              </button>
            </div>

            {/* Weddings Tab */}
            <div className="flex items-center gap-1.5 h-10 w-full">
              <div className={`w-[3px] h-4 rounded-full transition-all duration-300 ${activeTab === "weddings" ? "bg-[#FF7A1A]" : "bg-transparent"}`} />
              <button
                onClick={() => handleTabClick("weddings")}
                className={`vertical-text bg-transparent border-0 outline-none p-0 cursor-pointer transition-colors whitespace-nowrap font-bold ${activeTab === "weddings" ? "text-[#FF7A1A]" : "text-gray-400 hover:text-gray-600"
                  }`}
              >
                Weddings
              </button>
            </div>

            {/* Fashion Tab */}
            <div className="flex items-center gap-1.5 h-10 w-full">
              <div className={`w-[3px] h-4 rounded-full transition-all duration-300 ${activeTab === "fashion" ? "bg-[#FF7A1A]" : "bg-transparent"}`} />
              <button
                onClick={() => handleTabClick("fashion")}
                className={`vertical-text bg-transparent border-0 outline-none p-0 cursor-pointer transition-colors whitespace-nowrap font-bold ${activeTab === "fashion" ? "text-[#FF7A1A]" : "text-gray-400 hover:text-gray-600"
                  }`}
              >
                Fashion
              </button>
            </div>

            {/* All Tab */}
            <div className="flex items-center gap-1.5 h-10 w-full">
              <div className={`w-[3px] h-4 rounded-full transition-all duration-300 ${activeTab === "all" ? "bg-[#FF7A1A]" : "bg-transparent"}`} />
              <button
                onClick={() => handleTabClick("all")}
                className={`vertical-text bg-transparent border-0 outline-none p-0 cursor-pointer transition-colors whitespace-nowrap font-bold ${activeTab === "all" ? "text-[#FF7A1A]" : "text-gray-400 hover:text-gray-600"
                  }`}
              >
                All
              </button>
            </div>
          </div>

          {/* Horizontally scrolling list of shoot cards */}
          <div className="flex-1 overflow-x-auto flex gap-4 scrollbar-none py-1 pl-1">
            {filteredSessions.map((session) => (
              <div
                key={session.id}
                className="w-[195px] shrink-0 bg-white rounded-[28px] p-3 shadow-card border border-gray-100/50 hover:shadow-card-hover hover:scale-[1.01] transition-all flex flex-col"
              >
                {/* Image Backdrop Container */}
                <div className="relative rounded-[22px] overflow-hidden aspect-[1.15] w-full bg-gray-50">
                  <img
                    src={session.image}
                    alt={session.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Bookmark ribbon tag */}
                  <div className={`absolute top-0 right-4 ${session.featured ? "text-[#FFB84C]" : "text-gray-200/90"}`}>
                    <svg width="16" height="26" viewBox="0 0 24 32" fill="currentColor">
                      <path d="M0 0h24v28l-12-6-12 6z" />
                    </svg>
                  </div>
                  {/* Glassmorphic Price tag */}
                  <div className="absolute bottom-2.5 right-2.5 bg-black/25 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full border border-white/10 shadow-sm">
                    {session.price}
                  </div>
                </div>

                {/* Shoot Info */}
                <div className="mt-2.5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xs font-bold text-gray-800 tracking-tight leading-snug">
                      {session.title}
                    </h3>
                    <div className="text-[10px] text-gray-400 flex items-center gap-1.5 mt-1 font-semibold">
                      <svg width="12" height="12" className="text-[#FF7A1A] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {session.location}
                    </div>
                  </div>
                  {/* Session Duration */}
                  <div className="mt-2.5 w-fit bg-gray-50 text-[9px] text-gray-500 font-bold px-3 py-1 rounded-full border border-gray-100/50">
                    {session.duration}
                  </div>
                </div>
              </div>
            ))}
            {filteredSessions.length === 0 && (
              <div className="flex flex-col items-center justify-center w-full text-center text-gray-400 text-xs py-10 pr-6">
                No shoots in this category yet.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Travel Groups / Collaborations */}
      <section className="flex flex-col mb-24">
        <div className="flex justify-between items-center px-6 mb-2.5">
          <h2 className="text-base font-bold text-gray-800 tracking-tight">Shared Galleries</h2>
          <button className="text-[10px] font-bold text-gray-400 hover:text-gray-600 transition-colors">
            Show more &gt;
          </button>
        </div>

        <div className="overflow-x-auto flex gap-4 scrollbar-none px-6 py-1.5">
          {collaborations.map((collab) => (
            <div
              key={collab.id}
              className="w-[245px] shrink-0 bg-white rounded-[24px] p-3 shadow-card border border-gray-100/50 hover:shadow-card-hover transition-all flex items-center gap-3"
            >
              {/* Gallery Cover square image */}
              <img
                src={collab.image}
                alt={collab.title}
                className="w-14 h-14 object-cover rounded-[18px] shadow-inner bg-gray-50"
              />
              {/* Group Text Details */}
              <div className="flex-1 min-w-0 flex flex-col justify-center">
                <h3 className="text-xs font-bold text-gray-800 truncate tracking-tight">
                  {collab.title}
                </h3>
                <p className="text-[9px] text-gray-400 font-semibold mt-0.5">
                  {collab.type}
                </p>
                {/* Avatars layer */}
                <div className="flex items-center gap-1 mt-1.5">
                  <div className="flex items-center">
                    {collab.members.map((member, index) => (
                      <img
                        key={index}
                        src={member}
                        alt="Member"
                        className="w-5 h-5 rounded-full border border-white object-cover shadow-sm -ml-1.5 first:ml-0"
                      />
                    ))}
                  </div>
                  <span className="w-5 h-5 rounded-full border border-white bg-[#FF7A1A] text-white text-[8px] font-bold flex items-center justify-center shadow-sm -ml-1.5">
                    {collab.badge}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      </div>

      {/* Anchored Bottom Navigation Bar */}
      <nav className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md h-20 border-t border-gray-100/80 flex items-center justify-around px-8 pb-4 z-40">
        <button className="flex flex-col items-center justify-center text-[#B5B5BE] hover:text-[#9A9AB0] p-2 hover:scale-105 active:scale-95 transition-all cursor-pointer bg-transparent border-0 outline-none">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
        </button>
        {/* Black rounded square plus button */}
        <button className="w-12 h-12 bg-gray-900 rounded-[18px] flex items-center justify-center text-white shadow-sm hover:bg-gray-800 hover:scale-105 active:scale-95 transition-all cursor-pointer border-0 outline-none">
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </button>
        <button className="flex flex-col items-center justify-center text-[#B5B5BE] hover:text-[#9A9AB0] p-2 hover:scale-105 active:scale-95 transition-all cursor-pointer bg-transparent border-0 outline-none">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 2.08.64 4.01 1.73 5.61L3 21l3.52-.72C7.99 20.82 9.92 21.2 12 21.2c5.52 0 10-4.48 10-10S17.52 2 12 2z" strokeWidth="0" />
          </svg>
        </button>
      </nav>

    </div>
  );
}

export default Home;
