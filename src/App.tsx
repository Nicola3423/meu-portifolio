import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles.css';

import profileImg from './images/profile.jpg';
import odontologicoImg from './images/Odontologico.png';
import CurriculoPdf from './statics/Curriculo.pdf';

const navItems = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Formação', href: '#formacao' },
  { label: 'Projetos', href: '#projetos' },
];

const projects = [
  {
    number: '01',
    context: 'Projeto acadêmico FIAP',
    category: 'Full stack',
    title: 'Sistema de Odontologia',
    description:
      'Aplicação em C# MVC para gerenciar médicos e pacientes, com banco Oracle, documentação de API e logs estruturados.',
    tech: ['C#', 'ASP.NET MVC', 'Oracle SQL', 'Swagger', 'Entity Framework'],
    link: 'https://github.com/Nicola3423/Sprint03-dotnet',
    linkLabel: 'Explorar código no GitHub',
    image: odontologicoImg,
    imageAlt: 'Tela inicial do sistema de odontologia',
  },
];

const capabilityGroups = [
  {
    number: '01',
    icon: 'fa-solid fa-code',
    title: 'Back-end & APIs',
    description: 'Regras de negócio, autenticação e integrações bem documentadas.',
    skills: ['C#', '.NET 8', 'ASP.NET Core MVC', 'Web API', 'REST', 'JWT', 'Swagger'],
  },
  {
    number: '02',
    icon: 'fa-solid fa-window-maximize',
    title: 'Interfaces',
    description: 'Experiências responsivas conectadas ao contexto do produto.',
    skills: ['Angular', 'JavaScript', 'Razor', 'Bootstrap', 'jQuery', 'HTML & CSS'],
  },
  {
    number: '03',
    icon: 'fa-solid fa-database',
    title: 'Dados & Arquitetura',
    description: 'Estruturas sustentáveis, consultas eficientes e código legível.',
    skills: ['SQL Server', 'Entity Framework Core', 'DDD', 'SOLID', 'Clean Code', 'xUnit'],
  },
  {
    number: '04',
    icon: 'fa-solid fa-code-branch',
    title: 'Entrega & Colaboração',
    description: 'Do versionamento à entrega contínua em times ágeis.',
    skills: ['Azure DevOps', 'Git', 'Pipelines', 'Scrum', 'Azure', 'Redis · familiaridade'],
  },
];

const experiences = [
  {
    period: '08/2025 — atual',
    role: 'Desenvolvedor Full Stack',
    company: 'Império Inteligência',
    badge: 'Promoção interna',
    highlights: [
      'Evolução de aplicações corporativas em C# e .NET 8, do banco de dados à interface.',
      'Desenvolvimento de APIs REST com JWT, DTOs e documentação Swagger/OpenAPI.',
      'Interfaces e painéis com Angular, MVC, Bootstrap e jQuery, além de testes xUnit em pipelines.',
    ],
  },
  {
    period: '06/2024 — 08/2025',
    role: 'Estagiário em Desenvolvimento .NET',
    company: 'Império Inteligência',
    highlights: [
      'Migração, suporte e modernização de módulos corporativos para .NET 8.',
      'Correção de bugs e melhorias em sistemas integrados ao SQL Server, com foco em Clean Code.',
    ],
  },
];

const getInitialTheme = () => {
  if (typeof window === 'undefined') return false;

  const storedTheme = window.localStorage.getItem('portfolio-theme');
  if (storedTheme) return storedTheme === 'dark';

  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
};

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 650, easing: 'ease-out-cubic', once: true, offset: 70 });
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = isDarkMode ? 'dark' : 'light';
    window.localStorage.setItem('portfolio-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => {
      window.removeEventListener('keydown', closeOnEscape);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="app-shell">
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>

      <nav className="main-nav" aria-label="Navegação principal">
        <div className="nav-content">
          <a className="brand" href="#inicio" onClick={closeMenu} aria-label="Nicola Garofalo — início">
            <span className="brand-name">Nicola</span>
            <span className="brand-slash" aria-hidden="true">/</span>
          </a>

          <div id="primary-navigation" className={`nav-links ${isMenuOpen ? 'is-open' : ''}`}>
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
            <a className="nav-contact" href="#contato" onClick={closeMenu}>
              Contato
            </a>
          </div>

          <div className="nav-actions">
            <button
              className="theme-toggle"
              type="button"
              onClick={() => setIsDarkMode((current) => !current)}
              aria-label={isDarkMode ? 'Ativar tema claro' : 'Ativar tema escuro'}
              aria-pressed={isDarkMode}
              title={isDarkMode ? 'Ativar tema claro' : 'Ativar tema escuro'}
            >
              <i className={isDarkMode ? 'fa-solid fa-sun' : 'fa-solid fa-moon'} aria-hidden="true" />
            </button>

            <button
              className={`menu-toggle ${isMenuOpen ? 'is-open' : ''}`}
              type="button"
              onClick={() => setIsMenuOpen((current) => !current)}
              aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={isMenuOpen}
              aria-controls="primary-navigation"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <button className="nav-overlay" type="button" onClick={closeMenu} aria-label="Fechar menu" />
      )}

      <main id="conteudo">
        <header id="inicio" className="hero-section">
          <div className="section-container hero-content">
            <div className="hero-code-frame" data-aos="fade-right" aria-label="Retrato de Nicola Garofalo">
              <div className="code-frame-border">
                <img
                  src={profileImg}
                  alt="Nicola Garofalo, desenvolvedor full stack"
                  className="code-frame-image"
                  width="800"
                  height="800"
                />
              </div>
              <span className="code-frame-symbol" aria-hidden="true">&lt;/&gt;</span>
            </div>

            <div className="hero-intro" data-aos="fade-left" data-aos-delay="100">
              <p className="hero-greeting">Olá, eu sou Nicola<span>.</span></p>
              <h1>Desenvolvedor <span>C# Full Stack</span></h1>
              <p className="hero-stack-line">.NET 8 · Angular · SQL Server</p>

              <div className="hero-tech-row" aria-label="Principais tecnologias">
                <span className="hero-tech-glyph hero-tech-text" title="C#">C#</span>
                <span className="hero-tech-glyph hero-tech-text" title=".NET 8">.NET</span>
                <span className="hero-tech-glyph" title="Angular" aria-label="Angular">
                  <i className="fa-brands fa-angular" aria-hidden="true" />
                </span>
                <span className="hero-tech-glyph" title="SQL Server" aria-label="SQL Server">
                  <i className="fa-solid fa-database" aria-hidden="true" />
                </span>
                <span className="hero-tech-glyph" title="Git" aria-label="Git">
                  <i className="fa-brands fa-git-alt" aria-hidden="true" />
                </span>
              </div>

              <div className="hero-quick-links">
                <a href="#projetos">
                  Ver projetos <i className="fa-solid fa-arrow-down" aria-hidden="true" />
                </a>
                <a href={CurriculoPdf} download="Curriculo_Nicola_Garofalo.pdf">
                  Baixar currículo <i className="fa-solid fa-download" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          <a className="hero-scroll-cue" href="#projetos" aria-label="Ir para a próxima seção">
            <span>Conheça meu trabalho</span>
            <i className="fa-solid fa-arrow-down" aria-hidden="true" />
          </a>
        </header>

        <section id="projetos" className="section projects-section">
          <div className="section-container">
            <div className="section-heading" data-aos="fade-up">
              <div>
                <p className="section-kicker">Projeto selecionado</p>
                <h2>Um projeto que representa meu repertório técnico.</h2>
              </div>
              <p>
                Uma aplicação completa em C# que reúne interface, regras de negócio, persistência e documentação.
              </p>
            </div>

            <div className="projects-grid">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="project-card project-card-only"
                  data-aos="fade-up"
                >
                  <div className="project-visual">
                    <span className="project-number">{project.number}</span>
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <div className="project-content">
                    <div className="project-meta">
                      <span>{project.context}</span>
                      <span>{project.category}</span>
                    </div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <ul className="tech-list" aria-label={`Tecnologias do projeto ${project.title}`}>
                      {project.tech.map((tech) => <li key={tech}>{tech}</li>)}
                    </ul>
                    <a className="text-link" href={project.link} target="_blank" rel="noopener noreferrer">
                      {project.linkLabel} <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experiencia" className="section experience-section">
          <div className="section-container experience-layout">
            <div className="experience-intro" data-aos="fade-right">
              <p className="section-kicker">Experiência</p>
              <h2>Crescimento construído na prática.</h2>
              <p>
                Minha trajetória combina evolução técnica, proximidade com regras de negócio e participação no
                ciclo completo de produtos corporativos.
              </p>

              <div id="formacao" className="education-card">
                <div className="education-icon" aria-hidden="true">
                  <i className="fa-solid fa-graduation-cap" />
                </div>
                <div>
                  <span>Formação · 2025</span>
                  <strong>Análise e Desenvolvimento de Sistemas</strong>
                  <p>FIAP · Inglês intermediário</p>
                </div>
              </div>
            </div>

            <div className="timeline">
              {experiences.map((experience, index) => (
                <article className="timeline-item" key={experience.period} data-aos="fade-up" data-aos-delay={index * 80}>
                  <div className="timeline-marker" aria-hidden="true"><span /></div>
                  <div className="timeline-card">
                    <div className="timeline-topline">
                      <span className="timeline-period">{experience.period}</span>
                      {experience.badge && <span className="timeline-badge">{experience.badge}</span>}
                    </div>
                    <h3>{experience.role}</h3>
                    <p className="timeline-company">{experience.company}</p>
                    <ul>
                      {experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="stack" className="section stack-section">
          <div className="section-container">
            <div className="section-heading stack-heading" data-aos="fade-up">
              <div>
                <p className="section-kicker">Stack & competências</p>
                <h2>Ferramentas organizadas pelo que ajudam a resolver.</h2>
              </div>
              <p>
                Mais do que uma lista de tecnologias, este é o conjunto que uso para construir, manter e evoluir
                software com consistência.
              </p>
            </div>

            <div className="capabilities-grid">
              {capabilityGroups.map((group, index) => (
                <article className="capability-card" key={group.title} data-aos="fade-up" data-aos-delay={index * 60}>
                  <div className="capability-topline">
                    <span>{group.number}</span>
                    <i className={group.icon} aria-hidden="true" />
                  </div>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                  <ul>
                    {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="sobre" className="section about-section">
          <div className="section-container about-layout">
            <div className="about-statement" data-aos="fade-right">
              <p className="section-kicker">Sobre mim</p>
              <h2>A curiosidade virou profissão. A evolução continua.</h2>
              <p>
                Meu interesse por tecnologia começou com jogos e com a vontade de entender como experiências
                digitais eram construídas. Hoje, essa mesma curiosidade guia meu trabalho com sistemas que
                precisam ser confiáveis, claros e fáceis de evoluir.
              </p>
              <a className="text-link" href={CurriculoPdf} target="_blank" rel="noopener noreferrer">
                Abrir currículo completo <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" />
              </a>
            </div>

            <div className="principles-grid">
              <article data-aos="fade-up">
                <span>01</span>
                <i className="fa-solid fa-diagram-project" aria-hidden="true" />
                <h3>Contexto antes do código</h3>
                <p>Entender a regra de negócio para transformar complexidade em uma solução útil.</p>
              </article>
              <article data-aos="fade-up" data-aos-delay="70">
                <span>02</span>
                <i className="fa-solid fa-shield-halved" aria-hidden="true" />
                <h3>Qualidade por padrão</h3>
                <p>Clean Code, SOLID, testes e documentação como parte natural da entrega.</p>
              </article>
              <article data-aos="fade-up" data-aos-delay="140">
                <span>03</span>
                <i className="fa-solid fa-arrow-trend-up" aria-hidden="true" />
                <h3>Evolução contínua</h3>
                <p>Aprender, testar e refinar — tanto o produto quanto a forma de construí-lo.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="contato" className="contact-section">
          <div className="section-container">
            <div className="contact-card" data-aos="fade-up">
              <div className="contact-grid" aria-hidden="true" />
              <div className="contact-copy">
                <p className="section-kicker">Vamos conversar</p>
                <h2>Tem um desafio em mente? Quero ouvir sobre ele.</h2>
                <p>
                  Estou sempre aberto a trocar ideias sobre produtos, engenharia de software e novas
                  oportunidades profissionais.
                </p>
              </div>
              <div className="contact-actions">
                <a className="button button-light" href="mailto:montecravonicola@gmail.com">
                  <i className="fa-regular fa-envelope" aria-hidden="true" /> Enviar e-mail
                </a>
                <a
                  className="button button-dark-outline"
                  href="https://www.linkedin.com/in/nicola-monte-cravo-garofalo-3757902b0/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-linkedin-in" aria-hidden="true" /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="main-footer">
        <div className="section-container footer-content">
          <a className="brand footer-brand" href="#inicio" aria-label="Voltar ao início">
            <span className="brand-mark" aria-hidden="true">NG</span>
            <span className="brand-name">Nicola Garofalo</span>
          </a>
          <p>Desenvolvedor C# Full Stack · São Paulo, SP</p>
          <div className="footer-social" aria-label="Redes profissionais">
            <a href="https://github.com/Nicola3423" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fa-brands fa-github" aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/nicola-monte-cravo-garofalo-3757902b0/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fa-brands fa-linkedin-in" aria-hidden="true" />
            </a>
            <a href="mailto:montecravonicola@gmail.com" aria-label="E-mail">
              <i className="fa-regular fa-envelope" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="section-container footer-bottom">
          <p>© {new Date().getFullYear()} Nicola Monte Cravo Garofalo.</p>
          <a href="#inicio">Voltar ao topo <i className="fa-solid fa-arrow-up" aria-hidden="true" /></a>
        </div>
      </footer>
    </div>
  );
};

export default App;
