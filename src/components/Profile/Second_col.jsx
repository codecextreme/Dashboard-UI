import React, { useState } from 'react';

export default function Second_col() {
  const [progress2] = useState(68);

  const circleSize = 100;
  const strokeWidth = 12;
  const radius = (circleSize - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset2 = circumference - (progress2 / 100) * circumference;

  return (
    <div
      style={{
        width: circleSize,
        height: circleSize,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 0,
        margin: 0,
      }}
    >
      <svg width={circleSize} height={circleSize}>
        <defs>
          <linearGradient id="backgroundFillGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="-25%" stopColor="rgba(6, 11, 40, 0.7)" />
            <stop offset="30%" stopColor="rgba(8, 13, 37, 0.71216)" />
            <stop offset="84%" stopColor="rgba(10, 14, 35, 0.35)" />
          </linearGradient>

          <linearGradient id="gradientProgressGreen" x1="0%" y1="45%" x2="70%" y2="100%">
            <stop offset="0%" stopColor="#05CD99" />
            <stop offset="90%" stopColor="rgba(5, 205, 153, 0)" />
          </linearGradient>
        </defs>

        {/* Gradient-filled base circle */}
        <circle
          cx={circleSize / 2}
          cy={circleSize / 2}
          r={radius}
          fill="url(#backgroundFillGradient)"
        />

        {/* Optional background track ring */}
        <circle
          cx={circleSize / 2}
          cy={circleSize / 2}
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth={strokeWidth}
        />

        {/* Foreground progress ring */}
        <circle
          cx={circleSize / 2}
          cy={circleSize / 2}
          r={radius}
          fill="none"
          stroke="url(#gradientProgressGreen)"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset2}
          strokeLinecap="round"
          transform={`rotate(-270, ${circleSize / 2}, ${circleSize / 2})`}
          style={{ transition: "stroke-dashoffset 0.5s ease" }}
        />

        {/* Progress value text */}
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".3em"
          fontSize="24"
          fill="#fff"
          fontWeight="bold"
        >
          {progress2}%
        </text>
      </svg>
    </div>
  );
}
