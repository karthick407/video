// components/Video.js
import React from 'react';
import VideoCard from './VideoCard';

const Video = ({ videos }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-400 via-pink-300 to-blue-300 p-8">
      <h1 className="text-4xl font-extrabold text-white text-center mb-8 drop-shadow-lg">
        CODE BRAHMA
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video, index) => (
          <VideoCard key={index} title={video.title} src={video.src} />
        ))}

 

      </div>
      <footer className="mt-12 text-center text-white text-sm opacity-80">
        Built with ❤️ using Tailwind CSS
      </footer>
    </div>
  );
};

  

export default Video;