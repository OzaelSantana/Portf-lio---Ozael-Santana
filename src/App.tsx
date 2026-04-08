import { motion } from "motion/react";
import { 
  ArrowRight, Mail, Phone, MapPin, Linkedin, 
  Home, Code2, Briefcase, FolderOpen, User 
} from "lucide-react";

export default function App() {
  // Puxando a imagem diretamente do seu repositório no GitHub para o preview funcionar
  const userPhoto = "https://raw.githubusercontent.com/OzaelSantana/Portf-lio---Ozael-Santana/main/public/Profile.jpg"; 

  const navItems = [
    { name: "Sobre", href: "#sobre" },
    { name: "Habilidades", href: "#habilidades" },
    { name: "Trajetória", href: "#trajetoria" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-20 py-6 bg-black/50 backdrop-blur-md border-bottom border-white/5">
        <div className="font-serif text-xl font-bold tracking-tighter">
          &lt;OS/&gt;
        </div>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="text-sm uppercase tracking-widest text-white/60 hover:text-white transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a 
            href="https://wa.me/5571987615043" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-all"
          >
            Contato
          </a>
        </div>
      </nav>

      {/* Floating Side Menu */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
        {[
          { icon: <Home className="w-5 h-5" />, href: "#hero", label: "Início" },
          { icon: <User className="w-5 h-5" />, href: "#sobre", label: "Sobre" },
          { icon: <Code2 className="w-5 h-5" />, href: "#expertise", label: "Expertise" },
          { icon: <Briefcase className="w-5 h-5" />, href: "#habilidades", label: "Habilidades" },
          { icon: <FolderOpen className="w-5 h-5" />, href: "#trajetoria", label: "Trajetória" },
          { icon: <Mail className="w-5 h-5" />, href: "#contato", label: "Contato" },
        ].map((item, i) => (
          <div key={i} className="group relative flex items-center justify-end">
            <div className="absolute right-14 px-3 py-1 bg-white text-black text-xs font-bold rounded opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
              {item.label}
            </div>
            <a 
              href={item.href} 
              className="w-12 h-12 rounded-xl bg-white/10 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg backdrop-blur-sm"
            >
              {item.icon}
            </a>
          </div>
        ))}
      </div>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6 md:px-20 pt-32 pb-20 relative overflow-hidden">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 z-10 text-left max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-xs uppercase tracking-widest text-white/50">Disponível para novos projetos</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02, x: 10 }}
              className="font-serif text-6xl md:text-8xl leading-tight mb-8 cursor-default transition-all duration-500 hover:text-blue-400"
            >
              Eu transformo <span className="text-blue-500">dados</span> em inteligência estratégica.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.01, color: "#ffffff" }}
              className="text-lg md:text-xl text-white/60 mb-10 max-w-xl leading-relaxed transition-all duration-300 cursor-default"
            >
              Analista de Dados especializado em automação, BI e sistemas de qualidade. 
              Ajudando empresas a otimizar processos e tomar decisões baseadas em evidências.
            </motion.p>

            <div className="flex flex-wrap gap-4 mb-16">
              <motion.a 
                href="https://wa.me/5571987615043"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 transition-all"
              >
                <Phone className="w-4 h-4" />
                Agendar Conversa
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/ozael-santana"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-medium transition-all border border-white/10"
              >
                Ver LinkedIn
              </motion.a>
            </div>

            <div className="flex gap-12">
              <div>
                <p className="text-2xl font-bold text-blue-500">8+</p>
                <p className="text-xs uppercase tracking-widest text-white/40">Anos de Experiência</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-500">100%</p>
                <p className="text-xs uppercase tracking-widest text-white/40">Foco em Qualidade</p>
              </div>
            </div>
          </div>

          <div className="flex-1 flex justify-center md:justify-end relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
              whileHover={{ scale: 1.03 }}
              className="oval-photo transition-transform duration-500"
            >
              <img 
                src={userPhoto} 
                alt="Ozael Santana" 
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="min-h-screen flex items-center justify-center px-6 md:px-20 py-20 bg-black">
        <div className="max-w-7xl w-full flex flex-col md:flex-row-reverse items-center justify-between gap-12">
          <div className="flex-1 z-10 md:pl-20">
            <motion.h2 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, x: 10 }}
              className="font-serif text-5xl md:text-7xl mb-12 transition-all duration-500 cursor-default hover:text-blue-400"
            >
              Quem é o Ozael?
            </motion.h2>
            <motion.p 
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.01, color: "#ffffff" }}
              className="text-lg md:text-xl leading-relaxed text-white/70 max-w-xl mb-8 transition-all duration-300 cursor-default"
            >
              Especialista em Gestão da Qualidade e Dados, com sólida formação em Administração e MBA em Data Science & Big Data. 
              Atualmente atuo como Analista de Dados no Grupo VitalMed, focado em transformar informações em inteligência de negócio.
            </motion.p>
            <div className="w-24 h-[1px] bg-white/30"></div>
          </div>
          <div className="flex-1 flex justify-center">
            <motion.div 
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.9 }}
              viewport={{ once: true }}
              className="w-full max-w-md aspect-[3/4] circle-frame overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" 
                alt="Data Analysis" 
                className="w-full h-full object-cover grayscale opacity-60"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects/Skills Section */}
      <section id="expertise" className="py-32 px-6 md:px-20 flex justify-center">
        <div className="max-w-7xl w-full">
          <motion.h2 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            className="font-serif text-5xl md:text-7xl mb-20"
          >
            Minha Expertise
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Data Science & BI",
                desc: "Análise avançada com Power BI, SQL e Python para tomada de decisão estratégica.",
                img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Gestão da Qualidade",
                desc: "Certificação Black Belt e vasta experiência em auditoria e melhoria de processos.",
                img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Automação PCP",
                desc: "Otimização de fluxos produtivos e automação com VBA e WinAutomation.",
                img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 40 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group"
              >
                <div className="arch-frame overflow-hidden aspect-[4/5] mb-6 bg-white/5">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 mt-1 rotate-45 opacity-50" />
                  <div>
                    <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Tools Section */}
      <section id="habilidades" className="py-32 px-6 md:px-20 flex justify-center">
        <div className="max-w-7xl w-full">
          <motion.h2 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            className="font-serif text-5xl md:text-7xl mb-20"
          >
            Habilidades & <br /> Ferramentas
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -20 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-serif mb-8 flex items-center gap-3">
                <div className="w-8 h-[1px] bg-white/50"></div>
                Resumo Profissional
              </h3>
              <ul className="space-y-6 text-white/70">
                {[
                  "8 anos de experiência na área Administrativa/Análise de dados",
                  "6 anos atuando no dinâmico segmento de telecomunicações/Qualidade",
                  "Conhecimento intermediário em inglês"
                ].map((text, i) => (
                  <motion.li 
                    key={i} 
                    whileHover={{ x: 10, color: "#ffffff", scale: 1.02 }}
                    className="flex gap-4 transition-all duration-300 cursor-default"
                  >
                    <span className="text-blue-500 font-bold">•</span>
                    <p>{text}</p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 20 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-serif mb-8 flex items-center gap-3">
                <div className="w-8 h-[1px] bg-white/50"></div>
                Stack Técnica
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "SQL", "Python", "WinAutomation", "VBA", "Google DataStudio (Looker)", 
                  "Excel", "Google Sheets", "Power Query", "Power Pivot", "Power BI", 
                  "GitHub Actions", "CLI", "Power Automate", "n8n", "Agentes de IA", "Pacote Office"
                ].map((skill, i) => (
                  <span key={i} className="px-4 py-2 bg-white/10 rounded-full text-sm hover:bg-white hover:text-black transition-colors duration-300">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section id="trajetoria" className="py-32 px-6 md:px-20 bg-black flex justify-center">
        <div className="max-w-7xl w-full">
          <motion.h2 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            className="font-serif text-5xl md:text-7xl mb-20"
          >
            Minha Trajetória
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <div className="flex items-center gap-4 mb-10">
                <ArrowRight className="w-6 h-6 rotate-45" />
                <h3 className="text-2xl font-serif">Formação</h3>
              </div>
              <ul className="space-y-8">
                {[
                  { title: "MBA em Data Science e Big Data", sub: "Faculdade Facuminas" },
                  { title: "Gestão da Produção e Qualidade", sub: "Faculdade Facuminas" },
                  { title: "Certificação Black Belt", sub: "Pós-graduação" },
                  { title: "Bacharelado em Administração", sub: "Universidade do Estado da Bahia" }
                ].map((edu, i) => (
                  <motion.li 
                    key={i} 
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="border-l border-white/20 pl-6 transition-all duration-300 group cursor-default"
                  >
                    <h4 className="text-lg font-medium group-hover:text-white transition-colors">{edu.title}</h4>
                    <p className="text-white/50 text-sm group-hover:text-white/80 transition-colors">{edu.sub}</p>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-10">
                <ArrowRight className="w-6 h-6 rotate-45" />
                <h3 className="text-2xl font-serif">Experiência</h3>
              </div>
              <ul className="space-y-8">
                {[
                  { role: "Analista de Dados", company: "Grupo VitalMed", period: "Dez/2025 - Atual" },
                  { role: "Supervisor de Qualidade", company: "R2 Telecomunicações", period: "2025" },
                  { role: "Analista de Planejamento (PCP)", company: "R2 Telecomunicações", period: "2023 - 2025" },
                  { role: "Analista de Qualidade", company: "R2 Telecomunicações", period: "2023" }
                ].map((exp, i) => (
                  <motion.li 
                    key={i} 
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="border-l border-white/20 pl-6 transition-all duration-300 group cursor-default"
                  >
                    <h4 className="text-lg font-medium group-hover:text-white transition-colors">{exp.role}</h4>
                    <p className="text-white/50 text-sm group-hover:text-white/80 transition-colors">{exp.company} • {exp.period}</p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-40 px-6 md:px-20 flex flex-col items-center justify-center text-center gap-12">
        <motion.h2 
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, color: "#60a5fa" }}
          className="font-serif text-4xl md:text-6xl max-w-4xl leading-tight italic cursor-default transition-all duration-700"
        >
          "A excelência não é um ato, mas um hábito. A qualidade é o que nos define."
        </motion.h2>
        <motion.div 
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="w-48 h-48 circle-frame overflow-hidden bg-white/5 transition-all duration-500"
        >
          <img 
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80" 
            alt="Cyber Security" 
            className="w-full h-full object-cover grayscale opacity-60"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </section>

      {/* Contact Section */}
      <footer id="contato" className="py-32 px-6 md:px-20 flex justify-center">
        <div className="max-w-7xl w-full">
          <motion.h2 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            className="font-serif text-6xl md:text-8xl mb-24"
          >
            Entre em <br /> contato
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
            <div>
              <p className="text-white/40 text-sm uppercase tracking-widest mb-4">Endereço</p>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 opacity-50" />
                Salvador, Bahia - Brasil
              </p>
            </div>
            <div>
              <p className="text-white/40 text-sm uppercase tracking-widest mb-4">E-mail</p>
              <a href="mailto:ozaelsantana@gmail.com" className="flex items-center gap-2 hover:text-white/70 transition-colors">
                <Mail className="w-4 h-4 opacity-50" />
                ozaelsantana@gmail.com
              </a>
            </div>
            <div>
              <p className="text-white/40 text-sm uppercase tracking-widest mb-4">Telefone</p>
              <a 
                href="https://wa.me/5571987615043" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 hover:text-white/70 transition-colors"
              >
                <Phone className="w-4 h-4 opacity-50" />
                (71) 98761-5043
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <a 
              href="https://www.linkedin.com/in/ozael-santana" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/50 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              Perfil no LinkedIn
            </a>
            <div className="flex items-center gap-2 text-sm uppercase tracking-widest opacity-70">
              <ArrowRight className="w-4 h-4 rotate-45" />
              Trabalhe comigo!
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
