import React, { useState, useEffect } from 'react';
import { Mail, Phone, ExternalLink, Menu, X, ChevronDown, ChevronUp, Code, Server, Database, Award, BookOpen, MapPin } from 'lucide-react';

// --- BRAND ICONS (INLINED) ---
const Github = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// --- DATA ---
const NAV_LINKS = [
  { name: 'About', href: 'about' },
  { name: 'Skills', href: 'skills' },
  { name: 'Projects', href: 'projects' },
  { name: 'Certifications', href: 'certifications' },
  { name: 'Education', href: 'education' },
  { name: 'Contact', href: 'contact' },
];

const SOCIAL_LINKS = [
  { name: 'GitHub', href: 'https://github.com/swathi-nkp', icon: <Github size={20} /> },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/swathi-n-256556402-', icon: <Linkedin size={20} /> },
];

const SKILLS_DATA = [
  { category: 'Languages', items: ['JavaScript ES6+'] },
  { category: 'Frontend', items: ['HTML5', 'CSS3', 'React.js v18', 'Tailwind CSS', 'Bootstrap'] },
  { category: 'Backend', items: ['Node.js', 'Express.js'] },
  { category: 'Database', items: ['MongoDB'] },
  { category: 'Tools', items: ['Git', 'GitHub', 'VS Code'] },
];

const PROJECTS_DATA = [
  {
    name: 'Multi-Boutique Customization Web Application',
    isLive: true,
    liveUrl: 'https://full-stack-showcase-ob2w.vercel.app/',
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Socket.IO'],
    description: [
      'Multi-vendor platform for boutique owners and customers.',
      'Comprehensive product browsing with category filters.',
      'Interactive outfit customization features.',
      'Real-time chat functionality integrated via Socket.IO.',
      'Built with RESTful APIs for scalable data management.'
    ]
  }
];

const CERTIFICATIONS_DATA = [
  { title: 'JavaScript', issuer: 'IBM Developer Skills Network', year: '2026' },
  { title: 'Full Stack Web Development MERN Stack', issuer: 'SLA', year: '2026' },
  { title: 'Diploma in Office Automation', issuer: 'Future of Computer Education', year: '2023' },
];

const EDUCATION_DATA = [
  {
    degree: 'BBA',
    institution: 'E.G.S. Pillay Arts and Science College Nagapattinam, Bharathidasan University',
    duration: '2022–2025',
    result: 'CGPA 7.8'
  },
  {
    degree: '12th Grade',
    institution: 'Natarajan Dhamayanthi Higher Secondary School',
    duration: '2021-2022',
    result: '72%'
  },
  {
    degree: '10th Grade',
    institution: 'Natarajan Dhamayanthi Higher Secondary School',
    duration: '2019-2020',
    result: '74%'
  },
];

// --- SUB-COMPONENTS ---

const SectionHeading = ({ children, subtitle }) => (
  <div className="mb-12 text-center reveal">
    <div className="text-primary text-xs font-black uppercase tracking-[0.3em] mb-3">{children}</div>
    <h2 className="text-4xl md:text-5xl font-black text-navy-dark mb-4 tracking-tighter italic">
      {children}
    </h2>
    {subtitle && <p className="text-slate-500 max-w-xl mx-auto text-sm font-medium leading-relaxed">{subtitle}</p>}
    <div className="w-12 h-1 bg-primary/20 mx-auto mt-6 rounded-full overflow-hidden">
      <div className="w-1/2 h-full bg-primary animate-[shimmer_2s_infinite]"></div>
    </div>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-full mx-auto px-10 flex justify-between items-center">
        <button onClick={() => scrollTo('home')} className="text-2xl font-black text-navy-dark tracking-tighter hover:text-primary transition-colors">
          SWATHI
        </button>

        <div className="hidden md:flex items-center space-x-12">
          <div className="flex items-center space-x-8">
            {NAV_LINKS.map(link => (
              <button key={link.name} onClick={() => scrollTo(link.href)} className="nav-link text-xs uppercase tracking-widest">{link.name}</button>
            ))}
          </div>
          <div className="h-4 w-[1px] bg-slate-200"></div>
          <div className="flex items-center space-x-4">
            {SOCIAL_LINKS.map(link => (
              <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-slate-500 hover:text-primary transition-colors text-xs font-bold uppercase tracking-wide">
                {link.icon}
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </div>

        <button className="md:hidden p-2 text-navy-dark bg-white rounded-lg shadow-sm border border-slate-100" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-10 transition-all duration-500 md:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <button className="absolute top-6 right-6 p-2 text-navy-dark" onClick={() => setIsOpen(false)}><X size={32} /></button>
        {NAV_LINKS.map(link => (
          <button key={link.name} onClick={() => scrollTo(link.href)} className="text-3xl font-bold text-navy-dark hover:text-primary transition-colors tracking-tight">{link.name}</button>
        ))}
        <div className="flex gap-6 pt-6">
          {SOCIAL_LINKS.map(link => (
            <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 bg-slate-50 rounded-2xl text-primary hover:bg-primary hover:text-white transition-all shadow-sm font-bold text-sm">
              {link.icon}
              <span>{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

const HeroSection = () => {
  const [text, setText] = useState('');
  const fullText = "Full Stack Web Developer (MERN)";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + fullText[index]);
        setIndex(index + 1);
      }, 70);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
    }
  };

  return <section id="home" className="min-h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-100 via-white to-pink-50 pt-20">
    <div className="section-container text-center">
      <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white border border-violet-100 text-primary rounded-2xl text-xs font-bold tracking-[0.2em] uppercase shadow-sm animate-fade-in opacity-0 [animation-fill-mode:forwards]">
        <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
        Available for Opportunities
      </div>
      <h1 className="text-6xl md:text-8xl font-black text-navy-dark mb-8 tracking-tighter animate-fade-in opacity-0 [animation-fill-mode:forwards] [animation-delay:200ms]">
        Swathi N
      </h1>
      <div className="text-2xl md:text-3xl font-medium text-slate-600 mb-6 h-10 animate-fade-in opacity-0 [animation-fill-mode:forwards] [animation-delay:400ms]">
        {text}<span className="text-secondary animate-pulse">_</span>
      </div>
      <div className="flex items-center justify-center gap-3 text-slate-500 mb-12 animate-fade-in opacity-0 [animation-fill-mode:forwards] [animation-delay:600ms] font-medium">
        <div className="p-2 bg-white rounded-lg shadow-sm border border-slate-100">
          <MapPin size={18} className="text-accent" />
        </div>
        <span>Chennai, Tamil Nadu</span>
      </div>
      <div className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-fade-in opacity-0 [animation-fill-mode:forwards] [animation-delay:800ms]">
        <button onClick={() => scrollTo('projects')} className="btn-primary !bg-primary hover:!bg-primary-dark">
          View My Work <ChevronDown size={20} className="mt-1" />
        </button>
        <button onClick={() => scrollTo('contact')} className="btn-outline !border-secondary !text-secondary hover:!bg-secondary/5">
          Let's Talk
        </button>
      </div>
    </div>
  </section>;
};

const AboutSection = () => (
  <section id="about" className="bg-gradient-to-b from-white to-violet-50/30">
    <div className="section-container">
      <SectionHeading>About Me</SectionHeading>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="reveal">
          <div className="relative bg-white p-8 rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50">
            <h3 className="text-2xl font-bold text-navy-dark mb-4">My Journey</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              Aspiring Full Stack Developer with hands-on experience building scalable web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js) and real-time technologies.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Strong focus on user-friendly, performant solutions. I thrive on solving complex problems and turning creative ideas into functional digital experiences.
            </p>
          </div>
        </div>
        <div className="space-y-6 reveal">
          {[
            { icon: <Code size={24} />, title: "Frontend Development", desc: "Creating responsive, intuitive, and modern user interfaces." },
            { icon: <Server size={24} />, title: "Backend Engineering", desc: "Architecting robust APIs and server-side logic." },
            { icon: <Database size={24} />, title: "Database Design", desc: "Managing data efficiently with NoSQL databases." }
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 p-5 rounded-xl bg-slate-50 border border-slate-100 hover:border-primary/30 transition-colors">
              <div className="p-3 bg-primary/10 text-primary rounded-lg">{item.icon}</div>
              <div>
                <h4 className="font-bold text-navy-dark">{item.title}</h4>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState('All');
  const categories = ['All', ...SKILLS_DATA.map(s => s.category)];
  const filteredSkills = activeTab === 'All'
    ? SKILLS_DATA.flatMap(s => s.items)
    : SKILLS_DATA.find(s => s.category === activeTab)?.items || [];

  return (
    <section id="skills" className="bg-slate-50">
      <div className="section-container text-center">
        <SectionHeading subtitle="My technical toolkit and specialties">Technical Skills</SectionHeading>
        <div className="flex flex-wrap justify-center gap-2 mb-8 reveal">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2 rounded-xl text-sm font-semibold transition-all duration-300 border ${activeTab === cat ? 'bg-accent text-white border-accent shadow-lg shadow-accent/30' : 'bg-white text-slate-600 border-slate-200 hover:border-accent/50'}`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto reveal">
          {filteredSkills.map(skill => (
            <div key={skill} className="skill-badge !text-accent border-accent/20 hover:border-accent/50 hover:bg-accent/5">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="glass-card overflow-hidden flex flex-col h-full reveal">
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4 gap-2">
          <h3 className="text-2xl font-bold text-navy-dark leading-tight">{project.name}</h3>
          {project.isLive && (
            <span className="glow-live bg-green-500 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-tighter shrink-0 mt-1">Live</span>
          )}
        </div>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, idx) => {
            const colors = [
              'text-primary bg-primary/5 border-primary/20',
              'text-secondary bg-secondary/5 border-secondary/20',
              'text-accent bg-accent/5 border-accent/20'
            ];
            return (
              <span key={tag} className={`text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${colors[idx % colors.length]}`}>{tag}</span>
            );
          })}
        </div>
        <div className={`space-y-3 text-slate-600 mb-6 transition-all duration-500 overflow-hidden ${isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-[100px] opacity-60'}`}>
          <ul className="list-disc list-inside space-y-2">
            {project.description.map((item, idx) => (
              <li key={idx} className="text-sm leading-relaxed">{item}</li>
            ))}
          </ul>
        </div>
        <button onClick={() => setIsExpanded(!isExpanded)} className="flex items-center gap-1 text-primary text-sm font-bold mb-8 hover:underline">
          {isExpanded ? <>Show Less <ChevronUp size={16} /></> : <>Read More <ChevronDown size={16} /></>}
        </button>
        <div className="mt-auto">
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary !bg-secondary hover:!bg-pink-700 !shadow-secondary/20 w-full flex items-center justify-center gap-2">
            Live Demo <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => (
  <section id="projects" className="bg-white">
    <div className="section-container">
      <SectionHeading subtitle="Recent works that demonstrate my technical capability">Featured Projects</SectionHeading>
      <div className="grid lg:grid-cols-1 gap-8 max-w-3xl mx-auto">
        {PROJECTS_DATA.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </div>
  </section>
);

const CertificationsSection = () => (
  <section id="certifications" className="bg-slate-50">
    <div className="section-container">
      <SectionHeading>Certifications</SectionHeading>
      <div className="grid md:grid-cols-3 gap-6">
        {CERTIFICATIONS_DATA.map((cert, idx) => (
          <div key={idx} className="glass-card p-6 reveal group">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
              <Award size={24} />
            </div>
            <h4 className="font-bold text-navy-dark text-lg mb-2">{cert.title}</h4>
            <p className="text-slate-500 text-sm mb-4">{cert.issuer}</p>
            <div className="text-primary font-bold text-xs tracking-widest bg-primary/5 py-1 px-3 rounded-lg w-fit">{cert.year}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const EducationSection = () => (
  <section id="education" className="bg-white">
    <div className="section-container">
      <SectionHeading>Education</SectionHeading>
      <div className="max-w-3xl mx-auto reveal">
        <div className="relative border-l-2 border-slate-200 ml-4 md:ml-0 pl-8 md:pl-0">
          {EDUCATION_DATA.map((edu, idx) => (
            <div key={idx} className="mb-8 relative">
              <div className="absolute -left-[41px] top-0 w-5 h-5 bg-accent rounded-full border-4 border-white shadow-md"></div>
              <div className="md:ml-12 p-8 bg-white rounded-2xl border border-slate-100 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <h4 className="text-xl font-bold text-navy-dark">{edu.degree}</h4>
                  <span className="text-accent font-bold text-xs bg-accent/10 px-4 py-1.5 rounded-full w-fit uppercase tracking-wider">{edu.duration}</span>
                </div>
                <p className="text-slate-700 font-medium mb-2">{edu.institution}</p>
                <div className="flex items-center gap-2 text-slate-500 text-sm italic">
                  <BookOpen size={16} /> Result: {edu.result}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const ContactSection = () => (
  <section id="contact" className="bg-navy-dark text-white">
    <div className="section-container">
      <div className="max-w-4xl mx-auto text-center reveal">
        <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter">Let's Work Together</h2>
        <p className="text-slate-400 mb-12 max-w-2xl mx-auto text-lg leading-relaxed font-medium">Currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <a href="mailto:swathi.pkn@gmail.com" className="flex flex-col items-center p-10 bg-white/5 border border-white/10 rounded-[2rem] hover:bg-white/10 transition-all group hover:border-primary/50">
            <div className="p-4 bg-primary/20 text-primary rounded-2xl mb-6 group-hover:scale-110 transition-transform">
              <Mail size={32} />
            </div>
            <span className="text-slate-500 text-xs mb-2 uppercase tracking-[0.2em] font-black">Email Me</span>
            <span className="text-xl font-bold">swathi.pkn@gmail.com</span>
          </a>
          <a href="tel:+917812875312" className="flex flex-col items-center p-10 bg-white/5 border border-white/10 rounded-[2rem] hover:bg-white/10 transition-all group hover:border-primary/50">
            <div className="p-4 bg-primary/20 text-primary rounded-2xl mb-6 group-hover:scale-110 transition-transform">
              <Phone size={32} />
            </div>
            <span className="text-slate-500 text-xs mb-2 uppercase tracking-[0.2em] font-black">Call Me</span>
            <span className="text-xl font-bold">+91 78128 75312</span>
          </a>
        </div>
        <div className="flex justify-center gap-6">
          {SOCIAL_LINKS.map(link => (
            <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-7 py-4 bg-white/5 rounded-2xl hover:bg-primary transition-all duration-300 border border-white/10 hover:border-transparent group font-bold text-sm tracking-wide">
              {React.cloneElement(link.icon, { size: 22, className: "group-hover:scale-110 transition-transform" })}
              <span>{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-white border-t border-slate-100 py-10">
    <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
      <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">
        © {new Date().getFullYear()} SWATHI N — ALL RIGHTS RESERVED
      </p>
    </div>
  </footer>
);

const App = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative font-sans text-slate-900 bg-white selection:bg-primary selection:text-white">
      <Navbar />
      <main className="overflow-hidden">
        <HeroSection />
        <AboutSection />
        <div className="bg-gradient-to-b from-violet-50/30 to-white h-20"></div>
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
