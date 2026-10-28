import { PUBLIC_WHATSAPP_NUMBER } from 'astro:env/client';
import { portafolioVisible } from './portafolio';

export const site = {
  nombre: 'Agente Digital',
  eslogan: 'Webs, ecommerce y sistemas que venden por ti',
  descripcion:
    'Agencia digital en Perú: landing pages, webs corporativas, tiendas online con Culqi, Niubiz, Izipay y Yape, CRM a medida y apps. Precios claros en soles.',
  email: 'hola@agentedigital.pe',
  telefono: '+51 999 999 999',
  whatsapp: PUBLIC_WHATSAPP_NUMBER,
  ciudad: 'Lima',
  pais: 'PE',
  ruc: '', // por definir al formalizar la empresa
  redes: [
    { nombre: 'Facebook', url: 'https://facebook.com/agentedigital' },
    { nombre: 'Instagram', url: 'https://instagram.com/agentedigital' },
    { nombre: 'LinkedIn', url: 'https://linkedin.com/company/agentedigital' },
    { nombre: 'TikTok', url: 'https://tiktok.com/@agentedigital' },
  ],
  libroReclamacionesUrl: '', // por definir
} as const;

export const navegacion = [
  { label: 'Servicios', href: '/#servicios' },
  { label: 'Precios', href: '/#precios' },
  { label: 'Proceso', href: '/#proceso' },
  ...(portafolioVisible.length > 0 ? [{ label: 'Portafolio', href: '/#portafolio' }] : []),
  { label: 'Preguntas', href: '/#preguntas' },
];
