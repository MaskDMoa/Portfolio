"use client";

import { motion, Variants } from "framer-motion";
import { WindowFrame } from "@/components/ui/WindowFrame";
import { FileCard } from "@/components/ui/FileCard";
import { projects } from "@/data/projects";
import { SiCplusplus, SiTypescript, SiHtml5, SiReact, SiDocker, SiMysql, SiLinux } from "react-icons/si";
import { FaJava, FaPython, FaUserSecret, FaShieldAlt, FaWindows } from "react-icons/fa";
import { RetroComputer } from "@/components/ui/RetroComputer";
import { GithubStats } from "@/components/ui/GithubStats";
import { ScrollSection } from "@/components/ui/ScrollSection";
import { useHapticFeedback } from "@/hooks/useHapticFeedback";

const programmingSkills = [
  { name: "C++", icon: SiCplusplus, color: "#0d1b2a" },
  { name: "Java", icon: FaJava, color: "#4a0f0f" },
  { name: "Python", icon: FaPython, color: "#0d2b26" },
  { name: "JS / TS", icon: SiTypescript, color: "#14210d" },
  { name: "HTML / CSS", icon: SiHtml5, color: "#4a0f0f" },
  { name: "React / Next.js", icon: SiReact, color: "#0d1b2a" },
];

const infraSkills = [
  { name: "Wazuh (SIEM)", icon: FaShieldAlt, color: "#0d1b2a" },
  { name: "Ethical Hacking", icon: FaUserSecret, color: "#0a0a0a" },
  { name: "Linux · WSL2", icon: SiLinux, color: "#14210d" },
  { name: "Docker", icon: SiDocker, color: "#0d1b2a" },
  { name: "MySQL", icon: SiMysql, color: "#0d2b26" },
  { name: "Windows Server", icon: FaWindows, color: "#0d1b2a" },
];

const socialLinks = [
  { href: "https://github.com/MaskDMoa", label: "GITHUB ↗" },
  { href: "https://www.linkedin.com/in/hiago-felipe-7b1726267/", label: "LINKEDIN ↗" },
  { href: "mailto:hiagofml11@gmail.com", label: "EMAIL ↗" },
  { href: "/Curriculo_Hiago_Felipe.pdf", label: "CURRÍCULO ↓", download: true },
];

function SectionLabel({ index, children }: { index: string; children: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="text-xs font-bold tracking-widest" style={{ color: "var(--foreground-muted)" }}>{index}</span>
      <span className="flex-1 h-px" style={{ background: "var(--border)" }} />
      <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--foreground-muted)" }}>{children}</span>
    </div>
  );
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Home() {
  const vibrate = useHapticFeedback();

  return (
    <div
      className="min-h-screen p-4 pl-16 sm:p-8 sm:pl-20 xl:p-12 xl:pl-24 flex flex-col items-center relative"
      style={{ background: "var(--background)" }}
    >

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "28px 28px" }}
      />

      <motion.div
        initial="hidden"
        animate="show"
        variants={containerVariants}
        className="w-full max-w-5xl z-10 my-10"
      >
        <WindowFrame title="hiago.exe" accentColor="#c9a84c">
          <div className="flex flex-col">


            <motion.section variants={itemVariants} className="pb-10 mb-10" style={{ borderBottom: "1px solid var(--border)" }}>
              <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "var(--accent-yellow)" }}>
                C:\USUARIOS\HIAGO
              </p>


              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex-1">
                  <h1 className="text-5xl sm:text-6xl font-black leading-none tracking-tight mb-3" style={{ color: "var(--foreground)" }}>
                    Hiago<br />
                    <span style={{ color: "var(--foreground-muted)" }}>Felipe.</span>
                  </h1>
                  <p className="text-sm font-medium mb-3" style={{ color: "var(--foreground-muted)" }}>
                    Engenharia de Computação · INATEL · Cibersegurança & Dev
                  </p>
                  <p className="text-sm leading-relaxed max-w-sm mb-6" style={{ color: "var(--foreground-muted)" }}>
                    Estudo Engenharia de Computação no INATEL. Mexo com cibersegurança (Wazuh, automação de resposta a incidentes) e desenvolvimento web no dia a dia.
                  </p>

                  {/* Links de contato */}
                  <div className="flex gap-2 flex-wrap">
                    {socialLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target={link.download || link.href.startsWith("mailto") ? undefined : "_blank"}
                        rel={link.download || link.href.startsWith("mailto") ? undefined : "noreferrer"}
                        download={link.download}
                        onClick={() => vibrate(30)}
                        className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 transition-all"
                        style={{
                          background: "var(--surface-alt)",
                          color: "var(--foreground)",
                          border: "1px solid var(--border-strong)",
                        }}
                        onMouseEnter={e => {
                          vibrate(15);
                          (e.currentTarget as HTMLAnchorElement).style.background = "var(--border-strong)";
                        }}
                        onMouseLeave={e => {
                          (e.currentTarget as HTMLAnchorElement).style.background = "var(--surface-alt)";
                        }}
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="flex-1 w-full flex justify-center items-center mt-8 md:mt-0 relative">
                  <GithubStats />

                    {/* 3D Model floating widget */}
                    <div className="absolute -bottom-10 -right-10 w-32 h-32 md:w-40 md:h-40 z-20 pointer-events-auto">
                      <RetroComputer />
                    </div>
                </div>
              </div>
            </motion.section>

            {/* ─── 02 · PROJETOS ─── */}
            <ScrollSection className="pb-10 mb-10" style={{ borderBottom: "1px solid var(--border)" }}>
              <SectionLabel index="02">Projetos</SectionLabel>

              <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-x-auto snap-x snap-mandatory pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                {projects.map((project, index) => (
                  <div key={project.id} className="min-w-[85vw] sm:min-w-0 snap-center shrink-0 h-full">
                    <FileCard project={project} index={index + 1} />
                  </div>
                ))}
              </div>
            </ScrollSection>



            {/* ─── 03 · HABILIDADES & FORMAÇÃO ─── */}
            <ScrollSection className="pb-10 mb-12" style={{ borderBottom: "1px solid var(--border)" }}>
              <SectionLabel index="03">Habilidades &amp; Formação</SectionLabel>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Linguagens */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "var(--foreground-muted)" }}>
                    Linguagens
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {programmingSkills.map((skill, i) => (
                      <li
                        key={skill.name}
                        className="flex items-center gap-3 px-3 py-2 transition-transform hover:-translate-y-0.5"
                        style={{
                          background: "var(--surface)",
                          border: "1px solid var(--border-strong)",
                          boxShadow: i % 2 === 0
                            ? "2px 2px 0px rgba(0,0,0,0.6)"
                            : "3px 3px 0px rgba(0,0,0,0.5)",
                        }}
                      >
                        <skill.icon className="text-lg" style={{ color: skill.color }} />
                        <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>{skill.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Segurança & Infra */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "var(--foreground-muted)" }}>
                    Segurança &amp; Infra
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {infraSkills.map((skill, i) => (
                      <li
                        key={skill.name}
                        className="flex items-center gap-3 px-3 py-2 transition-transform hover:-translate-y-0.5"
                        style={{
                          background: "var(--surface)",
                          border: "1px solid var(--border-strong)",
                          boxShadow: i % 2 === 0
                            ? "3px 3px 0px rgba(0,0,0,0.5)"
                            : "2px 2px 0px rgba(0,0,0,0.6)",
                        }}
                      >
                        <skill.icon className="text-lg" style={{ color: skill.color }} />
                        <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>{skill.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Formação */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "var(--foreground-muted)" }}>
                    Formação &amp; Cursos
                  </h3>
                  <ul className="space-y-4 text-sm mt-1">
                    {[
                      { title: "Eng. de Computação", sub: "INATEL · em andamento" },
                      { title: "Cybersecurity", sub: "INATEL" },
                      { title: "Ethical Hacking", sub: "Udemy" },
                      { title: "IA Generativa", sub: "DIO · Bradesco" },
                    ].map(f => (
                      <li key={f.title}>
                        <p className="font-semibold" style={{ color: "var(--foreground)" }}>{f.title}</p>
                        <p className="text-xs" style={{ color: "var(--foreground-muted)" }}>{f.sub}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollSection>

            {/* ─── 04 · VOLUNTARIADO & EXTENSÃO ─── */}
            <ScrollSection className="pb-10 mb-8" style={{ borderBottom: "1px solid var(--border)" }}>
              <SectionLabel index="04">Voluntariado &amp; Extensão</SectionLabel>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "var(--foreground-muted)" }}>
                    CP2eJr (Empresa Júnior)
                  </h3>
                  <p className="text-sm font-semibold mb-1" style={{ color: "var(--foreground)" }}>Desenvolvimento Web</p>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--foreground-muted)" }}>
                    Faço parte do Núcleo de Projetos. Desenvolvo sites e aplicações reais com React para clientes da empresa júnior.
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "var(--foreground-muted)" }}>
                    Sustentabilidade
                  </h3>
                  <p className="text-sm font-semibold mb-1" style={{ color: "var(--foreground)" }}>Lixo Eletrônico</p>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--foreground-muted)" }}>
                    Ajudo na coleta e triagem de lixo eletrônico dentro do programa de sustentabilidade do campus.
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "var(--foreground-muted)" }}>
                    ONG Casa Viva
                  </h3>
                  <p className="text-sm font-semibold mb-1" style={{ color: "var(--foreground)" }}>Professor de Informática</p>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--foreground-muted)" }}>
                    Dei aulas de informática básica para crianças e adolescentes.
                  </p>
                </div>
              </div>
            </ScrollSection>

            {/* ─── 05 · MÚSICA & PASSATEMPOS ─── */}
            <ScrollSection className="pb-2">
              <SectionLabel index="05">Música &amp; Passatempos</SectionLabel>
              <p className="text-sm leading-relaxed max-w-3xl" style={{ color: "var(--foreground-muted)" }}>
                Estou procurando meu <strong style={{ color: "var(--foreground)" }}>primeiro estágio</strong> de preferência em cibersegurança, desenvolvimento ou infra. Quero colocar em prática o que já aprendo sozinho e crescer com uma equipe boa.
              </p>
            </ScrollSection>

          </div>
        </WindowFrame>

        {/* Rodapé da página */}
        <motion.p variants={itemVariants} className="text-center text-xs mt-6" style={{ color: "var(--foreground-muted)" }}>
          HIAGO.EXE · 2026
        </motion.p>
      </motion.div>
    </div>
  );
}
