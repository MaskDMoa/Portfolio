# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cursor.spec.ts >> Custom Cursor E2E >> should display custom cursor and hide it on mobile
- Location: e2e\cursor.spec.ts:4:7

# Error details

```
Error: expect(locator).not.toHaveAttribute(expected) failed

Locator:  locator('.fixed.top-0.left-0.pointer-events-none.z-\\[99999\\]').locator('path')
Expected: not "white"
Received: "white"
Timeout:  5000ms

Call log:
  - Expect "not toHaveAttribute" locator('.fixed.top-0.left-0.pointer-events-none.z-\\[99999\\]').locator('path') with timeout 5000ms
  - waiting for locator('.fixed.top-0.left-0.pointer-events-none.z-\\[99999\\]').locator('path')
    12 × locator resolved to <path fill="white" stroke="black" stroke-width="1.5" stroke-linejoin="round" d="M2.5 1.5L21.5 20.5H12.5L9.5 32.5L2.5 1.5Z"></path>
       - unexpected value "white"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - complementary [ref=e2]:
    - button "Toggle Theme" [ref=e4]
    - time [ref=e7]: 00:15:41
  - generic [ref=e9]:
    - generic [ref=e10]:
      - banner [ref=e11]:
        - generic [ref=e12]: hiago.exe
      - generic [ref=e18]:
        - generic [ref=e19]:
          - paragraph [ref=e20]: C:\USUARIOS\HIAGO
          - generic [ref=e21]:
            - generic [ref=e22]:
              - heading "Hiago Felipe." [level=1] [ref=e23]: HiagoFelipe.
              - paragraph [ref=e24]: Engenharia de Computação · INATEL · Cibersegurança & Dev
              - paragraph [ref=e25]: Estudo Engenharia de Computação no INATEL. Mexo com cibersegurança (Wazuh, automação de resposta a incidentes) e desenvolvimento web no dia a dia.
              - generic [ref=e26]:
                - link "GITHUB ↗" [ref=e27]:
                  - /url: https://github.com/MaskDMoa
                - link "LINKEDIN ↗" [ref=e28]:
                  - /url: https://www.linkedin.com/in/hiago-felipe-7b1726267/
                - link "EMAIL ↗" [ref=e29]:
                  - /url: mailto:hiagofml11@gmail.com
                - link "CURRÍCULO ↓" [ref=e30]:
                  - /url: /Curriculo_Hiago_Felipe.pdf
            - generic [ref=e33]:
              - generic [ref=e34]: stats.exe
              - generic [ref=e40]: Carregando dados...
        - generic [ref=e47]:
          - generic [ref=e48]:
            - generic [ref=e49]: "02"
            - generic [ref=e51]: Projetos
          - generic [ref=e52]:
            - generic [ref=e54]:
              - generic:
                - generic: "01"
                - generic:
                  - generic: PROJETO · SAÚDE (EM DESENVOLVIMENTO)
                  - heading "My-HealthKey.exe" [level=3]
                - paragraph: App web pra pesquisar preços de remédios. Ainda tô desenvolvendo o frontend — o foco por enquanto é deixar a interface intuitiva e funcional.
                - generic [ref=e58]:
                  - link "ABRIR ↗" [ref=e59]:
                    - /url: https://my-health-key.vercel.app/
                    - text: ABRIR
                    - generic [ref=e60]: ↗
                  - button "Compartilhar projeto" [ref=e61]
            - generic [ref=e65]:
              - generic:
                - generic: "02"
                - generic:
                  - generic: PROJETO · FRONTEND (EM DESENVOLVIMENTO)
                  - heading "GameStage.exe" [level=3]
                - paragraph: E-commerce gamer, projeto da empresa júnior. Frontend com React, foco em responsividade e interfaces que façam sentido pro usuário.
                - generic [ref=e69]:
                  - link "ABRIR ↗" [ref=e70]:
                    - /url: https://gamestagecp2ejr.vercel.app/
                    - text: ABRIR
                    - generic [ref=e71]: ↗
                  - button "Compartilhar projeto" [ref=e72]
            - generic [ref=e76]:
              - generic:
                - generic: "03"
                - generic:
                  - generic: PROJETO · CIBERSEGURANÇA (DOCKER)
                  - heading "Wazuh-SIEM.py" [level=3]
                - paragraph: "Trabalho do Fetin: montar um SIEM com Wazuh usando Docker e automatizar respostas a alertas com scripts Python."
                - generic [ref=e80]:
                  - link "ABRIR ↗" [ref=e81]:
                    - /url: https://github.com/MaskDMoa/Trabalho-Fetin-089
                    - text: ABRIR
                    - generic [ref=e82]: ↗
                  - button "Compartilhar projeto" [ref=e83]
            - generic [ref=e87]:
              - generic:
                - generic: "04"
                - generic:
                  - generic: PROJETO · AUTOMAÇÃO / VISÃO COMP
                  - heading "Tracking-Draw.py" [level=3]
                - paragraph: Ferramenta Python que rastreia objetos com OpenCV e desenha na tela. Foi um exercício prático de visão computacional.
                - generic [ref=e91]:
                  - link "ABRIR ↗" [ref=e92]:
                    - /url: https://github.com/MaskDMoa/Tracking-Draw
                    - text: ABRIR
                    - generic [ref=e93]: ↗
                  - button "Compartilhar projeto" [ref=e94]
            - generic [ref=e98]:
              - generic:
                - generic: "05"
                - generic:
                  - generic: PROJETO · BOT
                  - heading "thanothos-bot.exe" [level=3]
                - paragraph: Bot de Discord em Python que fiz pra aprender. Faz moderação básica e ajuda no gerenciamento de servidores.
                - generic [ref=e102]:
                  - link "ABRIR ↗" [ref=e103]:
                    - /url: https://github.com/MaskDMoa/thanothos-my-bot
                    - text: ABRIR
                    - generic [ref=e104]: ↗
                  - button "Compartilhar projeto" [ref=e105]
            - generic [ref=e109]:
              - generic:
                - generic: "06"
                - generic:
                  - generic: PROJETO · GAME DEV / JAVA · PUBLICADO
                  - heading "Mod-Mine.jar" [level=3]
                - paragraph: Mod de Minecraft em Java — publicado no CurseForge. Foi meu exercício de POO e de entender como mexer em código alheio.
                - generic [ref=e113]:
                  - link "ABRIR ↗" [ref=e114]:
                    - /url: https://www.curseforge.com/minecraft/mc-mods/mysticalgear
                    - text: ABRIR
                    - generic [ref=e115]: ↗
                  - button "Compartilhar projeto" [ref=e116]
        - generic [ref=e119]:
          - generic [ref=e120]:
            - generic [ref=e121]: "03"
            - generic [ref=e123]: Habilidades & Formação
          - generic [ref=e124]:
            - generic [ref=e125]:
              - heading "Linguagens" [level=3] [ref=e126]
              - list [ref=e127]:
                - listitem [ref=e128]:
                  - generic [ref=e131]: C++
                - listitem [ref=e132]:
                  - generic [ref=e135]: Java
                - listitem [ref=e136]:
                  - generic [ref=e139]: Python
                - listitem [ref=e140]:
                  - generic [ref=e143]: JS / TS
                - listitem [ref=e144]:
                  - generic [ref=e147]: HTML / CSS
                - listitem [ref=e148]:
                  - generic [ref=e151]: React / Next.js
            - generic [ref=e152]:
              - heading "Segurança & Infra" [level=3] [ref=e153]
              - list [ref=e154]:
                - listitem [ref=e155]:
                  - generic [ref=e158]: Wazuh (SIEM)
                - listitem [ref=e159]:
                  - generic [ref=e162]: Ethical Hacking
                - listitem [ref=e163]:
                  - generic [ref=e166]: Linux · WSL2
                - listitem [ref=e167]:
                  - generic [ref=e170]: Docker
                - listitem [ref=e171]:
                  - generic [ref=e174]: MySQL
                - listitem [ref=e175]:
                  - generic [ref=e178]: Windows Server
            - generic [ref=e179]:
              - heading "Formação & Cursos" [level=3] [ref=e180]
              - list [ref=e181]:
                - listitem [ref=e182]:
                  - paragraph [ref=e183]: Eng. de Computação
                  - paragraph [ref=e184]: INATEL · em andamento
                - listitem [ref=e185]:
                  - paragraph [ref=e186]: Cybersecurity
                  - paragraph [ref=e187]: INATEL
                - listitem [ref=e188]:
                  - paragraph [ref=e189]: Ethical Hacking
                  - paragraph [ref=e190]: Udemy
                - listitem [ref=e191]:
                  - paragraph [ref=e192]: IA Generativa
                  - paragraph [ref=e193]: DIO · Bradesco
        - generic [ref=e194]:
          - generic [ref=e195]:
            - generic [ref=e196]: "04"
            - generic [ref=e198]: Voluntariado & Extensão
          - generic [ref=e199]:
            - generic [ref=e200]:
              - heading "CP2eJr (Empresa Júnior)" [level=3] [ref=e201]
              - paragraph [ref=e202]: Desenvolvimento Web
              - paragraph [ref=e203]: Faço parte do Núcleo de Projetos. Desenvolvo sites e aplicações reais com React para clientes da empresa júnior.
            - generic [ref=e204]:
              - heading "Sustentabilidade" [level=3] [ref=e205]
              - paragraph [ref=e206]: Lixo Eletrônico
              - paragraph [ref=e207]: Ajudo na coleta e triagem de lixo eletrônico dentro do programa de sustentabilidade do campus.
            - generic [ref=e208]:
              - heading "ONG Casa Viva" [level=3] [ref=e209]
              - paragraph [ref=e210]: Professor de Informática
              - paragraph [ref=e211]: Dei aulas de informática básica para crianças e adolescentes.
        - generic [ref=e212]:
          - generic [ref=e213]:
            - generic [ref=e214]: "05"
            - generic [ref=e216]: Música & Passatempos
          - paragraph [ref=e217]:
            - text: Estou procurando meu
            - strong [ref=e218]: primeiro estágio
            - text: de preferência em cibersegurança, desenvolvimento ou infra. Quero colocar em prática o que já aprendo sozinho e crescer com uma equipe boa.
    - paragraph [ref=e219]: HIAGO.EXE · 2026
  - button "Open Next.js Dev Tools" [ref=e225] [cursor=pointer]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Custom Cursor E2E', () => {
  4  |   test('should display custom cursor and hide it on mobile', async ({ page, isMobile }) => {
  5  |     await page.goto('/', { waitUntil: 'domcontentloaded' });
  6  | 
  7  |     // Check if the custom cursor container is rendered
  8  |     const customCursor = page.locator('.fixed.top-0.left-0.pointer-events-none.z-\\[99999\\]');
  9  |     
  10 |     if (isMobile) {
  11 |       // Should not be visible on mobile
  12 |       await expect(customCursor).toHaveCount(0);
  13 |     } else {
  14 |       // Should be visible on desktop
  15 |       await expect(customCursor).toHaveCount(1);
  16 | 
  17 |       // Verify the SVG is the default Aero arrow (fill="white")
  18 |       const path = customCursor.locator('path');
  19 |       await expect(path).toHaveAttribute('fill', 'white');
  20 | 
  21 |       // Move mouse over a button (Toggle Theme in Taskbar)
  22 |       const themeBtn = page.getByRole('button', { name: 'Toggle Theme' }).first();
  23 |       // Wait for it to be visible
  24 |       if (await themeBtn.isVisible()) {
  25 |         await themeBtn.hover();
  26 |         
  27 |         // Wait a small moment for React state to update
  28 |         await page.waitForTimeout(100);
  29 | 
  30 |         // Verify the SVG changes to precision select crosshair (no fill, stroke="white")
> 31 |         await expect(path).not.toHaveAttribute('fill', 'white');
     |                                ^ Error: expect(locator).not.toHaveAttribute(expected) failed
  32 |         await expect(path).toHaveAttribute('stroke', 'white');
  33 |       }
  34 |     }
  35 |   });
  36 | });
  37 | 
```