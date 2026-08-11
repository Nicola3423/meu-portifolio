import React from 'react';

interface HeroAnimationProps {
  profileImg: string;
}

export const HeroAnimation: React.FC<HeroAnimationProps> = ({ profileImg }) => {
  return (
    <div className="hero-visual-wrapper" data-aos="fade-right" aria-label="Apresentação interativa com tecnologias e foto de Nicola Garofalo">
      {/* Background SVG Animated Circuit & Node Network */}
      <svg
        className="hero-svg-canvas"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="brandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--brand-light)" stopOpacity="0.85" />
            <stop offset="50%" stopColor="var(--hero-accent)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="var(--brand-strong)" stopOpacity="0.75" />
          </linearGradient>

          <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#ff9f43" stopOpacity="0.8" />
          </linearGradient>

          <radialGradient id="pulseGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--hero-accent)" stopOpacity="0.4" />
            <stop offset="60%" stopColor="var(--hero-accent)" stopOpacity="0.1" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--brand-light)" stopOpacity="0.25" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>

          {/* Filters for neon glow */}
          <filter id="svgGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="7" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Ambient Radial Core Glow */}
        <circle cx="250" cy="250" r="210" fill="url(#coreGlow)" className="svg-ambient-glow" />

        {/* Circuit Board Trace Lines (Outer Ring & Connections) */}
        <g className="svg-circuits" stroke="var(--line-strong)" strokeWidth="1.2" opacity="0.6">
          {/* Top Left Circuit */}
          <path d="M 120 70 L 160 110 L 210 110" fill="none" strokeDasharray="3 3" />
          <circle cx="120" cy="70" r="3.5" fill="var(--hero-accent)" />
          
          {/* Top Right Circuit */}
          <path d="M 380 70 L 340 110 L 290 110" fill="none" strokeDasharray="3 3" />
          <circle cx="380" cy="70" r="3.5" fill="var(--brand-light)" />

          {/* Bottom Left Circuit */}
          <path d="M 80 390 L 140 390 L 180 350" fill="none" strokeDasharray="3 3" />
          <circle cx="80" cy="390" r="3.5" fill="var(--accent)" />

          {/* Bottom Right Circuit */}
          <path d="M 420 380 L 360 380 L 320 340" fill="none" strokeDasharray="3 3" />
          <circle cx="420" cy="380" r="3.5" fill="var(--hero-accent)" />

          {/* Grid Connectors */}
          <line x1="50" y1="250" x2="100" y2="250" strokeDasharray="4 4" />
          <circle cx="50" cy="250" r="3" fill="var(--brand)" />
          <line x1="400" y1="250" x2="450" y2="250" strokeDasharray="4 4" />
          <circle cx="450" cy="250" r="3" fill="var(--brand)" />
        </g>

        {/* Animated Data Packets Flowing on Circuits */}
        <g className="svg-data-packets">
          <path
            className="data-stream stream-1"
            d="M 60 140 L 150 140 L 210 200"
            fill="none"
            stroke="url(#brandGrad)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            className="data-stream stream-2"
            d="M 440 360 L 350 360 L 290 300"
            fill="none"
            stroke="url(#brandGrad)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            className="data-stream stream-3"
            d="M 370 120 L 300 120 L 260 160"
            fill="none"
            stroke="url(#accentGrad)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>

        {/* Outer Orbit Track */}
        <circle
          cx="250"
          cy="250"
          r="215"
          fill="none"
          stroke="var(--hero-accent)"
          strokeWidth="1"
          strokeDasharray="6 14"
          opacity="0.35"
          className="svg-orbit-outer"
        />

        {/* Middle Dashed Orbit Track */}
        <circle
          cx="250"
          cy="250"
          r="185"
          fill="none"
          stroke="var(--brand-light)"
          strokeWidth="1.5"
          strokeDasharray="28 40"
          opacity="0.45"
          className="svg-orbit-middle"
        />

        {/* Rotating Tech Reticle / Angular Arcs */}
        <g className="svg-reticle-group">
          {/* Arc 1 */}
          <path
            d="M 250 45 A 205 205 0 0 1 430 150"
            fill="none"
            stroke="url(#brandGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            filter="url(#svgGlow)"
          />
          {/* Arc 2 */}
          <path
            d="M 250 455 A 205 205 0 0 1 70 350"
            fill="none"
            stroke="url(#brandGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            filter="url(#svgGlow)"
          />
          {/* Orbit Node Pulse 1 */}
          <circle cx="430" cy="150" r="5" fill="var(--hero-accent)" filter="url(#svgGlow)" />
          <circle cx="70" cy="350" r="5" fill="var(--brand-light)" filter="url(#svgGlow)" />
        </g>

        {/* Counter-rotating Segmented Ring */}
        <g className="svg-counter-ring">
          <circle
            cx="250"
            cy="250"
            r="160"
            fill="none"
            stroke="var(--line-strong)"
            strokeWidth="1"
            strokeDasharray="12 18 4 18"
            opacity="0.5"
          />
          <circle cx="363" cy="137" r="4" fill="var(--accent)" />
          <circle cx="137" cy="363" r="4" fill="var(--hero-accent)" />
        </g>

        {/* Decorative Modern HUD Corner Accents */}
        <g className="svg-hud-corners" stroke="var(--hero-accent)" strokeWidth="1.5" fill="none" opacity="0.6">
          <path d="M 60 80 L 60 60 L 80 60" />
          <path d="M 440 80 L 440 60 L 420 60" />
          <path d="M 60 420 L 60 440 L 80 440" />
          <path d="M 440 420 L 440 440 L 420 440" />
        </g>

        {/* Code Matrix Symbols & Data Particles */}
        <g className="svg-code-particles" fill="var(--hero-accent)" opacity="0.75">
          <text x="75" y="195" fontFamily="monospace" fontSize="12" fontWeight="bold">01</text>
          <text x="410" y="210" fontFamily="monospace" fontSize="12" fontWeight="bold">=&gt;</text>
          <text x="95" y="325" fontFamily="monospace" fontSize="13" fontWeight="bold">&#123; &#125;</text>
          <text x="390" y="315" fontFamily="monospace" fontSize="12" fontWeight="bold">C#</text>
          <text x="240" y="32" fontFamily="monospace" fontSize="10" letterSpacing="3">.NET 8</text>
        </g>
      </svg>

      {/* Center Profile Card with Tech Frame */}
      <div className="hero-code-frame" aria-label="Retrato de Nicola Garofalo">
        <div className="code-frame-border">
          <img
            src={profileImg}
            alt="Nicola Garofalo, desenvolvedor full stack"
            className="code-frame-image"
            width="800"
            height="800"
          />
          <div className="frame-scanline" aria-hidden="true" />
        </div>
        <span className="code-frame-symbol" aria-hidden="true">&lt;/&gt;</span>
      </div>

      {/* Floating Micro-Badges around the avatar */}
      <div className="floating-badge badge-csharp" title="C# & .NET 8 Ecosystem">
        <span className="badge-pulse" />
        <i className="fa-solid fa-code" aria-hidden="true" />
        <span>C# · .NET 8</span>
      </div>

      <div className="floating-badge badge-sql" title="SQL Server & Database Architecture">
        <i className="fa-solid fa-database" aria-hidden="true" />
        <span>SQL Server</span>
      </div>

      <div className="floating-badge badge-api" title="REST API & Architecture">
        <span className="badge-dot" />
        <span>Clean Arch · REST</span>
      </div>

      <div className="floating-status" title="Status atual: Disponível para novas oportunidades e desafios">
        <span className="status-live-dot" />
        <span>Disponível para projetos</span>
      </div>
    </div>
  );
};
