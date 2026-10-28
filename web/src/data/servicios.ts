import type { NombreIcono } from '../components/ui/iconos';

export const SERVICIO_IDS = ['landing', 'web-corporativa', 'ecommerce', 'crm', 'apps'] as const;
export type ServicioId = (typeof SERVICIO_IDS)[number];

export interface Servicio {
  id: ServicioId;
  nombre: string;
  icono: NombreIcono;
  resumen: string;
  desde: number;
  puntos: string[];
}

// Rangos referenciales del README; ajustar cuando exista docs/02_SERVICIOS_Y_PRECIOS.md.
export const servicios: Servicio[] = [
  {
    id: 'landing',
    nombre: 'Landing page',
    icono: 'cohete',
    resumen: 'Una página enfocada en convertir visitas de tus anuncios en clientes.',
    desde: 900,
    puntos: ['Diseño a medida y responsive', 'Formulario y WhatsApp', 'Lista para Google Ads y Meta'],
  },
  {
    id: 'web-corporativa',
    nombre: 'Web corporativa',
    icono: 'edificio',
    resumen: 'La presencia profesional de tu empresa, autoadministrable y optimizada para Google.',
    desde: 2500,
    puntos: ['Hasta 10 secciones', 'Blog y panel de edición', 'SEO técnico y analítica'],
  },
  {
    id: 'ecommerce',
    nombre: 'Ecommerce',
    icono: 'carrito',
    resumen: 'Tu tienda online con pagos locales, stock y pedidos en un solo lugar.',
    desde: 4000,
    puntos: ['Culqi, Niubiz, Izipay y Yape', 'Catálogo, stock y cupones', 'Delivery y zonas de envío'],
  },
  {
    id: 'crm',
    nombre: 'CRM a medida',
    icono: 'usuarios',
    resumen: 'Ordena tus ventas, clientes y seguimiento con un sistema hecho para tu proceso.',
    desde: 8000,
    puntos: ['Embudo de ventas y tareas', 'Reportes y roles de usuario', 'Integración con WhatsApp y correo'],
  },
  {
    id: 'apps',
    nombre: 'Apps y sistemas',
    icono: 'celular',
    resumen: 'Aplicaciones web y móviles para automatizar la operación de tu negocio.',
    desde: 15000,
    puntos: ['Análisis y prototipo', 'Web, Android e iOS', 'Integraciones y APIs'],
  },
];

export const mensualidades = {
  desde: 150,
  hasta: 1500,
  incluye: ['Hosting y dominio', 'Soporte y mejoras', 'SEO', 'Gestión de anuncios'],
};

export function formatoSoles(monto: number): string {
  return `S/ ${monto.toLocaleString('en-US')}`;
}
