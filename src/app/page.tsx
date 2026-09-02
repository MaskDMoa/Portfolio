"use client";

import { motion, Variants } from "framer-motion";
import { WindowFrame } from "@/components/ui/WindowFrame";
import { FileCard } from "@/components/ui/FileCard";
import { projects } from "@/data/projects";

const socialLinks = [
  { href: "https://github.com/MaskDMoa", label: "GITHUB ↗" },
  { href: "https://www.linkedin.com/in/hiago-felipe-7b1726267/", label: "LINKEDIN ↗" },
  { href: "mailto:hiagofml11@gmail.com", label: "EMAIL ↗" },
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
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Home() {
  return (
    <div
      className="min-h-screen p-4 sm:p-8 xl:p-12 flex flex-col items-center relative"
      style={{ background: "var(--background)" }}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "28px 28px" }}
      />

      <motion.div
        initial="hidden"
        animate="show"
        variants={containerVariants}
        className="w-full max-w-5xl z-10 my-10"
      >
        <WindowFrame title="hiago.exe" accentColor="#c9a84c">
          <div className="flex flex-col">

            {/* ─── 01 · HERO / IDENTIDADE ─── */}
            <motion.section variants={itemVariants} className="pb-10 mb-10" style={{ borderBottom: "1px solid var(--border)" }}>
              <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "var(--accent-yellow)" }}>
                C:\USUARIOS\HIAGO
              </p>

              {/* Nome + Bio lado a lado no desktop */}
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <div>
                  <h1 className="text-5xl sm:text-6xl font-black leading-none tracking-tight mb-3" style={{ color: "var(--foreground)" }}>
                    Hiago<br />
                    <span style={{ color: "var(--foreground-muted)" }}>Felipe.</span>
                  </h1>
                  <p className="text-sm font-medium" style={{ color: "var(--foreground-muted)" }}>
                    Engenharia de Computação · INATEL · Cibersegurança & Dev
                  </p>
                </div>

                <div className="flex flex-col gap-3 md:text-right max-w-xs">
                  <p className="text-sm leading-relaxed" style={{ color: "var(--foreground-muted)" }}>
                    Estudo Engenharia de Computação no INATEL. Foco em automação de resposta a incidentes (Wazuh) e desenvolvimento web (React/Next.js).
                  </p>
                  {/* Links de contato */}
                  <div className="flex gap-2 md:justify-end flex-wrap">
                    {socialLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target={link.href.startsWith("mailto") ? undefined : "_blank"}
                        rel="noreferrer"
                        className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-sm transition-all"
                        style={{ background: "var(--surface-alt)", color: "var(--foreground)" }}
                        onMouseEnter={e => {
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
              </div>
            </motion.section>

            {/* ─── 02 · PROJETOS ─── */}
            <motion.section variants={itemVariants} className="pb-10 mb-10" style={{ borderBottom: "1px solid var(--border)" }}>
              <SectionLabel index="02">Projetos</SectionLabel>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((project, index) => (
                  <FileCard key={project.id} project={project} index={index + 1} />
                ))}
              </div>
            </motion.section>

            {/* ─── 03 · HABILIDADES & FORMAÇÃO ─── */}
            <motion.section variants={itemVariants} className="pb-10 mb-10" style={{ borderBottom: "1px solid var(--border)" }}>
              <SectionLabel index="03">Habilidades & Formação</SectionLabel>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Linguagens */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "var(--foreground-muted)" }}>
                    Linguagens
                  </h3>
                  <ul className="space-y-1.5 text-sm" style={{ color: "var(--foreground)" }}>
                    {["C++", "Java", "Python", "JavaScript / TypeScript", "HTML5 · CSS3", "React / Next.js"].map(s => (
                      <li key={s} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "var(--border-strong)" }} />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Segurança & Infra */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "var(--foreground-muted)" }}>
                    Segurança & Infra
                  </h3>
                  <ul className="space-y-1.5 text-sm" style={{ color: "var(--foreground)" }}>
                    {["Wazuh (SIEM)", "Ethical Hacking", "Linux · WSL2", "Docker", "MySQL", "Windows Server"].map(s => (
                      <li key={s} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "var(--border-strong)" }} />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Formação */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "var(--foreground-muted)" }}>
                    Formação & Cursos
                  </h3>
                  <ul className="space-y-3 text-sm">
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
            </motion.section>

            {/* ─── 04 · VOLUNTARIADO & EXTENSÃO ─── */}
            <motion.section variants={itemVariants} className="pb-10 mb-10" style={{ borderBottom: "1px solid var(--border)" }}>
              <SectionLabel index="04">Voluntariado & Extensão</SectionLabel>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "var(--foreground-muted)" }}>
                    CP2eJr (Empresa Júnior)
                  </h3>
                  <p className="text-sm font-semibold mb-1" style={{ color: "var(--foreground)" }}>Desenvolvimento Web</p>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--foreground-muted)" }}>
                    Atuação no Núcleo de Projetos desenvolvendo sites institucionais e aplicações reais com React.
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "var(--foreground-muted)" }}>
                    Sustentabilidade
                  </h3>
                  <p className="text-sm font-semibold mb-1" style={{ color: "var(--foreground)" }}>Lixo Eletrônico</p>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--foreground-muted)" }}>
                    Voluntário na coleta, triagem e destinação adequada de resíduos eletrônicos.
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "var(--foreground-muted)" }}>
                    ONG Casa Viva
                  </h3>
                  <p className="text-sm font-semibold mb-1" style={{ color: "var(--foreground)" }}>Professor de Informática</p>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--foreground-muted)" }}>
                    Ensino de informática básica para crianças e adolescentes em situação de vulnerabilidade.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* ─── 05 · OBJETIVO ─── */}
            <motion.section variants={itemVariants}>
              <SectionLabel index="05">Objetivo Profissional</SectionLabel>
              <p className="text-sm leading-relaxed max-w-3xl" style={{ color: "var(--foreground-muted)" }}>
                Busco meu <strong style={{ color: "var(--foreground)" }}>primeiro estágio</strong> em Cibersegurança, Desenvolvimento de Software ou TI para aplicar conhecimentos em automação, monitoramento e desenvolvimento web — e crescer junto com uma equipe sólida.
              </p>
            </motion.section>

          </div>
        </WindowFrame>

        {/* Rodapé da página */}
        <motion.p variants={itemVariants} className="text-center text-xs mt-6" style={{ color: "var(--foreground-muted)" }}>
          HIAGO.EXE · 2026 · Feito com Next.js + Tailwind + Framer Motion
        </motion.p>
      </motion.div>
    </div>
  );
}



