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
    path: "C:\\PRODUTOS\\MY_HEALTHKEY",
    link: "https://my-health-key.vercel.app/",
    description: "Compara preços de remédios em farmácias da região em tempo real, entregando o melhor preço na menor distância. Modelo Trivago aplicado à saúde.",
    type: "PRODUTO · SAÚDE (ONLINE)",
    color: "#c4bfb8",
  },
  {
    id: "gamestage",
    name: "GameStage.exe",
    path: "C:\\PRODUTOS\\GAMESTAGE",
    link: "https://gamestagecp2ejr.vercel.app/",
    description: "Plataforma focada no universo gamer. Projeto de desenvolvimento frontend com foco em UI/UX responsiva e interfaces interativas.",
    type: "PRODUTO · FRONTEND (ONLINE)",
    color: "#c8c0b2",
  },
  {
    id: "wazuh-automation",
    name: "Wazuh-SIEM.py",
    path: "C:\\PRODUTOS\\WAZUH_AUTO",
    link: "https://github.com/MaskDMoa/Trabalho-Fetin-089",
    description: "Sistema de automação de resposta a alertas do SIEM Wazuh. Detecta ameaças e executa contramedidas automaticamente, sem intervenção humana.",
    type: "PRODUTO · CIBERSEGURANÇA",
    color: "#b5bfb8",
  },
  {
    id: "tracking-draw",
    name: "Tracking-Draw.py",
    path: "C:\\PRODUTOS\\TRACKING_DRAW",
    link: "https://github.com/MaskDMoa/Tracking-Draw",
    description: "Ferramenta Python de rastreamento visual com interface de desenho. Potencial para soluções de mapeamento e monitoramento em tempo real.",
    type: "PRODUTO · AUTOMAÇÃO",
    color: "#b8c0c8",
  },
  {
    id: "thanothos-bot",
    name: "thanothos-bot.exe",
    path: "C:\\PRODUTOS\\DISCORD_BOT",
    link: "https://github.com/MaskDMoa/thanothos-my-bot",
    description: "Bot para Discord desenvolvido em Python. Automatiza tarefas de moderação e gerenciamento de comunidades. Escalável como produto SaaS.",
    type: "PRODUTO · BOT / SAAS",
    color: "#bdb8c8",
  },
  {
    id: "mod-mine",
    name: "Mod-Mine.jar",
    path: "C:\\PRODUTOS\\MOD_MINE",
    link: "https://github.com/MaskDMoa/Mod-Mine",
    description: "Mod para Minecraft desenvolvido em Java. Experiência em game development, lógica de jogos e modificação de software existente.",
    type: "PRODUTO · GAME DEV",
    color: "#c8bfb5",
  },
];

