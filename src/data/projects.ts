export interface Project {
  id: string;
  name: string;
  path: string;
  link: string;
  description: string;
  type: string;
  color: string;
  symbol3d: "cross" | "icosahedron" | "shield" | "torus" | "capsule" | "cube";
}

export const projects: Project[] = [
  {
    id: "my-healthkey",
    name: "My-HealthKey.exe",
    path: "C:\\PROJETOS\\MY_HEALTHKEY",
    link: "https://my-health-key.vercel.app/",
    description: "Plataforma web para pesquisa de preços de medicamentos, com foco em interface intuitiva. Visitas presenciais a farmácias da cidade para apresentar o projeto: das 5 farmácias contatadas, 2 aceitaram cadastrar seus medicamentos na plataforma.",
    type: "PROJETO · SAÚDE (EM DESENVOLVIMENTO)",
    color: "#c4bfb8",
    symbol3d: "cross",
  },
  {
    id: "gamestage",
    name: "GameStage.exe",
    path: "C:\\PROJETOS\\GAMESTAGE",
    link: "https://gamestagecp2ejr.vercel.app/",
    description: "E-commerce gamer. Projeto da empresa júnior, com foco em responsividade e interfaces claras para o usuário.",
    type: "PROJETO · FRONTEND (EM DESENVOLVIMENTO)",
    color: "#c8c0b2",
    symbol3d: "icosahedron",
  },
  {
    id: "wazuh-automation",
    name: "Wazuh-SIEM.py",
    path: "C:\\PROJETOS\\WAZUH_AUTO",
    link: "https://github.com/MaskDMoa/Trabalho-Fetin-089",
    description: "Implantação do SIEM Wazuh via Docker, desenvolvido para a FETIN. Scripts Python para automação de respostas a incidentes de segurança.",
    type: "PROJETO · CIBERSEGURANÇA (DOCKER)",
    color: "#b5bfb8",
    symbol3d: "shield",
  },
  {
    id: "tracking-draw",
    name: "Tracking-Draw.py",
    path: "C:\\PROJETOS\\TRACKING_DRAW",
    link: "https://github.com/MaskDMoa/Tracking-Draw",
    description: "Projeto acadêmico em Python para rastreamento de objetos com OpenCV. Exercício prático de visão computacional.",
    type: "PROJETO · AUTOMAÇÃO / VISÃO COMP",
    color: "#b8c0c8",
    symbol3d: "torus",
  },
  {
    id: "thanothos-bot",
    name: "thanothos-bot.exe",
    path: "C:\\PROJETOS\\DISCORD_BOT",
    link: "https://github.com/MaskDMoa/thanothos-my-bot",
    description: "Bot de Discord em Python. Projeto pessoal com funcionalidades de moderação básica e gerenciamento de servidores.",
    type: "PROJETO · BOT",
    color: "#bdb8c8",
    symbol3d: "capsule",
  },
  {
    id: "mod-mine",
    name: "Mod-Mine.jar",
    path: "C:\\PROJETOS\\MOD_MINE",
    link: "https://www.curseforge.com/minecraft/mc-mods/mysticalgear",
    description: "Mod de Minecraft em Java publicado no CurseForge. Projeto para praticar POO e desenvolvimento de aplicações em Java.",
    type: "PROJETO · GAME DEV / JAVA · PUBLICADO",
    color: "#c8bfb5",
    symbol3d: "cube",
  },
];
