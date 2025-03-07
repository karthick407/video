"use client";

import React from 'react';

const VideoCard = ({ title, src }) => {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105 m-6 overflow-hidden">
      {/* Video Section */}
      <iframe
        className="w-full aspect-video rounded-t-lg"
        src={src}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
          {title}
        </h3>
        <p className="text-gray-600 text-base">
          A captivating video that will leave you inspired and amazed.
        </p>
      </div>

      {/* Button Section */}
      <div className="px-6 pb-6">
        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:ring focus:ring-blue-300 focus:ring-offset-2 transition duration-300">
          Watch Now
        </button>
      </div>



    </div>
  );
};

export default VideoCard;
