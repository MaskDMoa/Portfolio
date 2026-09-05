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
    description: "App web pra pesquisar preços de remédios. Ainda tô desenvolvendo o frontend — o foco por enquanto é deixar a interface intuitiva e funcional.",
    type: "PROJETO · SAÚDE (EM DESENVOLVIMENTO)",
    color: "#c4bfb8",
    symbol3d: "cross",
  },
  {
    id: "gamestage",
    name: "GameStage.exe",
    path: "C:\\PROJETOS\\GAMESTAGE",
    link: "https://gamestagecp2ejr.vercel.app/",
    description: "E-commerce gamer, projeto da empresa júnior. Frontend com React, foco em responsividade e interfaces que façam sentido pro usuário.",
    type: "PROJETO · FRONTEND (EM DESENVOLVIMENTO)",
    color: "#c8c0b2",
    symbol3d: "icosahedron",
  },
  {
    id: "wazuh-automation",
    name: "Wazuh-SIEM.py",
    path: "C:\\PROJETOS\\WAZUH_AUTO",
    link: "https://github.com/MaskDMoa/Trabalho-Fetin-089",
    description: "Trabalho do Fetin: montar um SIEM com Wazuh usando Docker e automatizar respostas a alertas com scripts Python.",
    type: "PROJETO · CIBERSEGURANÇA (DOCKER)",
    color: "#b5bfb8",
    symbol3d: "shield",
  },
  {
    id: "tracking-draw",
    name: "Tracking-Draw.py",
    path: "C:\\PROJETOS\\TRACKING_DRAW",
    link: "https://github.com/MaskDMoa/Tracking-Draw",
    description: "Ferramenta Python que rastreia objetos com OpenCV e desenha na tela. Foi um exercício prático de visão computacional.",
    type: "PROJETO · AUTOMAÇÃO / VISÃO COMP",
    color: "#b8c0c8",
    symbol3d: "torus",
  },
  {
    id: "thanothos-bot",
    name: "thanothos-bot.exe",
    path: "C:\\PROJETOS\\DISCORD_BOT",
    link: "https://github.com/MaskDMoa/thanothos-my-bot",
    description: "Bot de Discord em Python que fiz pra aprender. Faz moderação básica e ajuda no gerenciamento de servidores.",
    type: "PROJETO · BOT",
    color: "#bdb8c8",
    symbol3d: "capsule",
  },
  {
    id: "mod-mine",
    name: "Mod-Mine.jar",
    path: "C:\\PROJETOS\\MOD_MINE",
    link: "https://www.curseforge.com/minecraft/mc-mods/mysticalgear",
    description: "Mod de Minecraft em Java — publicado no CurseForge. Foi meu exercício de POO e de entender como mexer em código alheio.",
    type: "PROJETO · GAME DEV / JAVA · PUBLICADO",
    color: "#c8bfb5",
    symbol3d: "cube",
  },
];
