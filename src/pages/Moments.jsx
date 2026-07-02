import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Moments() {
  const navigate = useNavigate();
  const location = useLocation();
  const [userPic, setUserPic] = useState("");
  const [hasMatches, setHasMatches] = useState(true);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const simulate = localStorage.getItem("simulateNoMatch");
    if (simulate === "true") {
      setHasMatches(false);
    } else {
      setHasMatches(true);
    }

    const savedSelfie = localStorage.getItem("capturedSelfie");
    if (savedSelfie) {
      setUserPic(savedSelfie);
    } else {
      setUserPic("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80");
    }
  }, [location]);

  const handleSubmitDetails = (e) => {
    e.preventDefault();
    if (!name || !phone) {
      return;
    }
    setSubmitted(true);
    alert(`Thank you, ${name}! We will notify you at ${phone} once your photos are uploaded.`);
  };

  return (
    <div className="w-full max-w-[425px] h-dvh max-h-dvh md:h-[844px] md:max-h-[844px] md:rounded-[40px] bg-white md:shadow-2xl mx-auto flex flex-col justify-between relative overflow-hidden md:border md:border-gray-100/50">
      
      {/* Top Navbar */}
      <div className="absolute top-0 left-0 right-0 z-30 px-6 pt-10 pb-4 bg-white/90 backdrop-blur-md border-b border-gray-100/40 flex items-center justify-between">
        <button
          onClick={() => navigate("/camera")}
          className="w-10 h-10 rounded-full bg-white shadow-[0_4px_12px_rgba(0,0,0,0.08)] flex items-center justify-center text-gray-600 hover:bg-gray-50 active:scale-95 transition-all cursor-pointer border border-gray-100"
        >
          <svg className="w-5 h-5 -ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <span className="font-sans text-[15px] font-bold text-gray-800 tracking-tight">
          Moments
        </span>

        <button
          onClick={() => alert("Browse your captured moments here!")}
          className="w-10 h-10 rounded-full bg-white shadow-[0_4px_12px_rgba(0,0,0,0.08)] flex items-center justify-center text-gray-600 font-bold hover:bg-gray-50 active:scale-95 transition-all cursor-pointer border border-gray-100"
        >
          ?
        </button>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-none pt-28 pb-20 px-6">
        
        {hasMatches ? (
          <>
            {/* Tabs */}
            <div className="flex gap-6 pb-6 -mx-6 px-6 overflow-x-auto scrollbar-none font-sans text-xs font-semibold text-[#B5B5BE] select-none items-center">
              <div className="flex flex-col items-center gap-0.5 shrink-0">
                <span className="text-gray-900 font-extrabold text-[13px] tracking-tight">Captured</span>
                <div className="w-1.5 h-1.5 rounded-full bg-gray-900" />
              </div>
              <span className="hover:text-gray-700 cursor-pointer shrink-0 text-[13px]">Saved</span>
              <span className="hover:text-gray-700 cursor-pointer shrink-0 text-[13px]">Tags</span>
              <span className="hover:text-gray-700 cursor-pointer shrink-0 text-[13px]">People</span>
              <span className="hover:text-gray-700 cursor-pointer shrink-0 text-[13px]">Albums</span>
              <span className="hover:text-gray-700 cursor-pointer shrink-0 text-[13px]">Shared</span>
              <span className="hover:text-gray-700 cursor-pointer shrink-0 text-[13px]">Trash</span>
            </div>

            {/* Staggered Grid */}
            <div className="grid grid-cols-2 gap-4 animate-fade-in">
              
              {/* Col 1 */}
              <div className="flex flex-col gap-4">
                
                <div className="rounded-[24px] overflow-hidden shadow-[0_8px_16px_rgba(0,0,0,0.04)] border border-gray-100/50 hover:scale-[1.01] transition-transform">
                  <img
                    src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=400&q=80"
                    alt="Cityscape Skyline"
                    className="w-full aspect-[4/3.8] object-cover rounded-[24px]"
                  />
                </div>
                
                <div className="rounded-[24px] overflow-hidden shadow-[0_8px_16px_rgba(0,0,0,0.04)] border border-gray-100/50 hover:scale-[1.01] transition-transform">
                  <img
                    src="https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=400&q=80"
                    alt="Traveler with Balloons"
                    className="w-full aspect-[3/5.2] object-cover rounded-[24px]"
                  />
                </div>

                <div className="rounded-[24px] overflow-hidden shadow-[0_8px_16px_rgba(0,0,0,0.04)] border border-gray-100/50 hover:scale-[1.01] transition-transform">
                  <img
                    src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&w=400&q=80"
                    alt="Airport Departures Board"
                    className="w-full aspect-[4/3.3] object-cover rounded-[24px]"
                  />
                </div>

                <div className="rounded-[24px] overflow-hidden shadow-[0_8px_16px_rgba(0,0,0,0.04)] border border-gray-100/50 hover:scale-[1.01] transition-transform">
                  <img
                    src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=400&q=80"
                    alt="Urban Architecture"
                    className="w-full aspect-[4/3.8] object-cover rounded-[24px]"
                  />
                </div>

                <div className="rounded-[24px] overflow-hidden shadow-[0_8px_16px_rgba(0,0,0,0.04)] border border-gray-100/50 hover:scale-[1.01] transition-transform">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80"
                    alt="Mountain Cabin Portrait"
                    className="w-full aspect-[3/5.2] object-cover rounded-[24px]"
                  />
                </div>

                <div className="rounded-[24px] overflow-hidden shadow-[0_8px_16px_rgba(0,0,0,0.04)] border border-gray-100/50 hover:scale-[1.01] transition-transform">
                  <img
                    src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=400&q=80"
                    alt="Cozy Street Path"
                    className="w-full aspect-[4/3.3] object-cover rounded-[24px]"
                  />
                </div>
                
              </div>

              {/* Col 2 */}
              <div className="flex flex-col gap-4">
                
                <div className="rounded-[24px] overflow-hidden shadow-[0_8px_16px_rgba(0,0,0,0.04)] border border-gray-100/50 hover:scale-[1.01] transition-transform">
                  <img
                    src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=400&q=80"
                    alt="Forest Lake Stream"
                    className="w-full aspect-[3/4.2] object-cover rounded-[24px]"
                  />
                </div>

                <div className="rounded-[24px] overflow-hidden shadow-[0_8px_16px_rgba(0,0,0,0.04)] border border-gray-100/50 hover:scale-[1.01] transition-transform">
                  <img
                    src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=400&q=80"
                    alt="Black Dog Portrait"
                    className="w-full aspect-[3/5] object-cover rounded-[24px]"
                  />
                </div>

                <div className="rounded-[24px] overflow-hidden shadow-[0_8px_16px_rgba(0,0,0,0.04)] border border-gray-100/50 hover:scale-[1.01] transition-transform">
                  <img
                    src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=400&q=80"
                    alt="Forest Stream path"
                    className="w-full aspect-[4/3.1] object-cover rounded-[24px]"
                  />
                </div>

                <div className="rounded-[24px] overflow-hidden shadow-[0_8px_16px_rgba(0,0,0,0.04)] border border-gray-100/50 hover:scale-[1.01] transition-transform">
                  <img
                    src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80"
                    alt="Lakeside Sunset"
                    className="w-full aspect-[3/4.2] object-cover rounded-[24px]"
                  />
                </div>

                <div className="rounded-[24px] overflow-hidden shadow-[0_8px_16px_rgba(0,0,0,0.04)] border border-gray-100/50 hover:scale-[1.01] transition-transform">
                  <img
                    src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=400&q=80"
                    alt="Desert Dunes"
                    className="w-full aspect-[3/5] object-cover rounded-[24px]"
                  />
                </div>

                <div className="rounded-[24px] overflow-hidden shadow-[0_8px_16px_rgba(0,0,0,0.04)] border border-gray-100/50 hover:scale-[1.01] transition-transform">
                  <img
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80"
                    alt="Palm Beach Landscape"
                    className="w-full aspect-[4/3.1] object-cover rounded-[24px]"
                  />
                </div>
                
              </div>

            </div>
          </>
        ) : (
          /* Oops Fallback Form Layout */
          <div className="flex-1 flex flex-col justify-center items-center pt-8 pb-4 animate-scale-up min-h-[460px]">
            
            <div className="flex flex-col items-center text-center mb-8">
              <h2 className="font-sans text-[36px] font-black text-gray-900 tracking-tight mb-3">
                Oops!
              </h2>
              <p className="font-sans text-[13px] text-gray-400 font-semibold leading-relaxed max-w-[280px] px-2">
                We couldn't find your photos from our collections, kindly submit your contact details & subscribe.
              </p>
            </div>

            <form onSubmit={handleSubmitDetails} className="w-full max-w-[320px] px-4 flex flex-col gap-4">
              <div className="w-full">
                <input
                  type="text"
                  placeholder="NAME"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#FAFAFC] text-xs text-gray-700 placeholder-gray-400 px-5 py-4 rounded-[18px] border border-gray-100/80 outline-none focus:ring-2 focus:ring-gray-900/5 focus:bg-white focus:border-gray-300 transition-all font-bold tracking-wider text-center uppercase"
                  required
                />
              </div>
              <div className="w-full">
                <input
                  type="tel"
                  placeholder="PHONENUMBER"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-[#FAFAFC] text-xs text-gray-700 placeholder-gray-400 px-5 py-4 rounded-[18px] border border-gray-100/80 outline-none focus:ring-2 focus:ring-gray-900/5 focus:bg-white focus:border-gray-300 transition-all font-bold tracking-wider text-center uppercase"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#121212] text-white text-xs font-bold py-4 rounded-[18px] hover:bg-black active:scale-[0.98] transition-all cursor-pointer mt-1"
              >
                {submitted ? "Submitted!" : "Submit"}
              </button>
            </form>

            <div className="mt-8 mb-12">
              <a
                href="https://framespik.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs text-gray-400 hover:text-gray-600 transition-colors font-medium underline"
              >
                https://framespik.com/login
              </a>
            </div>

            <div className="text-center px-4 mt-auto">
              <p className="font-sans text-[11px] text-gray-400/70 font-semibold leading-relaxed">
                We will notify you once the photographer uploaded your images.
              </p>
            </div>
            
          </div>
        )}
      </div>

      {/* Navigation footer */}
      <nav className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md h-20 border-t border-gray-100/80 flex items-center justify-around px-8 pb-4 z-40">
        <button
          onClick={() => navigate("/")}
          className="flex flex-col items-center justify-center text-[#B5B5BE] hover:text-[#9A9AB0] p-2 hover:scale-105 active:scale-95 transition-all cursor-pointer bg-transparent border-0 outline-none"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
        </button>

        <div className="relative">
          <img
            src={userPic}
            alt="User Profile"
            className="w-11 h-11 rounded-[14px] object-cover border-2 border-white shadow-[0_4px_10px_rgba(0,0,0,0.12)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
          />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-gray-900 border border-white rounded-full flex items-center justify-center text-white text-[8px] shadow-sm select-none">
            <svg width="7" height="7" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="3" />
              <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
            </svg>
          </div>
        </div>

        <button className="relative flex flex-col items-center justify-center text-[#B5B5BE] hover:text-[#9A9AB0] p-2 hover:scale-105 active:scale-95 transition-all cursor-pointer bg-transparent border-0 outline-none">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 2.08.64 4.01 1.73 5.61L3 21l3.52-.72C7.99 20.82 9.92 21.2 12 21.2c5.52 0 10-4.48 10-10S17.52 2 12 2z" strokeWidth="0" />
          </svg>
          <div className="absolute top-1.5 right-1.5 w-2 h-2 bg-gray-900 rounded-full border border-white" />
        </button>
      </nav>

    </div>
  );
}

export default Moments;
