import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import camOverlay from "@/assets/Cam_Overlay.png";

function Camera() {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [error, setError] = useState(false);
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    let activeStream = null;
    async function startCamera() {
      try {
        const s = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "user" }
        });
        activeStream = s;
        setStream(s);
        if (videoRef.current) {
          videoRef.current.srcObject = s;
        }
      } catch (err) {
        console.error("Camera acquisition failed:", err);
        setError(true);
      }
    }

    startCamera();

    return () => {
      if (activeStream) {
        activeStream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const handleCapture = () => {
    setFlash(true);

    // Capture the photo from the video stream
    if (videoRef.current) {
      try {
        const video = videoRef.current;
        const canvas = document.createElement("canvas");
        canvas.width = video.videoWidth || 640;
        canvas.height = video.videoHeight || 480;
        const ctx = canvas.getContext("2d");
        
        // Mirror the canvas context to match the mirrored video feed
        ctx.translate(canvas.width, 0);
        ctx.scale(-1, 1);
        
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const dataUrl = canvas.toDataURL("image/jpeg", 0.85);
        localStorage.setItem("capturedSelfie", dataUrl);
      } catch (err) {
        console.error("Canvas frame capture failed:", err);
      }
    }

    // Set simulator flag to false for normal capture
    localStorage.setItem("simulateNoMatch", "false");

    // Redirect to moments screen immediately after the flash completes (150ms)
    setTimeout(() => {
      setFlash(false);
      navigate("/moments");
    }, 150);
  };

  const handleCaptureNoMatch = () => {
    setFlash(true);

    // Capture the photo from the video stream
    if (videoRef.current) {
      try {
        const video = videoRef.current;
        const canvas = document.createElement("canvas");
        canvas.width = video.videoWidth || 640;
        canvas.height = video.videoHeight || 480;
        const ctx = canvas.getContext("2d");
        
        // Mirror the canvas context to match the mirrored video feed
        ctx.translate(canvas.width, 0);
        ctx.scale(-1, 1);
        
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const dataUrl = canvas.toDataURL("image/jpeg", 0.85);
        localStorage.setItem("capturedSelfie", dataUrl);
      } catch (err) {
        console.error("Canvas frame capture failed:", err);
      }
    }

    // Set simulator flag to true to force fallback oops screen
    localStorage.setItem("simulateNoMatch", "true");

    // Redirect to moments screen
    setTimeout(() => {
      setFlash(false);
      navigate("/moments");
    }, 150);
  };

  return (
    <div className="w-full max-w-[425px] h-dvh max-h-dvh md:h-[844px] md:max-h-[844px] md:rounded-[40px] bg-black md:shadow-2xl mx-auto flex flex-col justify-between relative overflow-hidden md:border md:border-gray-100/50">
      
      {/* Live Video Feed */}
      <div className="absolute inset-0 bg-gray-900 z-10 flex items-center justify-center">
        {error ? (
          <div className="text-white text-center p-6 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-3">
              <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <p className="font-semibold text-base mb-1">Camera Access Blocked</p>
            <p className="text-xs text-gray-400 max-w-[280px]">
              Please check your browser permissions or enable camera access in your device settings.
            </p>
            <button
              onClick={() => navigate("/explore")}
              className="mt-6 px-5 py-2.5 bg-white/10 hover:bg-white/20 active:scale-95 text-white text-xs font-semibold rounded-xl border border-white/10 cursor-pointer transition-all"
            >
              Go Back
            </button>
          </div>
        ) : (
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="w-full h-full object-cover scale-x-[-1]"
          />
        )}
      </div>

      {/* Camera Frame Overlay */}
      {!error && (
        <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center p-6">
          <img
            src={camOverlay}
            alt="Camera Guide Overlay"
            className="w-full h-[72%] object-contain select-none"
          />
        </div>
      )}

      {/* Top Bar Navigation (Floating overlay) */}
      <div className="absolute top-0 left-0 right-0 z-30 px-6 pt-10 pb-4 flex items-center justify-between">
        {/* Back Button */}
        <button
          onClick={() => navigate("/explore")}
          className="w-10 h-10 rounded-full bg-white shadow-[0_4px_12px_rgba(0,0,0,0.12)] flex items-center justify-center text-gray-600 hover:bg-gray-50 active:scale-95 transition-all cursor-pointer border border-gray-100"
        >
          <svg className="w-5 h-5 -ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Title */}
        <span className="font-sans text-[15px] font-semibold text-gray-800 tracking-tight">
          Check your face
        </span>

        {/* Actions Button Group (Simulation + Help) */}
        <div className="flex items-center gap-2">
          {/* Subtle Simulation Trigger Button (Simulates No Match) */}
          <button
            onClick={handleCaptureNoMatch}
            className="w-10 h-10 rounded-full bg-red-50/90 shadow-[0_4px_12px_rgba(0,0,0,0.08)] flex items-center justify-center text-red-500 hover:bg-red-100 active:scale-95 transition-all cursor-pointer border border-red-100"
            title="Simulate No Match (Fallback Screen)"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </button>

          {/* Info/Help Button */}
          <button
            onClick={() => alert("Please line up your face within the guide overlay on screen and capture.")}
            className="w-10 h-10 rounded-full bg-white shadow-[0_4px_12px_rgba(0,0,0,0.12)] flex items-center justify-center text-gray-600 font-bold hover:bg-gray-50 active:scale-95 transition-all cursor-pointer border border-gray-100"
          >
            ?
          </button>
        </div>
      </div>

      {/* Bottom Camera Button */}
      {!error && (
        <div className="absolute bottom-10 left-0 right-0 z-30 flex justify-center items-center">
          <button
            onClick={handleCapture}
            className="w-[72px] h-[72px] rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 hover:from-blue-700 hover:to-indigo-600 active:scale-95 shadow-lg shadow-blue-500/35 border-4 border-white/90 flex items-center justify-center cursor-pointer transition-all duration-200"
          >
            {/* White Camera Icon */}
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        </div>
      )}

      {/* Screen Flash Effect on Capture */}
      {flash && (
        <div className="absolute inset-0 bg-white z-50 animate-fade-in pointer-events-none" />
      )}



    </div>
  );
}

export default Camera;
