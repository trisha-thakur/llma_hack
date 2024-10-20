import React from "react";

const Video = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <h2 className="text-5xl font-bold mb-8">Video Demo</h2>
      <video
        className="rounded-lg w-full max-w-3xl" 
        controls
        src="/demo.mp4" 
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
