import React from 'react';

interface HeroAnimationProps {
  profileImg: string;
}

export const HeroAnimation: React.FC<HeroAnimationProps> = ({ profileImg }) => {
  return (
    <div className="hero-visual-wrapper" data-aos="fade-right">
      <div className="hero-orbit-system" aria-hidden="true">
        <span className="hero-orbit hero-orbit-outer" />
        <span className="hero-orbit hero-orbit-middle" />
        <span className="hero-orbit hero-orbit-inner" />
        <span className="hero-orbit-node hero-orbit-node-one" />
        <span className="hero-orbit-node hero-orbit-node-two" />
        <span className="hero-circuit-line hero-circuit-line-one" />
        <span className="hero-circuit-line hero-circuit-line-two" />
        <span className="hero-circuit-code hero-circuit-code-one">01</span>
        <span className="hero-circuit-code hero-circuit-code-two">C#</span>
      </div>

      <div className="hero-code-frame">
        <div className="code-frame-border">
          <img
            src={profileImg}
            alt="Nicola Garofalo, desenvolvedor C# Full Stack"
            className="code-frame-image"
            width="800"
            height="800"
            loading="eager"
            decoding="async"
          />
        </div>
        <span className="code-frame-symbol" aria-hidden="true">&lt;/&gt;</span>
      </div>

      <div className="floating-badge badge-csharp" title="C# e .NET 8">
        <i className="fa-solid fa-code" aria-hidden="true" />
        <span>C# · .NET 8</span>
      </div>

      <div className="floating-badge badge-sql" title="SQL Server e persistência de dados">
        <i className="fa-solid fa-database" aria-hidden="true" />
        <span>SQL Server</span>
      </div>

      <div className="floating-badge badge-api" title="Domain-Driven Design e princípios SOLID">
        <i className="fa-solid fa-diagram-project" aria-hidden="true" />
        <span>DDD · SOLID</span>
      </div>

      <div className="floating-status" title="Experiência profissional full stack">
        <span className="status-live-dot" aria-hidden="true" />
        <span>Experiência Full Stack</span>
      </div>
    </div>
  );
};
