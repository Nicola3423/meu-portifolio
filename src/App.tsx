import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { useForm } from '@formspree/react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet-async';
import Loader from './Loader';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles.css';

// Importe as imagens
import javaImg from './images/Java.png';
import reactImg from './images/React.svg';
import springBootImg from './images/SpringBoot.jpg';
import tsImg from './images/TypeScript.png';
import profileImg from './images/profile.jpg';
import mvcImg from './images/MVC.png';

const skills = [
  { name: 'Java', image: javaImg },
  { name: 'React', image: reactImg },
  { name: 'Spring Boot', image: springBootImg },
  { name: 'TypeScript', image: tsImg },
  { name: 'MVC', image: mvcImg }
];

const projects = [
  {
    title: "Site React",
    description: "Plataforma em REACT feita para um trabalho juntamente com a salesforce e a Fiap ",
    tech: ["React", "Figma"],
    link: "https://sprint4-sigma.vercel.app",
    image: "/Sales.png"
  },
  {
    title: "Projeto Spring Boot", 
    description: "Projeto em spring para cadastro e gerenciamento de medico e pacientes utilizando um sistema de login com spring security",
    tech: ["Java", "MySQL", "Spring Boot", "Spring Security", "JPA Hibernate", "Lombok", "Swagger", "SOLID", "Teste Unitarios"],
    link: "https://github.com/Nicola3423/API-MEDICOS",
    image: "https://cdn-icons-png.flaticon.com/512/226/226777.png"
  },
  {
    title: "Projeto em C# MVC", 
    description: "Projeto em C# MVC para cadastro e gerenciamento de medico e pacientes utilizando swagger para documentar a API e Logger Manager para gerenciar os logs da aplicação. Trabalho feito juntamente com a Fiap ",
    tech: ["C#", "Oracle SQL", "MVC", "Swagger", "EnityFramework", "Logger Manager"],
    link: "https://github.com/Nicola3423/Sprint03-dotnet",
    image: "/Odontologico.png"
  }
];

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [state, handleSubmit] = useForm('mjkyallg');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    setTimeout(() => setIsLoading(false), 2000);
    
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
    if (prefersDark) document.documentElement.classList.add('dark-mode');

    return () => {};
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark-mode');
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className={`app-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <Helmet>
        <title>Portfolio Nicola - Desenvolvedor Full Stack</title>
        <meta name="description" content="Portfolio de Nicola Garofalo - Desenvolvedor Full Stack com experiência em React, TypeScript e Java" />
        <meta property="og:title" content="Portfolio Nicola Garofalo" />
        <meta property="og:image" content={profileImg} />
      </Helmet>

      {isLoading && <Loader />}

      <nav className="main-nav">
        <div className="nav-content">
          <Link to="home" smooth={true} className="logo">Portfolio</Link>
          
          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <Link to="home" smooth={true} duration={500} onClick={closeMenu}>Home</Link>
            <Link to="skills" smooth={true} duration={500} onClick={closeMenu}>Habilidades</Link>
            <Link to="projects" smooth={true} duration={500} onClick={closeMenu}>Projetos</Link>
            <Link to="sobre" smooth={true} duration={500} onClick={closeMenu}>Sobre</Link>
            <Link to="contact" smooth={true} duration={500} onClick={closeMenu}>Contato</Link>
            <button className="dark-mode-toggle" onClick={toggleDarkMode}>
              {isDarkMode ? '🌞' : '🌙'}
            </button>
          </div>

          <button className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <header id="home" className="hero-section">
        <div className="hero-content" data-aos="fade-up">
          <img src={profileImg} alt="Perfil" className="profile-image" />
          <div className="hero-text">
            <h1>Desenvolvedor Full-Stack</h1>
            <p>Especializado em criar soluções modernas com React, TypeScript, Java e C# MVC</p>
            <div className="cta-buttons">
              <Link to="projects" smooth={true} className="btn btn-primary">Ver Projetos</Link>
              <a href="/Curriculo.pdf" className="btn btn-outline" download>
                <i className="fas fa-download mr-2"></i>  Baixar Currículo
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Seção Skills */}
      <section id="skills" className="skills-section">
  <h2 className="section-title">Tecnologias</h2>
  <div className="skills-grid">
    {skills.map((skill) => (
      <div key={skill.name} className="skill-card">
        <img src={skill.image} alt={skill.name} className="skill-image" />
        <h3>{skill.name}</h3>
      </div>
    ))}
  </div>
</section>

      {/* Seção Projetos */}
      <section id="projects" className="projects-section">
        <h2 className="section-title">Projetos Recentes</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-container">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-tags">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <a href={project.link} className="btn btn-primary">Detalhes</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Seção Sobre */}
<section id="sobre" className="about-section">
  <h2 className="section-title">Minha Jornada</h2>
  <div className="about-content">
    <div className="about-image-container">
      <img 
        src={profileImg} 
        alt="Nicola" 
        className="about-profile-image"
      />
      <div className="about-highlights">
        <div className="highlight-item">
          <i className="fas fa-gamepad"></i>
          <span>Início com Jogos</span>
        </div>
        <div className="highlight-item">
          <i className="fas fa-briefcase"></i>
          <span>Experiência Profissional</span>
        </div>
        <div className="highlight-item">
          <i className="fas fa-graduation-cap"></i>
          <span>Formação em Andamento</span>
        </div>
      </div>
    </div>
    
    <div className="about-text-container">
      <p className="about-text">
        Desde criança fascinado por jogos e tecnologia, minha jornada na programação começou 
        tentando entender como os games eram criados. Aos 15 anos, desenvolvi meu primeiro 
        script em Python e desde então não parei mais. Atualmente estou consolidando meu 
        aprendizado atuando como estagiário em desenvolvimento.
      </p>
      
      <div className="about-cards">
        <div className="about-card">
          <h3>💼 Experiência Profissional</h3>
          <ul>
            <li>
              <strong>Império Inteligência</strong><br/>
              Estagiário de Desenvolvimento C# MVC<br/>
              03/06/2024 - Atualmente<br/>
              • Suporte e manutenção em aplicações corporativas<br/>
              • Desenvolvimento de novas funcionalidades<br/>
              • Participação em projetos de modernização de sistemas
            </li>
          </ul>
        </div>

        <div className="about-card">
          <h3>🚀 Metas Atuais</h3>
          <ul>
            <li>Desenvolver sistemas escaláveis</li>
            <li>Aprofundar em arquitetura de software</li>
            <li>Estudando os fundamentos do SOLID</li>
          </ul>
        </div>
        
        <div className="about-card">
          <h3>📚 Estudando Agora</h3>
          <ul>
            <li>Design Patterns</li>
            <li>Testes Automatizados</li>
            <li>Arquitetura de Software</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Adicionar Seção de Contato */}
      <section id="contact" className="contact-section">
        <h2 className="section-title">Contato</h2>
        <div className="contact-content">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input type="text" name="name" placeholder="Seu nome" required />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Seu e-mail" required />
            </div>
            <div className="form-group">
              <textarea name="message" placeholder="Sua mensagem" required></textarea>
            </div>
            <button type="submit" disabled={state.submitting} className="btn btn-primary">
              Enviar Mensagem
            </button>
            {state.succeeded && <p className="success-message">Mensagem enviada com sucesso!</p>}
          </form>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="main-footer">
    <div className="footer-container">
        <div className="footer-content">
            <div className="footer-section">
                <h4>Redes Sociais</h4>
                <div className="social-links">
                    <a href="https://github.com/Nicola3423" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/nicola-monte-cravo-garofalo-3757902b0/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://wa.me/5511981383338" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-whatsapp"></i>
                    </a>
                </div>
            </div>
            
            <div className="footer-section">
                <h4>Contato</h4>
                <p>montecravonicola@gmail.com</p>
                <p>+55 (11) 98138-3338</p>
            </div>
        </div>
        
        <div className="footer-bottom">
            <p className="copyright">
                &copy; {new Date().getFullYear()} Nicola Monte Cravo Garofalo. Todos os direitos reservados.
            </p>
        </div>
    </div>
</footer>
    </div>
  );
};
export default App;