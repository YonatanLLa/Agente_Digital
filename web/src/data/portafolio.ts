import type { ServicioId } from './servicios';

export interface Proyecto {
  titulo: string;
  rubro: string;
  servicio: ServicioId;
  resumen: string;
  resultado: string;
  url?: string;
  /** Contenido de ejemplo: solo se muestra en desarrollo, nunca en el build de producción. */
  ejemplo?: boolean;
}

// EJEMPLOS: reemplazar por casos reales (con permiso del cliente) y quitar `ejemplo`.
export const portafolio: Proyecto[] = [
  {
    titulo: 'Tienda de café de especialidad',
    rubro: 'Retail',
    servicio: 'ecommerce',
    resumen: 'Tienda online con suscripciones, Yape y delivery en Lima Metropolitana.',
    resultado: 'Pedidos web desde la primera semana',
    ejemplo: true,
  },
  {
    titulo: 'Clínica dental',
    rubro: 'Salud',
    servicio: 'landing',
    resumen: 'Landing para campañas de Google Ads con reserva de citas por WhatsApp.',
    resultado: 'Reservas centralizadas en un solo canal',
    ejemplo: true,
  },
  {
    titulo: 'Distribuidora de insumos',
    rubro: 'Industria',
    servicio: 'crm',
    resumen: 'CRM para vendedores de campo con cotizaciones en PDF y seguimiento.',
    resultado: 'Seguimiento de cada cotización',
    ejemplo: true,
  },
];

export const portafolioVisible = portafolio.filter((p) => !p.ejemplo || import.meta.env.DEV);
