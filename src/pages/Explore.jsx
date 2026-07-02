import { useState } from "react";
import { useNavigate } from "react-router-dom";
import avatarBoyGreen from "@/assets/avatar_boy_green.png";
import avatarBoyRed from "@/assets/avatar_boy_red.png";
import avatarGirlYellow from "@/assets/avatar_girl_yellow.png";

function Explore() {
  const navigate = useNavigate();
  const [permissionStatus, setPermissionStatus] = useState("idle"); // 'idle', 'loading', 'denied'
  const [errorMessage, setErrorMessage] = useState("");

  const handleGetStarted = async () => {
    setPermissionStatus("loading");
    setErrorMessage("");

    try {
      // Request camera access
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      
      // Stop all tracks immediately to release the camera resource
      stream.getTracks().forEach(track => track.stop());
      
      setPermissionStatus("granted");
      navigate("/camera");
    } catch (error) {
      console.error("Camera permission error:", error);
      setPermissionStatus("denied");
      
      // Determine user-friendly error message based on error type
      if (error.name === "NotAllowedError" || error.name === "PermissionDeniedError") {
        setErrorMessage("Camera access was denied. Please enable camera access in your browser or site settings to continue.");
      } else if (error.name === "NotFoundError" || error.name === "DevicesNotFoundError") {
        setErrorMessage("No camera was found on this device. Please connect a camera and try again.");
      } else {
        setErrorMessage("Could not access camera: " + error.message);
      }
    }
  };

  return (
    <div className="w-full max-w-[425px] h-dvh max-h-dvh md:h-[844px] md:max-h-[844px] md:rounded-[40px] bg-white md:shadow-2xl mx-auto flex flex-col justify-between relative overflow-hidden md:border md:border-gray-100/50">

      {/* Top Action Icons */}
      <div className="absolute top-0 left-0 right-0 z-30 px-6 pt-10 pb-4 bg-transparent flex items-center justify-between">
        {/* Back Arrow Button */}
        <button
          onClick={() => navigate("/")}
          className="w-10 h-10 rounded-full bg-white shadow-[0_4px_12px_rgba(0,0,0,0.08)] flex items-center justify-center text-gray-600 hover:bg-gray-50 active:scale-95 transition-all cursor-pointer border border-gray-100"
        >
          <svg className="w-5 h-5 -ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Info/Help Button */}
        <button
          onClick={() => alert("Grant camera permission to capture your photo and browse matched collections.")}
          className="w-10 h-10 rounded-full bg-white shadow-[0_4px_12px_rgba(0,0,0,0.08)] flex items-center justify-center text-gray-600 font-bold hover:bg-gray-50 active:scale-95 transition-all cursor-pointer border border-gray-100"
        >
          ?
        </button>
      </div>

      {/* Center content */}
      <div className="flex-1 flex flex-col justify-center items-center">
        {/* Avatar Deck Container */}
        <div className="relative w-full flex justify-center items-center px-6" style={{ height: '192px' }}>

          {/* Left Card - Green Boy */}
          <div
            className="absolute rounded-3xl overflow-hidden shadow-lg bg-[#DAE3E7] origin-center z-0 transition-all hover:scale-105 duration-300 border border-white/40"
            style={{ width: '100px', height: '132px', left: '43px', top: '28px', transform: 'rotate(-6deg)' }}
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
            style={{ width: '100px', height: '132px', right: '43px', top: '28px', transform: 'rotate(6deg)' }}
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
          onClick={handleGetStarted}
          disabled={permissionStatus === "loading"}
          className="-mt-25 font-sans w-full bg-[#121212] text-[#F3F4F6] text-sm font-bold py-4 rounded-[18px] shadow-[0_8px_20px_rgba(0,0,0,0.12)] hover:bg-black active:scale-[0.98] transition-all cursor-pointer text-center flex items-center justify-center gap-2"
        >
          {permissionStatus === "loading" ? (
            <>
              <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Checking Camera...
            </>
          ) : (
            "Get Started"
          )}
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

      {/* Premium Glassmorphic Modal for Camera Permission Denied */}
      {permissionStatus === "denied" && (
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center p-6 z-50 animate-fade-in">
          <div className="bg-white/95 border border-gray-100 rounded-[28px] p-6 w-full max-w-[340px] shadow-2xl flex flex-col items-center text-center animate-scale-up">
            
            {/* Warning Icon Container */}
            <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            
            <h3 className="font-sans text-lg font-extrabold text-gray-900 mb-2">
              Camera Access Required
            </h3>
            
            <p className="font-sans text-xs text-gray-500 leading-relaxed mb-6">
              {errorMessage}
            </p>
            
            <div className="flex flex-col gap-2 w-full">
              <button
                onClick={handleGetStarted}
                className="font-sans w-full bg-[#121212] text-white text-xs font-bold py-3.5 rounded-[14px] hover:bg-black active:scale-[0.98] transition-all cursor-pointer"
              >
                Try Again
              </button>
              <button
                onClick={() => setPermissionStatus("idle")}
                className="font-sans w-full bg-transparent text-gray-500 text-xs font-semibold py-3 hover:text-gray-700 transition-all cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default Explore;
