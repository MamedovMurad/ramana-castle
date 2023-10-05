'use client'
import React, { useState, useEffect } from 'react';

const LoadingBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress(progress + 1);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div className="loading-bar fixed top-0 left-0 w-full h-[4px] bg-gray-pale z-20">
      <div
        className="loading-bar-progress h-full bg-red-800 transition-transform"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default LoadingBar;