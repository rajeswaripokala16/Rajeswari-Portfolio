import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, ChevronDown, Code, Briefcase, Award, BookOpen, Heart, Phone, Send, Moon, Sun, User, MapPin } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState('');
  const [sectionBlink, setSectionBlink] = useState('');
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'skills', 'projects', 'certifications', 'hobbies', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = {
    technical: [
      { name: 'HTML5', level: 90, icon: '🌐' },
      { name: 'CSS3', level: 85, icon: '🎨' },
      { name: 'JavaScript', level: 80, icon: '⚡' },
      { name: 'React', level: 75, icon: '⚛️' },
      { name: 'Java', level: 85, icon: '☕' },
      { name: 'Python', level: 80, icon: '🐍' },
      { name: 'C++', level: 75, icon: '💻' },
      { name: 'C', level: 80, icon: '📱' }
    ],
    soft: ['Teamwork', 'Communication', 'Problem-solving', 'Leadership', 'Time Management', 'Adaptability']
  };

  const projects = [
    {
      title: 'DressCountCheck',
      description: 'Inventory management system for tracking dress availability and calculating total costs for selected items.',
      tech: ['JavaScript', 'HTML', 'CSS'],
      category: 'Web App',
      color: 'from-blue-500 to-cyan-500',
      github: 'https://github.com/rajeswaripokala16/DressCountCheck',
      demo: '#'
    },
    {
      title: 'Calculator App',
      description: 'Feature-rich calculator application for performing various mathematical calculations with intuitive UI.',
      tech: ['JavaScript', 'HTML', 'CSS'],
      category: 'Web App',
      color: 'from-purple-500 to-pink-500',
      github: 'https://github.com/rajeswaripokala16/Calculator-App',
      demo: '#'
    },
    {
      title: 'CEO Portfolio',
      description: 'Professional portfolio website with smooth navigation and modern design principles.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      category: 'Website',
      color: 'from-orange-500 to-red-500',
      github: 'https://github.com/rajeswaripokala16/CEO-Portfolio',
      demo: '#'
    },
    {
      title: 'FoodDonateApp',
      description: 'Platform connecting food donors with those in need, featuring availability tracking and donation management.',
      tech: ['JavaScript', 'React', 'CSS'],
      category: 'Social Impact',
      color: 'from-green-500 to-emerald-500',
      github: 'https://github.com/rajeswaripokala16/FoodDonateApp',
      demo: '#'
    },
    {
      title: 'WeatherCheck',
      description: 'Real-time weather application providing detailed weather conditions for cities worldwide.',
      tech: ['JavaScript', 'API', 'CSS'],
      category: 'Web App',
      color: 'from-sky-500 to-blue-500',
      github: 'https://github.com/rajeswaripokala16/WeatherCheck',
      demo: '#'
    },
    {
      title: 'PetAdoption Overview',
      description: 'Pet adoption platform with availability tracking and detailed pet profiles for prospective adopters.',
      tech: ['JavaScript', 'HTML', 'CSS'],
      category: 'Social Impact',
      color: 'from-pink-500 to-rose-500',
      github: 'https://github.com/rajeswaripokala16/PetAdoption',
      demo: '#'
    }
  ];

  const certifications = [
    { name: 'Java, C, and C++', issuer: 'Sololearn', icon: Code, color: 'from-orange-500 to-red-500' },
    { name: 'Python with Data Science', issuer: 'IBM', icon: Code, color: 'from-blue-500 to-cyan-500' },
    { name: 'Prompt Engineering', issuer: 'Coursera', icon: BookOpen, color: 'from-purple-500 to-pink-500' },
    { name: 'Machine Learning with Python AI', issuer: 'Coursera', icon: BookOpen, color: 'from-green-500 to-emerald-500' },
    { name: 'Introduction to Cloud', issuer: 'Coursera', icon: Award, color: 'from-yellow-500 to-orange-500' }
  ];

  const hobbies = [
    { name: 'Coding', icon: '💻', description: 'Building projects and solving coding challenges', color: 'from-blue-500 to-purple-500' },
    { name: 'Problem Solving', icon: '🧩', description: 'Tackling complex algorithmic problems', color: 'from-green-500 to-teal-500' },
    { name: 'Design', icon: '🎨', description: 'Creating beautiful user interfaces', color: 'from-pink-500 to-rose-500' },
    { name: 'Editing', icon: '✂️', description: 'Video and photo editing', color: 'from-orange-500 to-red-500' },
    { name: 'Volleyball', icon: '🏐', description: 'Team sports and staying active', color: 'from-yellow-500 to-orange-500' },
    { name: 'NCC', icon: '🎖️', description: '2-year cadet member', color: 'from-indigo-500 to-purple-500' }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
      setActiveSection(id);
      
      // Trigger blink effect
      setSectionBlink(id);
      setTimeout(() => setSectionBlink(''), 2000);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:rajeswaripokala16@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
    setFormStatus('Opening your email client...');
    setTimeout(() => {
      setFormStatus('');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const theme = {
    dark: {
      bg: 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900',
      text: 'text-white',
      card: 'bg-white/5',
      cardHover: 'hover:bg-white/10',
      navBg: 'bg-slate-900/95',
      inputBg: 'bg-white/10',
      inputBorder: 'border-white/20',
      inputText: 'text-white'
    },
    light: {
      bg: 'bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50',
      text: 'text-gray-900',
      card: 'bg-white/80',
      cardHover: 'hover:bg-white/95',
      navBg: 'bg-white/95',
      inputBg: 'bg-white',
      inputBorder: 'border-gray-300',
      inputText: 'text-gray-900'
    }
  };

  const currentTheme = isDarkMode ? theme.dark : theme.light;

  return (
    <div className={`min-h-screen ${currentTheme.bg} ${currentTheme.text} transition-colors duration-500`}>
      {/* Image Upload Button - Fixed Position */}
      <div className="fixed bottom-8 right-8 z-50">
        <label className="cursor-pointer group">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-full shadow-2xl hover:shadow-purple-500/50 transform hover:scale-110 transition-all">
            <User size={24} className="text-white group-hover:rotate-12 transition-transform" />
          </div>
          <div className="absolute -top-12 right-0 bg-gray-900 text-white px-3 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Upload Profile Picture
          </div>
        </label>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? `${currentTheme.navBg} backdrop-blur-lg shadow-lg` : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Rajeswari
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'about', 'skills', 'projects', 'certifications', 'hobbies', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all hover:text-purple-400 relative group ${activeSection === item ? 'text-purple-400' : ''}`}
                >
                  {item}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transform transition-transform ${activeSection === item ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                </button>
              ))}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-full hover:bg-purple-600/20 transition-all transform hover:rotate-180 duration-500"
              >
                {isDarkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-purple-600" />}
              </button>
            </div>

            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-full hover:bg-purple-600/20 transition-all"
              >
                {isDarkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-purple-600" />}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className={`md:hidden ${currentTheme.navBg} backdrop-blur-lg`}>
            <div className="px-4 pt-2 pb-4 space-y-2">
              {['home', 'about', 'skills', 'projects', 'certifications', 'hobbies', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block w-full text-left px-4 py-2 capitalize hover:bg-purple-600/20 rounded transition-all ${activeSection === item ? 'bg-purple-600/30' : ''}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className={`min-h-screen flex items-center justify-center px-4 pt-16 transition-all duration-500 ${sectionBlink === 'home' ? 'animate-pulse bg-purple-900/20' : ''}`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:border-purple-400">
                  {profileImage ? (
                    <img src={profileImage} alt="Profile" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-9xl group-hover:scale-110 transition-transform duration-500">
                      👩‍💻
                    </div>
                  )}
                </div>
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce group-hover:scale-110 transition-transform">
                  💼 Open to Work
                </div>
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce group-hover:scale-110 transition-transform" style={{animationDelay: '0.5s'}}>
                  🎓 B.Tech Student
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2 text-center md:text-left">
              <div className="inline-block mb-4 animate-fade-in">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-transform inline-block">
                  👋 Hello, I am
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
                Rajeswari Pokala
              </h1>
              <div className="space-y-2 mb-6">
                <p className="text-2xl md:text-3xl font-semibold text-purple-400 hover:text-pink-400 transition-colors">
                  Aspiring Full Stack Developer
                </p>
                <p className="text-lg md:text-xl text-gray-400 hover:text-gray-300 transition-colors">
                  Frontend Developer | Java Enthusiast | Problem Solver
                </p>
                <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400 hover:text-purple-400 transition-colors">
                  <MapPin size={18} className="animate-pulse" />
                  <span>Andhra Pradesh, India</span>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
                <a href="https://github.com/rajeswaripokala16" target="_blank" rel="noopener noreferrer" 
                   className="group p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full transition-all transform hover:scale-125 hover:shadow-2xl hover:shadow-purple-500/50 hover:rotate-12">
                  <Github size={24} className="group-hover:rotate-12 transition-transform" />
                </a>
                <a href="https://www.linkedin.com/in/rajeswari-pokala-34aa8a29b" target="_blank" rel="noopener noreferrer" 
                   className="group p-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full transition-all transform hover:scale-125 hover:shadow-2xl hover:shadow-blue-500/50 hover:rotate-12">
                  <Linkedin size={24} className="group-hover:rotate-12 transition-transform" />
                </a>
                <a href="mailto:rajeswaripokala16@gmail.com" 
                   className="group p-4 bg-gradient-to-r from-orange-600 to-red-600 rounded-full transition-all transform hover:scale-125 hover:shadow-2xl hover:shadow-orange-500/50 hover:rotate-12">
                  <Mail size={24} className="group-hover:rotate-12 transition-transform" />
                </a>
              </div>

              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <button onClick={() => scrollToSection('contact')} 
                        className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transform hover:scale-110 transition-all">
                  Hire Me
                </button>
                <button onClick={() => scrollToSection('projects')} 
                        className={`px-8 py-3 ${currentTheme.card} backdrop-blur-lg rounded-full font-semibold border-2 border-purple-400 hover:bg-purple-600 hover:border-pink-400 transform hover:scale-110 transition-all`}>
                  View Work
                </button>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button onClick={() => scrollToSection('about')} className="animate-bounce hover:scale-125 transition-transform">
              <ChevronDown size={40} className="text-purple-400 mx-auto hover:text-pink-400 transition-colors" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 px-4 transition-all duration-500 ${sectionBlink === 'about' ? 'animate-pulse bg-purple-900/20' : ''}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-center text-gray-400 mb-12">Get to know me better</p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className={`md:col-span-1 ${currentTheme.card} backdrop-blur-lg rounded-2xl p-8 ${currentTheme.cardHover} transition-all transform hover:scale-105 hover:shadow-2xl hover:-translate-y-2 hover:rotate-1`}>
              <div className="relative group mb-6">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white/20 group-hover:border-purple-400 transition-all group-hover:scale-110 group-hover:rotate-6">
                  {profileImage ? (
                    <img src={profileImage} alt="Profile" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-7xl group-hover:scale-110 transition-transform">
                      👩‍💻
                    </div>
                  )}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-2">Rajeswari Pokala</h3>
              <p className="text-center text-purple-400 mb-4">Full Stack Developer</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-purple-400" />
                  <span className="text-xs break-all">rajeswaripokala16@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-purple-400" />
                  <span>Andhra Pradesh, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <User size={16} className="text-purple-400" />
                  <span>B.Tech Student</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 space-y-6">
              <div className={`${currentTheme.card} backdrop-blur-lg rounded-2xl p-8 ${currentTheme.cardHover} transition-all transform hover:scale-105 hover:shadow-2xl hover:-translate-y-1 border-2 border-transparent hover:border-purple-400/50`}>
                <h3 className="text-2xl font-bold mb-4 text-purple-400 flex items-center gap-2 hover:gap-4 transition-all">
                  <User size={28} className="hover:rotate-12 transition-transform" /> Who I Am
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4 hover:text-gray-300 transition-colors">
                  I am currently pursuing my B.Tech with a strong passion for technology and software development. 
                  Skilled in frontend development, Java, Python, and C++, I am continuously enhancing my expertise 
                  to become a Full Stack Java Developer.
                </p>
                <p className="text-gray-400 leading-relaxed hover:text-gray-300 transition-colors">
                  I am deeply passionate about coding and problem-solving, which drives me to learn, build, and innovate. 
                  My ultimate goal is to secure a high-paying role aligned with my passion at my dream workplace — 
                  <span className="text-purple-400 font-semibold hover:text-pink-400 transition-colors"> Microsoft, Bangalore</span>.
                </p>
              </div>

              <div className={`${currentTheme.card} backdrop-blur-lg rounded-2xl p-8 ${currentTheme.cardHover} transition-all transform hover:scale-105 hover:shadow-2xl hover:-translate-y-1 border-2 border-transparent hover:border-pink-400/50`}>
                <h3 className="text-2xl font-bold mb-4 text-pink-400 flex items-center gap-2 hover:gap-4 transition-all">
                  🎓 Education
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-purple-400 pl-4 hover:border-pink-400 hover:pl-6 transition-all hover:bg-purple-600/10 py-2 rounded-r">
                    <p className="font-bold text-lg hover:text-purple-400 transition-colors">B.Tech - Computer Science</p>
                    <p className="text-purple-400">Annamacharya Institute of Technology and Sciences</p>
                    <p className="text-sm text-gray-400">Rajampet, Andhra Pradesh | Present | CGPA: 85%</p>
                  </div>
                  <div className="border-l-4 border-purple-400 pl-4 hover:border-pink-400 hover:pl-6 transition-all hover:bg-purple-600/10 py-2 rounded-r">
                    <p className="font-bold hover:text-purple-400 transition-colors">Intermediate Education</p>
                    <p className="text-purple-400">Padmavathi (Raju) Junior College</p>
                    <p className="text-sm text-gray-400">Rayachoty, Andhra Pradesh | 84%</p>
                  </div>
                  <div className="border-l-4 border-purple-400 pl-4 hover:border-pink-400 hover:pl-6 transition-all hover:bg-purple-600/10 py-2 rounded-r">
                    <p className="font-bold hover:text-purple-400 transition-colors">Secondary Education</p>
                    <p className="text-purple-400">ZPHS Lagisettivari Palli</p>
                    <p className="text-sm text-gray-400">Veeraballi Mandal, Andhra Pradesh | CGPA: 10.0</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 px-4 transition-all duration-500 ${sectionBlink === 'skills' ? 'animate-pulse bg-purple-900/20' : ''}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-center text-gray-400 mb-12">Technologies I work with</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className={`${currentTheme.card} backdrop-blur-lg rounded-2xl p-8 ${currentTheme.cardHover} transition-all`}>
              <h3 className="text-2xl font-bold mb-6 text-purple-400 flex items-center gap-2">
                <Code size={28} /> Technical Skills
              </h3>
              <div className="space-y-6">
                {skills.technical.map((skill, idx) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold flex items-center gap-2">
                        <span className="text-2xl">{skill.icon}</span>
                        {skill.name}
                      </span>
                      <span className="text-purple-400 font-bold">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-gray-700/30 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000 group-hover:shadow-lg group-hover:shadow-purple-500/50"
                        style={{ 
                          width: `${skill.level}%`,
                          transitionDelay: `${idx * 100}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`${currentTheme.card} backdrop-blur-lg rounded-2xl p-8 ${currentTheme.cardHover} transition-all`}>
              <h3 className="text-2xl font-bold mb-6 text-pink-400 flex items-center gap-2">
                <Heart size={28} /> Soft Skills
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.soft.map((skill, idx) => (
                  <div
                    key={skill}
                    className="group bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-xl p-4 text-center hover:scale-110 hover:shadow-xl transition-all cursor-pointer"
                    style={{ transitionDelay: `${idx * 50}ms` }}
                  >
                    <p className="font-semibold group-hover:text-purple-300 transition-colors">{skill}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl">
                <h4 className="font-bold mb-2 text-center">🎯 Career Goal</h4>
                <p className="text-sm text-center text-gray-300">
                  Aiming to join <span className="text-purple-400 font-bold">Microsoft, Bangalore</span> as a Full Stack Java Developer
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 px-4 transition-all duration-500 ${sectionBlink === 'projects' ? 'animate-pulse bg-purple-900/20' : ''}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-center text-gray-400 mb-12">Building innovative solutions one project at a time</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className={`group ${currentTheme.card} backdrop-blur-lg rounded-2xl p-6 ${currentTheme.cardHover} transition-all transform hover:scale-105 hover:shadow-2xl hover:-translate-y-2 cursor-pointer border-2 border-transparent hover:border-purple-400/50`}
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-3 bg-gradient-to-r ${project.color} rounded-lg group-hover:rotate-12 group-hover:scale-110 transition-all duration-300`}>
                    <Briefcase size={24} className="text-white" />
                  </div>
                  <span className={`text-xs bg-gradient-to-r ${project.color} text-white px-3 py-1 rounded-full font-semibold group-hover:scale-110 transition-transform`}>
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition-colors">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs bg-purple-600/30 px-2 py-1 rounded hover:bg-purple-600/50 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 text-purple-400 font-semibold text-sm group-hover:gap-3 transition-all hover:text-pink-400"
                  >
                    <Github size={16} className="group-hover:rotate-12 transition-transform" />
                    <span>View Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 text-pink-400 font-semibold text-sm group-hover:gap-3 transition-all hover:text-purple-400"
                  >
                    <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className={`py-20 px-4 transition-all duration-500 ${sectionBlink === 'certifications' ? 'animate-pulse bg-purple-900/20' : ''}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Certifications & Achievements
          </h2>
          <p className="text-center text-gray-400 mb-12">Continuous learning and growth</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => {
              const Icon = cert.icon;
              return (
                <div
                  key={idx}
                  className={`group ${currentTheme.card} backdrop-blur-lg rounded-2xl p-6 ${currentTheme.cardHover} transition-all transform hover:scale-105 hover:shadow-2xl cursor-pointer`}
                >
                  <div className={`inline-block p-3 bg-gradient-to-r ${cert.color} rounded-lg mb-4 group-hover:rotate-12 transition-transform`}>
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{cert.name}</h3>
                  <p className="text-gray-400 text-sm">{cert.issuer}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section id="hobbies" className={`py-20 px-4 transition-all duration-500 ${sectionBlink === 'hobbies' ? 'animate-pulse bg-purple-900/20' : ''}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Hobbies & Interests
          </h2>
          <p className="text-center text-gray-400 mb-12">What I love to do</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hobbies.map((hobby, idx) => (
              <div
                key={idx}
                className={`group ${currentTheme.card} backdrop-blur-lg rounded-2xl p-6 text-center ${currentTheme.cardHover} transition-all transform hover:scale-105 hover:shadow-2xl cursor-pointer`}
              >
                <div className={`inline-block p-4 bg-gradient-to-r ${hobby.color} rounded-full mb-4 group-hover:rotate-12 transition-transform`}>
                  <div className="text-4xl">{hobby.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">{hobby.name}</h3>
                <p className="text-gray-400 text-sm">{hobby.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-4 transition-all duration-500 ${sectionBlink === 'contact' ? 'animate-pulse bg-purple-900/20' : ''}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-400 mb-12 text-center">
            I'm always open to new opportunities and collaborations
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a
              href="mailto:rajeswaripokala16@gmail.com"
              className={`${currentTheme.card} backdrop-blur-lg rounded-2xl p-8 ${currentTheme.cardHover} transition-all transform hover:scale-105 hover:shadow-2xl`}
            >
              <Mail size={40} className="text-purple-400 mx-auto mb-4" />
              <h3 className="font-bold mb-2 text-center">Email</h3>
              <p className="text-sm text-gray-400 text-center break-all">rajeswaripokala16@gmail.com</p>
            </a>
            
            <a
              href="https://www.linkedin.com/in/rajeswari-pokala-34aa8a29b"
              target="_blank"
              rel="noopener noreferrer"
              className={`${currentTheme.card} backdrop-blur-lg rounded-2xl p-8 ${currentTheme.cardHover} transition-all transform hover:scale-105 hover:shadow-2xl`}
            >
              <Linkedin size={40} className="text-purple-400 mx-auto mb-4" />
              <h3 className="font-bold mb-2 text-center">LinkedIn</h3>
              <p className="text-sm text-gray-400 text-center">Connect with me</p>
            </a>
            
            <a
              href="https://github.com/rajeswaripokala16"
              target="_blank"
              rel="noopener noreferrer"
              className={`${currentTheme.card} backdrop-blur-lg rounded-2xl p-8 ${currentTheme.cardHover} transition-all transform hover:scale-105 hover:shadow-2xl`}
            >
              <Github size={40} className="text-purple-400 mx-auto mb-4" />
              <h3 className="font-bold mb-2 text-center">GitHub</h3>
              <p className="text-sm text-gray-400 text-center">Check out my code</p>
            </a>
          </div>

          {/* Contact Form */}
          <div className={`${currentTheme.card} backdrop-blur-lg rounded-2xl p-8 ${currentTheme.cardHover} transition-all`}>
            <h3 className="text-2xl font-bold mb-6 text-center text-purple-400">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  placeholder="Your Name"
                  required
                  className={`w-full px-4 py-3 ${currentTheme.inputBg} ${currentTheme.inputBorder} ${currentTheme.inputText} border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all`}
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  placeholder="Your Email"
                  required
                  className={`w-full px-4 py-3 ${currentTheme.inputBg} ${currentTheme.inputBorder} ${currentTheme.inputText} border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all`}
                />
              </div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleFormChange}
                placeholder="Subject"
                required
                className={`w-full px-4 py-3 ${currentTheme.inputBg} ${currentTheme.inputBorder} ${currentTheme.inputText} border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all`}
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleFormChange}
                placeholder="Your Message"
                rows="5"
                required
                className={`w-full px-4 py-3 ${currentTheme.inputBg} ${currentTheme.inputBorder} ${currentTheme.inputText} border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all resize-none`}
              ></textarea>
              <button
                type="submit"
                className="w-full px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
              {formStatus && (
                <p className="text-center text-green-400 font-semibold">{formStatus}</p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 border-t border-white/10">
        <p>© 2024 Rajeswari Pokala. Built with passion and React.</p>
        <p className="text-sm mt-2">Dream big, code bigger 💜</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="https://github.com/rajeswaripokala16" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/rajeswari-pokala-34aa8a29b" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="mailto:rajeswaripokala16@gmail.com" className="hover:text-purple-400 transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </footer>
    </div>
  );
}