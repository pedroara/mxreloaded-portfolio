// Language and Theme Management
const langToggle = document.querySelector('.lang-toggle');
const body = document.body;
const themeIcon = document.querySelector('.theme-toggle i');
const langText = document.querySelector('.lang-toggle span');

// Translations
const translations = {
  pt: {
    'nav.home': 'Início',
    'nav.projects': 'Projetos',
    'nav.experience': 'Experiência',
    'nav.contact': 'Contato',
    'lang.current': 'PT',
    'hero.greeting': 'Olá, eu sou',
    'hero.title': 'Desenvolvedor Full Stack',
    'hero.description': 'Desenvolvo aplicações web modernas com foco em experiência do usuário e código limpo. Especializado em Ruby on Rails e React.',
    'hero.viewProjects': 'Ver Projetos',
    'hero.contactMe': 'Contato',
    'projects.title': 'Projetos',
    'projects.maya.title': 'Maya - Gestão para Confeiteiros',
    'projects.maya.description': 'Plataforma completa de gestão para confeiteiros, desenvolvida com Rails, React e MUI. Implementação de Sidekiq para processamento assíncrono e otimização de performance.',
    'projects.addolcire.title': 'Addolcire - Educação para Confeiteiros',
    'projects.addolcire.description': 'Plataforma educacional especializada para confeiteiros, utilizando Semantic UI para uma interface intuitiva e responsiva.',
    'projects.apolo.title': 'ApoloIBFT - Treinamento para Terapeutas',
    'projects.apolo.description': 'Sistema de treinamento para terapeutas de reprocessamento generativo, desenvolvido com MUI e foco em experiência do usuário.',
    'projects.t2.title': 'T2Educação - Certificações ANBIMA',
    'projects.t2.description': 'Plataforma de treinamento para certificações ANBIMA, com dashboards interativos e views otimizadas de banco de dados para máxima performance.',
    'projects.docefuturo.title': 'Doce Futuro - Plataforma de Receitas',
    'projects.docefuturo.description': 'Sistema de gerenciamento de receitas para confeiteiros, desenvolvido com Semantic UI e foco em usabilidade.',
    'projects.emr.title': 'EMR - Preparação para Residência Médica',
    'projects.emr.description': 'Plataforma de preparação para provas de residência médica, com interface intuitiva e conteúdo especializado.',
    'projects.chatlead.title': 'ChatLead - Atendimento Omnichat',
    'projects.chatlead.description': 'Sistema de atendimento omnichat moderno, desenvolvido com RTK e Chakra UI para uma experiência fluida e responsiva.',
    'experience.title': 'Experiência',
    'experience.role': 'Desenvolvedor Full Stack',
    'experience.description': 'Construindo e mantendo plataformas educacionais usando Ruby on Rails e React. Focado em criar soluções robustas, intuitivas e escaláveis que impactam a forma como milhares de pessoas aprendem e ensinam todos os dias.',
    'skills.title': 'Habilidades',
    'contact.title': 'Entre em Contato',
    'footer.rights': 'Todos os direitos reservados.'
  },
  en: {
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    'lang.current': 'EN',
    'hero.greeting': 'Hi, I\'m',
    'hero.title': 'Full Stack Developer',
    'hero.description': 'I build modern web applications with a focus on user experience and clean code. Specializing in Ruby on Rails and React.',
    'hero.viewProjects': 'View Projects',
    'hero.contactMe': 'Contact Me',
    'projects.title': 'Projects',
    'projects.maya.title': 'Maya - Management for Bakers',
    'projects.maya.description': 'Complete management platform for bakers, developed with Rails, React, and MUI. Implementation of Sidekiq for asynchronous processing and performance optimization.',
    'projects.addolcire.title': 'Addolcire - Education for Bakers',
    'projects.addolcire.description': 'Specialized educational platform for bakers, using Semantic UI for an intuitive and responsive interface.',
    'projects.apolo.title': 'ApoloIBFT - Training for Therapists',
    'projects.apolo.description': 'Training system for generative reprocessing therapists, developed with MUI and focus on user experience.',
    'projects.t2.title': 'T2Education - ANBIMA Certifications',
    'projects.t2.description': 'Training platform for ANBIMA certifications, with interactive dashboards and optimized database views for maximum performance.',
    'projects.docefuturo.title': 'Doce Futuro - Recipe Platform',
    'projects.docefuturo.description': 'Recipe management system for bakers, developed with Semantic UI and focus on usability.',
    'projects.emr.title': 'EMR - Medical Residency Preparation',
    'projects.emr.description': 'Platform for medical residency exam preparation, with intuitive interface and specialized content.',
    'projects.chatlead.title': 'ChatLead - Omnichat Support',
    'projects.chatlead.description': 'Modern omnichat support system, developed with RTK and Chakra UI for a fluid and responsive experience.',
    'experience.title': 'Experience',
    'experience.role': 'Full Stack Developer',
    'experience.description': 'Building and maintaining educational platforms using Ruby on Rails and React. Focused on creating robust, intuitive, and scalable solutions that impact how thousands of people learn and teach every day.',
    'skills.title': 'Skills',
    'contact.title': 'Get In Touch',
    'footer.rights': 'All rights reserved.'
  }
};

// Check for saved language preference
const savedLang = localStorage.getItem('lang');
if (savedLang) {
  body.setAttribute('data-lang', savedLang);
  updateLanguage(savedLang);
}

// Language toggle click handler
langToggle.addEventListener('click', () => {
  const currentLang = body.getAttribute('data-lang');
  const newLang = currentLang === 'pt' ? 'en' : 'pt';

  body.setAttribute('data-lang', newLang);
  localStorage.setItem('lang', newLang);
  updateLanguage(newLang);
});

// Update language
function updateLanguage(lang) {
  document.querySelectorAll('[data-lang-key]').forEach(element => {
    const key = element.getAttribute('data-lang-key');
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
  langText.textContent = translations[lang]['lang.current'];
}

// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
}

// Theme toggle click handler
themeToggle.addEventListener('click', () => {
  const currentTheme = body.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';

  body.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeIcon(newTheme);
});

// Update theme icon
function updateThemeIcon(theme) {
  themeIcon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
}

// Scroll Reveal Animation
const sections = document.querySelectorAll('section');

// Create intersection observer for scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, {
  threshold: 0.1
});

// Apply initial styles and observe sections
sections.forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(20px)';
  section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
  observer.observe(section);
});

// Project Cards Animation
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-10px)';
    card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
    card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
  });
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
}); 