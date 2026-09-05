# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cursor.spec.ts >> Custom Cursor E2E >> should display custom cursor and hide it on mobile
- Location: e2e\cursor.spec.ts:4:7

# Error details

```
Error: expect(locator).toHaveCount(expected) failed

Locator:  locator('.fixed.top-0.left-0.pointer-events-none.z-\\[99999\\]')
Expected: 0
Received: 1
Timeout:  5000ms

Call log:
  - Expect "toHaveCount" locator('.fixed.top-0.left-0.pointer-events-none.z-\\[99999\\]') with timeout 5000ms
  - waiting for locator('.fixed.top-0.left-0.pointer-events-none.z-\\[99999\\]')
    10 × locator resolved to 1 element
       - unexpected value "1"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e6] [cursor=pointer]:
    - button "Open Next.js Dev Tools" [ref=e7]
    - generic [ref=e11]:
      - button "Open issues overlay" [ref=e12]:
        - generic [ref=e13]:
          - generic [aria-hidden] [ref=e14]: "0"
          - generic [ref=e15]: "1"
        - generic [ref=e16]: Issue
      - button "Collapse issues badge" [ref=e17]
  - complementary [ref=e20]:
    - button "Toggle Theme" [ref=e22]
    - time [ref=e25]: 00:16:11
  - generic [ref=e27]:
    - generic [ref=e28]:
      - banner [ref=e29]:
        - generic [ref=e30]: hiago.exe
      - generic [ref=e36]:
        - generic [ref=e37]:
          - paragraph [ref=e38]: C:\USUARIOS\HIAGO
          - generic [ref=e40]:
            - heading "Hiago Felipe." [level=1] [ref=e41]: HiagoFelipe.
            - paragraph [ref=e42]: Engenharia de Computação · INATEL · Cibersegurança & Dev
            - paragraph [ref=e43]: Estudo Engenharia de Computação no INATEL. Mexo com cibersegurança (Wazuh, automação de resposta a incidentes) e desenvolvimento web no dia a dia.
            - generic [ref=e44]:
              - link "GITHUB ↗" [ref=e45] [cursor=pointer]:
                - /url: https://github.com/MaskDMoa
              - link "LINKEDIN ↗" [ref=e46] [cursor=pointer]:
                - /url: https://www.linkedin.com/in/hiago-felipe-7b1726267/
              - link "EMAIL ↗" [ref=e47] [cursor=pointer]:
                - /url: mailto:hiagofml11@gmail.com
              - link "CURRÍCULO ↓" [ref=e48] [cursor=pointer]:
                - /url: /Curriculo_Hiago_Felipe.pdf
        - generic [ref=e54]:
          - generic [ref=e55]:
            - generic [ref=e56]: "02"
            - generic [ref=e58]: Projetos
          - generic [ref=e59]:
            - generic [ref=e61]:
              - generic:
                - generic: "01"
                - generic:
                  - generic: PROJETO · SAÚDE (EM DESENVOLVIMENTO)
                  - heading "My-HealthKey.exe" [level=3]
                - paragraph: App web pra pesquisar preços de remédios. Ainda tô desenvolvendo o frontend — o foco por enquanto é deixar a interface intuitiva e funcional.
                - generic [ref=e65]:
                  - link "ABRIR ↗" [ref=e66] [cursor=pointer]:
                    - /url: https://my-health-key.vercel.app/
                    - text: ABRIR
                    - generic [ref=e67]: ↗
                  - button "Compartilhar projeto" [ref=e68]
            - generic [ref=e72]:
              - generic:
                - generic: "02"
                - generic:
                  - generic: PROJETO · FRONTEND (EM DESENVOLVIMENTO)
                  - heading "GameStage.exe" [level=3]
                - paragraph: E-commerce gamer, projeto da empresa júnior. Frontend com React, foco em responsividade e interfaces que façam sentido pro usuário.
                - generic [ref=e76]:
                  - link "ABRIR ↗" [ref=e77] [cursor=pointer]:
                    - /url: https://gamestagecp2ejr.vercel.app/
                    - text: ABRIR
                    - generic [ref=e78]: ↗
                  - button "Compartilhar projeto" [ref=e79]
            - generic [ref=e83]:
              - generic:
                - generic: "03"
                - generic:
                  - generic: PROJETO · CIBERSEGURANÇA (DOCKER)
                  - heading "Wazuh-SIEM.py" [level=3]
                - paragraph: "Trabalho do Fetin: montar um SIEM com Wazuh usando Docker e automatizar respostas a alertas com scripts Python."
                - generic [ref=e87]:
                  - link "ABRIR ↗" [ref=e88] [cursor=pointer]:
                    - /url: https://github.com/MaskDMoa/Trabalho-Fetin-089
                    - text: ABRIR
                    - generic [ref=e89]: ↗
                  - button "Compartilhar projeto" [ref=e90]
            - generic [ref=e94]:
              - generic:
                - generic: "04"
                - generic:
                  - generic: PROJETO · AUTOMAÇÃO / VISÃO COMP
                  - heading "Tracking-Draw.py" [level=3]
                - paragraph: Ferramenta Python que rastreia objetos com OpenCV e desenha na tela. Foi um exercício prático de visão computacional.
                - generic [ref=e98]:
                  - link "ABRIR ↗" [ref=e99] [cursor=pointer]:
                    - /url: https://github.com/MaskDMoa/Tracking-Draw
                    - text: ABRIR
                    - generic [ref=e100]: ↗
                  - button "Compartilhar projeto" [ref=e101]
            - generic [ref=e105]:
              - generic:
                - generic: "05"
                - generic:
                  - generic: PROJETO · BOT
                  - heading "thanothos-bot.exe" [level=3]
                - paragraph: Bot de Discord em Python que fiz pra aprender. Faz moderação básica e ajuda no gerenciamento de servidores.
                - generic [ref=e109]:
                  - link "ABRIR ↗" [ref=e110] [cursor=pointer]:
                    - /url: https://github.com/MaskDMoa/thanothos-my-bot
                    - text: ABRIR
                    - generic [ref=e111]: ↗
                  - button "Compartilhar projeto" [ref=e112]
            - generic [ref=e116]:
              - generic:
                - generic: "06"
                - generic:
                  - generic: PROJETO · GAME DEV / JAVA · PUBLICADO
                  - heading "Mod-Mine.jar" [level=3]
                - paragraph: Mod de Minecraft em Java — publicado no CurseForge. Foi meu exercício de POO e de entender como mexer em código alheio.
                - generic [ref=e120]:
                  - link "ABRIR ↗" [ref=e121] [cursor=pointer]:
                    - /url: https://www.curseforge.com/minecraft/mc-mods/mysticalgear
                    - text: ABRIR
                    - generic [ref=e122]: ↗
                  - button "Compartilhar projeto" [ref=e123]
        - generic [ref=e126]:
          - generic [ref=e127]:
            - generic [ref=e128]: "03"
            - generic [ref=e130]: Habilidades & Formação
          - generic [ref=e131]:
            - generic [ref=e132]:
              - heading "Linguagens" [level=3] [ref=e133]
              - list [ref=e134]:
                - listitem [ref=e135]:
                  - generic [ref=e138]: C++
                - listitem [ref=e139]:
                  - generic [ref=e142]: Java
                - listitem [ref=e143]:
                  - generic [ref=e146]: Python
                - listitem [ref=e147]:
                  - generic [ref=e150]: JS / TS
                - listitem [ref=e151]:
                  - generic [ref=e154]: HTML / CSS
                - listitem [ref=e155]:
                  - generic [ref=e158]: React / Next.js
            - generic [ref=e159]:
              - heading "Segurança & Infra" [level=3] [ref=e160]
              - list [ref=e161]:
                - listitem [ref=e162]:
                  - generic [ref=e165]: Wazuh (SIEM)
                - listitem [ref=e166]:
                  - generic [ref=e169]: Ethical Hacking
                - listitem [ref=e170]:
                  - generic [ref=e173]: Linux · WSL2
                - listitem [ref=e174]:
                  - generic [ref=e177]: Docker
                - listitem [ref=e178]:
                  - generic [ref=e181]: MySQL
                - listitem [ref=e182]:
                  - generic [ref=e185]: Windows Server
            - generic [ref=e186]:
              - heading "Formação & Cursos" [level=3] [ref=e187]
              - list [ref=e188]:
                - listitem [ref=e189]:
                  - paragraph [ref=e190]: Eng. de Computação
                  - paragraph [ref=e191]: INATEL · em andamento
                - listitem [ref=e192]:
                  - paragraph [ref=e193]: Cybersecurity
                  - paragraph [ref=e194]: INATEL
                - listitem [ref=e195]:
                  - paragraph [ref=e196]: Ethical Hacking
                  - paragraph [ref=e197]: Udemy
                - listitem [ref=e198]:
                  - paragraph [ref=e199]: IA Generativa
                  - paragraph [ref=e200]: DIO · Bradesco
        - generic [ref=e201]:
          - generic [ref=e202]:
            - generic [ref=e203]: "04"
            - generic [ref=e205]: Voluntariado & Extensão
          - generic [ref=e206]:
            - generic [ref=e207]:
              - heading "CP2eJr (Empresa Júnior)" [level=3] [ref=e208]
              - paragraph [ref=e209]: Desenvolvimento Web
              - paragraph [ref=e210]: Faço parte do Núcleo de Projetos. Desenvolvo sites e aplicações reais com React para clientes da empresa júnior.
            - generic [ref=e211]:
              - heading "Sustentabilidade" [level=3] [ref=e212]
              - paragraph [ref=e213]: Lixo Eletrônico
              - paragraph [ref=e214]: Ajudo na coleta e triagem de lixo eletrônico dentro do programa de sustentabilidade do campus.
            - generic [ref=e215]:
              - heading "ONG Casa Viva" [level=3] [ref=e216]
              - paragraph [ref=e217]: Professor de Informática
              - paragraph [ref=e218]: Dei aulas de informática básica para crianças e adolescentes.
        - generic [ref=e219]:
          - generic [ref=e220]:
            - generic [ref=e221]: "05"
            - generic [ref=e223]: Música & Passatempos
          - paragraph [ref=e224]:
            - text: Estou procurando meu
            - strong [ref=e225]: primeiro estágio
            - text: de preferência em cibersegurança, desenvolvimento ou infra. Quero colocar em prática o que já aprendo sozinho e crescer com uma equipe boa.
    - paragraph [ref=e226]: HIAGO.EXE · 2026
  - alert [ref=e227]
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
> 12 |       await expect(customCursor).toHaveCount(0);
     |                                  ^ Error: expect(locator).toHaveCount(expected) failed
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
  31 |         await expect(path).not.toHaveAttribute('fill', 'white');
  32 |         await expect(path).toHaveAttribute('stroke', 'white');
  33 |       }
  34 |     }
  35 |   });
  36 | });
  37 | 
```