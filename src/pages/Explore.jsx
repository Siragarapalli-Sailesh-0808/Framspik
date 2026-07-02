import { useNavigate } from "react-router-dom";
import avatarBoyGreen from "@/assets/avatar_boy_green.png";
import avatarBoyRed from "@/assets/avatar_boy_red.png";
import avatarGirlYellow from "@/assets/avatar_girl_yellow.png";

function Explore() {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-[425px] h-screen max-h-screen md:h-[844px] md:max-h-[844px] md:rounded-[40px] bg-white shadow-2xl mx-auto flex flex-col justify-between relative overflow-hidden border border-gray-100/50">

      {/* Top spacing */}
      <div className="pt-12" />

      {/* Center content */}
      <div className="flex-1 flex flex-col justify-center items-center">
        {/* Avatar Deck Container */}
        <div className="relative w-full flex justify-center items-center px-6" style={{ height: '192px' }}>

          {/* Left Card - Green Boy */}
          <div
            className="absolute rounded-3xl overflow-hidden shadow-lg bg-[#DAE3E7] origin-center z-0 transition-all hover:scale-105 duration-300 border border-white/40"
            style={{ width: '100px', height: '132px', left: '45px', top: '28px', transform: 'rotate(-6deg)' }}
          >
            <img
              src={avatarBoyGreen}
              alt="Avatar Green"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Card - Yellow Girl */}
          <div
            className="absolute rounded-3xl overflow-hidden shadow-lg bg-[#FCF5E3] origin-center z-0 transition-all hover:scale-105 duration-300 border border-white/40"
            style={{ width: '100px', height: '132px', right: '45px', top: '28px', transform: 'rotate(6deg)' }}
          >
            <img
              src={avatarGirlYellow}
              alt="Avatar Yellow"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Middle Card - Red Boy (featured/largest) */}
          <div
            className="absolute rounded-[28px] overflow-hidden shadow-xl shadow-red-500/10 bg-[#FADBD8] transition-all hover:scale-105 duration-300 border border-white/50"
            style={{ width: '116px', height: '150px', left: '50%', transform: 'translateX(-50%)', top: '12px', zIndex: 10 }}
          >
            <img
              src={avatarBoyRed}
              alt="Avatar Red"
              className="w-full h-full object-cover"
            />
          </div>

        </div>

        {/* Faint Watermarked Text */}
        <div className="text-[10px] uppercase tracking-[0.25em] text-gray-300/40 font-extrabold mt-12 mb-2 select-none">
          FRAMESPIK
        </div>

        {/* Title */}
        <h1 className="font-sans text-[28px] font-extrabold text-gray-900 tracking-tight text-center leading-[1.2] px-6">
          <span className="inline-flex items-center align-middle">
            <span className="-ml-0.5">Explore ton</span>
          </span>
          <br />
          Testing Content
        </h1>

        {/* Subtitle Description */}
        <p className="font-sans text-[13px] text-gray-400/80 font-medium text-center leading-relaxed mt-4 px-12">
          Framespik Descrpition here<br />Test Sentence will be given here.
        </p>

        {/* Page indicator Dots */}
        <div className="flex justify-center items-center gap-1.5 mt-8">
          <div style={{ width: '16px', height: '4px', borderRadius: '2px', backgroundColor: '#4b5563' }} />
          <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#e5e7eb' }} />
          <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#e5e7eb' }} />
        </div>
      </div>

      {/* Buttons and Footer note */}
      <div className="px-6 pb-6 flex flex-col w-full">
        {/* Get Started Button */}
        <button
          onClick={() => navigate("/")}
          className="-mt-25 font-sans w-full bg-[#121212] text-[#F3F4F6] text-sm font-bold py-4 rounded-[18px] shadow-[0_8px_20px_rgba(0,0,0,0.12)] hover:bg-black active:scale-[0.98] transition-all cursor-pointer text-center"        >
          Get Started
        </button>

        {/* Secondary account Button */}
        <button
          onClick={() => navigate("/")}
          className="font-sans w-full bg-white text-gray-800 text-sm font-bold py-4 rounded-[18px] border border-gray-100/60 shadow-[0_4px_12px_rgba(0,0,0,0.02)] hover:bg-gray-50 active:scale-[0.98] transition-all cursor-pointer text-center mt-3"
        >
          Go Back
        </button>

        {/* Privacy Note */}
        <p className="font-sans text-[10px] text-gray-400/60 font-medium text-center leading-relaxed mt-6 px-4">
          Test Inforamtion given here<br />
          Framespik info given here very formally.
        </p>
      </div>

    </div>
  );
}

export default Explore;
