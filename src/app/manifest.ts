import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Hiago Felipe - Portfólio',
    short_name: 'Hiago.exe',
    description: 'Portfólio de Hiago Felipe, estudante de Engenharia de Computação no INATEL. Foco em Cibersegurança e Desenvolvimento Web.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#c9a84c',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
