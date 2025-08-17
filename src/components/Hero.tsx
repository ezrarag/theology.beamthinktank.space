'use client';

import { useState } from 'react';

const religiousEyes = [
  {
    id: 'islam',
    name: 'Islam',
    symbol: '☪️',
    eyeOpen: '👁️',
    eyeClosed: '👁️‍🗨️'
  },
  {
    id: 'christianity',
    name: 'Christianity',
    symbol: '✝️',
    eyeOpen: '👁️',
    eyeClosed: '👁️‍🗨️'
  },
  {
    id: 'hinduism',
    name: 'Hinduism',
    symbol: '🕉️',
    eyeOpen: '👁️',
    eyeClosed: '👁️‍🗨️'
  },
  {
    id: 'buddhism',
    name: 'Buddhism',
    symbol: '☸️',
    eyeOpen: '👁️',
    eyeClosed: '👁️‍🗨️'
  },
  {
    id: 'judaism',
    name: 'Judaism',
    symbol: '✡️',
    eyeOpen: '👁️',
    eyeClosed: '👁️‍🗨️'
  }
];

export default function Hero() {
  const [hoveredEye, setHoveredEye] = useState<string | null>(null);

  return (
    <section className="relative bg-black text-white min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
      </div>

      <div className="relative z-10 text-center">
        {/* Religious Eyes Grid */}
        <div className="grid grid-cols-5 gap-8 md:gap-12 lg:gap-16">
          {religiousEyes.map((religion) => (
            <div
              key={religion.id}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredEye(religion.id)}
              onMouseLeave={() => setHoveredEye(null)}
            >
              {/* Eye Container */}
              <div className="relative w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 mx-auto">
                {/* Hand-drawn Eye SVG */}
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full transition-all duration-500 ease-in-out"
                >
                  {/* Eye Outline */}
                  <ellipse
                    cx="50"
                    cy="50"
                    rx="40"
                    ry="25"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    className="transition-all duration-500"
                  />
                  
                  {/* Eyelid */}
                  <path
                    d="M 10 50 Q 50 20 90 50"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    className={`transition-all duration-500 ${
                      hoveredEye === religion.id ? 'opacity-0' : 'opacity-100'
                    }`}
                  />
                  
                  {/* Iris */}
                  <circle
                    cx="50"
                    cy="50"
                    r="15"
                    fill="white"
                    className="transition-all duration-500"
                  />
                  
                  {/* Pupil */}
                  <circle
                    cx="50"
                    cy="50"
                    r="8"
                    fill="black"
                    className="transition-all duration-500"
                  />
                  
                  {/* Religious Symbol (hidden by default, shown on hover) */}
                  <text
                    x="50"
                    y="55"
                    textAnchor="middle"
                    fontSize="20"
                    fill="white"
                    className={`transition-all duration-500 ${
                      hoveredEye === religion.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    {religion.symbol}
                  </text>
                </svg>
              </div>

              {/* Religion Name */}
              <p className="text-sm md:text-base text-white/80 mt-4 font-light tracking-wide">
                {religion.name}
              </p>

              {/* Hover Effect Glow */}
              <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
                hoveredEye === religion.id 
                  ? 'bg-white/10 scale-110 blur-xl' 
                  : 'bg-transparent scale-100'
              }`}></div>
            </div>
          ))}
        </div>

        {/* Subtle Call to Action */}
        <div className="mt-16 opacity-40">
          <div className="w-1 h-16 bg-white/30 mx-auto"></div>
          <p className="text-white/30 text-xs tracking-widest mt-4 font-light">
            HOVER TO EXPLORE
          </p>
        </div>
      </div>

      {/* Ambient Light Effects */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </section>
  );
}
