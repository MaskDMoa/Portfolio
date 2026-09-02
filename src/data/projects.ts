export interface Project {
  id: string;
  name: string;
  path: string;
  link: string;
  description: string;
  type: string;
  color: string;
}

export const projects: Project[] = [
  {
    id: "my-healthkey",
    name: "My-HealthKey.exe",
    path: "C:\\PROJETOS\\MY_HEALTHKEY",
    link: "https://my-health-key.vercel.app/",
    description: "Aplicação web para pesquisa de preços de remédios. O foco atual do desenvolvimento está na interface e experiência do usuário (UI/UX).",
    type: "PROJETO · SAÚDE (EM DESENVOLVIMENTO)",
    color: "#c4bfb8",
  },
  {
    id: "gamestage",
    name: "GameStage.exe",
    path: "C:\\PROJETOS\\GAMESTAGE",
    link: "https://gamestagecp2ejr.vercel.app/",
    description: "Plataforma e-commerce focada no universo gamer. Projeto de desenvolvimento frontend focado em responsividade e interfaces iterativas.",
    type: "PROJETO · FRONTEND (EM DESENVOLVIMENTO)",
    color: "#c8c0b2",
  },
  {
    id: "wazuh-automation",
    name: "Wazuh-SIEM.py",
    path: "C:\\PROJETOS\\WAZUH_AUTO",
    link: "https://github.com/MaskDMoa/Trabalho-Fetin-089",
    description: "Projeto acadêmico para o Fetin 089: implantação do SIEM Wazuh via Docker e scripts Python para automação de respostas a alertas.",
    type: "PROJETO · CIBERSEGURANÇA (DOCKER)",
    color: "#b5bfb8",
  },
  {
    id: "tracking-draw",
    name: "Tracking-Draw.py",
    path: "C:\\PROJETOS\\TRACKING_DRAW",
    link: "https://github.com/MaskDMoa/Tracking-Draw",
    description: "Ferramenta Python de rastreamento visual usando OpenCV com interface de desenho, como exercício de Visão Computacional.",
    type: "PROJETO · AUTOMAÇÃO / VISÃO COMP",
    color: "#b8c0c8",
  },
  {
    id: "thanothos-bot",
    name: "thanothos-bot.exe",
    path: "C:\\PROJETOS\\DISCORD_BOT",
    link: "https://github.com/MaskDMoa/thanothos-my-bot",
    description: "Bot para Discord em Python com comandos básicos para auxílio na moderação e gerenciamento de servidores.",
    type: "PROJETO · BOT",
    color: "#bdb8c8",
  },
  {
    id: "mod-mine",
    name: "Mod-Mine.jar",
    path: "C:\\PROJETOS\\MOD_MINE",
    link: "https://github.com/MaskDMoa/Mod-Mine",
    description: "Modificação (Mod) para Minecraft feita em Java. Exercício de Programação Orientada a Objetos e manipulação de código existente.",
    type: "PROJETO · GAME DEV / JAVA",
    color: "#c8bfb5",
  },
];

