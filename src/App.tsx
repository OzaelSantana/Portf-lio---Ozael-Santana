import { motion } from "motion/react";
import { ArrowRight, Mail, Phone, MapPin, Linkedin } from "lucide-react";

export default function App() {
  // Puxando a imagem diretamente do seu repositório no GitHub!
  const userPhoto = "https://raw.githubusercontent.com/OzaelSantana/Portf-lio---Ozael-Santana/main/public/Profile.jpg"; 

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-20 relative overflow-hidden">
        <div className="flex-1 z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-6xl md:text-8xl leading-tight mb-8"
          >
            Bem-vindo ao <br /> meu portfólio <br /> profissional
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="inline-block border border-white/30 rounded-full px-6 py-2 text-sm uppercase tracking-widest"
          >
            Ozael Santana / Analista de Dados @ VitalMed
          </motion.div>
        </div>
        <div className="flex-1 mt-12 md:mt-0 flex justify-center relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="oval-photo"
          >
            <img 
              src={userPhoto} 
              alt="Ozael Santana" 
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="absolute bottom-0 right-0 flex items-center gap-2 text-sm uppercase tracking-widest opacity-70">
            <ArrowRight className="w-4 h-4 rotate-45" />
            Trabalhe comigo!
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="min-h-screen flex flex-col md:flex-row-reverse items-center justify-center px-6 md:px-20 py-20 bg-black">
        <div className="flex-1 z-10 md:pl-20">
          <motion.h2 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            className="font-serif text-5xl md:text-7xl mb-12"
          >
            Quem é o Ozael?
          </motion.h2>
          <motion.p 
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl leading-relaxed text-white/70 max-w-xl mb-8"
          >
            Especialista em Gestão da Qualidade e Dados, com sólida formação em Administração e MBA em Data Science & Big Data. 
            Atualmente atuo como Analista de Dados no Grupo VitalMed, focado em transformar informações em inteligência de negócio.
          </motion.p>
          <div className="w-24 h-[1px] bg-white/30"></div>
        </div>
        <div className="flex-1 mt-12 md:mt-0 flex justify-center">
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
      </section>

      {/* Projects/Skills Section */}
      <section className="py-32 px-6 md:px-20">
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
      </section>

      {/* Experience & Education Section */}
      <section className="py-32 px-6 md:px-20 bg-black">
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
                { title: "Bacharelado em Administração", sub: "Universidade do Estado da Bahia" },
                { title: "Certificação Black Belt", sub: "Pós-graduação" }
              ].map((edu, i) => (
                <li key={i} className="border-l border-white/20 pl-6">
                  <h4 className="text-lg font-medium">{edu.title}</h4>
                  <p className="text-white/50 text-sm">{edu.sub}</p>
                </li>
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
                <li key={i} className="border-l border-white/20 pl-6">
                  <h4 className="text-lg font-medium">{exp.role}</h4>
                  <p className="text-white/50 text-sm">{exp.company} • {exp.period}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-40 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.h2 
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          className="font-serif text-4xl md:text-6xl max-w-2xl leading-tight italic"
        >
          "A excelência não é um ato, mas um hábito. A qualidade é o que nos define."
        </motion.h2>
        <motion.div 
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.8 }}
          viewport={{ once: true }}
          className="w-64 h-64 circle-frame overflow-hidden bg-white/5"
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
      <footer className="py-32 px-6 md:px-20 border-t border-white/10">
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
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 opacity-50" />
              (71) 98761-5043
            </p>
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
            LinkedIn Profile
          </a>
          <div className="flex items-center gap-2 text-sm uppercase tracking-widest opacity-70">
            <ArrowRight className="w-4 h-4 rotate-45" />
            Trabalhe comigo!
          </div>
        </div>
      </footer>
    </div>
  );
}
